import React, { lazy, Suspense, useRef } from "react";
import "../styling/project/projectMain.scss";

// import spline
const Spline = lazy(() => import("@splinetool/react-spline"));
// import Spline from "@splinetool/react-spline";

// import components
import Footer from "../components/footer.jsx";
import ProjectSlider from "../components/project/projectSlider.jsx";
import ProjectContent from "../components/project/projectContent.jsx";
import ProjectWorks from "../components/project/projectWorks.jsx";

// import hooks
import useFetchProj from "../hooks/useFetchProj.jsx";

// import GSAP dependencies
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(Flip, ScrollTrigger);

function Project() {
  const { projectItems } = useFetchProj();
  const cube = useRef(null);

  const onLoad = (spline) => {
    // d539aade-de67-46b0-94bb-3384051c3b37 - object id
    const obj = spline.findObjectById("d539aade-de67-46b0-94bb-3384051c3b37");

    cube.current = obj;
    cube.current ? console.log(cube.current.position.y) : null;
  };

  const moveObj = () => {
    console.log("clicked");
    if (!cube.current) return;

    console.log(cube.current.position.y);
  };

  // useGSAP hooks for animation
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
  });

  return (
    <div className="project-container">
      <div className="bg-project-wrapper">
        <div className="spline-wrapper">
          <Suspense fallback={null}>
            <div className="spline">
              <Spline scene="https://prod.spline.design/fRwUh5klecyI-Ak4/scene.splinecode" onLoad={onLoad} />
            </div>
          </Suspense>
        </div>
        <div className="project-title-content">
          <h3>What I've Brought to Life &mdash;</h3>
          <div id="subtitle">
            <span>My Works</span>
          </div>
        </div>
        <ProjectContent />
      </div>

      {/* <ProjectSlider projectItems={projectItems} /> */}
      {/* <ProjectWorks projectItems={projectItems} /> */}
      <Footer />
    </div>
  );
}

export default Project;
