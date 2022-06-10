import React from "react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

const ProjectReview = ({ project }) => {
  if (!project) return null

  return (
    <div className="projectReview">
      <div className="container">
        <div className="projectReview__heading">Заголовок проекта</div>
        <div className="projectReview__slider">
          {project.images && (
            <div>
              <Carousel>
                {project.images.map((image) => (
                  <div>
                    <img src={image} />
                    <p className="legend">Legend 1</p>
                  </div>
                ))}
              </Carousel>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectReview
