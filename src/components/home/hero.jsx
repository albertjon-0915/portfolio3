import React from "react";
import "../../styling/home/hero.scss";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function Hero() {
     useGSAP(() => {
          gsap.from(".box", {
               opacity: 0,
               x: 300,
               duration: 1,
               delay: .3,
          });
     });

     return (
          <div className="hero-container">
               <div className="hero-wrapper">
                    <div className="box">
                         Transforming Careers <span id="andSign">&</span> Building Web Futures - Welcome to My Developer
                         Portfoli
                         <span id="oSign">o</span>
                    </div>
               </div>
          </div>
     );
}

export default Hero;
