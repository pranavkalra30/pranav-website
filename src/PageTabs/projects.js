import React from "react";
import Box from "@mui/material/Box";
import Grow from "@mui/material/Grow";
import Slide from "@mui/material/Slide";
import { Suspense, lazy } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ModoMubiImage from "../Images/TheMovieSearch.png";
import XpressphoneImage from "../Images/Xpressphone.png";
import DemandForecastingImage from "../Images/DemandForecasting.jpg";
import Typography from "@mui/material/Typography";

const ProjectCard = lazy(() => import("../Components/analyticsProjectCard"));

const projects = [
  {
    title: "Retail Demand Forecasting",
    tags: ["ML Engineering", "Time Series", "Python"],
    description:
      "MMA capstone for Club Piscine, a Quebec retail chain. Built a weekly unit-level demand forecasting pipeline to support inventory and purchasing decisions.",
    accent: "#53b374",
    image: DemandForecastingImage,
    path: "/projects/retail-demand-forecasting",
  },
  {
    title: "ModoMubi",
    tags: ["Web Development", "Web Design", "ReactJS"],
    description:
      "A movie discovery web app for searching titles and browsing details, built with a focus on clean UI and fast search.",
    accent: "#4da6e8",
    image: ModoMubiImage,
    path: "/projects/modomubi",
  },
  {
    title: "Xpressphone",
    tags: ["Full-Stack", "Node.js", "Azure"],
    description:
      "Full-stack web application built during my time at Xpressphone, with API-driven backend services deployed on Azure.",
    accent: "#e8934d",
    image: XpressphoneImage,
    path: "/projects/xpressphone",
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
  const navigate = useNavigate();

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
              <Typography
                variant="h4"
                sx={{ color: "white", fontWeight: 700, mb: 1 }}
              >
                Projects I have worked on
              </Typography>
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
              padding: { xs: "0 12px", md: "0 40px" },
            }}
          >
            {projects.map((project) => (
              <Slide direction="up" in={true} key={project.title}>
                <Box
                  sx={{
                    width: props.isMobile ? "100%" : "340px",
                    maxWidth: props.isMobile ? 400 : "none",
                  }}
                >
                  <Suspense fallback={<div />}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{
                        duration: 0.4,
                        scale: {
                          type: "spring",
                          visualDuration: 0.4,
                          bounce: 0.3,
                        },
                      }}
                      style={{ height: "100%" }}
                    >
                      <ProjectCard
                        title={project.title}
                        tags={project.tags}
                        description={project.description}
                        accent={project.accent}
                        image={project.image}
                        onClick={
                          project.path
                            ? () => navigate(project.path)
                            : undefined
                        }
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
