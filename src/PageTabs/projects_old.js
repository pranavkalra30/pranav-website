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
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Projects;
