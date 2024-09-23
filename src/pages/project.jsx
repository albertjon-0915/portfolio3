import "../styling/project/projectMain.scss";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Footer from "../components/footer.jsx";
import ProjectSlider from "../components/project/projectSlider.jsx";
import ProjectContent from "../components/project/projectContent.jsx";

// import GSAP dependencies
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";
import { scrollTriggerAnimWithScrub } from "../animations/gsapAnimation.jsx";

gsap.registerPlugin(Flip, ScrollTrigger);

function Project() {
  const [projectItems, setProjectItems] = useState([]);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const fetchData = async () => {
    const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/stack`);
    const data = await response.json();

    if (data) {
      setProjectItems([
        ...data.result.projects.fullstack,
        ...data.result.projects.frontend,
        ...data.result.projects.backend,
      ]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useGSAP(() => {
    const tl1 = gsap.timeline();
    const mm = gsap.matchMedia();

    mm.add("(max-width: 768px)", () => {
      gsap.set(".project-spline-content", { yPercent: -125, scale: 1.3 });
      tl1.fromTo(".project-spline-content", { yPercent: -125, scale: 1.3 }, { yPercent: 0, scale: 1 });
    });

    mm.add("(min-width: 768px)", () => {
      gsap.set(".project-spline-content", { yPercent: -80, scale: 1.3 });
      tl1.fromTo(".project-spline-content", { yPercent: -80, scale: 1.3 }, { yPercent: 0, scale: 1 });
    });

    ScrollTrigger.create({
      animation: tl1,
      trigger: ".project-content1",
      start: "top center",
      end: "top center",
      scrub: 3,
      pin: false,
      invalidateOnRefresh: true,
    });

    const tl2 = gsap.timeline();

    tl2.to("#proj-item2", { yPercent: -100 });

    ScrollTrigger.create({
      animation: tl2,
      trigger: ".project-content1",
      start: "25% center",
      end: "75% center",
      scrub: 2,
      pin: true,
      markers: true,
    });

    scrollTriggerAnimWithScrub("#proj-item1", { opacity: 0 }, "#proj-item2", "top center", "center center");
  });

  useEffect(() => {
    document.querySelector(".spline").addEventListener("wheel", (event) => {
      event.stopPropagation();
    });
  }, []);

  return (
    <div className="project-container">
      <div className="project-title-content">
        <h3>What I've Brought to Life &mdash;</h3>
        <div id="subtitle">
          <span>My Works</span>
        </div>
      </div>
      <ProjectContent />
      <ProjectSlider projectItems={projectItems} />
      <Footer />
    </div>
  );
}

export default Project;
