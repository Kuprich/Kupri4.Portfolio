import { motion } from "framer-motion"
import React from "react"
import { Link, useParams } from "react-router-dom"
import data_projects from "../components/data/projects_data"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleLeft, faCircleRight } from "@fortawesome/free-solid-svg-icons"
import ReactImageGallery from "react-image-gallery"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

const transition = { duration: 0.7, ease: "easeInOut" }

const projectVariants = {
  initial: {
    x: "20vw",
    opacity: 0,
  },
  enter: { x: 0, opacity: 1, transition },
  exit: { x: "20vw", opacity: 0, transition },
}

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
]

const Project = () => {
  const projectId = useParams().id

  const project = data_projects.find((x) => x.id == projectId)
  const projectsCout = data_projects.length

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

            <Link
              to="/projects"
              className="project-details__back-link project__nav-link"
            >
              <i>
                <FontAwesomeIcon icon={faCircleRight} />
              </i>
              <span>К проектам</span>
            </Link>
          </div>
        </div>

        <div className="row">
          <div className="project-details__gallery">
            {project.images && <ReactImageGallery items={project.images} />}
          </div>
        </div>
        <div className="row">
          <div className="project-details__desrc">
            Далеко-далеко за словесными, горами в стране гласных и согласных
            живут рыбные тексты. Одна своих языкового, переулка строчка наш
            текстами реторический себя? Ее, продолжил мир? Города вопрос они
            текстов от всех жизни всемогущая первую.
            <p>
              Используемые технологии: технология 1, технология 2, технология 3
            </p>
          </div>
        </div>
        <a href={project.github_url} target="_blank">
          <i>
            <FontAwesomeIcon icon={faGithub} />
            Страница проекта на GitHub
          </i>
        </a>
        <div className="row">
          <div className="project-details__bottom-nav">
            {project.id - 1 <= 0 ? (
              <div></div>
            ) : (
              <Link
                aria-disabled
                to={`/${project.id - 1}`}
                className="bottom-nav__prev project__nav-link"
              >
                <i>
                  <FontAwesomeIcon icon={faCircleLeft} />
                </i>
                <span>Предыдущий</span>
              </Link>
            )}

            {project.id + 1 < projectsCout && (
              <Link
                to={`/${project.id + 1}`}
                className="bottom-nav__next project__nav-link"
              >
                <i>
                  <FontAwesomeIcon icon={faCircleRight} />
                </i>

                <span>Следующий</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Project
