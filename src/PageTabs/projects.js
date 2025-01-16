import React from "react";
import Box from "@mui/material/Box";
import Grow from "@mui/material/Grow";
import Slide from "@mui/material/Slide";
import { Suspense, lazy } from "react";
import { styled } from "@mui/system";
import { TypeAnimation } from "react-type-animation";

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
                justifyContent: "flex-start",
                marginLeft: "30px",
              }}
            >
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Projects I have worked on.",
                ]}
                wrapper="span"
                speed={50}
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
                  <MediaCard />
                </Suspense>
              </Box>
            </Slide>
            {props.isMobile && <br />}
            {props.isMobile && <br />}
            {props.isMobile && <br />}
            <Slide direction="up" in={true}>
              <Box>
                <Suspense fallback={<div />}>
                  <XpressphoneCard />
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
                  <PlaceholderCard />
                </Suspense>
              </Box>
            </Slide>
            {props.isMobile && <br />}
            {props.isMobile && <br />}
            {props.isMobile && <br />}
            <Slide direction="up" in={true}>
              <Box>
                <Suspense fallback={<div />}>
                  <PlaceholderCard />
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
