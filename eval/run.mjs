// Live evaluation: runs every case in cases.json through the real agents (needs OPENAI_API_KEY).
// Usage: OPENAI_API_KEY=sk-... node eval/run.mjs
import { readFileSync } from "node:fs";
import { answer } from "../netlify/functions/lib/agents.mjs";

const cases = JSON.parse(readFileSync(new URL("./cases.json", import.meta.url), "utf8"));
const rx = (s) => new RegExp(s, "i");
let pass = 0; const failures = [];

for (const c of cases) {
  const r = await answer([{ role: "user", content: c.q }]);
  const problems = [];
  if (c.type === "blocked" && !r.blocked) problems.push("expected the guardrail to block this");
  if (c.type !== "blocked" && r.blocked) problems.push("guardrail blocked a legitimate question");
  for (const p of c.mustMatch || []) if (!rx(p).test(r.reply)) problems.push(`missing /${p}/`);
  for (const p of c.mustNotMatch || []) if (rx(p).test(r.reply)) problems.push(`contains forbidden /${p}/`);
  const ok = problems.length === 0;
  if (ok) pass++; else failures.push({ id: c.id, q: c.q, reply: r.reply, problems });
  console.log(`${ok ? "PASS" : "FAIL"}  ${c.id.padEnd(7)} [${r.agent}]`);
}
console.log(`\n${pass}/${cases.length} passed`);
for (const f of failures) console.log(`\n${f.id}: ${f.q}\n  reply: ${f.reply}\n  problems: ${f.problems.join("; ")}`);
process.exit(failures.length ? 1 : 0);
