import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { AnimatePresence } from "framer-motion"
import { motion } from "framer-motion"

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

const Modal = ({
  showModal,
  setShowModal,
  modalTitle,
  modalTitleIcon,
  children,
}) => {
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
          <div className="container d-flex justify-content-center">
            <div className="col-xl-7 col-lg-8 col-md-11 col-sm-12">
              <motion.div
                className="my-modal__container"
                variants={myModalContainerMotion}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <div className="my-modal__heading">
                  <span>
                    <i>
                      <FontAwesomeIcon icon={modalTitleIcon} />
                    </i>
                    {modalTitle}
                  </span>
                  <button
                    className="close__button"
                    onClick={() => setShowModal(false)}
                  >
                    <FontAwesomeIcon icon={faXmark} />
                  </button>
                </div>
                <div className="my-modal__content">{children}</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal
