import React, { useEffect, useState, useRef } from "react";
import "../styling/project/project3.scss";
import Footer from "../components/footer.jsx";
import codingImage from "../assets/projects-coding.png";
import { IoIosImages } from "react-icons/io";
import { scrollTriggerAnimWithScrub } from "../animations/gsapAnimation.jsx";

// import GSAP dependencies
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(Flip, ScrollTrigger);

function Project() {
     const [projects, setProjects] = useState([]);
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

     const Left = () => {
          let leftFiltered = projects.filter((item, index) => index % 2 === 0);
          console.log("left", leftFiltered);

          return leftFiltered.map((item, index) => (
               <div className="left-image-panel">
                    <img src={item.imageString} alt="img" key={index} className="image-card" />
               </div>
          ));
     };

     const Right = () => {
          let rightFiltered = projects.filter((item, index) => index % 2 !== 0);
          console.log("right", rightFiltered);

          return rightFiltered.map((item, index) => (
               <div className="right-image-panel">
                    <img src={item.imageString} alt="img" key={index} className="image-card" />
               </div>
          ));
     };

     const projectImages = (items, classes) => {
          return (
               <div className="images-panel" id={classes}>
                    {items.length > 0
                         ? items.map((item, index) => (
                                <img src={item.imageString} alt="img" key={index} className="image-card" />
                           ))
                         : [1, 2, 3, 4, 5].map((item) => (
                                <div className="image-preloader">
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
          if (projects.length > 0) {
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
          }
     });

     return (
          <div className="project-container">
               <div className="project-title-content">
                    <h3>What I've Brought to Life &mdash;</h3>
                    <h5>Projects</h5>
               </div>
               <div className="project-section-wrapper">
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
                    </div>
                    <div className="project-content2"></div>
               </div>
               <div className="project-slider">
                    {projectImages(projects, "images-panel1")}
                    {projectImages(projects.reverse(), "images-panel2")}
               </div>
               <div className="project-contents">
                    {projects.map((item) => (
                         <div className="project-content-wrapper">
                              <div className="text-content">
                                   <h3>{item.title}</h3>
                                   <h5>{item.subtitle}</h5>
                                   {/* <p>{getFirstSentence(item.description)}</p> */}
                              </div>
                              <div className="stack-content">
                                   <span>{item.stack}</span>
                              </div>
                         </div>
                    ))}
               </div>
               <Footer />
          </div>
     );
}

export default Project;
