import React, { useEffect, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";

function ProjectContent({ title, subtitle, description, link, stack, index, onEnter }) {
     const [isExpanded, setIsExpanded] = useState(false);

     const expandedDescription = () => {
          setIsExpanded(!isExpanded);
     };

     useEffect(() => {
          const target = document.getElementById("targetedExpand");
          const btn = document.getElementById("btn-toExpand");

          const updateButtonText = () => {
               if (target.classList.contains("expanded")) {
                    btn.innerHTML = "see less";
               } else {
                    btn.innerHTML = "see more";
               }
          };

          updateButtonText();

          const observer = new MutationObserver(updateButtonText);
          observer.observe(target, { attributes: true, attributeFilter: ["class"] });

          return () => observer.disconnect();
     }, []);

     return (
          <div className="item" onMouseEnter={() => onEnter(index)}>
               <div className="project-card">
                    <h3>
                         <span>{title}</span>
                    </h3>
                    <h4>{subtitle}</h4>
                    <p className={isExpanded ? "expanded" : "notexpanded"} id="targetedExpand">
                         {description}
                    </p>
                    <button onClick={expandedDescription} id="btn-toExpand">
                         see more
                    </button>
                    <a href={link}>
                         checkout
                         <span>
                              <GoArrowUpRight />
                         </span>
                    </a>
               </div>
               <div className="progLang-card">
                    <div className="progLang-wrapper">
                         {stack.map((item, index) => (
                              <span key={index} className={`progLang${index}`}>
                                   {item}
                              </span>
                         ))}
                    </div>
               </div>
          </div>
     );
}

export default ProjectContent;
