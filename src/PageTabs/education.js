import React from "react";
import Typography from "@mui/material/Typography";
import { TypeAnimation } from "react-type-animation";
import EducationAnimationFile from "../Animations/EducationAnimation";
import BooksAnimationFile from "../Animations/BooksAnimation";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grow from "@mui/material/Grow";
import Card from "@mui/material/Card";
import { styled } from "@mui/system";
import TimelineObserver from "react-timeline-animation";

import EducationTimeline from "../Components/educationTimeline";

const StyledTypography = styled("Typography")({
  color: "aliceblue",
});

const HeaderText = styled("Typography")({
  color: "aliceblue",
});

const onCallback = () => {
  console.log("awesome");
};

const Education = () => {
  return (
    <div>
      <HeaderText> How my journey into software development began</HeaderText>

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
          <BooksAnimationFile />
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
          <br />
          <br />
          <br />
        </Box>
        <TimelineObserver
          initialColor="#e5e5e5"
          fillColor="#53b374"
          handleObserve={(setObserver) => (
            <EducationTimeline
              callback={onCallback}
              className="timeline"
              setObserver={setObserver}
            />
          )}
        />

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </Box>
    </div>
  );
};

export default Education;
