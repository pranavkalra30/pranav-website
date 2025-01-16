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

const FooterPage = lazy(() => import("./Components/footer"));

function App() {
  const projectsRef = useRef(null);
  const scrollToTopRef = useRef(null);

  const contactRef = useRef(null);
  const scrollToContactRef = useRef(null);

  const isMobile = window.innerWidth <= 650;
  const deviceWidth = window.innerWidth;

  const executeScrollToProject = () => {
    projectsRef.current.scrollIntoView({
      window: "100px",
      behavior: "smooth",
      marginTop: "53px",
      offsetTop: "53",
    });
  };

  const executeScrollToContact = () => {
    contactRef.current.scrollIntoView({
      window: "100px",
      behavior: "smooth",
      marginTop: "53px",
      offsetTop: "53",
    });
  };

  const scrollToTop = () => {
    scrollToTopRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App" ref={scrollToTopRef}>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Homescreen
              projectsRef={projectsRef}
              scrollToTop={scrollToTop}
              contactRef={contactRef}
              executeScrollToProject={executeScrollToProject}
              executeScrollToContact={executeScrollToContact}
              isMobile={isMobile}
              deviceWidth={deviceWidth}
            />
          }
        />
        <Route
          exact
          path="/Home"
          element={
            <Homescreen
              projectsRef={projectsRef}
              contactRef={contactRef}
              scrollToTop={scrollToTop}
              executeScrollToProject={executeScrollToProject}
              executeScrollToContact={executeScrollToContact}
              isMobile={isMobile}
              deviceWidth={deviceWidth}
            />
          }
        />

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

      <BackToTop
        scrollToTop={scrollToTop}
        isMobile={isMobile}
        deviceWidth={deviceWidth}
      />

      <Suspense fallback={<div />}>
        <FooterPage
          isMobile={isMobile}
          deviceWidth={deviceWidth}
          // width={this.state.width}
        />
      </Suspense>
    </div>
  );
}

export default App;
