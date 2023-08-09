import React from "react";
import "@lottiefiles/lottie-player";
import { create } from "@lottiefiles/lottie-interactivity";
import projectsAnimationLottie from '../Animations/projectsAnimation2.json'

class ProjectsAnimationFile extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef(); // 1. create a reference for the lottie player
  }
  componentDidMount() {
    // 3. listen for player load. see lottie player repo for other events
    this.myRef.current.addEventListener("load", function (e) {
      // 4. configure the interactivity library
      create({
        mode: "scroll",
        player: "#projectsLottie",
        actions: [{ visibility: [0.5, 1.0], type: "play" }],
      });
    });
  }
  render() {
    return (
      <div className="App">
        <lottie-player
          ref={this.myRef} // 2. set the reference for the player
          id="projectsLottie"
          mode="normal"
          src="https://lottie.host/6f77ee57-0e40-4fa7-a41d-77bba5c6cd37/g0Q1KivvQ2.json"
          style={{ width: "420px" }}
        ></lottie-player>
      </div>
    );
  }
}
export default ProjectsAnimationFile;
