import React from "react";
import Typography from "@mui/material/Typography";
import { TypeAnimation } from "react-type-animation";
import ProjectsAnimationFile from "../Components/projectsAnimation";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grow from "@mui/material/Grow";
import Card from "@mui/material/Card";
import MediaCard from "../Components/projectCard"


const Projects = () => {
  return (
    <div>
      <Typography> I love making projects.</Typography>
      <Typography> Some of the ones I worked on are: </Typography>

      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <Box>
          <ProjectsAnimationFile />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          
            <Card
              sx={{ minWidth: 275, maxWidth: 400, backgroundColor: "#09315d" }}
            >
              <Typography>Projects - The Movie Search</Typography>
            </Card>
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
