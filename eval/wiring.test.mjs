// Offline wiring test: uses a scripted fake model (no API key, no cost).
// Verifies: guardrail blocks off-topic, router hands off to the right specialist,
// and the final answer comes from the specialist.
import assert from "node:assert/strict";
import { setDefaultModelProvider, Usage } from "@openai/agents";
import { answer, BLOCKED_REPLY } from "../netlify/functions/lib/agents.mjs";

const usage = () => new Usage({ requests: 1, inputTokens: 1, outputTokens: 1, totalTokens: 2 });
const text = (t) => ({ type: "message", role: "assistant", status: "completed", content: [{ type: "output_text", text: t }] });
const call = (name) => ({ type: "function_call", name, callId: "c1", arguments: "{}", status: "completed" });

function lastUserText(req) {
  const items = Array.isArray(req.input) ? req.input : [{ role: "user", content: req.input }];
  const users = items.filter((i) => i.role === "user");
  const c = users[users.length - 1]?.content;
  return typeof c === "string" ? c : (c || []).map((p) => p.text || "").join(" ");
}

class FakeModel {
  async getResponse(req) {
    const sys = req.systemInstructions || "";
    const user = lastUserText(req);
    // Guardrail agent
    if (sys.includes("safety gate")) {
      const allowed = !/weather|capital of|python script for me|salary/i.test(user);
      return { usage: usage(), output: [text(JSON.stringify({ allowed, reason: "fake" }))] };
    }
    // Router: hand off based on keywords, unless a tool result is already present
    if (sys.includes("front desk")) {
      if (/project|built|capstone/i.test(user)) return { usage: usage(), output: [call("transfer_to_projects_agent")] };
      if (/contact|reach|hire/i.test(user)) return { usage: usage(), output: [call("transfer_to_contact_agent")] };
      if (/experience|skills|education|work/i.test(user)) return { usage: usage(), output: [call("transfer_to_career_agent")] };
      return { usage: usage(), output: [text("Hi! Ask me about Pranav's career, skills or projects.")] };
    }
    if (sys.includes("answer questions about Pranav Kalra's projects")) return { usage: usage(), output: [text("PROJECTS_ANSWER")] };
    if (sys.includes("work experience, skills and education")) return { usage: usage(), output: [text("CAREER_ANSWER")] };
    if (sys.includes("help visitors")) return { usage: usage(), output: [text("CONTACT_ANSWER")] };
    return { usage: usage(), output: [text("UNEXPECTED")] };
  }
  async *getStreamedResponse() { throw new Error("not used"); }
}
setDefaultModelProvider({ getModel: async () => new FakeModel() });

const ask = (t) => answer([{ role: "user", content: t }]);
const cases = [
  ["What did Pranav build for his capstone?", "projects_agent", "PROJECTS_ANSWER", false],
  ["What is his work experience?", "career_agent", "CAREER_ANSWER", false],
  ["How can I contact him to hire him?", "contact_agent", "CONTACT_ANSWER", false],
  ["hello", "router_agent", "Hi!", false],
  ["What's the weather in Toronto?", "guardrail_agent", BLOCKED_REPLY, true],
  ["What is his salary?", "guardrail_agent", BLOCKED_REPLY, true],
];
let pass = 0;
for (const [q, agent, contains, blocked] of cases) {
  const r = await ask(q);
  assert.equal(r.agent, agent, `agent for "${q}"`);
  assert.ok(r.reply.includes(contains), `reply for "${q}": ${r.reply}`);
  assert.equal(r.blocked, blocked, `blocked for "${q}"`);
  pass++;
}
console.log(`wiring test: ${pass}/${cases.length} passed`);
