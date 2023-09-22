import "../App.css";
import AboutMe from "../PageTabs/aboutMe.js";
import React from "react";
import Projects from "../PageTabs/projects";
import Education from "../PageTabs/education";
import { styled } from "@mui/system";

const TabHeader = styled("Typography")({
  color: "aliceblue",
  fontSize: "62px",
  textAlign: "center",
  paddingLeft: "250px",
  paddingTop: "80px",
});

function Homescreen() {
  return (
    <div className="App">
      <AboutMe alt="loading..." loading="lazy" />
      <Projects alt="loading..." loading="lazy" />
      <br />
      <br />
      <Education alt="loading..." loading="lazy" />
    </div>
  );
}

export default Homescreen;
