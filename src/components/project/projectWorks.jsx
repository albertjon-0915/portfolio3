import React, { useRef } from "react";
import "../../styling/project/projectWorks.scss";
import { scrollTriggerAnimWithScrub } from "../../animations/gsapAnimation";
import { ImImage } from "react-icons/im";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function ProjectWorks({ projectItems }) {
  const refWorks = useRef(null);
  const projectWorks = (items) => {
    return null;
  };

  useGSAP(
    () => {
      console.log("(projectItems.length > 0) ");

      const workedProj = gsap.utils.toArray(".works-section");
      const tl3 = gsap.timeline();

      console.log(workedProj);

      workedProj.map((item, index) => {
        tl3.to(item, { yPercent: -98 * index }, index * 0.5);

        gsap.to(item, {
          autoAlpha: 0.15,
          scrollTrigger: {
            trigger: projectItems.length > 0 ? item : null,
            start: "700 center",
            end: "+=300",
            scrub: 1,
            markers: true,
          },
        });
      });

      ScrollTrigger.create({
        animation: tl3,
        trigger: refWorks.current,
        start: "350 center",
        end: "+=4200",
        scrub: 1,
        pin: true,
        pinSpacing: false,
        markers: true,
      });
    },
    { scope: refWorks, revertOnUpdate: true }
  );
  return (
    <div className="project-works-container">
      <div className="project-works-wrapper" ref={refWorks}>
        {projectItems.length > 0
          ? projectItems.map((item, index) => (
              <div className="works-section" key={index}>
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
            ))
          : [1, 2, 3].map((item, index) => (
              <div className="works-section" key={index}>
                <div className="works-text">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>

                <div className="works-img">
                  <ImImage className="proj-image-icon" />
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}

export default ProjectWorks;
