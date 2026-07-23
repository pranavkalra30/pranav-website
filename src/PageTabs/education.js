import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import SchoolIcon from "@mui/icons-material/School";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { motion } from "framer-motion";

const ACCENT = "#53b374";

const milestones = [
  {
    year: "2013",
    title: "Electrical Engineering",
    detail: "Started my Bachelor's at Toronto Metropolitan University.",
    icon: <LocalLibraryIcon />,
  },
  {
    year: "2017",
    title: "Graduated with Distinction",
    detail: "Bachelor's in Electrical Engineering. Dean's List, cGPA 85%+.",
    icon: <SchoolIcon />,
  },
  {
    year: "2018",
    title: "Frontend and Full-Stack Development",
    detail:
      "Software Developer at Tata Consultancy Services and startup, Xpressphone.",
    icon: <LaptopMacIcon />,
  },
  {
    year: "2025 – 26",
    title: "McGill MMA",
    detail:
      "Master of Management Analytics, McGill University. $10,000 Entrance Scholarship.",
    icon: <AutoAwesomeIcon />,
  },
];

const Education = () => {
  return (
    <div>
      <Box sx={{ padding: "20px" }}>
        <Box
          sx={{
            backgroundColor: "#151619",
            borderRadius: "20px",
            padding: "40px 20px 56px",
          }}
        >
          <Typography
            variant="h4"
            sx={{ color: "white", fontWeight: 700, mb: 1 }}
          >
            My journey into Analytics & Machine Learning
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "center", md: "stretch" },
              justifyContent: "center",
              padding: "0 24px",
            }}
          >
            {milestones.map((milestone, index) => (
              <React.Fragment key={milestone.year}>
                {index > 0 && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 0.4, delay: index * 0.25 }}
                    style={{ alignSelf: "center" }}
                  >
                    <Box
                      sx={{
                        width: { xs: "3px", md: "3vw" },
                        height: { xs: "40px", md: "3px" },
                        backgroundColor: ACCENT,
                        borderRadius: "2px",
                        flexShrink: 0,
                      }}
                    />
                  </motion.div>
                )}

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: index * 0.25 }}
                  style={{ display: "flex" }}
                >
                  <Card
                    sx={{
                      backgroundColor: "#53565c",
                      borderRadius: "24px",
                      width: { xs: "min(320px, 85vw)", md: "20vw" },
                      display: "flex",
                      flexDirection: "column",
                      transition: "transform 0.2s ease, box-shadow 0.2s ease",
                      "&:hover": {
                        transform: "translateY(-6px)",
                        boxShadow: "0 12px 24px rgba(83, 179, 116, 0.25)",
                      },
                    }}
                  >
                    <CardContent sx={{ textAlign: "left", pt: 3 }}>
                      <Box
                        sx={{
                          width: 44,
                          height: 44,
                          borderRadius: "50%",
                          backgroundColor: "#1e3a5f",
                          color: "#7ec8e3",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mb: 2,
                        }}
                      >
                        {milestone.icon}
                      </Box>
                      <Typography
                        variant="h4"
                        sx={{ color: ACCENT, fontWeight: 700, lineHeight: 1 }}
                      >
                        {milestone.year}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        sx={{ color: "white", fontWeight: 600, mt: 1 }}
                      >
                        {milestone.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "#c9cccf", mt: 0.5 }}
                      >
                        {milestone.detail}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </React.Fragment>
            ))}
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Education;
