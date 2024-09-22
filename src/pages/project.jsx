import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import "../styling/project/project3.scss";
import Footer from "../components/footer.jsx";
import deskImage from "../assets/desk.png";
import me from "../assets/me.jpg";
import { IoIosImages } from "react-icons/io";
import { scrollTriggerAnimWithScrubPin, scrollTriggerAnimWithScrub } from "../animations/gsapAnimation.jsx";
import Spline from "@splinetool/react-spline";

// import GSAP dependencies
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(Flip, ScrollTrigger);

function Project() {
  const [projectItems, setProjectItems] = useState([]);
  const [imageStates, setImageStates] = useState(projectItems.map(() => false));
  const main = useRef(null);
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

  const projectImages = (items, classes) => {
    return (
      <div className="images-panel" id={classes}>
        {items.length > 0
          ? items.map((item, index) => <img src={item.imageString} alt="img" key={index} className="image-card" />)
          : [1, 2, 3, 4, 5].map((item, index) => (
              <div className="image-preloader" key={index}>
                <IoIosImages className="image-icon" />
              </div>
            ))}
      </div>
    );
  };

  const getFirstSentence = (description) => {
    const firstSentence = description.split(/(?<=[.!?])\s+/);

    return firstSentence[0].trim();
  };

  useGSAP(() => {
    scrollTriggerAnimWithScrub(
      "#images-panel1",
      {
        xPercent: -40,
      },
      ".project-slider",
      "top center",
      "bottom center"
    );

    scrollTriggerAnimWithScrub(
      "#images-panel2",
      {
        xPercent: 40,
      },
      ".project-slider",
      "top center",
      "bottom center"
    );

    scrollTriggerAnimWithScrubPin("#proj-item1", { x: 0, y: 0 }, "#proj-item1", "center center", "+=1000");

    const tl1 = gsap.timeline();
    const mm = gsap.matchMedia();

    mm.add("(max-width: 768px)", () => {
      tl1.from(".project-image-content", { yPercent: -100, scale: 1.3 });
    });

    mm.add("(min-width: 768px)", () => {
      tl1.from(".project-image-content", { yPercent: -105, scale: 1.3 });
    });

    ScrollTrigger.create({
      animation: tl1,
      trigger: ".project-content1",
      start: "top center",
      end: "top center",
      scrub: 3,
      pin: false,
      // markers: true,
    });
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
        <div id="temporary-title-wrapper">
          <span id="moving-title">My Works</span>
        </div>
      </div>
      <div className="project-section-wrapper">
        <div className="project-content1">
          <div className="project-text-context">
            <h4 id="proj-item1">Okay I know I'm a newbie</h4>
            <p id="proj-item2">
              <span>But dont judge me yet! &mdash; Let me first show you my</span> <span>PROJECTS</span>
            </p>
          </div>

          <div className="project-image-content">
            <Spline className="spline" scene="https://prod.spline.design/fRwUh5klecyI-Ak4/scene.splinecode" />
          </div>
        </div>
      </div>
      <div className="project-slider">
        {projectImages(projectItems, "images-panel1")}
        {projectImages(projectItems.reverse(), "images-panel2")}
      </div>
      <Footer />
    </div>
  );
}

export default Project;
