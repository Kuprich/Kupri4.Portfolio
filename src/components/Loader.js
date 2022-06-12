import { AnimatePresence, motion } from "framer-motion"
import React from "react"
import { Rings } from "react-loader-spinner"
import variables from "../scss/_variables.scss"

const loaderVariants = {
  hidden: {
    opacity: 0,
    transition: {
      delay: 2.3,
      duration: "1",
    },
  },

  visible: {
    opacity: 1,
  },
}

const Loader = () => {
  return (
    <motion.div
      className="loader"
      animate="hidden"
      initial="visible"
      variants={loaderVariants}
    >
      <Rings
        height="150"
        width="150"
        color={variables.tomato}
        ariaLabel="loading"
      />
    </motion.div>
  )
}

export default Loader
