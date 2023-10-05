import "../App.css";
import AboutMe from "../PageTabs/aboutMe.js";
import React, { useEffect } from "react";
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

function Homescreen(props) {
  useEffect(() => {
    props.scrollToTop();
  }, []);
  //const projectsRef = this.props.projectsRef;
  return (
    <div className="App">
      <AboutMe alt="loading..." loading="lazy" />
      <div>
        <Projects
          alt="loading..."
          loading="lazy"
          projectsRef={props.projectsRef}
        />
      </div>
      <br />
      <br />
      <Education alt="loading..." loading="lazy" />
    </div>
  );
}

export default Homescreen;
