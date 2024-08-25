import React from "react";
import contact from "../../assets/contact.jpg";
import "../../styling/home/reviews.scss";
import { BiSolidQuoteRight } from "react-icons/bi";

function Reviews() {
     return (
          <div className="review-container" id="reviews">
               <div className="reviews-wrapper">
                    <span className="bg-img">
                         <BiSolidQuoteRight />
                    </span>
                    <div className="reviews-content1">
                         <div>
                              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus iusto eligendi
                              culpa minima fugiat! Ullam.
                         </div>
                    </div>
                    <div className="reviews-content2">
                         <div className="item1">mail@mail.com</div>
                         <img src={contact} alt="img" className="item2" />
                    </div>
               </div>
          </div>
     );
}

export default Reviews;
