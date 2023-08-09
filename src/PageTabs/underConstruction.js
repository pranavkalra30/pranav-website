import React from "react";
import Typography from "@mui/material/Typography";
import { TypeAnimation } from "react-type-animation";
import UnderConstructionAnimationFile from "../Animations/underConstruction";
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

const UnderConstruction = () => {
  return (
    <div>
      <HeaderText> Sorry, This page is still under construction</HeaderText>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grow in={true}>
          <Card sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
            <UnderConstructionAnimationFile />
          </Card>
        </Grow>
        </Box>
        <br />
        <br />
        <br />
        <br />
       
      
    </div>
  );
};

export default UnderConstruction;
