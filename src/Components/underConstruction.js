import React from "react";
import lottie from "lottie-web";
import underConstruction from "../Animations/underConstruction.json";

function UnderConstructionAnimationFile() {
  React.useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#under-construction"),
      animationData: underConstruction,
    });
  }, []);

  return (
    <div>
      <div id="under-construction" style={{ width: 600, height: 600 }} />
    </div>
  );
}
export default UnderConstructionAnimationFile;
