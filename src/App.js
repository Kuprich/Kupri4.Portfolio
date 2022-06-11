import React from "react"
import { AnimatePresence, motion } from "framer-motion"
import Sidebar from "./components/Sidebar"
import Navbar from "./components/Navbar"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Project from "./pages/Project"
import { Route, Routes, Navigate, useLocation } from "react-router-dom"

const app_content_variant = {
  hidden: {
    x: "60vh",
    opacity: 0,
  },

  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.7,
      type: "spring",
    },
    transitionEnd: {
      x: 0,
      transform: "none",
    },
  },
}

function App() {
  const location = useLocation()
  return (
    <div className="app">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 d-flex align-items-stretch">
            <Sidebar />
          </div>
          <div className="col-lg-9 d-flex align-items-stretch">
            <motion.div
              className="app__content"
              variants={app_content_variant}
              initial="hidden"
              animate="visible"
            >
              <Navbar />
              <AnimatePresence exitBeforeEnter>
                <Routes location={location} key={location.key}>
                  <Route index path="/" element={<About />} />

                  <Route path="/projects" element={<Projects />} />
                  <Route path=":id" element={<Project />} />

                  <Route path="*" element={<Navigate replace to="/" />} />
                </Routes>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
