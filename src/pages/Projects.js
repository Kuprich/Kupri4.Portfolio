import React, { useState } from "react"
import { motion } from "framer-motion"
import data_projects from "../components/data/projects_data"
import ProjectCard from "../components/ProjectCard"

const Projects = () => {
  const projects_variant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.7,
      },
    },
  }

  return (
    <motion.div
      className="projects"
      variants={projects_variant}
      initial="hidden"
      animate="visible"
    >
      <div className="container">
        <div className="row">
          {data_projects.map((data_project, i) => (
            <ProjectCard project={data_project} key={i} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Projects
