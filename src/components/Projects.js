import React from "react";
import data_projects from "./data/projects_data";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="projects">
      <div className="container">
        <div className="row">
          {data_projects.map((data_project, i) => (
            <ProjectCard project={data_project} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
