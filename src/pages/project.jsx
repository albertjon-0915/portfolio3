import React, { useEffect, useState, useRef } from "react";
import "../styling/project/project3.scss";
import videoCoding from "../assets/videos/video-coding.mp4";
import projectSVG from "../assets/lottieSVG/projectSVG.json";
import Lottie from "lottie-react";
import codingImage from "../assets/projects-coding.png";
import Footer from "../components/footer.jsx";
// import GSAP dependencies
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Flip } from "gsap/Flip";

// gsap.registerPlugin(Flip, ScrollTrigger);

function Project() {
     const fetchData = async () => {
          const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/stack`);
          const data = await response.json();

          if (data) {
               setProjects([
                    ...data.result.projects.fullstack,
                    ...data.result.projects.frontend,
                    ...data.result.projects.backend,
               ]);
          }
     };

     useEffect(() => {
          fetchData();
     }, []);

     return (
          <div className="project-container">
               <div className="project-title-content">
                    <h3>What I've Brought to Life &mdash;</h3>
                    <h5>Projects</h5>
               </div>
               <div className="project-wrapper">
                    <div className="project-content1">
                         <div className="project-text-context">
                              <h4>Okay I know I'm a newbie</h4>
                              <p>
                                   But dont judge me yet! &mdash; Let me first show you my <span>PROJECTS</span>
                              </p>
                         </div>

                         <div className="project-image-content">
                              <img src={codingImage} alt="img" />
                         </div>

                         {/* <Lottie animationData={projectSVG} loop={true} className="lottie" /> */}
                         {/* <video src={videoCoding} loop autoPlay preload="auto" muted></video> */}
                    </div>
                    <div className="project-content2"></div>
               </div>

               <Footer />
          </div>
     );
}

export default Project;
