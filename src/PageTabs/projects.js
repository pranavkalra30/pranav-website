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

const StyledTypography = styled("Typography")({
  color: "aliceblue",
});

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
          <Grow in={true}>
            <Card
              sx={{ minWidth: 275, maxWidth: 400, backgroundColor: "#09315d" }}
            >
              <StyledTypography>Projects - The Movie Search</StyledTypography>
            </Card>
            <MediaCard />
          </Grow>
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
