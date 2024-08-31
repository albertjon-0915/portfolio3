import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const TranslateY = (item) => {
     gsap.from(item, {
          y: 100,
          opacity: 0,
          duration: 1,
          delay: 0.5,
     });
};

export const ScrollAnimFrom = (item, startContainer, animationProps) => {
     gsap.from(item, {
          scrollTrigger: {
               trigger: item,
               start: `top ${startContainer}`,
               end: "bottom 50%",
               // markers: true,
               toggleActions: "restart none reverse none ",
          },
          ...animationProps,
     });
};

export const ScrollAnimTo = (item, startContainer, animationProps) => {
     gsap.to(item, {
          scrollTrigger: {
               trigger: item,
               start: `top ${startContainer}`,
               end: "bottom 100%",
               // markers: true,
               toggleActions: "restart none reverse none ",
          },
          ...animationProps,
     });
};
