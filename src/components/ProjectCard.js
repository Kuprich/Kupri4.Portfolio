import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import "../scss/pages/projects.scss"

const ProjectCard = ({ setShowModal, setSelectedProjectId, project }) => {
  return (
    <div className="col-4">
      <div className="project-card">
        <figure className="project-card__wrapper">
          <div
            className="project-card__img"
            style={{ backgroundImage: `url(${project.thumbnail})` }}
          >
            <div className="project-card__img__hover-content">
              <div className="hover-content__descr">
                <span>{project.descr}</span>
              </div>
              <div className="hover-content__btn_wrapper">
                <button
                  className="hover-content__btn button button-light"
                  onClick={() => {
                    setSelectedProjectId(project.id)
                    console.log(project.id)
                  }}
                >
                  Подробнее
                </button>
              </div>
            </div>
          </div>
          <a
            href={project.github_url}
            target="_blank"
            className="project-card__gihhub-link"
          >
            <span className="gihhub-link__icon">
              <FontAwesomeIcon icon={faGithub} />
            </span>
            <p className="gihhub-link__name">{project.name}</p>
          </a>
          <div className="tags">
            {project.tags.map((tag) => (
              <span className="tag">{tag}</span>
            ))}
          </div>
        </figure>
      </div>
    </div>
  )
}
export default ProjectCard
