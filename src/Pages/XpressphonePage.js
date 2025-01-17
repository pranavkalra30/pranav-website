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
import XpressphoneWide from "../Images/XpressphoneWide.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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
      {props.isMobile && <br />}
      {props.isMobile && <br />}
      {props.isMobile && <br />}
      {props.isMobile && <br />}
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: {
              type: "spring",
              visualDuration: 0.4,
              bounce: 0.5,
            },
          }}
        >
          <Card
            sx={{
              backgroundColor: "transparent",
              boxShadow: "none",
              borderRadius: "15px",
            }}
          >
            <img
              src={XpressphoneWide}
              width={
                props.isMobile
                  ? props.deviceWidth * 0.9
                  : props.deviceWidth * 0.75
              }
            />
          </Card>
        </motion.div>
      </Box>
      <br />
    </div>
  );
}
export default XpressphonePage;
