import React, { useEffect, useRef } from "react";
import "../../styling/home/skills.scss";
import { FaNodeJs, FaAws, FaBootstrap, FaCss3Alt, FaHtml5, FaReact, FaChrome } from "react-icons/fa";
import { SiPostman, SiGit, SiGithub, SiJavascript, SiSass, SiMongodb } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { useGSAP } from "@gsap/react";
import { scrollTriggerAnimWithScrubPin } from "../../animations/gsapAnimation";
import { MdOpacity } from "react-icons/md";

function Skills() {
  const divsRef = useRef([]);

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
    <FaNodeJs className="icon" />,
    <FaAws className="icon" />,
    <FaBootstrap className="icon" />,
    <FaCss3Alt className="icon" />,
    <FaHtml5 className="icon" />,
    <VscVscode className="icon" />,
    <FaReact className="icon" />,
    <FaChrome className="icon" />,
    <SiPostman className="icon" />,
    <SiGit className="icon" />,
    <SiGithub className="icon" />,
    <SiJavascript className="icon" />,
    <SiSass className="icon" />,
    <SiMongodb className="icon" />,
  ];

  useGSAP(() => {
    scrollTriggerAnimWithScrubPin(
      ".skills-container",
      {
        scale: 1.1,
      },
      "#bg-text",
      "20% center",
      "80% center"
    );

    //     scrollTriggerAnimWithScrubPin(
    //       ".skills-content1",
    //       {
    //         yPercent: 30,
    //       },
    //       ".skills-container",
    //       "center center",
    //       "bottom center"
    //     );

    //     divsRef.current.map((item, index) => {
    //       console.log(item);
    //       scrollTriggerAnimWithScrubPin(
    //         item,
    //         {
    //           x: 30,
    //         },
    //         ".skills-container",
    //         "center center",
    //         "bottom center"
    //       );
    //     });
  });

  return (
    <div className="skills-container" id="skills">
      <h2 id="bg-text">Skills</h2>
      <div className="skills-wrapper">
        <div className="skills-content1">
          <div ref={(el) => (divsRef.current[0] = el)}>
            {skillsImg.map((item, index) => (index <= 4 ? <span className="item">{item}</span> : null))}
          </div>
          <div ref={(el) => (divsRef.current[1] = el)}>
            {skillsImg.map((item, index) => (index > 4 && index <= 9 ? <span className="item">{item}</span> : null))}
          </div>
          <div ref={(el) => (divsRef.current[2] = el)}>
            {skillsImg.map((item, index) => (index > 9 && index <= 14 ? <span className="item">{item}</span> : null))}
          </div>
        </div>
        <div className="skills-content2">
          <div className="skillset">
            {/* {skills.map((item, index) => (
              <span className={`item${index}`}>{item}</span>
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
