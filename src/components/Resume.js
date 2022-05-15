import React from "react";
import Bar from "../components/Bar";

import reactIcon from "../assets/icons/react.svg";

const languages = [
  {
    icon: reactIcon,
    name: "Python",
    level: "45",
  },
  {
    icon: reactIcon,
    name: "Java",
    level: "20",
  },
  {
    icon: reactIcon,
    name: "HTML",
    level: "80",
  },
];

const tools = [
  {
    icon: reactIcon,
    name: "Figma",
    level: "50",
  },
  {
    icon: reactIcon,
    name: "Higma",
    level: "66",
  },
  {
    icon: reactIcon,
    name: "Photoshop",
    level: "30",
  },
];

const Resume = () => {
  return (
    <div className="container">
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
    </div>
  );
};

export default Resume;
