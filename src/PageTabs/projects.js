import React from "react";
import Box from "@mui/material/Box";
import Grow from "@mui/material/Grow";
import Slide from "@mui/material/Slide";
import { Suspense, lazy } from "react";
import { styled } from "@mui/system";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const PlaceholderCard = lazy(() => import("../Components/PlaceholderCard"));

const MediaCard = lazy(() => import("../Components/projectCard"));
const XpressphoneCard = lazy(() =>
  import("../Components/projectCardXpressphone")
);

const TabHeader = styled("Typography")({
  color: "aliceblue",

  textAlign: "center",
});

const Projects = (props) => {
  return (
    <div ref={props.projectsRef}>
      <Box sx={{ padding: "20px" }}>
        <Box
          sx={{
            backgroundColor: "#151619",
            paddingBottom: " 40px",
            borderRadius: "20px",
          }}
        >
          <Grow in={true}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Projects I have worked on.",
                ]}
                wrapper="span"
                speed={50}
                cursor={false}
                style={{ fontSize: "2em", display: "inline-block" }}
              />

              {/* <ProjectsAnimationFile /> */}
            </Box>
          </Grow>
          <br />

          <Box
            style={{
              display: "flex",
              flexDirection: props.isMobile ? "column" : "row",
              justifyContent: "space-evenly",
            }}
          >
            <Slide direction="up" in={true}>
              <Box>
                <Suspense fallback={<div />}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    transition={{
                      duration: 0.4,
                      scale: {
                        type: "spring",
                        visualDuration: 0.4,
                        bounce: 0.5,
                      },
                    }}
                  >
                    <MediaCard />
                  </motion.div>
                </Suspense>
              </Box>
            </Slide>
            {props.isMobile && <br />}
            {props.isMobile && <br />}
            {props.isMobile && <br />}
            <Slide direction="up" in={true}>
              <Box>
                <Suspense fallback={<div />}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    transition={{
                      duration: 0.4,
                      scale: {
                        type: "spring",
                        visualDuration: 0.4,
                        bounce: 0.5,
                      },
                    }}
                  >
                    <XpressphoneCard />
                  </motion.div>
                </Suspense>
              </Box>
            </Slide>
          </Box>
          <br />
          <br />
          <br />
          <Box
            style={{
              display: "flex",
              flexDirection: props.isMobile ? "column" : "row",
              justifyContent: "space-evenly",
            }}
          >
            <Slide direction="up" in={true}>
              <Box>
                <Suspense fallback={<div />}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    transition={{
                      duration: 0.4,
                      scale: {
                        type: "spring",
                        visualDuration: 0.4,
                        bounce: 0.5,
                      },
                    }}
                  >
                    <PlaceholderCard />
                  </motion.div>
                </Suspense>
              </Box>
            </Slide>
            {props.isMobile && <br />}
            {props.isMobile && <br />}
            {props.isMobile && <br />}
            <Slide direction="up" in={true}>
              <Box>
                <Suspense fallback={<div />}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    transition={{
                      duration: 0.4,
                      scale: {
                        type: "spring",
                        visualDuration: 0.4,
                        bounce: 0.5,
                      },
                    }}
                  >
                    <PlaceholderCard />
                  </motion.div>
                </Suspense>
              </Box>
            </Slide>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Projects;
