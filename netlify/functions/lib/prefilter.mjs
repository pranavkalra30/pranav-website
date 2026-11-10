// Cheap, deterministic checks that run BEFORE any model call (no cost, no latency).

export const LIMITS = {
  maxMessages: 12,        // conversation turns accepted from the browser
  maxCharsPerMessage: 500,
  maxRequestsPerWindow: 20,
  windowMs: 10 * 60 * 1000,
};

const INJECTION_PATTERNS = [
  /ignore (all |any |the )?(previous|prior|above) (instructions|prompts?)/i,
  /disregard (all |any |the )?(previous|prior|above)/i,
  /reveal (your |the )?(system|hidden|developer) (prompt|instructions)/i,
  /(print|show|repeat) (your |the )?(system|developer) (prompt|message|instructions)/i,
  /you are now (dan|an? unrestricted)/i,
  /pretend (that )?you (have no|are not bound)/i,
];

/** Returns { ok: true, messages } or { ok: false, status, error }. */
export function validateRequest(body) {
  const msgs = body && body.messages;
  if (!Array.isArray(msgs) || msgs.length === 0) {
    return { ok: false, status: 400, error: "No messages provided." };
  }
  const recent = msgs.slice(-LIMITS.maxMessages);
  const cleaned = [];
  for (const m of recent) {
    if (!m || (m.role !== "user" && m.role !== "assistant") || typeof m.content !== "string") {
      return { ok: false, status: 400, error: "Invalid message format." };
    }
    const content = m.content.trim();
    if (content.length === 0) {
      return { ok: false, status: 400, error: "Empty message." };
    }
    if (content.length > LIMITS.maxCharsPerMessage) {
      return { ok: false, status: 413, error: `Messages are limited to ${LIMITS.maxCharsPerMessage} characters.` };
    }
    cleaned.push({ role: m.role, content });
  }
  if (cleaned[cleaned.length - 1].role !== "user") {
    return { ok: false, status: 400, error: "The last message must be from the user." };
  }
  return { ok: true, messages: cleaned };
}

export function looksLikeInjection(text) {
  return INJECTION_PATTERNS.some((re) => re.test(text));
}

// Best-effort per-IP limiter. Serverless instances are short-lived, so this only
// slows down casual abuse. The real cost cap is the spend limit in your OpenAI account.
const hits = new Map();
export function rateLimited(ip, now = Date.now()) {
  const key = ip || "unknown";
  const recent = (hits.get(key) || []).filter((t) => now - t < LIMITS.windowMs);
  if (recent.length >= LIMITS.maxRequestsPerWindow) {
    hits.set(key, recent);
    return true;
  }
  recent.push(now);
  hits.set(key, recent);
  return false;
}
