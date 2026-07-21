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
      <div id="projects-animation" style={{ width: "min(400px, 85vw)", height: "min(400px, 85vw)" }} />
    </div>
  );
}
export default ProjectsAnimationFile;
