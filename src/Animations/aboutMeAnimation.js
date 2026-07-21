import React from "react";
import lottie from "lottie-web";
import aboutMeAnimation from "../Animations/aboutMeAnimation.json";

function AboutMeAnimationFile() {
  React.useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#react-logo"),
      animationData: aboutMeAnimation,
    });
  }, []);

  return (
    <div>
      <div id="react-logo" style={{ width: "min(320px, 70vw)", height: "min(320px, 70vw)" }} />
    </div>
  );
}
export default AboutMeAnimationFile;
