import "../App.css";
import AboutMe from "../PageTabs/aboutMe.js";
import React, { useEffect } from "react";
import Projects from "../PageTabs/projects";
import WorkExperience from "../PageTabs/workExperience";
import Box from "@mui/material/Box";
import PrimaryAppBar from "../Components/appbar.js";
import ContactMe from "../Components/contactform";

function Homescreen(props) {
  useEffect(() => {
    props.scrollToTop();
  }, []);

  return (
    <div className="App">
      {/* Spacer so content clears the fixed AppBar */}
      <Box sx={{ height: "70px" }} />

      <PrimaryAppBar
        executeScrollToProject={props.executeScrollToProject}
        executeScrollToContact={props.executeScrollToContact}
        isMobile={props.isMobile}
      />

      <AboutMe />

      <WorkExperience />

      <Projects
        projectsRef={props.projectsRef}
        isMobile={props.isMobile}
        deviceWidth={props.deviceWidth}
      />

      <ContactMe contactRef={props.contactRef} />
    </div>
  );
}

export default Homescreen;
