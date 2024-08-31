import React from "react";
import "../../styling/home/about.scss";
import coding from "../../assets/coding.png";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { TranslateY, ScrollAnimFrom } from "../../animations/gsapAnimation";
import { useGSAP } from "@gsap/react";

function About() {
     useGSAP(() => {
          const contentHeader = document.querySelector(".content > h3");
          const contentText = document.querySelector(".about-text-content");
          const socials = document.querySelector(".socials > ul");
          const socialsChildren = [...socials.children];

          TranslateY(".image-about");
          ScrollAnimFrom(contentText, "95%", { x: 100, duration: 0.5, opacity: 0, delay: 0.2 });
          ScrollAnimFrom(contentHeader, "95%", { maxWidth: 0, duration: 0.5, opacity: 0, delay: 0.2 });
          ScrollAnimFrom(socialsChildren, "95%", { x: 100, duration: 0.5, opacity: 0, delay: 0.2, stagger: 0.2 });
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
