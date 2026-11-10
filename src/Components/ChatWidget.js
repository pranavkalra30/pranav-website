import React, { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";
import CircularProgress from "@mui/material/CircularProgress";
import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";

const ACCENT = "#53b374";
const MAX_CHARS = 500;
const STARTERS = [
  "What did Pranav build for his capstone?",
  "What are his strongest skills?",
  "How can I contact him?",
];
const GREETING = {
  role: "assistant",
  content:
    "Hi! I'm an AI assistant that answers questions about Pranav's career, skills and projects. What would you like to know?",
};

export default function ChatWidget({ isMobile }) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading, open]);

  async function send(text) {
    const content = (text ?? input).trim();
    if (!content || loading) return;
    const next = [...messages, { role: "user", content }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      // Do not send the greeting; the server only needs the real conversation.
      const payload = next
        .slice(1)
        .map(({ role, content }) => ({ role, content }));
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: payload }),
      });
      const data = await res.json().catch(() => ({}));
      const reply = res.ok
        ? data.reply
        : data.error || "Something went wrong. Please try again.";
      setMessages((m) => [...m, { role: "assistant", content: reply }]);
    } catch {
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content: "I couldn't reach the server. Please try again in a moment.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  const onKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <>
      {!open && (
        <Fab
          aria-label="Open chat about Pranav"
          onClick={() => setOpen(true)}
          sx={{
            position: "fixed",
            bottom: 25,
            left: 25,
            zIndex: 1300,
            backgroundColor: "rgb(83 179 116 / 0.5)",
            backdropFilter: "blur(5px)",
            color: "#0b1410",
            "&:hover": { backgroundColor: "#47a066" },
          }}
        >
          <ChatIcon />
        </Fab>
      )}

      {open && (
        <Paper
          role="dialog"
          aria-label="Chat about Pranav"
          elevation={8}
          sx={{
            position: "fixed",
            zIndex: 1300,
            bottom: isMobile ? 0 : 25,
            left: isMobile ? 0 : 25,
            width: isMobile ? "100%" : 360,
            height: isMobile ? "75vh" : 500,
            maxHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            backgroundColor: "#12141a",
            border: `1px solid ${ACCENT}55`,
            borderRadius: isMobile ? "16px 16px 0 0" : "16px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: 2,
              py: 1.2,
              borderBottom: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <Box>
              <Typography
                sx={{ color: "white", fontWeight: 700, fontSize: 15 }}
              >
                Ask about Pranav
              </Typography>
              <Typography
                sx={{ color: "rgba(255,255,255,0.45)", fontSize: 11 }}
              >
                AI assistant, answers from his resume and projects. It can make
                mistakes.
              </Typography>
            </Box>
            <IconButton
              aria-label="Close chat"
              onClick={() => setOpen(false)}
              size="small"
              sx={{ color: "white" }}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>

          <Box
            sx={{ flex: 1, overflowY: "auto", px: 2, py: 1.5 }}
            aria-live="polite"
          >
            {messages.map((m, i) => (
              <Box
                key={i}
                sx={{
                  display: "flex",
                  justifyContent: m.role === "user" ? "flex-end" : "flex-start",
                  mb: 1.2,
                }}
              >
                <Typography
                  component="div"
                  sx={{
                    maxWidth: "85%",
                    px: 1.5,
                    py: 1,
                    borderRadius: "12px",
                    fontSize: 14,
                    lineHeight: 1.5,
                    whiteSpace: "pre-wrap",
                    textAlign: "left",
                    color:
                      m.role === "user" ? "#0b1410" : "rgba(255,255,255,0.88)",
                    backgroundColor:
                      m.role === "user" ? ACCENT : "rgba(255,255,255,0.08)",
                  }}
                >
                  {m.content}
                </Typography>
              </Box>
            ))}
            {messages.length === 1 && (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8, mt: 1 }}>
                {STARTERS.map((s) => (
                  <Chip
                    key={s}
                    label={s}
                    size="small"
                    onClick={() => send(s)}
                    sx={{
                      color: ACCENT,
                      border: `1px solid ${ACCENT}66`,
                      backgroundColor: "transparent",
                    }}
                  />
                ))}
              </Box>
            )}
            {loading && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                <CircularProgress size={14} sx={{ color: ACCENT }} />
                <Typography sx={{ fontSize: 13 }}>Thinking...</Typography>
              </Box>
            )}
            <div ref={bottomRef} />
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: 1,
              p: 1.5,
              borderTop: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <TextField
              value={input}
              onChange={(e) => setInput(e.target.value.slice(0, MAX_CHARS))}
              onKeyDown={onKeyDown}
              placeholder="Ask a question..."
              size="small"
              fullWidth
              multiline
              maxRows={3}
              inputProps={{
                "aria-label": "Your question",
                maxLength: MAX_CHARS,
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  color: "white",
                  "& fieldset": { borderColor: "rgba(255,255,255,0.2)" },
                  "&.Mui-focused fieldset": { borderColor: ACCENT },
                },
              }}
            />
            <IconButton
              aria-label="Send message"
              onClick={() => send()}
              disabled={loading || !input.trim()}
              sx={{ color: ACCENT, alignSelf: "flex-end" }}
            >
              <SendIcon />
            </IconButton>
          </Box>
        </Paper>
      )}
    </>
  );
}
