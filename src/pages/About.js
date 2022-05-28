import React from "react"
import { motion } from "framer-motion"
import skills from "../components/data/about_data"
import Skillcard from "../components/Skillcard"

const About = () => {
  const about_variant = {
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
      className="about"
      variants={about_variant}
      initial="hidden"
      animate="visible"
    >
      <div className="container">
        <div className="about__container">
          <h6 className="about__intro">
            I describe myself as someone who's persistant, a quick learner and
            lovaes problem solving by using simple and scalable solutions.
          </h6>

          <div className="skill-cards__container">
            <h6 className="about__heading">What I offer</h6>

            <div className="row">
              {skills.map((skill, i) => (
                <Skillcard skill={skill} key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default About
