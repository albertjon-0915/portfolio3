import React from "react";
import "../styling/home/footer.scss";
import logo from "../assets/logo.png";

function Footer() {
     return (
          <div className="footer-container">
               <div className="footer-wrapper">
                    <div className="footer-content1">
                         <div1 className="item1">
                              <div className="logo-footer">
                                   <img src={logo} alt="logo" />
                                   <h1>albert</h1>
                              </div>
                         </div1>
                         <div2 className="item2">
                              <h3>Useful Links</h3>
                              <span>
                                   <a href="" className="page-links1">
                                        Home
                                   </a>
                              </span>
                              <span>
                                   <a href="" className="page-links2">
                                        Projects
                                   </a>
                              </span>
                              <span>
                                   <a href="" className="page-links3">
                                        Contact
                                   </a>
                              </span>
                              <span>
                                   <a
                                        href="src/assets/Albert Jon Inciong.pdf"
                                        download="Albert Jon Inciong.pdf"
                                        className="page-links4"
                                   >
                                        Resume
                                   </a>
                              </span>
                              <span>
                                   <a href="#about" className="page-links4">
                                        About
                                   </a>
                              </span>
                              <span>
                                   <a href="#service" className="page-links4">
                                        Services
                                   </a>
                              </span>
                              <span>
                                   <a href="#skills" className="page-links4">
                                        Skills
                                   </a>
                              </span>
                              <span>
                                   <a href="#reviews" className="page-links4">
                                        Review
                                   </a>
                              </span>
                         </div2>
                         <div3 className="item3">
                              <h3>Get in touch?</h3>
                              <span className="socials-item1">albert.jon.inciong.0915@gmail.com</span>
                              <span className="socials-item2">09154018912</span>
                              <span className="socials-item3">
                                   <a href="">facebook</a>
                              </span>
                              <span className="socials-item4">
                                   <a href="">linkedIn</a>
                              </span>
                              <span className="socials-item4">
                                   <a href="">github</a>
                              </span>
                         </div3>
                    </div>
                    <div className="copyright-content2">
                         <span className="item1">Albert Inciong</span>
                         <span className="item2">&copy; 2024</span>
                         <span className="item3">powered by Vite &mdash; React</span>
                    </div>
               </div>
          </div>
     );
}

export default Footer;
