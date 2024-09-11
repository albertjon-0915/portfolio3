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

export const scrollTriggerAnimWithScrub = (item, properties, trigger, startProperty, endProperty) => {
     gsap.to(item, {
          scrollTrigger: {
               trigger: trigger,
               start: startProperty || "center center",
               end: endProperty || "center center",
               scrub: 2,
               // markers: true,
          },
          ...properties,
     });
};

export const scrollTriggerAnimWithToggle = (item, properties, trigger, startProperty, endProperty) => {
     gsap.to(item, {
          scrollTrigger: {
               trigger: trigger,
               start: startProperty || "top center",
               end: endProperty || "top center",
               toggleActions: "restart none reverse none",
               // markers: true,
          },
          ...properties,
     });
};