import "./App.css";
import AboutMe from "./Components/aboutMe.js";
import PrimaryAppBar from "./Components/appbar.js";
import ContactMeSpeedDial from "./Components/ContactMeSpeedDial";
import P from "./Animations/P.gif";

function App() {
  return (
    <div className="App">
      <PrimaryAppBar />
      <img src={P} alt="loading..." />
      <AboutMe />

      <ContactMeSpeedDial />
    </div>
  );
}

export default App;
