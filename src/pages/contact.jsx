import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../styling/contact.scss";
import Lottie from "lottie-react";
import letsTalk from "../assets/lottieSVG/contactSVG.json";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function Contact() {
     const { pathname } = useLocation();

     useEffect(() => {
          window.scrollTo(0, 0);
     }, [pathname]);

     useGSAP(() => {
          gsap.from(["label", ".contact-form > button"], {
               stagger: 0.2,
               opacity: 0,
               y: 100,
          });

          gsap.from(".contact-content1 > h3", {
               x: 100,
               opacity: 0,
               duration: 1,
          });
     });

     return (
          <div className="contact-container">
               <div className="contact-wrapper">
                    <div className="contact-content1">
                         <h3>Contact</h3>
                         <form action="" className="contact-form">
                              <div className="label-enclosure">
                                   <label for="email">
                                        Email
                                        <input name="email" id="email" type="text" />
                                   </label>
                              </div>
                              <div className="label-enclosure">
                                   <label for="mobile">
                                        Mobile Number
                                        <input name="mobile" id="mobile" type="text" />
                                   </label>
                              </div>
                              <div className="label-enclosure">
                                   <label for="comment">
                                        Leave a message
                                        <textarea name="comment" id="comment" />
                                   </label>
                              </div>

                              <button>Submit</button>
                         </form>
                    </div>
                    <div className="contact-content2">
                         <Lottie animationData={letsTalk} loop={true} className="lottie" />
                    </div>
               </div>
          </div>
     );
}

export default Contact;
