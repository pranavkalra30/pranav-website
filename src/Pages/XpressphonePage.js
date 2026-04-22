import "../App.css";
import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import { TypeAnimation } from "react-type-animation";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import XpressphoneWide from "../Images/XpressphoneWide.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const tags = ["ReactJS", "Node.js", "Azure", "AWS", "REST APIs", "TypeScript"];

const bullets = [
  "Designed and deployed full-stack and cloud-based applications leveraging ReactJS, Node.js, and Azure/AWS.",
  "Developed and optimized API-driven backend services to enhance reliability and performance.",
  "Migrated legacy systems to Azure cloud, reducing latency and improving efficiency by 30%.",
  "Collaborated with designers and stakeholders to ensure consistent UX and accessibility compliance.",
];

function XpressphonePage(props) {
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
        sequence={["Xpressphone."]}
        wrapper="h1"
        speed={50}
        style={{ fontSize: props.isMobile ? "2.2em" : "3em", display: "block", margin: "0 0 8px" }}
      />

      <Typography variant="subtitle1" sx={{ color: "#4da6e8", fontWeight: 600, mb: 3 }}>
        Software Developer · Mar 2020 – Apr 2022 · Toronto, ON
      </Typography>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, justifyContent: "center", mb: 4 }}>
        {tags.map((t) => (
          <Chip key={t} label={t} sx={{ backgroundColor: "#0d2a45", color: "#4da6e8", border: "1px solid #4da6e855", fontWeight: 600 }} />
        ))}
      </Box>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Card sx={{ backgroundColor: "transparent", boxShadow: "none", borderRadius: "15px", mb: 4, display: "inline-block" }}>
          <img
            src={XpressphoneWide}
            alt="Xpressphone app screenshot"
            style={{
              width: props.isMobile ? props.deviceWidth * 0.9 : Math.min(props.deviceWidth * 0.75, 1000),
              borderRadius: "15px",
            }}
          />
        </Card>
      </motion.div>

      <Box sx={{ maxWidth: 720, margin: "0 auto", textAlign: "left" }}>
        <Typography variant="h6" sx={{ color: "white", fontWeight: 700, mb: 2 }}>What I built</Typography>
        <Box component="ul" sx={{ pl: 2 }}>
          {bullets.map((b, i) => (
            <Typography component="li" key={i} variant="body1" sx={{ color: "rgba(255,255,255,0.75)", mb: 1.5, lineHeight: 1.8 }}>
              {b}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default XpressphonePage;
