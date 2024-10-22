import React, { useRef } from "react";
import "../../styling/project/projectWorks.scss";
import { scrollTriggerAnimWithScrub } from "../../animations/gsapAnimation";
import { ImImage } from "react-icons/im";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(Flip);

function ProjectWorks({ projectItems }) {
  const refWorks = useRef(null);

  useGSAP(
    () => {
      const workedProj = gsap.utils.toArray(".works-section");
      const tl3 = gsap.timeline();

      console.log(workedProj);
      const mm2 = gsap.matchMedia();

      mm2.add("(max-width: 768px)", () => {
        workedProj.map((item, index) => {
          tl3.to(item, { yPercent: -99.5 * index }, index * 0.5);

          gsap.to(item, {
            autoAlpha: 0.15,
            scrollTrigger: {
              trigger: item,
              start: "700 center",
              end: "+=100",
              scrub: 1,
            },
          });
        });

        ScrollTrigger.create({
          animation: tl3,
          trigger: refWorks.current,
          start: "290 center",
          end: "+=4100",
          scrub: 1,
          pin: true,
          pinSpacing: false,
          markers: true,
        });
      });

      mm2.add("(min-width: 768px)", () => {
        workedProj.map((item, index) => {
          tl3.to(item, { yPercent: -99.5 * index }, index * 0.5);

          gsap.to(item, {
            autoAlpha: 0.15,
            scrollTrigger: {
              trigger: item,
              start: "550 center",
              end: "+=300",
              scrub: 1,
              // markers: true,
            },
          });
        });

        ScrollTrigger.create({
          animation: tl3,
          trigger: refWorks.current,
          start: "320 center",
          end: `+=${workedProj.length * 440}`,
          scrub: 1,
          pin: true,
          pinSpacing: false,
          markers: true,
        });
      });

      workedProj.forEach((item) => {
        ScrollTrigger.create({
          trigger: item,
          start: "10% 10%",
          end: "10% 20%",
          invalidateOnRefresh: true,
          scrub: true,
          markers: true,
          onEnter: () => {
            const childrenImage = item.querySelector(".works-img");
            const childrenText = item.querySelector(".works-text");
            const state1 = Flip.getState(childrenImage);
            const state2 = Flip.getState(childrenText);

            const classListAddOrRemove = (element, action, classListNames) => {
              action === "add" ? element.classList.add(classListNames) : element.classList.remove(classListNames);
            };

            classListAddOrRemove(childrenImage, "add", "expanded-image");
            classListAddOrRemove(childrenImage, "remove", "not-expanded-image");
            classListAddOrRemove(childrenText, "add", "expanded-text");

            const properties = {
              duration: 0.5,
              ease: "power1.inOut",
              absolute: true,
              nested: true,
              scale: true,
            };

            Flip.from(state1, { ...properties });
            Flip.from(state2, { ...properties });
          },
          onEnterBack: () => {
            const childrenImage = item.querySelector(".works-img");
            const childrenText = item.querySelector(".works-text");
            const state1 = Flip.getState(childrenImage);
            const state2 = Flip.getState(childrenText);

            const classListAddOrRemove = (element, action, classListNames) => {
              action === "add" ? element.classList.add(classListNames) : element.classList.remove(classListNames);
            };

            classListAddOrRemove(childrenImage, "add", "not-expanded-image");
            classListAddOrRemove(childrenImage, "remove", "expanded-image");
            classListAddOrRemove(childrenText, "remove", "expanded-text");

            const properties = {
              duration: 0.5,
              ease: "power1.inOut",
              absolute: true,
              nested: true,
              scale: true,
            };

            Flip.from(state1, { ...properties });
            Flip.from(state2, { ...properties });
          },
        });
      });
    },

    { dependencies: [projectItems], scope: refWorks, revertOnUpdate: true }
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

                <div className="works-img not-expanded-image" id={`img${index}`}>
                  <img src={item.imageString} alt="img" className="children-image" />
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default ProjectWorks;
