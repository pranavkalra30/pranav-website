import "../App.css";
import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import { TypeAnimation } from "react-type-animation";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import TheMovieSearchWide from "../Images/TheMovieSearchWide.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const tags = ["ReactJS", "Web Design", "UX/UI", "REST APIs", "JavaScript"];

const bullets = [
  "Built a full-featured movie and show discovery app pulling from a live third-party API.",
  "Implemented responsive layouts and accessible design patterns for desktop and mobile.",
  "Designed the UI/UX from scratch including colour palette, card layouts, and search flow.",
];

export default function ModoMubiPage(props) {
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
        sequence={["Modo Mubi."]}
        wrapper="h1"
        speed={50}
        style={{ fontSize: props.isMobile ? "2.2em" : "3em", display: "block", margin: "0 0 8px" }}
      />

      <Typography variant="subtitle1" sx={{ color: "#53b374", fontWeight: 600, mb: 3 }}>
        Personal Project · Web Development & Design
      </Typography>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, justifyContent: "center", mb: 4 }}>
        {tags.map((t) => (
          <Chip key={t} label={t} sx={{ backgroundColor: "#1a3a2a", color: "#53b374", border: "1px solid #53b37455", fontWeight: 600 }} />
        ))}
      </Box>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Card sx={{ backgroundColor: "transparent", boxShadow: "none", borderRadius: "15px", mb: 4, display: "inline-block" }}>
          <img
            src={TheMovieSearchWide}
            alt="Modo Mubi app screenshot"
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

        <Button
          variant="outlined"
          endIcon={<OpenInNewIcon />}
          onClick={() => window.open("https://frontend--endearing-bavarois-c380b6.netlify.app", "_blank", "noopener,noreferrer")}
          sx={{
            mt: 3,
            color: "#53b374",
            borderColor: "#53b374",
            textTransform: "none",
            fontWeight: 600,
            borderRadius: "10px",
            "&:hover": { backgroundColor: "#53b374", color: "#000", borderColor: "#53b374" },
          }}
        >
          View live site
        </Button>
      </Box>
    </Box>
  );
}
