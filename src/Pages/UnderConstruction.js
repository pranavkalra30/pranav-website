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
      <div id="under-construction" style={{ width: "min(400px, 85vw)", height: "min(400px, 85vw)" }} />
    </div>
  );
}
export default UnderConstructionAnimationFile;
