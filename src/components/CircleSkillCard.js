import React from "react"
import { buildStyles, CircularProgressbar } from "react-circular-progressbar"
import variables from "../scss/_variables.scss"

const CircleSkillCard = ({ title, value }) => {
  return (
    <div className="col-4 col-xs-12 circle_skill-card">
      <p className="circle_skill-card__title">{title}</p>
      <div className="circular-progressbar__wrapper">
        <div
          className="circular-progressbar"
          style={{ width: 100, height: 100, textAlign: "center" }}
        >
          <CircularProgressbar
            value={value}
            strokeWidth={7}
            text={value}
            styles={buildStyles({
              pathColor: variables.darkBlue,
              trailColor: "#fff",
              strokeLinecap: "butt",
              textSize: "23px",
            })}
          />
        </div>
      </div>
    </div>
  )
}

export default CircleSkillCard
