import React from "react";
import Typography from "@mui/material/Typography";
import { TypeAnimation } from "react-type-animation";
import AboutMeAnimationFile from "../Components/aboutMeAnimation";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grow from "@mui/material/Grow";
import Card from "@mui/material/Card";
import { styled } from "@mui/system";

const StyledTypography = styled("Typography")({
  color: "aliceblue",
});

const HeaderText = styled("Typography")({
  color: "aliceblue",
});

const AboutMe = () => {
  return (
    <div>
      <HeaderText> Hello! My name is Pranav Kalra.</HeaderText>
      <Typography> I am a frontend developer</Typography>

      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <Box>
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
              <StyledTypography>
                My main areas of expertise include Javascript, Typescript,
                Node.js, HTML, CSS, php and Python.
              </StyledTypography>
            </Card>
          </Grow>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </Box>
        <Grow in={true}>
          <Card sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
            <AboutMeAnimationFile />
          </Card>
        </Grow>
      </Box>
      <br />
        <br />
   
    </div>
  );
};

export default AboutMe;
