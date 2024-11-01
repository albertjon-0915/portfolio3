import React, { useRef } from "react";
import "../../styling/project/projectContent.scss";

// import GSAP dependencies
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scrollTriggerAnimWithScrub } from "../../animations/gsapAnimation";

function ProjectContent() {
  // useGSAP hook for animation
  useGSAP(
    () => {
      const mm3 = gsap.matchMedia();
      const tl2 = gsap.timeline();

      tl2.to("#proj-item2", { yPercent: -100 });

      mm3.add("(max-width: 768px)", () => {
        ScrollTrigger.create({
          animation: tl2,
          trigger: ".project-content1",
          start: "150 50%",
          end: "+=550",
          scrub: 1,
          pin: true,
          // markers: true,
        });

        scrollTriggerAnimWithScrub("#proj-item1", { opacity: 0 }, "#proj-item2", "top center", "20% center");
      });

      mm3.add("(min-width: 768px)", () => {
        ScrollTrigger.create({
          animation: tl2,
          trigger: ".project-content1",
          start: "400 50%",
          end: "+=600",
          scrub: 1,
          pin: true,
          // markers: true,
        });
      });

      scrollTriggerAnimWithScrub("#proj-item1", { opacity: 0 }, "#proj-item2", "top center", "center center");
    },
    { revertOnUpdate: true }
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
      </div>
    </div>
  );
}

export default ProjectContent;
