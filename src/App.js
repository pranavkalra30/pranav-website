import "./App.css";
import AboutMe from "./PageTabs/aboutMe.js";
import PrimaryAppBar from "./Components/appbar.js";
import P from "./Animations/P.gif";
import React from "react";
import { Typography, Box } from "@mui/material";
import Projects from "./PageTabs/projects";
import Education from "./PageTabs/education";

function App() {
  const [appPageValue, setAppPage] = React.useState(2);

  function handlePage(newValue) {
    setAppPage(newValue);
  }
  let pageDisplayed = <AboutMe />;

  switch (appPageValue) {
    case 0:
      pageDisplayed = <AboutMe />;
      break;

    case 1:
      pageDisplayed = <Projects />;
      break;

    case 2:
      pageDisplayed = <AboutMe />;
      break;

    case 3:
      pageDisplayed = <Education />;
      break;
  }
  return (
    <div className="App">
      <PrimaryAppBar handlePage={handlePage} appPageValue={appPageValue} />
      <br />
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          marginLeft: "30px",
        }}
      >
        <img src={P} alt="loading..." loading="lazy" width={250} height={250} />
      </Box>
      {pageDisplayed}
    </div>
  );
}

export default App;
