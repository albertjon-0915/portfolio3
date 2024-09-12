import React, { useEffect, useState, useRef } from "react";
import "../styling/project/project2.scss";
import ProjectContent from "../components/project/projectContent";

function Project() {
     const [projects, setProjects] = useState([]);
     const [currentIndex, setCurrentIndex] = useState(0);

     const fetchData = async () => {
          const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/stack`);
          const data = await response.json();

          if (data) {
               setProjects([
                    ...data.result.projects.fullstack,
                    ...data.result.projects.frontend,
                    ...data.result.projects.backend,
               ]);
          }
     };

     useEffect(() => {
          fetchData();
     }, []);

     return (
          <div className="project-container">
               <div className="project-wrapper">
                    <div className="project-content1">
                         {/* <img src={projects[currentIndex]?.imageString} alt="project" /> */}
                    </div>
                    <div className="project-content2">
                         <h3>What I've Brought to Life &mdash;</h3>
                         <h4>Projects</h4>
                         {/* {projects.map((item, index) => (
                              <ProjectContent
                                   key={index}
                                   title={item.title}
                                   subtitle={item.subtitle}
                                   description={item.description}
                                   link={item.link}
                                   stack={item.stack}
                                   index={index}
                                   onEnter={(index) => setCurrentIndex(index)}
                                   ref={(el) => (itemRefs.current[index] = el)}
                              />
                         ))} */}
                    </div>
               </div>
          </div>
     );
}

export default Project;
