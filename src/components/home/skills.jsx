import React, { useEffect, useRef } from "react";
import "../../styling/home/skills.scss";
import { FaNodeJs, FaAws, FaBootstrap, FaCss3Alt, FaHtml5, FaReact, FaChrome } from "react-icons/fa";
import { SiPostman, SiGit, SiGithub, SiJavascript, SiSass, SiMongodb } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { useGSAP } from "@gsap/react";
import { scrollTriggerAnimWithScrub, scrollTriggerAnimWithScrubPin } from "../../animations/gsapAnimation";
import { MdOpacity } from "react-icons/md";

import gsap from "gsap";

function Skills() {
  const skillsImagesRef = useRef([]);
  const spanTextRef = useRef([]);

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
        filter: "blur(8px)",
        opacity: 0.6,
      },
      "#bg-text",
      "20% center",
      "75% center"
    );

    const skillsImages = gsap.utils.toArray(skillsImagesRef.current);

    skillsImages.forEach((item, index) => {
      console.log(item);
      scrollTriggerAnimWithScrub(
        item,
        {
          yPercent: index !== 1 ? 30 : -30,
          opacity: 0,
        },
        ".skills-content1",
        "60% center",
        "110% center"
      );
    });

    const spanTexts = gsap.utils.toArray(spanTextRef.current);

    spanTexts.forEach((item, index) => {
      gsap.set(item, { opacity: 0, scale: 0.8, y: 40 });
    });

    scrollTriggerAnimWithScrub(
      spanTexts,
      {
        opacity: 1,
        scale: 1,
        y: 0,
        stagger: 0.2,
      },
      ".skillset",
      "-40% center",
      "center center"
    );
  });

  return (
    <div className="skills-container" id="skills">
      <div id="bg-text">
        <h2>Skills</h2>
      </div>
      <div className="skills-wrapper">
        <div className="skills-content1">
          <div ref={(el) => (skillsImagesRef.current[0] = el)}>
            {skillsImg.map((item, index) => (index <= 4 ? <span className="item">{item}</span> : null))}
          </div>
          <div ref={(el) => (skillsImagesRef.current[1] = el)}>
            {skillsImg.map((item, index) => (index > 4 && index <= 9 ? <span className="item">{item}</span> : null))}
          </div>
          <div ref={(el) => (skillsImagesRef.current[2] = el)}>
            {skillsImg.map((item, index) => (index > 9 && index <= 14 ? <span className="item">{item}</span> : null))}
          </div>
        </div>
        <div className="skills-content2">
          <div className="skillset">
            {skills.map((item, index) => (
              <span className="spanText" ref={(el) => (spanTextRef.current[index] = el)}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
