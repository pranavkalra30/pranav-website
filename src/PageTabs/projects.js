import React from "react";
import Box from "@mui/material/Box";
import Grow from "@mui/material/Grow";
import Slide from "@mui/material/Slide";
import { Suspense, lazy } from "react";
import { styled } from "@mui/system";

const PlaceholderCard = lazy(() => import("../Components/PlaceholderCard"));

const MediaCard = lazy(() => import("../Components/projectCard"));
const XpressphoneCard = lazy(() =>
  import("../Components/projectCardXpressphone")
);

const TabHeader = styled("Typography")({
  color: "aliceblue",
  fontSize: "60px",
  textAlign: "center",
  paddingLeft: "80px",
});

const Projects = (props) => {
  return (
    <div ref={props.projectsRef}>
      <Box sx={{ padding: "20px" }}>
        <Box sx={{ backgroundColor: "#151619", paddingBottom: " 40px" }}>
          <Grow in={true}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                marginLeft: "30px",
              }}
            >
              <TabHeader sx={{ paddingTop: "30px" }}>Projects</TabHeader>

              {/* <ProjectsAnimationFile /> */}
            </Box>
          </Grow>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
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
              flexDirection: "row",
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
