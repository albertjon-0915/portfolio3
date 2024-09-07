import React from "react";
import "../../styling/home/hero.scss";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function Hero() {
     useGSAP(() => {
          gsap.from(".hero-text", {
               opacity: 0,
               x: 300,
               duration: 1,
               delay: 0.3,
          });

          gsap.to(".dash", {
               rotation: 360,
               repeat: -1,
               repeatDelay: 1.5,
               duration: 1,
               ease: "power2.inOut",
               delay: 4,
          });

          let tl = gsap.timeline({ delay: 4, repeat: -1, repeatDelay: 4.5 });

          tl.to(".letters-portfolio", {
               scale: 1.5,
               y: -5,
               transformOrigin: "bottom center",
               x: 10,
               ease: "elastic",
               duration: 0.3,
          });

          tl.to(".letters-portfolio", {
               scale: 1.5,
               y: 15,
               transformOrigin: "bottom center",
               x: 10,
               ease: "power2.inOut",
               duration: 0.3,
          });

          tl.to(".letters-portfolio", {
               rotation: 90,
               y: 120,
               opacity: 0,
               transformOrigin: "bottom center",
               x: 10,
               duration: 1.5,
               ease: "power2.inOut",
          });

          tl.to(".letters-portfolio", {
               rotation: 0,
               x: 0,
               y: 0,
               scale: 1,
               transformOrigin: "bottom center",
               duration: 1.5,
               ease: "power2.inOut",
          });

          tl.to(".letters-portfolio", {
               opacity: 1,
               transformOrigin: "bottom center",
               duration: 1.5,
               ease: "power2.inOut",
          });
     });

     return (
          <div className="hero-container">
               <div className="hero-wrapper">
                    <div className="hero-text">
                         Transforming Careers <span id="andSign">&</span> Building Web Futures{" "}
                         <span className="dash">-</span> Welcome to My Developer Portfoli
                         <span className="letters-portfolio" id="oSign">
                              o
                         </span>
                    </div>
               </div>
          </div>
     );
}

export default Hero;
