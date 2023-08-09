import "./App.css";
import AboutMe from "./PageTabs/aboutMe.js";
import PrimaryAppBar from "./Components/appbar.js";
import P from "./Animations/P.gif";
import React from "react";
import { Typography, Box } from "@mui/material";
import Projects from "./PageTabs/projects";
import Education from "./PageTabs/education";
import UnderConstruction from "./PageTabs/underConstruction";
import BackToTop from "./Components/backToTop";
import TypeAnimation from "./Animations/TypeAnimation";
import { styled } from "@mui/system";
import ProjectsAnimationFile from "./Components/projectsAnimation";

const TabHeader = styled("Typography")({
  color: "aliceblue",
  fontSize: "62px",
  textAlign: "center",
  paddingLeft: "250px",
  paddingTop: '80px'
});

function App() {
  const [appPageValue, setAppPage] = React.useState(1);

  function handlePage(newValue) {
    setAppPage(newValue);
  }
  let pageDisplayed = <AboutMe alt="loading..." loading="lazy" />;

  switch (appPageValue) {
    case 0:
      pageDisplayed = <UnderConstruction alt="loading..." loading="lazy" />;
      break;

    case 1:
      pageDisplayed = <Projects alt="loading..." loading="lazy"  />;
      break;

    case 2:
      pageDisplayed = <AboutMe alt="loading..." loading="lazy" />;
      break;

    case 3:
      pageDisplayed = <Education alt="loading..." loading="lazy" />;
      break;
  }
  return (
    <div className="App">
      <PrimaryAppBar handlePage={handlePage} appPageValue={appPageValue} />
     
      <br />
      <br />
      <BackToTop />
     
      
      {pageDisplayed}
    </div>
  );
}

export default App;
