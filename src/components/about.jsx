import React from "react";
import "../styling/home/about.scss";
import coding from "../assets/coding.png";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

function About() {
     return (
          <div className="about-container">
               <div className="about-wrapper">
                    <img src={coding} alt="img" />

                    <div className="about-title">
                         <div className="title-focal">Want to know more about me &mdash; here's some brief info</div>
                    </div>

                    <div className="content">
                         <h3>About</h3>
                         <p className="about-text-content">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, cumque maxime. Dicta
                              dolore, fugiat labore eveniet perspiciatis nam deleniti animi placeat modi omnis dolores
                              quia repellat quam ipsa doloremque aliquam ab. Quisquam, temporibus dolore voluptate ipsa
                              iusto tempore ratione fugit, cupiditate aliquam quidem odit mollitia similique eius
                              impedit autem maiores?
                         </p>
                    </div>

                    <div className="socials">
                         <ul>
                              <li className="item1">
                                   <FaFacebookF />
                                   <span>facebook</span>
                              </li>
                              <li className="item2">
                                   <FaLinkedinIn />
                                   <span>linkedIn</span>
                              </li>
                              <li className="item3">
                                   <FaGithub />
                                   <span>github</span>
                              </li>
                         </ul>
                    </div>
               </div>
          </div>
     );
}

export default About;
