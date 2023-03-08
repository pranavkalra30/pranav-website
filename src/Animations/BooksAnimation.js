import React from "react";
import "@lottiefiles/lottie-player";
import { create } from "@lottiefiles/lottie-interactivity";

class BooksAnimationFile extends React.Component {
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
        player: "#educationLottie",
        actions: [{ visibility: [0.5, 1.0], type: "play" }],
      });
    });
  }
  render() {
    return (
      <div className="App">
        <lottie-player
          ref={this.myRef} // 2. set the reference for the player
          id="educationLottie"
          mode="normal"
          src="https://assets5.lottiefiles.com/packages/lf20_1a8dx7zj.json"
          style={{ width: "420px" }}
        ></lottie-player>
      </div>
    );
  }
}
export default BooksAnimationFile;
