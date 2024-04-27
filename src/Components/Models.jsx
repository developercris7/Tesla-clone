import React, { useEffect, useState } from "react";
import Styles from "../Assets/css/models.module.css";

const Models = ({ model }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  let imageUrl;
  if (windowWidth < 768) {
    // Mobile
    imageUrl = model.backgroundmobile;
  } else if (windowWidth < 1024) {
    // Tablet
    imageUrl = model.backgroundtab;
  } else {
    // Desktop
    imageUrl = model.background;
  }

  return (
    <main style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className={Styles.modelTextSection}>
        <div className={Styles.textHead}>
          <h1>{model.name}</h1>
          <h5>{model.price}</h5>
          <p>{model.credit}</p>
        </div>
        <div  className={Styles.textFooter}>
          <div  className={Styles.modelsButtonsSection}>
            <button className={Styles.viewButton}>View Model</button>
            <button className={Styles.demoButton}>Demo Drive</button>
          </div>
          <div>
          <p className="m-0 fw px-3" style={{color:`${model.creditTextColor}`}} >{model.creditText}</p>
          <a href="/" className="m-0 fw"  style={{color:`${model.creditTextColor}`}} >{model.anchorText}</a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Models;
