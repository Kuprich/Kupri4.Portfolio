import React from "react";
import { motion } from "framer-motion";

import computer from "../assets/icons/computer.svg";
import repair from "../assets/icons/repair.svg";
import api from "../assets/icons/api.svg";
import algo from "../assets/icons/algo.svg";
import puzzle from "../assets/icons/puzzle.svg";
import Skillcard from "./Skillcard";

const About = () => {
  const skills = [
    {
      icon: computer,
      title: "Frontend Development",
      content:
        "I can build a beautiful and scalable SPA using HTML, CSS and Ract.js",
    },
    {
      icon: repair,
      title: "Backend Development",
      content: "Handle database, server, api using and SQLite",
    },
    {
      icon: api,
      title: "API Development",
      content: "I can develop robust REST API using django-rest-api",
    },
    {
      icon: algo,
      title: "Competitive Coder",
      content: "A daily problem solver in HackerRank and Leetcode",
    },
    {
      icon: puzzle,
      title: "UI/UX designer",
      content: "Minimalistic user interface using figma and framer",
    },
  ];

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
  };

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
  );
};

export default About;
