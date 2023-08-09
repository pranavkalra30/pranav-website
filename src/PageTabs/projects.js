import React from "react";
import Typography from "@mui/material/Typography";
import { TypeAnimation } from "react-type-animation";
import ProjectsAnimationFile from "../Components/projectsAnimation";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grow from "@mui/material/Grow";
import Card from "@mui/material/Card";
import MediaCard from "../Components/projectCard"
import { styled } from "@mui/system";


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

      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
       
        <Box>
          
          <br />
         
            <MediaCard />

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </Box>
      </Box>
    </div>
  );
};

export default Projects;
