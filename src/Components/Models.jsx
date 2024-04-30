import React, { useEffect, useState } from "react";
import Styles from "../Assets/css/models.module.css";
import { Link } from "react-router-dom";
import {motion} from 'framer-motion'

const ModelsView = ({ model }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setWindowWidth]);

  let imageUrl;

  if (windowWidth < 768) {
    imageUrl = model.backgroundmobile;
  } else if (windowWidth < 1024) {
    imageUrl = model.backgroundtab;
  } else {
    imageUrl = model.background;
  }

  return (
    <main style={{ backgroundImage: `url(${imageUrl})` }} id={model.model}>
        <div className={Styles.modelTextSection}>
      <div className={Styles.textHead}>
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -20 }}
          transition={{ delay: 0.2 }} // Delay for h1 animation
        >
          {model.name}
        </motion.h1>
        <motion.h5
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -20 }}
          transition={{ delay: 0.4 }} // Delay for h5 animation
        >
          {model.price}
        </motion.h5>
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -20 }}
          transition={{ delay: 0.6 }} // Delay for p animation
        >
          {model.credit}
        </motion.p>
      </div>
      <div className={Styles.textFooter}>
        <motion.div
          className={Styles.modelsButtonsSection}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -20 }}
          transition={{ delay: 0.8 }} // Delay for button div animation
        >
          <motion.button className={Styles.viewButton}>
            <Link to={`/${model.model}`} className="nav-link">
              View Model
            </Link>
          </motion.button>
          <motion.button className={Styles.demoButton}>
            Demo Drive
          </motion.button>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -20 }}
          transition={{ delay: 1.0 }} // Delay for anchor div animation
        >
          <motion.p
            className="m-0 fw px-3"
            style={{ color: `${model.creditTextColor}` }}
          >
            {model.creditText}
          </motion.p>
          <motion.a
            href="/"
            className="m-0 fw"
            style={{ color: `${model.creditTextColor}` }}
          >
            {model.anchorText}
          </motion.a>
        </motion.div>
      </div>
    </div>
    </main>
  );
};

export default ModelsView;
