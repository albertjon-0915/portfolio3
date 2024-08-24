import React from "react";
import "../styling/project/project.scss";
import CAP3 from "../assets/mockups/CAP1.jpeg";

function Project() {
     const projDescription = {
          title: "Something",
          subtitle: "Stack",
          description:
               "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, tenetur nesciunt quibusdam expedita itaque necessitatibus libero aut deserunt saepe provident.",
          link: "https://react-bootstrap.netlify.app/docs/components/tabs",
          imageString: "https://th.bing.com/th/id/OIP.XsikQYohmWwl3WTFvb2r8wHaD3?rs=1&pid=ImgDetMain",
     };

     const progLanguage = [
          "HTML",
          "CSS",
          "Bootstrap",
          "SASS",
          "JavaScript",
          "ExpressJS",
          "Mongoose",
          "NodeJS",
          "ReactJS",
          "Git",
     ];

     return (
          <div className="project-container">
               <div className="project-wrapper">
                    <div className="project-content1">
                         <img src={CAP3} alt="" />
                    </div>
                    <div className="project-content2">
                         <h3>Projects</h3>
                         <div className="item">
                              <div className="project-card">
                                   <h3>
                                        <span>{projDescription.title}</span>
                                   </h3>
                                   <h4>{projDescription.subtitle}</h4>
                                   <p>{projDescription.description}</p>
                                   <a href={projDescription.link}>checkoutcheckout</a>
                              </div>
                              <div className="progLang-card">
                                   {progLanguage.map((item, index) => {
                                        return <span className={`progLang${index}`}>{item}</span>;
                                   })}
                              </div>
                         </div>
                         <div className="item">
                              <div className="project-card">
                                   <h3>
                                        <span>{projDescription.title}</span>
                                   </h3>
                                   <h4>{projDescription.subtitle}</h4>
                                   <p>{projDescription.description}</p>
                                   <a href={projDescription.link}>checkout</a>
                              </div>
                              <div className="progLang-card">
                                   {progLanguage.map((item, index) => {
                                        return <span className={`progLang${index}`}>{item}</span>;
                                   })}
                              </div>
                         </div>
                         <div className="item">
                              <div className="project-card">
                                   <h3>
                                        <span>{projDescription.title}</span>
                                   </h3>
                                   <h4>{projDescription.subtitle}</h4>
                                   <p>{projDescription.description}</p>
                                   <a href={projDescription.link}>checkout</a>
                              </div>
                              <div className="progLang-card">
                                   {progLanguage.map((item, index) => {
                                        return <span className={`progLang${index}`}>{item}</span>;
                                   })}
                              </div>
                         </div>
                         <div className="item">
                              <div className="project-card">
                                   <h3>
                                        <span>{projDescription.title}</span>
                                   </h3>
                                   <h4>{projDescription.subtitle}</h4>
                                   <p>{projDescription.description}</p>
                                   <a href={projDescription.link}>checkout</a>
                              </div>
                              <div className="progLang-card">
                                   {progLanguage.map((item, index) => {
                                        return <span className={`progLang${index}`}>{item}</span>;
                                   })}
                              </div>
                         </div>
                         <div className="item">
                              <div className="project-card">
                                   <h3>
                                        <span>{projDescription.title}</span>
                                   </h3>
                                   <h4>{projDescription.subtitle}</h4>
                                   <p>{projDescription.description}</p>
                                   <a href={projDescription.link}>checkout</a>
                              </div>
                              <div className="progLang-card">
                                   {progLanguage.map((item, index) => {
                                        return <span className={`progLang${index}`}>{item}</span>;
                                   })}
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default Project;
