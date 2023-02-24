import React from "react";
import Typography from "@mui/material/Typography";
import { TypeAnimation } from "react-type-animation";

const AboutMe2 = () => {
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
    </div>
  );
};

export default AboutMe2;
