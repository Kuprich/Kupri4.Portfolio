import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { AnimatePresence } from "framer-motion"
import { motion } from "framer-motion"
import React from "react"

const myModalMotion = {
  hidden: {
    opacity: 0,
  },

  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: "0.5",
    },
    transitionEnd: {
      x: 0,
      transform: "none",
    },
  },
}

const myModalContainerMotion = {
  hidden: {
    opacity: 0,
    y: "-100px",
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: "1",
      delay: "0.5",
    },
  },
}

const Modal = ({ showModal, setShowModal, modalTitle, children }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className="my-modal"
          variants={myModalMotion}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            className="my-modal__container"
            variants={myModalContainerMotion}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="my-modal__heading">
              <span>{modalTitle}</span>
              <button
                className="close__button"
                onClick={() => setShowModal(false)}
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
            <div className="my-modal__content">{children}</div>
            <button
              className="button button_lightBkg"
              onClick={() => setShowModal(false)}
            >
              Ок
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal
