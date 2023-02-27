import "./App.css";
import AboutMe from "./Components/aboutMe.js";
import PrimaryAppBar from "./Components/appbar.js";
import P from "./Animations/P.gif";

function App() {
  return (
    <div className="App">
      <PrimaryAppBar position="sticky" />
      <img src={P} alt="loading..." />
      <AboutMe />
    </div>
  );
}

export default App;
