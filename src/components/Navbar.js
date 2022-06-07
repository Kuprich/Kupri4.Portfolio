import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const Navbar = () => {
  const navbarItems = {
    about: "ОБО МНЕ",
    projects: "ПРОЕКТЫ",
  }

  const [active, setActive] = useState(navbarItems.about)

  useEffect(() => {
    let currentUrl = window.location.href
    if (currentUrl.endsWith("/")) {
      setActive(navbarItems.about)
    } else if (currentUrl.endsWith("/projects")) {
      setActive(navbarItems.projects)
    }
  }, [active])

  const navbar_variant = {
    hidden: {
      y: "-30vh",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <motion.div
      className="navbar"
      variants={navbar_variant}
      initial="hidden"
      animate="visible"
    >
      <div className="navbar__active">{active}</div>

      <div className="navbar__items">
        {active !== navbarItems.about && (
          <Link to="/">
            <div
              className="navbar__item"
              onClick={() => setActive(navbarItems.about)}
            >
              {navbarItems.about}
            </div>
          </Link>
        )}

        {active !== navbarItems.projects && (
          <Link to="/projects">
            <div
              className="navbar__item"
              onClick={() => setActive(navbarItems.projects)}
            >
              ПРОЕКТЫ
            </div>
          </Link>
        )}
      </div>
    </motion.div>
  )
}

export default Navbar
