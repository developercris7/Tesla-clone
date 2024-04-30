import React from 'react'
import { motion } from "framer-motion";
import Styles from '../Assets/css/loader.module.css'
import ClipLoader from "react-spinners/ClipLoader";

const Loader = () => {
  return (
    <div className={Styles.loaderContainer}>

        <ClipLoader
        color={"black"}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
        className={Styles.loader}
        speedMultiplier={0.8}
      />

        <motion.img
          src="https://img.icons8.com/ios-glyphs/30/tesla-logo.png"
          alt="loading"
          className={Styles.image}
          animate={{
            opacity: [0, 1, 0],
            transition: { duration: 1.5, repeat: Infinity },
          }}
        />
      </div>
  )
}

export default Loader