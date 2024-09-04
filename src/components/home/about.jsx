import React from "react";
import "../../styling/home/about.scss";
import coding from "../../assets/coding.png";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { TranslateY, ScrollAnimFrom } from "../../animations/gsapAnimation";

// import GSAP dependencies
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

function About() {
     useGSAP(() => {
          let tl = gsap.timeline({
               scrollTrigger: {
                    trigger: ".about-wrapper",
                    start: "45% 30%",
                    end: "65% 40%",
                    toggleActions: "restart none reverse none",
                    stagger: 0.1,
               },
          });

          tl.fromTo(
               ".content h3",
               {
                    maxWidth: "0vw",
                    opacity: 1,
               },
               {
                    duration: 0.4,
                    maxWidth: "20vw",
               }
          );

          tl.fromTo(
               ".about-text-content",
               {
                    x: 100,
                    opacity: 0,
               },
               {
                    x: 0,
                    duration: 0.4,
                    opacity: 1,
               }
          );

          tl.fromTo(
               ".socials li",
               {
                    x: 100,
                    opacity: 0,
               },
               {
                    x: 0,
                    duration: 0.4,
                    opacity: 1,
                    stagger: 0.2,
               }
          );

          gsap.from(".image-about", {
               y: 100,
               opacity: 0,
               duration: 1,
               delay: 0.5,
          });
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
                              <li className="item1">
                                   <FaFacebookF />
                                   <span>facebook</span>
                              </li>
                              <li className="item2">
                                   <FaLinkedinIn />
                                   <span>linkedIn</span>
                              </li>
                              <li className="item3">
                                   <FaGithub />
                                   <span>github</span>
                              </li>
                         </ul>
                    </div>
               </div>
          </div>
     );
}

export default About;
