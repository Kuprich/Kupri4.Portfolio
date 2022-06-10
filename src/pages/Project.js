import React from "react"
import { useParams } from "react-router-dom"

const Project = () => {
  const projectId = useParams().id
  return (
    <div className="container">
      <div className="row">
        <div>Project Details in {projectId}</div>
      </div>
    </div>
  )
}

export default Project
