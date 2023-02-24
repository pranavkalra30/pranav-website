import React from "react";
import Typography from "@mui/material/Typography";
import { TypeAnimation } from "react-type-animation";

const AboutMe = () => {
  return (
    <div>
      <TypeAnimation
        sequence={[
          2500,
          "I am a frontend developer",
          () => {
            console.log("Done typing!");
          },
        ]}
        wrapper="div"
        cursor={false}
        repeat={Infinity}
        style={{ fontSize: "2em" }}
      />
    </div>
  );
};

export default AboutMe;
