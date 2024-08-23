import React, { useEffect } from "react";
import "../styling/home/skills.scss";
import { FaNodeJs, FaAws, FaBootstrap, FaCss3Alt, FaHtml5, FaReact, FaChrome } from "react-icons/fa";
import { SiPostman, SiGit, SiGithub, SiJavascript, SiSass, SiMongodb } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

function Skills() {
     const skills = [
          "HTML",
          "CSS",
          "Boostrap",
          "SASS",
          "JavaScript",
          "ExpressJS",
          "NodeJS",
          "ReactJS",
          "Git",
          "Github",
          "Postman",
          "MongoDB",
          "ChromeDevTools",
          "AWS",
     ];

     const skillsImg = [
          <FaNodeJs />,
          <FaAws />,
          <FaBootstrap />,
          <FaCss3Alt />,
          <FaHtml5 />,
          <VscVscode />,
          <FaReact />,
          <FaChrome />,
          <SiPostman />,
          <SiGit />,
          <SiGithub />,
          <SiJavascript />,
          <SiSass />,
          <SiMongodb />,
     ];

     return (
          <div className="skills-container" id="skills">
               <div className="skills-wrapper">
                    <div className="skills-content1">
                         {skillsImg.map((item, index) => (
                              <span className={`item${index}`}>{item}</span>
                         ))}
                    </div>
                    <div className="skills-content2">
                         <h2>Skills</h2>
                         <div className="skillset">
                              {skills.map((item, index) => (
                                   <span className={`item${index}`}>{item}</span>
                              ))}
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default Skills;
