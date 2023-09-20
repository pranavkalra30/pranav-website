import "./App.css";
import AboutMe from "./PageTabs/aboutMe.js";
import PrimaryAppBar from "./Components/appbar.js";
import React from "react";
import Projects from "./PageTabs/projects";
import Education from "./PageTabs/education";
import UnderConstruction from "./PageTabs/underConstruction";
import BackToTop from "./Components/backToTop";
import { styled } from "@mui/system";
import { Suspense, lazy, useRef } from "react";

const TabHeader = styled("Typography")({
  color: "aliceblue",
  fontSize: "62px",
  textAlign: "center",
  paddingLeft: "250px",
  paddingTop: "80px",
});

const FooterPage = lazy(() => import("./Components/footer"));

function App() {
  const ref = useRef(null);
  const [appPageValue, setAppPage] = React.useState(2);
  const isMobile = window.innerWidth <= 650;

  function handlePage(newValue) {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }
  let pageDisplayed = (
    <AboutMe alt="loading..." loading="lazy" isMobile={isMobile} />
  );

  switch (appPageValue) {
    case 0:
      pageDisplayed = (
        <UnderConstruction
          alt="loading..."
          loading="lazy"
          isMobile={isMobile}
        />
      );
      break;

    case 1:
      pageDisplayed = (
        <Projects alt="loading..." loading="lazy" isMobile={isMobile} />
      );
      break;

    case 2:
      pageDisplayed = (
        <AboutMe alt="loading..." loading="lazy" isMobile={isMobile} />
      );
      break;

    case 3:
      pageDisplayed = (
        <Education alt="loading..." loading="lazy" isMobile={isMobile} />
      );
      break;
  }
  return (
    <div className="App">
      <PrimaryAppBar
        handlePage={handlePage}
        appPageValue={appPageValue}
        isMobile={isMobile}
      />

      <br />
      <br />
      <BackToTop />

      <AboutMe alt="loading..." loading="lazy" isMobile={isMobile} />
      <Projects alt="loading..." loading="lazy" isMobile={isMobile} />
      <Education alt="loading..." loading="lazy" isMobile={isMobile} />

      <Suspense fallback={<div />}>
        <FooterPage
        // width={this.state.width}
        />
      </Suspense>
    </div>
  );
}

export default App;
