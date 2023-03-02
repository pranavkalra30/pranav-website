import React from "react";
import lottie from "lottie-web";
import projectsAnimation from "../Animations/projectsAnimation.json";

function ProjectsAnimationFile() {
  React.useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#project-animation"),
      animationData: projectsAnimation,
    });
  }, []);

  return (
    <div>
      <div id="project-animation" style={{ width: 500, height: 500 }} />
    </div>
  );
}
export default ProjectsAnimationFile;
