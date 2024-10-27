import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styling/home/reviews.scss";

// import medias
import { BiSolidQuoteRight } from "react-icons/bi";
import contact from "../../assets/contact.jpg";
import Lottie from "lottie-react";
import message from "../../assets/lottieSVG/reviewsSVG.json";

// import gsap dependencies
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scrollTriggerAnimWithScrub } from "../../animations/gsapAnimation";

gsap.registerPlugin(ScrollTrigger);

// import hooks
import useFetchReviews from "../../hooks/useFetchReviews";

function Reviews() {
  const main = useRef(null);
  const navigate = useNavigate();

  const { reviews } = useFetchReviews();

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".reviews-cards");

      const oddCards = cards.filter((card, index) => index % 2 !== 0);

      const evenCards = cards.filter((card, index) => index % 2 === 0);

      oddCards.forEach((card) => {
        scrollTriggerAnimWithScrub(
          card,
          {
            xPercent: 100,
            rotate: 15,
          },
          card,
          "75% center",
          "120% center"
        );
      });

      evenCards.forEach((card) => {
        scrollTriggerAnimWithScrub(
          card,
          {
            xPercent: -100,
            rotate: -15,
          },
          card,
          "75% center",
          "120% center"
        );
      });

      scrollTriggerAnimWithScrub(
        ".reviews-bottom-content",
        {
          opacity: 1,
          zIndex: 5,
        },
        ".reviews-bottom-content",
        "80% center",
        "center center"
      );
    },
    { scope: main, revertOnUpdate: true }
  );

  const cards = (text, email, index, classNaming) => {
    return (
      <div className={`reviews-cards ${classNaming}`} key={index}>
        <span className="bg-img">
          <BiSolidQuoteRight />
        </span>

        <div className="reviews-content1">
          <div>{text}</div>
        </div>

        <div className="reviews-content2">
          <div className="item1">{email}</div>
          <img src={contact} alt="img" className="item2" />
        </div>
      </div>
    );
  };

  const handleNavigate = () => {
    navigate("/contact");
  };

  return (
    <div className="review-container" id="reviews">
      <div className="title-review-testimonials">
        <h3>Echoes of Approval &mdash;</h3>
      </div>
      <div className="reviews-wrapper" ref={main}>
        {reviews.length > 0
          ? reviews.map((item, index) => {
              return index <= 5 ? cards(item.comments, item.email, index) : null;
            })
          : [1, 2, 3, 4, 5, 6].map((item, index) => {
              return cards(item.comments, item.email, index, "preload");
            })}

        <div className="reviews-bottom-content">
          <Lottie animationData={message} loop={true} className="lottie-reviews" />
          <div>How about my work?</div>
          <button onClick={handleNavigate}>Leave a message</button>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
