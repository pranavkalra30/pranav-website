import "./App.css";
import PrimaryAppBar from "./Components/appbar.js";
import React from "react";
import Homescreen from "./Pages/Homescreen";
import XpressphonePage from "./Pages/XpressphonePage";
import ModoMubiPage from "./Pages/ModoMubiPage";
import UnderConstruction from "./Pages/UnderConstruction.js";
import BackToTop from "./Components/backToTop";
import { Suspense, lazy, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import useWindowSize from "./hooks/useWindowSize";

const FooterPage = lazy(() => import("./Components/footer"));

function App() {
  const projectsRef = useRef(null);
  const scrollToTopRef = useRef(null);
  const contactRef = useRef(null);

  const { width: deviceWidth, isMobile } = useWindowSize();

  const executeScrollToProject = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const executeScrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    scrollToTopRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const sharedProps = {
    projectsRef,
    contactRef,
    scrollToTop,
    executeScrollToProject,
    executeScrollToContact,
    isMobile,
    deviceWidth,
  };

  return (
    <div className="App" ref={scrollToTopRef}>
      <Routes>
        <Route exact path="/" element={<Homescreen {...sharedProps} />} />
        <Route exact path="/Home" element={<Homescreen {...sharedProps} />} />
        <Route
          exact
          path="/projects/xpressphone"
          element={
            <XpressphonePage
              scrollToTop={scrollToTop}
              isMobile={isMobile}
              deviceWidth={deviceWidth}
            />
          }
        />
        <Route
          exact
          path="/projects/modomubi"
          element={
            <ModoMubiPage
              scrollToTop={scrollToTop}
              isMobile={isMobile}
              deviceWidth={deviceWidth}
            />
          }
        />
        <Route
          exact
          path="/projects/underconstruction"
          element={
            <UnderConstruction
              scrollToTop={scrollToTop}
              isMobile={isMobile}
              deviceWidth={deviceWidth}
            />
          }
        />
      </Routes>

      <BackToTop scrollToTop={scrollToTop} isMobile={isMobile} deviceWidth={deviceWidth} />

      <Suspense fallback={<div />}>
        <FooterPage isMobile={isMobile} deviceWidth={deviceWidth} />
      </Suspense>
    </div>
  );
}

export default App;
