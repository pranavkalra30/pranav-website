import "../App.css";
import AboutMe from "../PageTabs/aboutMe.js";
import React, { useEffect } from "react";
import Projects from "../PageTabs/projects";
import Education from "../PageTabs/education";
import { styled } from "@mui/system";
import PrimaryAppBar from "../Components/appbar.js";

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
      <br />
      <br />
      <br />
      <br />

      <PrimaryAppBar
        executeScrollToProject={props.executeScrollToProject}
        isMobile={props.isMobile}
      />
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
    </div>
  );
}

export default Homescreen;
