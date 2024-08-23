import React, { useEffect } from "react";
import "../styling/navbar.scss";
import logo from "../assets/logo.png";

function Navbar() {
     const scrollFunc = () => {
          const navContainer = document.querySelector(".nav-container");

          window.addEventListener("scroll", (e) => {
               let scrollHeight = window.scrollY;

               scrollHeight >= 1 ? navContainer.classList.add("blurry") : navContainer.classList.remove("blurry");
          });
     };
     useEffect(() => {
          scrollFunc();
     }, []);

     return (
          <div className="nav-container">
               <div className="logo-wrapper">
                    <img src={logo} alt="logo" width={"50px"} />
                    <h1>albert</h1>
               </div>
               <div className="navlinks-wrapper">
                    <ul>
                         <li className="item1">About</li>
                         <li className="item2">Contact</li>
                         <li className="item3">Projects</li>
                         <li className="item4">
                              <a href="src/assets/Albert Jon Inciong.pdf" download="Albert Jon Inciong.pdf">
                                   Resume
                              </a>
                         </li>
                    </ul>
               </div>
          </div>
     );
}

export default Navbar;
