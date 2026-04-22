import React from "react";
import Typography from "@mui/material/Typography";
import { TypeAnimation } from "react-type-animation";
import AboutMeAnimationFile from "../Components/aboutMeAnimation";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grow from "@mui/material/Grow";
import Slide from "@mui/material/Slide";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import { styled } from "@mui/system";
import { motion } from "framer-motion";

const skills = [
  "ReactJS", "TypeScript", "Node.js", "Python", "SQL",
  "Azure", "AWS", "HTML/CSS", "Excel", "Machine Learning"
];

const AboutMe = () => {
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
          <TypeAnimation
            sequence={["About me."]}
            wrapper="span"
            speed={50}
            cursor={false}
            style={{ fontSize: "2em", display: "inline-block" }}
          />

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-evenly",
              alignItems: "center",
              gap: "40px",
              padding: "20px 40px",
            }}
          >
            <Box sx={{ flex: 1, maxWidth: 480 }}>
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Typography
                  variant="h4"
                  sx={{ color: "white", fontWeight: 700, mb: 1 }}
                >
                  Pranav Kalra
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "#53b374", fontWeight: 600, mb: 2 }}
                >
                  Full-Stack Developer & Analytics Graduate Student
                </Typography>
                <Card
                  sx={{
                    backgroundColor: "#09315d",
                    borderRadius: "16px",
                    mb: 3,
                  }}
                >
                  <CardContent>
                    <Typography variant="body1" sx={{ color: "#d0e8ff", lineHeight: 1.8 }}>
                      Detail-oriented developer and Toronto resident with over 5 years of experience
                      in full-stack development and data analytics. Currently pursuing a
                      Master's in Management in Analytics at McGill University (awarded a $10,000
                      Entrance Scholarship), building on a background at Tata Consultancy Services
                      and Xpressphone developing scalable cloud-based applications.
                    </Typography>
                  </CardContent>
                </Card>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {skills.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      sx={{
                        backgroundColor: "#1e3a5f",
                        color: "#7ec8e3",
                        fontWeight: 600,
                        "&:hover": { backgroundColor: "#53b374", color: "#000" },
                        transition: "all 0.2s",
                      }}
                    />
                  ))}
                </Box>
              </motion.div>
            </Box>

            <Box sx={{ flex: "0 0 auto" }}>
              <Grow in={true}>
                <Card sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
                  <AboutMeAnimationFile />
                </Card>
              </Grow>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default AboutMe;
