import React from "react";
import "../../styling/home/services.scss";
import Me from "../../assets/me.jpg";
import { useGSAP } from "@gsap/react";
import { ScrollAnimFrom, ScrollAnimTo } from "../../animations/gsapAnimation";

function Services() {
     useGSAP(() => {
          ScrollAnimFrom(".animImg", "45%", { width: "0", duration: 0.6, yoyo: true, repeat: 1, delay: 0.2 });

          ScrollAnimFrom(".img-content2", "45%", { opacity: "0", duration: 0.7, delay: 0.8 });
     });

     return (
          <div className="services-container" id="service">
               <div className="services-wrapper">
                    <div className="content1">
                         <div className="text-content">
                              <h2>What can I offer &mdash;</h2>
                              <p className="item1">
                                   As a front-end developer, I create engaging and user-friendly interfaces, ensuring
                                   websites look great and function smoothly across all devices.
                              </p>
                              <p className="item2">
                                   In the back-end role, I build and maintain the server-side of applications, focusing
                                   on reliability, security, and efficiency.
                              </p>
                              <p className="item3">
                                   As a full-stack developer, I deliver comprehensive web solutions, managing both
                                   front-end and back-end aspects for a seamless user experience.
                              </p>
                         </div>
                    </div>
                    <div className="content2">
                         <img src={Me} alt="img" className="img-content2" />
                         <span className="animImg"></span>
                    </div>
               </div>
          </div>
     );
}

export default Services;
