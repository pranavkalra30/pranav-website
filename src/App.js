import "./App.css";
import AboutMe from "./PageTabs/aboutMe.js";
import PrimaryAppBar from "./Components/appbar.js";
import P from "./Animations/P.gif";
import React from "react";
import { Typography, Box } from "@mui/material";
import Projects from "./PageTabs/projects";
import Education from "./PageTabs/education";
import BackToTop from "./Components/backToTop";
import TypeAnimation from "./Animations/TypeAnimation";

function App() {
  const [appPageValue, setAppPage] = React.useState(3);

  function handlePage(newValue) {
    setAppPage(newValue);
  }
  let pageDisplayed = <Education />;
  let typeAnimationText = "";

  switch (appPageValue) {
    case 0:
      pageDisplayed = <AboutMe />;
      typeAnimationText = "About Me.";
      break;

    case 1:
      pageDisplayed = <Projects />;
      typeAnimationText = "Projects.";
      break;

    case 2:
      pageDisplayed = <AboutMe />;
      typeAnimationText = "About Me.";
      break;

    case 3:
      pageDisplayed = <Education />;
      typeAnimationText = "Education.";
      break;
  }
  return (
    <div className="App">
      <PrimaryAppBar handlePage={handlePage} appPageValue={appPageValue} />
      <br />
      <BackToTop />
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          marginLeft: "30px",
        }}
      >
        <img src={P} alt="loading..." loading="lazy" width={250} height={250} />
        {typeAnimationText}
      </Box>
      {pageDisplayed}
    </div>
  );
}

export default App;
