import React, { useEffect, useState, useRef } from "react";
import "../styling/project/project2.scss";
import { scrollTriggerAnimWithScrub } from "../animations/gsapAnimation";
import { IoImages } from "react-icons/io5";

// import GSAP dependencies
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Project() {
     const main = useRef(); // This will reference the main project container
     const [projects, setProjects] = useState([]);

     // Fetch project data
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

     // GSAP Animation hook
     useGSAP(
          () => {
               gsap.set(".img-content", {
                    maxWidth: "20em",
               });

               const cards = gsap.utils.toArray(".img-content");

               cards.forEach((card) => {
                    gsap.to(card, {
                         scrollTrigger: {
                              trigger: card,
                              start: "top center",
                              end: "bottom center",
                              scrub: 2,
                              markers: true,
                              invalidateOnRefresh: true,
                         },
                         maxWidth: "50em",
                    });
               });
          },

          { scope: main }
     );
     //////////////////////////////////// USE THE NPM INSTALL ENTRY OBSERVER THEN CHANGE TO SCROLLTRIGGER.CREATE WITH JUST THE ONVIEW ELEMENT USING OBSERVER

     return (
          <div className="project-container" ref={main}>
               <div className="project-wrapper">
                    <div className="project-content1">
                         <div className="text-content">
                              <h3>What I've Brought to Life &mdash;</h3>
                              <h4>Projects</h4>
                         </div>
                    </div>
                    <div className="project-content2">
                         {projects.length > 0 ? (
                              projects.map((item, index) => (
                                   <div key={index}>
                                        <hr />
                                        <div className="cards">
                                             <div className="text-cards">
                                                  <h3>{item.title}</h3>
                                                  <h5>{item.subtitle}</h5>
                                             </div>
                                             <div className="image-cards">
                                                  <img src={item.imageString} alt="img" className="img-content" />
                                             </div>
                                        </div>
                                   </div>
                              ))
                         ) : (
                              <div className="preloader-wrapper-cards">
                                   <hr />
                                   <div className="preloader-cards">
                                        <div className="preload-text-cards">
                                             <h3></h3>
                                             <h5></h5>
                                        </div>
                                        <div className="preload-image-cards">
                                             <div id="preload-img-content">
                                                  <IoImages id="logo-img-preload" />
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         )}
                    </div>
               </div>
          </div>
     );
}

export default Project;
