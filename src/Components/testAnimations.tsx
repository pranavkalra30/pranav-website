import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Placeholder from "../Images/Placeholder.jpg";
import XpressphoneCard from "../Images/XpressphoneWide.png";
import TheMovieSearch from "../Images/TheMovieSearchWide.png";
import { useInView } from "motion/react";
import React from "react";
import { Box, CardContent, Typography } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import { Outlet, Link, useNavigate } from "react-router-dom";

export default function ScrollTriggered(props) {
  const navigate = useNavigate();
  return (
    <div>
      <Box sx={{ padding: "20px" }}>
        <Box
          sx={{
            backgroundColor: "#151619",
            paddingBottom: "40px",
            borderRadius: "20px",
          }}
        >
          <br />

          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Projects I have worked on.",
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "2em", display: "inline-block" }}
          />

          <br />
          <div style={container}>
            {food.map(([emoji, hueA, hueB, title, details, link], i) => (
              <Card
                i={i}
                emoji={emoji}
                hueA={hueA}
                hueB={hueB}
                key={emoji}
                title={title}
                details={details}
                link={link}
                props={props}
              />
            ))}
          </div>
        </Box>
      </Box>
    </div>
  );
}

interface CardProps {
  emoji: string; // Represents the image path
  hueA: number;
  hueB: number;
  i: number;
  title: string;
  details: string;
  link: string;
}

function Card(
  { emoji, hueA, hueB, i, title, details, link }: CardProps,
  props
) {
  const navigate = useNavigate();
  const background = "transparent";

  return (
    <motion.div
      className={`card-container-${i}`}
      style={cardContainer}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
    >
      <div style={{ ...splash, background }} />
      <motion.div style={card} variants={cardVariants} className="card">
        <img
          src={emoji} // This is now the image path
          alt={`Food item ${i}`}
          style={{ width: "100%", height: "100%", borderRadius: "20px" }}
          onClick={() => navigate(link)}
        />
        {props.isMobile && <br />}
        <CardContent
          onClick={() => navigate(link)}
          sx={{
            bgcolor: "grey",
            borderRadius: "20px",
          }}
        >
          <Typography gutterBottom variant="h5" component="div" color="white">
            {title}
          </Typography>
          <Typography variant="body2" color="white">
            {details}
          </Typography>
        </CardContent>
      </motion.div>
    </motion.div>
  );
}

const cardVariants: Variants = {
  onscreen: {
    y: 50,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

/**
 * ==============   Styles   ================
 */

const container: React.CSSProperties = {
  margin: "100px auto",
  maxWidth: 800,
  paddingBottom: 100,
  width: "100%",
};

const cardContainer: React.CSSProperties = {
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  paddingTop: 20,
  marginBottom: 0,
};

const splash: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
};

const card: React.CSSProperties = {
  fontSize: 164,
  width: 600,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 20,
  background: "transparent",
  transformOrigin: "10% 60%",
};

/**
 * ==============   Data   ================
 */

const food: [string, number, number, string, string, string][] = [
  [
    TheMovieSearch,
    500,
    600,
    "ModoMubi",
    " Web Development | Web Design",
    "/Projects/Modomubi",
  ],
  [
    XpressphoneCard,
    600,
    700,
    "Xpressphone",
    " Web Development | Web Design",
    "/Projects/Xpressphone",
  ],
  [
    Placeholder,
    700,
    800,
    "Placeholder",
    " Web Development | Web Design",
    "/Projects/UnderConstruction",
  ],
  [
    Placeholder,
    800,
    900,
    "Placeholder",
    " Web Development | Web Design",
    "/Projects/UnderConstruction",
  ],
];
