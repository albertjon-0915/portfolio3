import React from "react";
import "../../styling/home/services.scss";
import Me from "../../assets/me.jpg";
import {
  scrollTriggerAnimWithToggle,
  scrollTriggerAnimWithScrubPin,
  scrollTriggerAnimWithScrub,
} from "../../animations/gsapAnimation";

// import GSAP dependencies
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Services() {
  // Animations using gsap, onScroll/onView animation
  useGSAP(() => {
    // set DOM elements to initial positions
    gsap.set(".img-content2", {
      xPercent: 100,
    });

    gsap.set(".animImg", {
      width: "0",
    });
    
    scrollTriggerAnimWithToggle(
      ".animImg",
      {
        width: "100%",
        duration: 0.6,
        yoyo: true,
        repeat: 1,
        repeatDelay: 0.2,
        delay: 0.2,
      },
      ".services-wrapper"
    );

    scrollTriggerAnimWithToggle(
      ".img-content2",
      {
        xPercent: 0,
        duration: 0.7,
        delay: 0.3,
      },
      ".services-wrapper"
    );

    gsap.set(".text-content", {
      opacity: 0,
    });

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1200px)", () => {
      scrollTriggerAnimWithScrubPin(
        ".services-wrapper",
        {
          opacity: 1,
        },
        ".text-content",
        "top center",
        "40% center"
      );
    });

    mm.add("(max-width: 1199px)", () => {
      gsap.set(".text-content", {
        opacity: 0,
        x: -100,
        y: 100,
      });

      scrollTriggerAnimWithScrub(
        ".text-content",
        {
          opacity: 1,
          x: 0,
          y: 0,
        },
        ".services-wrapper",
        "30% center",
        "80% center"
      );
    });
  }, []);

  return (
    <div className="services-container" id="service">
      <div className="services-wrapper">
        <div className="content1">
          <div className="text-content">
            <h2>What can I offer &mdash;</h2>
            <p className="item1">As a front-end developer, I create engaging and user-friendly interfaces</p>
            <p className="item2">In the back-end role, I build and maintain the server-side of applications</p>
            <p className="item3">
              As a full-stack developer, I manage both front and back end aspects for a seamless user experience.
            </p>
          </div>
        </div>
        <div className="content2">
          <img src={Me} alt="img" className="img-content2" />
          <span className="animImg"></span>
        </div>
      </div>
    </div>
  );
}

export default Services;
