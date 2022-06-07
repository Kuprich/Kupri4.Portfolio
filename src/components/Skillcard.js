import React from "react"

const Skillcard = ({ title, value }) => {
  return (
    <div className="skill-card">
      <h6 className="skill-card__title">{title}</h6>
      <div className="skill-card__bar">
        <div
          className="skill-card__bar_fill"
          style={{ width: value + "%" }}
        ></div>
      </div>
    </div>
  )
}

export default Skillcard
