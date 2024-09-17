import React, { useEffect, useState, useRef } from "react";
import "../styling/project/project3.scss";
import Footer from "../components/footer.jsx";
import codingImage from "../assets/projects-coding.png";
import me from "../assets/me.jpg";
import { IoIosImages } from "react-icons/io";
import { scrollTriggerAnimWithScrubPin, scrollTriggerAnimWithScrub } from "../animations/gsapAnimation.jsx";

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
                         ? items.map((item, index) => (
                                <img src={item.imageString} alt="img" key={index} className="image-card" />
                           ))
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

          const gallery = gsap.utils.toArray(".project-content-wrapper");

          gallery.forEach((item, index) => {
               // gsap.to(item, {
               //      scrollTrigger: {
               //           trigger: item,
               //           start: "top center ",
               //           end: "center center ",
               //           scrub: 1,
               //           markers: true,
               //      },
               //      x: 500,
               // });
          });
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
                    {projectImages(projectItems, "images-panel1")}
                    {projectImages(projectItems.reverse(), "images-panel2")}
               </div>
               <div className="project-contents" ref={main}>
                    {projectItems.map((item, index) => (
                         <div className="project-content-wrapper" key={index}>
                              <div className="text-content">
                                   <h3>{item.title}</h3>
                                   <h5>{item.subtitle}</h5>
                              </div>

                              <div className="stack-content">
                                   {item.stack.map((spanItem, index) => (
                                        <span key={index}>{spanItem}</span>
                                   ))}
                              </div>

                              <img src={item.imageString} alt="img" className="image-gallery" />
                         </div>
                    ))}
               </div>
               <Footer />
          </div>
     );
}

export default Project;
