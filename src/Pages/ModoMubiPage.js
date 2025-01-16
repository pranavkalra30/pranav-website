import "../App.css";
import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import { TypeAnimation } from "react-type-animation";
import UnderConstructionAnimationFile from "../Components/underConstruction";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grow from "@mui/material/Grow";
import Card from "@mui/material/Card";
import { borderRadius, maxWidth, styled } from "@mui/system";
import BackButton from "../Components/backButton";
import TheMovieSearchWide from "../Images/TheMovieSearchWide.png";
import { useNavigate } from "react-router-dom";

export default function ModoMubiPage(props) {
  const navigate = useNavigate();

  useEffect(() => {
    props.scrollToTop();
  }, []);

  function handBackButtonClick() {
    navigate("/Home");
  }

  const HeaderText = styled("Typography")({
    color: "aliceblue",
  });

  return (
    <div>
      <br />
      <BackButton props={props} handBackButtonClick={handBackButtonClick} />
      {props.isMobile && <br />}
      {props.isMobile && <br />}
      {props.isMobile && <br />}
      {props.isMobile && <br />}
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "Modo Mubi.",
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: "3em", display: "inline-block" }}
      />
      <br />
      <br />
      <br />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grow in={true}>
          <Card
            sx={{
              backgroundColor: "transparent",
              boxShadow: "none",
              borderRadius: "15px",
            }}
          >
            <img
              src={TheMovieSearchWide}
              width={
                props.isMobile
                  ? props.deviceWidth * 0.9
                  : props.deviceWidth * 0.75
              }
            />
          </Card>
        </Grow>
      </Box>
      <br />
      <Button
        size="large"
        onClick={() =>
          window.open(
            "https://frontend--endearing-bavarois-c380b6.netlify.app",
            "_blank"
          )
        }
      >
        <Card sx={{ borderRadius: "20px", padding: "20px" }}>
          <Typography> Go to the Website</Typography>
        </Card>
      </Button>
    </div>
  );
}
