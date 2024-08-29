import React from "react";
import "../styling/contact.scss";
import Lottie from "lottie-react";
import letsTalk from "../assets/lottieSVG/lottieSVG.json";

function Contact() {
     return (
          <div className="contact-container">
               <div className="contact-wrapper">
                    <div className="contact-content1">
                         <h3>Contact</h3>
                         <form action="" className="contact-form">
                              <label for="email">Email</label>
                              <input name="email" id="email" type="text" />
                              <label for="mobile">Mobile Number</label>
                              <input name="mobile" id="mobile" type="text" />
                              <label for="comment">Leave a message</label>
                              <textarea name="comment" id="comment"/>
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
