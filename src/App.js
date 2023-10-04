import "./App.css";
import PrimaryAppBar from "./Components/appbar.js";
import React from "react";
import Homescreen from "./Pages/Homescreen";
import XpressphonePage from "./Pages/XpressphonePage";
import BackToTop from "./Components/backToTop";
import { Suspense, lazy, useRef } from "react";
import { Routes, Route } from "react-router-dom";

const FooterPage = lazy(() => import("./Components/footer"));

function App() {
  const ref = useRef(null);
  const isMobile = window.innerWidth <= 650;
  function handlePage(newValue) {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="App">
      <br />
      <br />
      <br />
      <br />

      <PrimaryAppBar handlePage={handlePage} isMobile={isMobile} />
      <Routes>
        <Route exact path="/" element={<Homescreen />} />
        <Route exact path="/Home" element={<Homescreen />} />
        <Route
          exact
          path="/projects/xpressphone"
          element={<XpressphonePage />}
        />
      </Routes>

      <BackToTop />

      <Suspense fallback={<div />}>
        <FooterPage
        // width={this.state.width}
        />
      </Suspense>
    </div>
  );
}

export default App;
