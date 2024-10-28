import React, { useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

// import styling & media
import "../styling/navbar.scss";
import logo from "../assets/logo.png";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  // independent scroll to top for logo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  //   logo click action
  const goToHome = () => {
    scrollToTop();
    navigate("/");
  };

  // Scroll action
  useEffect(() => {
    const navContainer = document.querySelector(".nav-container");

    const scrollFunc = () => {
      window.addEventListener("scroll", (e) => {
        let scrollHeight = window.scrollY;

        scrollHeight >= 1 ? navContainer.classList.add("blurry") : navContainer.classList.remove("blurry");
      });
    };

    scrollFunc();

    // unmount scrollFunc
    return () => {
      window.removeEventListener("scroll", scrollFunc);
    };
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
            <Link to={"/"} onClick={pathname === "/" ? scrollToTop : null}>
              Home
            </Link>
          </li>
          <li className="item2">
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li className="item3">
            <Link to={"/project"}>Projects</Link>
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
