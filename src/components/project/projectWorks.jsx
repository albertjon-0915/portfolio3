import React, { useRef } from "react";
import "../../styling/project/projectWorks.scss";
import { scrollTriggerAnimWithScrub } from "../../animations/gsapAnimation";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function ProjectWorks({ projectItems }) {
  const refWorks = useRef([]);
  const projectWorks = (items) => {
    return null;
  };

  function getFirstSentence(text) {
    const sentences = text.split(/[.!?]/);

    return sentences[0] ? sentences[0].trim() : sentences;
  }

  useGSAP(() => {
    if (projectItems.length > 0) {
      console.log("(projectItems.length > 0) ");
      const tl3 = gsap.timeline();

      const workedProj = gsap.utils.toArray(refWorks.current);
      console.log(workedProj);

      workedProj.forEach((item, index) => {
        tl3.to(item, { yPercent: -95 * index }, index * 0.5);

        scrollTriggerAnimWithScrub(
          item,
          {
            opacity: 0.1,
          },
          item,
          "700 center",
          "+=300"
        );
      });

      ScrollTrigger.create({
        animation: tl3,
        trigger: ".project-works-wrapper",
        start: "350 center",
        end: "+=4000",
        scrub: 1,
        pin: true,
        pinSpacing: false,
        markers: true,
      });
    }
  });

  return (
    <div className="project-works-container">
      <div className="project-works-wrapper">
        {projectItems.map((item, index) => (
          <div className="works-section" key={index} ref={(el) => (refWorks.current[index] = el)}>
            <div className="works-text">
              <h3>
                <a href={item.link}>{item.title}</a>
              </h3>

              <h5>{item.subtitle}</h5>

              <div>
                {item.stack.map((progLang) => (
                  <span key={progLang}>{progLang}</span>
                ))}
              </div>
            </div>

            <div className="works-img">
              <img src={item.imageString} alt="img" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectWorks;
