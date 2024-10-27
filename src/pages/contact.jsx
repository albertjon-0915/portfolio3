import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "../styling/contact.scss";
import Lottie from "lottie-react";
import letsTalk from "../assets/lottieSVG/contactSVG.json";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function Contact() {
  const [information, setInformation] = useState({
    email: "",
    mobileNo: "",
    comments: "",
  });

  const handleSetInput = (e) => {
    const { name, value } = e.target;

    setInformation({
      ...information,
      [name]: value,
    });
  };

  const resetInput = () => {
    setInformation({
      email: "",
      mobileNo: "",
      comments: "",
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const dataToThrow = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...information }),
    };

    const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/reviews`, { ...dataToThrow });

    const result = await response.json();

    if (result) {
      result.message !== "Successfully created a comment"
        ? toast.error(result.message || result.err || result.error)
        : toast.success(result.message) && resetInput();
    }
  };

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

    gsap.from(".lottie", {
      opacity: 0,
      duration: 1,
    });
  });

  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        <div className="contact-content1">
          <h3>Contact</h3>
          <form action="" className="contact-form" onSubmit={handleOnSubmit}>
            <div className="label-enclosure">
              <label for="email">
                Email
                <input name="email" id="email" type="email" onChange={handleSetInput} value={information.email} />
              </label>
            </div>

            <div className="label-enclosure">
              <label for="mobileNo">
                Mobile Number
                <input
                  name="mobileNo"
                  id="mobile"
                  type="number"
                  onChange={handleSetInput}
                  value={information.mobileNo}
                />
              </label>
            </div>

            <div className="label-enclosure">
              <label for="comments">
                Leave a message
                <textarea name="comments" id="comment" onChange={handleSetInput} value={information.comments} />
              </label>
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="contact-content2">
          <Lottie animationData={letsTalk} loop={true} className="lottie" />
        </div>
      </div>

      <Toaster position="bottom-right" reverseOrder={false} toastOptions={{ className: "popupToast" }} />
    </div>
  );
}

export default Contact;
