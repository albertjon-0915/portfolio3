import React, { useEffect, useRef, useState } from "react";
import contact from "../../assets/contact.jpg";
import "../../styling/home/reviews.scss";
import { BiSolidQuoteRight } from "react-icons/bi";
import Lottie from "lottie-react";

import message from "../../assets/lottieSVG/reviewsSVG.json";
import { scrollTriggerAnimWithScrub } from "../../animations/gsapAnimation";

// import gsap dependencies
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Reviews() {
     const main = useRef(null);
     const [reviews, setReview] = useState([]);

     const fetchData = async () => {
          const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/reviews`);

          const data = await response.json();

          console.log(data);

          setReview([...data.result]);
          console.log(reviews);
     };

     useEffect(() => {
          fetchData();
     }, []);

     useGSAP(
          () => {
               console.log("useGSAP");
               const cards = gsap.utils.toArray(".reviews-cards");

               const oddCards = cards.filter((card, index) => index % 2 !== 0);

               const evenCards = cards.filter((card, index) => index % 2 === 0);

               console.log(oddCards, evenCards);

               oddCards.forEach((card) => {
                    scrollTriggerAnimWithScrub(
                         card,
                         {
                              xPercent: 100,
                              rotate: 15,
                         },
                         card,
                         "75% center",
                         "80% center"
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
                         "80% center"
                    );
               });

               scrollTriggerAnimWithScrub(
                    ".reviews-bottom-content",
                    {
                         opacity: 1,
                         zIndex: 5,
                    },
                    ".reviews-bottom-content",
                    "center center",
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

     return (
          <div className="review-container" id="reviews">
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
                         <button>Leave a message</button>
                    </div>
               </div>
          </div>
     );
}

export default Reviews;
