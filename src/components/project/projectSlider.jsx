import React from "react";

function ProjectSlider({ projectItems }) {
  const projectImages = (items, classes) => {
    return (
      <div className="images-panel" id={classes}>
        {items.length > 0
          ? items.map((item, index) => <img src={item.imageString} alt="img" key={index} className="image-card" />)
          : [1, 2, 3, 4, 5].map((item, index) => (
              <div className="image-preloader" key={index}>
                <IoIosImages className="image-icon" />
              </div>
            ))}
      </div>
    );
  };

  return (
    <div className="project-slider">
      {projectImages(projectItems, "images-panel1")}
      {projectImages(projectItems.reverse(), "images-panel2")}
    </div>
  );
}

export default ProjectSlider;
