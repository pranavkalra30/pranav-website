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
      <div id="under-construction" style={{ width: 400, height: 400 }} />
    </div>
  );
}
export default UnderConstructionAnimationFile;
