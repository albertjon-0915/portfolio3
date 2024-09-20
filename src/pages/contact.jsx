import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import "../styling/contact.scss";
import Lottie from "lottie-react";
import letsTalk from "../assets/lottieSVG/contactSVG.json";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function Contact() {
  const { pathname } = useLocation();
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [comment, setComment] = useState("");

  console.log(email, mobile, comment);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    fetch(`${import.meta.env.VITE_APP_API_URL}/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        mobileNo: mobile,
        comments: comment,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);

        if (result.message !== "Successfully created a comment") {
          console.log("error here");
          toast.error(result.message || result.err || result.error);
        } else {
          toast.success(result.message);
          setEmail("");
          setMobile("");
          setComment("");
        }
      });
  };

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
                <input name="email" id="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
              </label>
            </div>
            <div className="label-enclosure">
              <label for="mobile">
                Mobile Number
                <input
                  name="mobile"
                  id="mobile"
                  type="text"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </label>
            </div>
            <div className="label-enclosure">
              <label for="comment">
                Leave a message
                <textarea name="comment" id="comment" value={comment} onChange={(e) => setComment(e.target.value)} />
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
