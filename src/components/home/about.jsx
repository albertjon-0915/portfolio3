import React from "react";
import "../../styling/home/about.scss";
import coding from "../../assets/coding.png";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { scrollTriggerAnimWithScrub } from "../../animations/gsapAnimation";

// import GSAP dependencies
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SiCalendly } from "react-icons/si";

// gsap plugin for useGSAP
gsap.registerPlugin({ useGSAP, ScrollTrigger });

function About() {
     useGSAP(() => {
          gsap.set(".content h3", {
               maxWidth: "0vw",
               opacity: 0,
          });

          gsap.set([".about-text-content", ".socials-item"], {
               x: 100,
               opacity: 0,
          });

          gsap.set(".about-wrapper", {
               y: 0,
               perspective: 3000,
          });

          gsap.from(".image-about", {
               y: 100,
               opacity: 0,
               duration: 1,
               delay: 0.5,
          });

          scrollTriggerAnimWithScrub(
               ".image-about",
               {
                    rotateY: -20,
                    rotateZ: 5,
                    scale: 0.8,
               },
               ".image-about",
               "top center",
               "bottom center"
          );

          scrollTriggerAnimWithScrub(
               ".content h3",
               {
                    maxWidth: "30vw",
                    minWidth: "30vw",
                    opacity: 1,
               },
               ".about-wrapper",
               "35% center",
               "75% center"
          );

          scrollTriggerAnimWithScrub(
               ".about-text-content",
               {
                    x: 0,
                    opacity: 1,
               },
               ".about-wrapper",
               "35% center",
               "75% center"
          );

          scrollTriggerAnimWithScrub(
               ".socials-item",
               {
                    x: 0,
                    stagger: 0.1,
                    opacity: 1,
               },
               ".socials",
               "-80% center",
               "-20% center"
          );
     }, []);

     return (
          <div className="about-container" id="about">
               <div className="about-wrapper">
                    <img src={coding} alt="img" className="image-about" />

                    <div className="about-title">
                         <div className="title-focal">Want to know more about me &mdash; here's some brief info</div>
                    </div>

                    <div className="content">
                         <h3>About</h3>
                         <p className="about-text-content">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, cumque maxime. Dicta
                              dolore, fugiat labore eveniet perspiciatis nam deleniti animi placeat modi omnis dolores
                              quia repellat quam ipsa doloremque aliquam ab. Quisquam, temporibus dolore voluptate ipsa
                              iusto tempore ratione fugit, cupiditate aliquam quidem odit mollitia similique eius
                              impedit autem maiores?
                         </p>
                    </div>

                    <div className="socials">
                         <ul>
                              <li className="socials-item">
                                   <FaFacebookF style={{ color: '#d19a66' }} />
                                   <span>facebook</span>
                              </li>
                              <li className="socials-item">
                                   <FaLinkedinIn style={{ color: "#98c379" }} />
                                   <span>linkedIn</span>
                              </li>
                              <li className="socials-item">
                                   <FaGithub style={{ color: "#e06c75" }} />
                                   <span>github</span>
                              </li>
                         </ul>
                    </div>
               </div>
          </div>
     );
}

export default About;
