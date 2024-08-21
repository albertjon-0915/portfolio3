import React from "react";
import "../styling/navbar.scss";
import logo from "../assets/logo.png";

function Navbar() {
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
                         <li className="item4">Resume</li>
                    </ul>
               </div>
          </div>
     );
}

export default Navbar;
