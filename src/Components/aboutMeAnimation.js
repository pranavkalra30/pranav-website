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
      <div id="react-logo" style={{ width: 500, height: 500 }} />
    </div>
  );
}
export default AboutMeAnimationFile;
