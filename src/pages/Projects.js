import React from "react"
import { motion } from "framer-motion"
import data_projects from "../components/data/projects_data"
import ProjectCard from "../components/ProjectCard"

const Projects = () => {
  const projectsVariants = {
    enter: { transition: { staggerChildren: 0.2 } },
    exit: {
      transform: {
        x: "-20vw",
      },
      transitionEnd: {
        x: 0,
        transform: "none",
      },
    },
  }

  return (
    <div className="container">
      <motion.div
        className="row projects"
        initial="initial"
        animate="enter"
        exit="exit"
        variants={projectsVariants}
      >
        {data_projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </motion.div>
    </div>
  )
}

export default Projects
