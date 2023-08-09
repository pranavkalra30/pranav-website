import React from "react";
import lottie from "lottie-web";
import projectsAnimation from "../Animations/projectsAnimation2.json";

function ProjectsAnimationFile() {
  React.useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#projects-animation"),
      animationData: projectsAnimation,
    });
  }, []);

  return (
    <div>
      <div id="projects-animation" style={{ width: 400, height: 400 }} />
    </div>
  );
}
export default ProjectsAnimationFile;
