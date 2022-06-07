import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import "../scss/pages/projects.scss"

const ProjectCard = ({ project: { name, image, github_url, category } }) => {
  return (
    <div className="col-4">
      <div className="project-card">
        <figure className="project-card__wrapper">
          <div
            className="project-card__link"
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="project-card__link__hover-content">
              <div className="hover-content__descr">
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi quaerat ratione adipisci beatae quidem? Tempora sunt
                </span>
              </div>
              <div className="hover-content__btn_wrapper">
                <a href="" className="hover-content__btn button button-light">
                  Подробнее
                </a>
              </div>
            </div>
          </div>
          <div className="project-card__heading">
            <span className="heading__icon">
              <FontAwesomeIcon icon={faGithub} />
            </span>
            <p className="heading__name">{name}</p>
          </div>
          <div className="tags">
            <span className="tag">C#</span>
            <span className="tag">ASP.NET Core</span>
          </div>
        </figure>
      </div>
    </div>
  )
}
export default ProjectCard
