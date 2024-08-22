import React from "react";
import "../styling/home/services.scss";
import Me from "../assets/me.jpg";

function Services() {
     return (
          <div className="services-container">
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
                         <img src={Me} alt="img" />
                    </div>
               </div>
          </div>
     );
}

export default Services;
