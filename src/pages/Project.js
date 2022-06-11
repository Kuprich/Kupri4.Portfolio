import { motion } from "framer-motion"
import React from "react"
import { Carousel } from "react-responsive-carousel"
import { Link, useParams } from "react-router-dom"
import data_projects from "../components/data/projects_data"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleRight, faRightLong } from "@fortawesome/free-solid-svg-icons"

const transition = { duration: 0.7, ease: "easeInOut" }

const projectVariants = {
  initial: {
    x: "20vw",
    opacity: 0,
    transitionEnd: {
      x: 0,
      transform: "none",
    },
  },
  enter: { x: 0, opacity: 1, transition },
  exit: { x: "20vw", opacity: 0, transition },
}

const Project = () => {
  const projectId = useParams().id

  const project = data_projects.find((x) => x.id == projectId)

  return (
    <motion.div
      className="project-details"
      initial="initial"
      animate="enter"
      exit="exit"
      variants={projectVariants}
    >
      <div className="container">
        <div className="row">
          <div className="project-details__heading">
            <h3>Проект {project.name}</h3>

            <Link to="/projects" className="project-details__back-link">
              <i>
                <FontAwesomeIcon icon={faCircleRight} />
              </i>
              <span> К проектам</span>
            </Link>
          </div>
        </div>

        <div className="row">
          {project.images && (
            <div>
              <Carousel>
                {project.images.map((image, i) => (
                  <div key={i}>
                    <img src={image} />
                    <p className="legend">Legend 1</p>
                  </div>
                ))}
              </Carousel>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default Project
