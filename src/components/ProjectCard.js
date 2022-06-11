import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"
import React from "react"
import { Link } from "react-router-dom"

const transition = { duration: 0.7, ease: "easeInOut" }

const projectCardVariants = {
  initial: { x: "30%", opacity: 0 },
  enter: { x: 0, opacity: 1, transition },
  exit: { x: "-30%", opacity: 0, transition },
}

const ProjectCard = ({ project }) => {
  return (
    <motion.div className="col-4" variants={projectCardVariants}>
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
                <Link
                  to={`/${project.id}`}
                  className="hover-content__btn button button-light"
                >
                  Подробнее
                </Link>
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
    </motion.div>
  )
}
export default ProjectCard
