import React from "react";
import github from "../assets/icons/github.svg";

const ProjectCard = ({ project: { name, image, github_url, category } }) => {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="project-card">
        <figure className="project-card__wrapper">
          <a href={github_url} target="_blank">
            <img src={image} alt="" className="project-card__image" />
          </a>
          <div className="project-card__title">
            <img src={github} alt="github" />
            <p>{name}</p>
          </div>
        </figure>
      </div>
    </div>
  );
};
export default ProjectCard;
