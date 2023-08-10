import React from "react";
import ProjectsAnimationFile from "../Components/projectsAnimation";
import Box from "@mui/material/Box";
import Grow from "@mui/material/Grow";
import Slide from '@mui/material/Slide';
import { Suspense, lazy } from "react";
import { styled } from "@mui/system";

const MediaCard = lazy(() => import("../Components/projectCard"));


const TabHeader = styled("Typography")({
  color: "aliceblue",
  fontSize: "62px",
  textAlign: "center",
  paddingLeft: "250px",
  paddingTop: '80px'
});

const Projects = () => {
  return (
    <div>
       <Grow in={true}>
 <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          marginLeft: "30px",
        }}
      >
       
        <TabHeader>Projects</TabHeader>
       
        <ProjectsAnimationFile />
  
      </Box>
      </Grow>
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
            <Slide direction="up" in={true}  >
        <Box>
          
          <br />
          <Suspense fallback={<div />}>
            <MediaCard />
            </Suspense>
 

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </Box>
        </Slide>
        
      </Box>
    </div>
  );
};

export default Projects;
