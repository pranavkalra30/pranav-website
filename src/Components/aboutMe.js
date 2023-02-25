import React from "react";
import Typography from "@mui/material/Typography";
import { TypeAnimation } from "react-type-animation";
import AboutMe2 from "./aboutMe2";
import AboutMeAnimationFile from "./aboutMeAnimation";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grow from "@mui/material/Grow";
import Card from "@mui/material/Card";

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
            <Card
              sx={{ minWidth: 275, maxWidth: 400, backgroundColor: "#09315d" }}
            >
              <Typography style={{ fontSize: "30px", color: "white" }}>
                My main areas of expertise include Javascript, Typescript,
                Node.js, HTML, CSS, php and Python.
              </Typography>
            </Card>
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
