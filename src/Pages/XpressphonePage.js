import "../App.css";
import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import { TypeAnimation } from "react-type-animation";
import UnderConstructionAnimationFile from "../Components/underConstruction";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grow from "@mui/material/Grow";
import Card from "@mui/material/Card";
import { styled } from "@mui/system";
import BackButton from "../Components/backButton";
import { useNavigate } from "react-router-dom";

function XpressphonePage(props) {
  const navigate = useNavigate();

  useEffect(() => {
    props.scrollToTop();
  }, []);

  function handBackButtonClick() {
    navigate("/");
  }
  const TabHeader = styled("Typography")({
    color: "aliceblue",
    fontSize: "62px",
    textAlign: "center",
    paddingLeft: "80px",
    paddingTop: "80px",
  });

  const HeaderText = styled("Typography")({
    color: "aliceblue",
  });

  return (
    <div>
      <br />
      <br />
      <BackButton handBackButtonClick={handBackButtonClick} />{" "}
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "Xpressphone.",
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: "3em", display: "inline-block" }}
      />
      <br />
      <br />
      <br />
      <HeaderText> Sorry, This Page is still Under Construction</HeaderText>
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
    </div>
  );
}
export default XpressphonePage;
