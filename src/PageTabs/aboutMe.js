import React from "react";
import Typography from "@mui/material/Typography";
import { TypeAnimation } from "react-type-animation";
import AboutMeAnimationFile from "../Components/aboutMeAnimation";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grow from "@mui/material/Grow";
import Slide from "@mui/material/Slide";
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
      <Box sx={{ padding: "20px" }}>
        <Box
          sx={{
            backgroundColor: "#151619",
            paddingBottom: "20px",
            borderRadius: "20px",
          }}
        >
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "About me.",
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "2em", display: "inline-block" }}
          />

          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginBottom: "-180px",
            }}
          >
            <Box>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <Slide direction="up" in={true}>
                <Card
                  sx={{
                    minWidth: 275,
                    maxWidth: 400,
                    backgroundColor: "#09315d",
                    borderRadius: "20px",
                  }}
                >
                  <StyledTypography>
                    My main areas of expertise include Javascript, Typescript,
                    Node.js, HTML, CSS, php and Python.
                  </StyledTypography>
                </Card>
              </Slide>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </Box>
            <Box>
              <Grow in={true}>
                <Card
                  sx={{ backgroundColor: "transparent", boxShadow: "none" }}
                >
                  <AboutMeAnimationFile />
                </Card>
              </Grow>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default AboutMe;
