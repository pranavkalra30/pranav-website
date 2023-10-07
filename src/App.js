import "./App.css";
import PrimaryAppBar from "./Components/appbar.js";
import React from "react";
import Homescreen from "./Pages/Homescreen";
import XpressphonePage from "./Pages/XpressphonePage";
import ModoMubiPage from "./Pages/ModoMubiPage";
import BackToTop from "./Components/backToTop";
import { Suspense, lazy, useRef } from "react";
import { Routes, Route } from "react-router-dom";

const FooterPage = lazy(() => import("./Components/footer"));

function App() {
  const projectsRef = useRef(null);
  const scrollToTopRef = useRef(null);
  const isMobile = window.innerWidth <= 650;
  const executeScrollToProject = () => {
    projectsRef.current.scrollIntoView({
      window: "100px",
      behavior: "smooth",
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
              executeScrollToProject={executeScrollToProject}
              isMobile={isMobile}
            />
          }
        />
        <Route
          exact
          path="/Home"
          element={
            <Homescreen
              projectsRef={projectsRef}
              scrollToTop={scrollToTop}
              executeScrollToProject={executeScrollToProject}
              isMobile={isMobile}
            />
          }
        />
        <Route
          exact
          path="/projects/xpressphone"
          element={<XpressphonePage scrollToTop={scrollToTop} />}
        />

        <Route
          exact
          path="/projects/modomubi"
          element={<ModoMubiPage scrollToTop={scrollToTop} />}
        />
      </Routes>

      <BackToTop scrollToTop={scrollToTop} />

      <Suspense fallback={<div />}>
        <FooterPage
        // width={this.state.width}
        />
      </Suspense>
    </div>
  );
}

export default App;
