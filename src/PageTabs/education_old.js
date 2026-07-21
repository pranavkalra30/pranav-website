import React from "react";
import Typography from "@mui/material/Typography";
import { TypeAnimation } from "react-type-animation";
import BooksAnimationFile from "../Animations/BooksAnimation";
import Box from "@mui/material/Box";
import TimelineObserver from "react-timeline-animation";
import EducationTimeline from "../Components/educationTimeline";

const onCallback = () => {
  console.log("timeline triggered");
};

const Education = () => {
  return (
    <div>
      <Typography variant="h5" sx={{ color: "white", pt: 4, pb: 2 }}>
        How my journey into software development began
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "flex-start",
          padding: "40px 20px",
          gap: "40px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", pt: 6 }}>
          <BooksAnimationFile />
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
      </Box>
    </div>
  );
};

export default Education;
