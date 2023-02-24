import React from "react";
import Typography from "@mui/material/Typography";
import { TypeAnimation } from "react-type-animation";
import AboutMe2 from "./aboutMe2";
import AboutMeAnimationFile from "./aboutMeAnimation";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grow from "@mui/material/Grow";

const AboutMe = () => {
  return (
    <div>
      <TypeAnimation
        sequence={[
          "Hello! My name is Pranav Kalra.",

          () => {
            console.log("Done typing!");
          },
        ]}
        wrapper="div"
        cursor={true}
        // repeat={Infinity}
        style={{ fontSize: "3em" }}
      />
      <AboutMe2 />

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
            <Typography style={{ fontSize: "30px" }}>
              My main areas of expertise include Javascript, Typescript,
              Node.js, HTML, CSS, php and Python.
            </Typography>
          </Grow>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </Box>
        <AboutMeAnimationFile />
      </Box>
    </div>
  );
};

export default AboutMe;
