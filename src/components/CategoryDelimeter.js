import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

const CategoryDelimeter = ({ icon, name }) => {
  return (
    <div className="unit">
      <div className="unit__logo">
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className="unit__name">{name}</div>
      <div className="unit__line"></div>
    </div>
  )
}

export default CategoryDelimeter
