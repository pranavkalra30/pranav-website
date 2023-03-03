import React from "react";
import lottie from "lottie-web";
import projectsAnimation from "../Animations/projectsAnimation.json";
import "@lottiefiles/lottie-player";
import { create } from "@lottiefiles/lottie-interactivity";

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
        player: "#firstLottie",
        actions: [{ visibility: [0.5, 1.0], type: "play" }],
      });
    });
  }
  render() {
    return (
      <div className="App">
        <lottie-player
          ref={this.myRef} // 2. set the reference for the player
          id="firstLottie"
          mode="normal"
          src="https://assets3.lottiefiles.com/packages/lf20_xxyvtiab.json"
          style={{ width: "420px" }}
        ></lottie-player>
      </div>
    );
  }
}
export default ProjectsAnimationFile;
