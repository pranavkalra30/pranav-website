import "./App.css";
import AboutMe from "./Components/aboutMe.js";
import PrimaryAppBar from "./Components/appbar.js";
import P from "./Animations/P.gif";
import React from "react";
import { Typography } from "@mui/material";
import Projects from "./Components/projects";

function App() {
  const [appPageValue, setAppPage] = React.useState(2);

  function handlePage(newValue) {
    setAppPage(newValue);
  }

  const pageDisplayed =
    appPageValue === 2 ? (
      <AboutMe />
    ) : (
      <Typography>
        {" "}
        <Projects />
      </Typography>
    );

  return (
    <div className="App">
      <PrimaryAppBar
        position="sticky"
        handlePage={handlePage}
        appPageValue={appPageValue}
      />
      <img src={P} alt="loading..." loading="lazy" width={250} height={250} />

      {pageDisplayed}
    </div>
  );
}

export default App;
