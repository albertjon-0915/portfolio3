import React, { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";

function ProjectContent({ title, subtitle, description, link, stack, index, onEnter }) {
     const [isExpanded, setIsExpanded] = useState(false);

     const expandedDescription = () => {
          setIsExpanded(!isExpanded);
     };

     return (
          <div className="item" onMouseEnter={() => onEnter(index)}>
               <div className="project-card">
                    <h3>
                         <span>{title}</span>
                    </h3>
                    <h4>{subtitle}</h4>
                    <p className={isExpanded ? "expanded" : "notexpanded"}>{description}</p>
                    <button onClick={expandedDescription}>see more</button>
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
