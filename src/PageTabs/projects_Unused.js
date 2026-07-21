import React from "react";
import Box from "@mui/material/Box";
import Grow from "@mui/material/Grow";
import Slide from "@mui/material/Slide";
import { Suspense, lazy } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const MediaCard = lazy(() => import("../Components/projectCard"));
const XpressphoneCard = lazy(() =>
  import("../Components/projectCardXpressphone")
);
const AnalyticsProjectCard = lazy(() =>
  import("../Components/analyticsProjectCard")
);

const analyticsProjects = [
  {
    title: "Retail Demand Forecasting",
    tags: ["ML Engineering", "Time Series", "Python"],
    description:
      "MMA capstone for Club Piscine, a Quebec retail chain. Built a weekly unit-level demand forecasting pipeline to support inventory and purchasing decisions.",
    accent: "#53b374",
  },
  {
    title: "Reddit Network Analysis",
    tags: ["Social Network Analysis", "Python"],
    description:
      "Graph analysis of the r/Baystreetbets community, mapping user interaction networks to surface influential members and discussion structure.",
    accent: "#7ec8e3",
  },
  {
    title: "G7 Inflation Forecasting",
    tags: ["Time Series", "Econometrics"],
    description:
      "Group project forecasting CPI across G7 economies, comparing classical and modern time series methods on macroeconomic data.",
    accent: "#c884e0",
  },
];

const Projects = (props) => {
  return (
    <div ref={props.projectsRef}>
      <Box sx={{ padding: "20px" }}>
        <Box
          sx={{
            backgroundColor: "#151619",
            paddingBottom: "40px",
            borderRadius: "20px",
          }}
        >
          <Grow in={true}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <TypeAnimation
                sequence={["Projects I have worked on."]}
                wrapper="span"
                speed={50}
                cursor={false}
                style={{ fontSize: "2em", display: "inline-block" }}
              />
            </Box>
          </Grow>
          <br />

          <Box
            sx={{
              display: "flex",
              flexDirection: props.isMobile ? "column" : "row",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: props.isMobile ? "center" : "stretch",
              gap: "32px",
              padding: "0 40px",
            }}
          >
            <Slide direction="up" in={true}>
              <Box>
                <Suspense fallback={<div />}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{
                      duration: 0.4,
                      scale: { type: "spring", visualDuration: 0.4, bounce: 0.3 },
                    }}
                  >
                    <MediaCard
                      isMobile={props.isMobile}
                      deviceWidth={props.deviceWidth}
                    />
                  </motion.div>
                </Suspense>
              </Box>
            </Slide>

            <Slide direction="up" in={true}>
              <Box>
                <Suspense fallback={<div />}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{
                      duration: 0.4,
                      scale: { type: "spring", visualDuration: 0.4, bounce: 0.3 },
                    }}
                  >
                    <XpressphoneCard
                      isMobile={props.isMobile}
                      deviceWidth={props.deviceWidth}
                    />
                  </motion.div>
                </Suspense>
              </Box>
            </Slide>

            {analyticsProjects.map((project) => (
              <Slide direction="up" in={true} key={project.title}>
                <Box sx={{ width: props.isMobile ? "auto" : "340px" }}>
                  <Suspense fallback={<div />}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{
                        duration: 0.4,
                        scale: { type: "spring", visualDuration: 0.4, bounce: 0.3 },
                      }}
                      style={{ height: "100%" }}
                    >
                      <AnalyticsProjectCard
                        {...project}
                        isMobile={props.isMobile}
                        deviceWidth={props.deviceWidth}
                      />
                    </motion.div>
                  </Suspense>
                </Box>
              </Slide>
            ))}
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Projects;
