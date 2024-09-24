import React, { useRef } from "react";
import "../../styling/project/projectContent.scss";
import Spline from "@splinetool/react-spline";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function ProjectContent() {
  const refSpline = useRef(null);

  useGSAP(
    () => {
      const tl2 = gsap.timeline();

      tl2.to("#proj-item2", { yPercent: -100 });

      ScrollTrigger.create({
        animation: tl2,
        trigger: ".project-content1",
        start: "400 50%",
        end: "+=600",
        scrub: 1,
        pin: true,
        markers: true,
      });
    },
    { dependencies: [refSpline.current], revertOnUpdate: true }
  );

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
          <Spline
            className="spline"
            scene="https://prod.spline.design/fRwUh5klecyI-Ak4/scene.splinecode"
            ref={refSpline}
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectContent;
