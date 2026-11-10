import { answer } from "./lib/agents.mjs";
import { validateRequest, looksLikeInjection, rateLimited } from "./lib/prefilter.mjs";

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json", "cache-control": "no-store" },
  });

export default async (req, context) => {
  if (req.method !== "POST") return json({ error: "Method not allowed." }, 405);

  if (!process.env.OPENAI_API_KEY) {
    return json({ error: "The chatbot is not configured." }, 500);
  }

  if (rateLimited(context?.ip)) {
    return json({ error: "Too many requests. Please try again in a few minutes." }, 429);
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return json({ error: "Invalid JSON." }, 400);
  }

  const check = validateRequest(body);
  if (!check.ok) return json({ error: check.error }, check.status);

  const last = check.messages[check.messages.length - 1].content;
  if (looksLikeInjection(last)) {
    return json({
      reply: "I can only answer questions about Pranav's career, skills, projects and how to contact him.",
      agent: "prefilter",
      blocked: true,
    });
  }

  try {
    const out = await answer(check.messages);
    return json(out);
  } catch (err) {
    console.error("chat error", err?.message || err);
    return json({ error: "Something went wrong. Please try again." }, 500);
  }
};

export const config = { path: "/api/chat" };
