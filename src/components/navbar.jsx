import React, { useEffect } from "react";
import "../styling/navbar.scss";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
     const navigate = useNavigate();

     const scrollToTop = () => {
          window.scrollTo({
               top: 0,
               behavior: "smooth",
          });
     };

     const goToHome = () => {
          scrollToTop();
          navigate("/");
     };

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
               <div className="logo-wrapper" onClick={goToHome}>
                    <img src={logo} alt="logo" />
                    <h1>albert</h1>
               </div>
               <div className="navlinks-wrapper">
                    <ul>
                         <li className="item0">
                              <Link to={"/"} onClick={scrollToTop}>
                                   Home
                              </Link>
                         </li>
                         <li className="item1">
                              <Link to={"/contact"}>About</Link>
                         </li>
                         <li className="item2">
                              <Link to={"/contact"}>Contact</Link>
                         </li>
                         <li className="item3">
                              <Link to={"/contact"}>Projects</Link>
                         </li>
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
