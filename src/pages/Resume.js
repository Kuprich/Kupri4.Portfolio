import React from "react"
import { motion } from "framer-motion"

import { languages, tools } from "../components/data/resume_data"

import Bar from "../components/Bar"

const Resume = () => {
  const resume_variant = {
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
      className="container"
      variants={resume_variant}
      initial="hidden"
      animate="visible"
    >
      <div className="resume">
        <div className="row">
          <div className="col-lg-6">
            <div className="resume-card">
              <div className="resume-card__heading">
                <h4>Education</h4>
              </div>
              <div className="resume-card__body">
                <h5 className="resume-card__title">
                  Computer Science Enginnering
                </h5>
                <p className="resume-card__name">Academy of Technology</p>
                <div className="resume-card__details">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Vero, ea.
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="resume-card">
              <div className="resume-card__heading">
                <h4>Experience</h4>
              </div>
              <div className="resume-card__body">
                <h5 className="resume-card__title">
                  Computer Science Enginnering
                </h5>
                <p className="resume-card__name">Academy of Technology</p>
                <div className="resume-card__details">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Vero, ea.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="resume-languagues">
              <h5 className="resume-language__heading">
                Language and Framework
              </h5>
              <div className="resume-language__body">
                {languages.map((language, i) => (
                  <Bar value={language} key={i} />
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="resume-languagues">
              <h5 className="resume-language__heading">Tools and Softwares</h5>
              <div className="resume-language__body">
                {tools.map((tool, i) => (
                  <Bar value={tool} key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Resume
