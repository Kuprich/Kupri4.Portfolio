import React from "react"

const Skillcard = ({ skill: { icon, title, content } }) => {
  return (
    <div className="skill-card">
      <img src={icon} alt="skill icon" className="skill-card__icon" />
      <h6 className="skill-card__title">{title}</h6>
      <div className="skill-card__bar">
        <div className="skill-card__bar_fill"></div>
      </div>
    </div>
  )
}

export default Skillcard
