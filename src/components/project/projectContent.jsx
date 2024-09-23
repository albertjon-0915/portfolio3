import React from "react";
import '../../styling/project/projectContent.scss';
import Spline from "@splinetool/react-spline";

function ProjectContent() {
  return (
    <div className="project-content-wrapper">
      <div className="project-content1">
        <div className="project-text-context">
          <h4 id="proj-item1">
            <span>Okay I know I'm a newbie</span>
            <span>But dont judge me yet! &mdash;</span>
          </h4>
          <p id="proj-item2">
            <span> Let me first show you my</span>
            <span>
              PR<span>O</span>JECTS
            </span>
          </p>
        </div>

        <div className="project-spline-content">
          <Spline className="spline" scene="https://prod.spline.design/fRwUh5klecyI-Ak4/scene.splinecode" />
        </div>
      </div>
    </div>
  );
}

export default ProjectContent;
