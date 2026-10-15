import "../App.css";
import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import { TypeAnimation } from "react-type-animation";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ACCENT = "#d06a8a";

const tags = ["OpenAI Agents SDK", "Python", "LLM Agents", "Tool Calling"];

const bullets = [
  "Built support agents that converse with customers and resolve inquiries using the OpenAI Agents SDK.",
  "Built operations agents that execute backend tasks on the customer's behalf through tool calling.",
  "Implemented escalation handling so complex or sensitive cases route to a human instead of failing silently.",
  "Structured the system so support and operations agents coordinate on a request, with escalation as the safety net.",
];

function MultiAgentPage(props) {
  const navigate = useNavigate();

  useEffect(() => {
    props.scrollToTop();
  }, []);

  return (
    <Box sx={{ minHeight: "100vh", pt: "80px", pb: 6, px: { xs: 2, md: 6 } }}>
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate("/")}
        sx={{ color: "rgba(255,255,255,0.6)", textTransform: "none", mb: 3, "&:hover": { color: "white" } }}
      >
        Back to home
      </Button>

      <TypeAnimation
        sequence={["Multi-Agent Customer Service System."]}
        wrapper="h1"
        speed={50}
        style={{ fontSize: props.isMobile ? "2em" : "3em", display: "block", margin: "0 0 8px" }}
      />

      <Typography variant="subtitle1" sx={{ color: ACCENT, fontWeight: 600, mb: 3 }}>
        LLM Agents &middot; McGill University
      </Typography>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, justifyContent: "center", mb: 4 }}>
        {tags.map((t) => (
          <Chip
            key={t}
            label={t}
            sx={{ backgroundColor: "#2a1420", color: ACCENT, border: `1px solid ${ACCENT}55`, fontWeight: 600 }}
          />
        ))}
      </Box>

      <Box sx={{ maxWidth: 720, margin: "0 auto", textAlign: "left" }}>
        <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.8)", mb: 4, lineHeight: 1.8 }}>
          A McGill project exploring how teams of LLM agents can handle customer
          service work end to end: understanding the customer, taking action,
          and knowing when to hand off.
        </Typography>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Typography variant="h6" sx={{ color: "white", fontWeight: 700, mb: 2 }}>
            What I built
          </Typography>
          <Box component="ul" sx={{ pl: 2 }}>
            {bullets.map((b, i) => (
              <Typography
                component="li"
                key={i}
                variant="body1"
                sx={{ color: "rgba(255,255,255,0.75)", mb: 1.5, lineHeight: 1.8 }}
              >
                {b}
              </Typography>
            ))}
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
}

export default MultiAgentPage;
