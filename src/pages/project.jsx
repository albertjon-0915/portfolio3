import React, { lazy, Suspense, useEffect, useRef, useMemo, useState } from "react";
import "../styling/project/projectMain.scss";

// import spline
const Spline = lazy(() => import("@splinetool/react-spline"));

// import components
import Footer from "../components/footer.jsx";
import ProjectSlider from "../components/project/projectSlider.jsx";
import ProjectContent from "../components/project/projectContent.jsx";
import ProjectWorks from "../components/project/projectWorks.jsx";

// import hooks
import useFetchProj from "../hooks/useFetchProj.jsx";
import useWindowSize from "../hooks/useWindowSize.jsx";

// import GSAP dependencies
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(Flip, ScrollTrigger);

function Project() {
  // custom hooks
  const { windowSize } = useWindowSize();
  const { projectItems } = useFetchProj();

  const knowThePosition = () => {
    return { x: window.innerWidth, y: window.innerHeight };
  };

  // const [origins, setOrigins] = useState(knowThePosition());
  const [origins, setOrigins] = useState({ x: 0, y: 0 });

  const cube = useRef();

  const onLoad = (spline) => {
    // d539aade-de67-46b0-94bb-3384051c3b37 - object id
    const obj = spline.findObjectById("d539aade-de67-46b0-94bb-3384051c3b37");

    cube.current = obj;
    cube.current ? console.log(cube.current) : null;
  };

  const changeSplinePosition = (paramX, paramY) => {
    cube.current.position.y = paramY;
    cube.current.position.x = paramX;
  };

  const setOriginState = async (paramX, paramY) => {
    console.log("set params origin state function", paramX, paramY);
    await setOrigins((prev) => ({
      ...prev,
      x: paramX,
      y: paramY,
    }));
  };

  useEffect(() => {
    if (cube.current) {
      switch (true) {
        case windowSize <= 576:
          changeSplinePosition(0, 500);
          setOriginState(0, 500);
          break;

        case windowSize <= 992:
          changeSplinePosition(-500, 0);
          setOriginState(-500, 0);
          break;

        case windowSize <= 1400:
          changeSplinePosition(-900, 0);
          setOriginState(-900, 0);
          break;

        default:
          changeSplinePosition(-1500, 0);
          setOriginState(-1500, 0);
          break;
      }
    }

    console.log(origins);
  }, [cube.current, windowSize]);

  // useGSAP hooks for animation
  useGSAP(() => {
    const tl1 = gsap.timeline();
    const mm = gsap.matchMedia();

    gsap.from(".spline-wrapper", { opacity: 0, delay: 1, duration: 0.5 });

    gsap.to(".spline-wrapper", {
      scrollTrigger: {
        trigger: ".bg-project-wrapper",
        start: "center bottom",
        end: "center top",
        scrub: 2,
        pin: ".spline-wrapper",
        pinSpacing: false,
        onUpdate: (self) => {
          const scrollPosition = self.progress.toFixed(5);
          const cubeOriginX = origins.x;

          const newPosition = cubeOriginX * Number(scrollPosition);

          changeSplinePosition(cubeOriginX - newPosition, 0);
        },
        markers: true,
      },
    });

    // scrollTriggerAnimWithScrubPin(
    //   ".bg-project-wrapper",
    //   {
    //     onUpdate: (self) => {
    //       console.log(self);
    //     },
    //   },
    //   ".spline-wrapper",
    //   "center bottom",
    //   "center top"
    // );
    // mm.add("(max-width: 768px)", () => {
    //   gsap.set(".project-spline-content", { yPercent: -125, scale: 1.3 });
    //   tl1.fromTo(".project-spline-content", { yPercent: -125, scale: 1.3 }, { yPercent: 0, scale: 1 });
    // });

    // mm.add("(min-width: 768px)", () => {
    //   gsap.set(".project-spline-content", { yPercent: -80, scale: 1.3 });
    //   tl1.fromTo(".project-spline-content", { yPercent: -80, scale: 1.3 }, { yPercent: 0, scale: 1 });
    // });

    // ScrollTrigger.create({
    //   animation: tl1,
    //   trigger: ".project-content1",
    //   start: "top center",
    //   end: "top center",
    //   scrub: 3,
    //   pin: false,
    //   invalidateOnRefresh: true,
    // });
  });

  return (
    <div className="project-container">
      <div className="bg-project-wrapper">
        <div className="spline-wrapper">
          <Suspense fallback={null}>
            <div className="spline">
              <Spline scene="https://prod.spline.design/OaU89xBxiO-86rcZ/scene.splinecode" onLoad={onLoad} />
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
