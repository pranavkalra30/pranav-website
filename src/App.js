import "./App.css";
import AboutMe from "./Components/aboutMe.js";
import AboutMe2 from "./Components/aboutMe2";
import AboutMeAnimationFile from "./Components/aboutMeAnimation";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grow from "@mui/material/Grow";
import PrimaryAppBar from "./Components/appbar.js";

function App() {
  return (
    <div className="App">
      <PrimaryAppBar />
      <header className="App-header">
        <AboutMe />
        <AboutMe2 />

        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <Box>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Grow in={true}>
              <Button variant="contained"> About Me </Button>
            </Grow>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Grow in={true}>
              <Button variant="contained"> Experience </Button>
            </Grow>
          </Box>
          <AboutMeAnimationFile />

          <Box>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Grow in={true}>
              <Button variant="contained"> Projects </Button>
            </Grow>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Grow in={true}>
              <Button variant="contained"> Contact</Button>
            </Grow>
          </Box>
        </Box>
      </header>
    </div>
  );
}

export default App;
