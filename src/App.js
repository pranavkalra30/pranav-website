import "./App.css";
import AboutMe from "./Components/aboutMe.js";
import PrimaryAppBar from "./Components/appbar.js";
import ContactMeSpeedDial from "./Components/ContactMeSpeedDial";

function App() {
  return (
    <div className="App">
      <PrimaryAppBar />
      <AboutMe />
      <ContactMeSpeedDial />
    </div>
  );
}

export default App;
