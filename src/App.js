import "./App.css";
import PrimaryAppBar from "./Components/appbar.js";
import React from "react";
import Homescreen from "./Pages/Homescreen";
import XpressphonePage from "./Pages/XpressphonePage";
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
      <Homescreen />

      <Suspense fallback={<div />}>
        <FooterPage
        // width={this.state.width}
        />
      </Suspense>
    </div>
  );
}

export default App;
