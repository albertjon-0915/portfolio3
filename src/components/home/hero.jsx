import React from "react";
import "../../styling/home/hero.scss";
import { SiCalendly } from "react-icons/si";

// import GSAP dependencies
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function Hero() {
     useGSAP(() => {
          gsap.from(".staggered-span", {
               opacity: 0,
               x: 300,
               duration: 1,
               delay: 0.3,
               stagger: 0.1,
          });

          gsap.to(".dash", {
               rotation: 360,
               repeat: -1,
               repeatDelay: 4.5,
               duration: 1,
               ease: "power2.inOut",
               delay: 5,
          });

          gsap.from("#rotate-bg", {
               opacity: 0,
               duration: 2,
               ease: "power3.inOut",
               delay: 3,
          });
     });

     return (
          <div className="hero-container">
               <div className="hero-wrapper">
                    <div className="hero-text">
                         <span className="staggered-span">
                              Transforming Careers <span id="andSign">&</span> Building{" "}
                         </span>
                         <span className="staggered-span">
                              Web Futures <span className="dash">-</span> Welcome{" "}
                         </span>
                         <span className="staggered-span">
                              to My Developer Portfoli
                              <span className="letters-portfolio" id="oSign">
                                   o<span id="rotate-bg"></span>
                              </span>
                         </span>
                    </div>
               </div>
          </div>
     );
}

export default Hero;
