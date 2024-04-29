import React, { useContext, useEffect, useState } from "react";
import data from "../Assets/db.json";
import { Link, useParams } from "react-router-dom";
import Styles from "../Assets/css/modelview.module.css";
import { useInView } from "react-intersection-observer";
import { FaHome } from "react-icons/fa";
import { DataContext } from "../Context/DataContext";

const Models = () => {
  const { model } = useParams();

  const {
    modelInfo,
    setModelInfo,
    modelAssets,
    setModelAssets,
    modelImages,
    setModelImages,
    interiorImage,
    setInteriorImage,
    urlImage,
    setUrlImage,
    paintColor,
    setPaintColor,
    wheelDesign,
    setWheelDesign,
    interiorColor,
    setInteriorColor,
    options,
    optionTab,
    optionBodyActive,
    setOptionBodyActive,
    optionsText,
    handleTabSwitch,
  } = useContext(DataContext);

  //   Intersection Obeserver References
  const { ref: modelRef, inView: modelInView } = useInView({
    threshold: 0,
    root: document.getElementById("modelContents"),
    rootMargin: "-50% 0% -50% 0%",
  });
  const { ref: paintRef, inView: paintInview } = useInView({
    threshold: 0,
    root: document.getElementById("modelContents"),
    rootMargin: "-50% 0% -50% 0%",
  });
  const { ref: wheelRef, inView: wheelInView } = useInView({
    threshold: 0,
    root: document.getElementById("modelContents"),
    rootMargin: "-50% 0% -50% 0%",
  });
  const { ref: interiorRef, inView: interiorInview } = useInView({
    threshold: 0,
    root: document.getElementById("modelContents"),
    rootMargin: "-50% 0% -50% 0%",
  });

  useEffect(() => {
    const findModel = async () => {
      const info = await data.models.find((item) => item.model === model);
      setModelInfo(info);
      setModelAssets(info.modelviewassests);
      const wheelTypeImage = await info.modelviewassests.images.find(
        (item) => item.name === wheelDesign
      );
      const filteredColorImages = await wheelTypeImage.imgs.find(
        (item) => item.color === paintColor
      ).images;
      const interiorsImages = info.modelviewassests.interiors.find(
        (item) => item.color === interiorColor
      ).img;
      setInteriorImage(interiorsImages);
      setModelImages(filteredColorImages);
      setUrlImage(filteredColorImages[0]);
    };
    findModel();
  }, [
    model,
    paintColor,
    wheelDesign,
    interiorColor,
    setModelAssets,
    setModelImages,
    setModelInfo,
    setInteriorImage,
  ]);

  useEffect(() => {
    if (modelInView) {
      setUrlImage(modelImages[0]);
    } else if (paintInview) {
      setUrlImage(modelImages[1]);
    } else if (wheelInView) {
      setUrlImage(modelImages[2]);
    } else if (interiorInview) {
      setUrlImage(interiorImage);
    }
  }, [
    modelInView,
    paintInview,
    wheelInView,
    interiorInview,
    modelImages,
    interiorImage,
  ]);

  return (
    <div>
      {modelInfo && (
        <div className={Styles.modelViewContainer}>
          <div className="row w-100 h-100 mx-auto">
            <div className={`${Styles.imageSection} col-lg-8 `}>
              <img src={urlImage} alt="" className="img-fluid" />
              <button className={`${Styles.gobackButton}`}>
                <Link
                  to="/"
                  className="nav-link d-flex align-items-center gap-2"
                >
                  <FaHome /> <span>Back</span>
                </Link>
              </button>
            </div>

            <div
              className={`${Styles.contentSection} col-lg-4 my-auto`}
              id="modelContents"
            >
              <div className={Styles.modelSection} ref={modelRef}>
                <h1 className="m-0">{modelInfo.name}</h1>
                <div className={Styles.modelDetails}>
                  <div className={Styles.modelInfo}>
                    <p>{modelAssets.range.num}</p>
                    <p>{modelAssets.range.text}</p>
                  </div>

                  <div className={Styles.modelInfo}>
                    <p>{modelAssets.topspeed.num}</p>
                    <p>{modelAssets.topspeed.text}</p>
                  </div>

                  <div className={Styles.modelInfo}>
                    <p>{modelAssets.speedtime.num}</p>
                    <p>{modelAssets.speedtime.text}</p>
                  </div>
                </div>
                <div className={Styles.optionSection}>
                  <div className={Styles.optionsWrapper}>
                    {options.map((option) => (
                      <p
                        key={option}
                        className={`${Styles.option} ${
                          option === optionTab ? Styles.activeOption : ""
                        } `}
                        onClick={() => handleTabSwitch(option)}
                      >
                        {option}
                      </p>
                    ))}
                  </div>
                  <div className={Styles.optionBody1}>
                    <p>
                      Include $7,500 Federal Tax Credit and est. 5-year gas
                      savings of $6,000. Customize
                    </p>
                    <button>click</button>
                  </div>
                  {optionsText
                    .find((option) => option.tab === optionTab)
                    .options.map((op, index) => (
                      <div
                        className={`${Styles.optionBody2} ${
                          optionBodyActive === index + 1
                            ? Styles.optionBody2Active
                            : ""
                        }`}
                        key={index}
                        onClick={() => setOptionBodyActive(index + 1)}
                      >
                        <p>{op.text}</p>
                        <p>{op.price}</p>
                      </div>
                    ))}

                  <p className={Styles.modelAnchorText}>
                    $4,500 (10%) down, 6.39% APR, 72 months
                  </p>
                </div>
              </div>

              <div className={Styles.featureHead}>Feature Details</div>

              <div className={Styles.paintSection} ref={paintRef}>
                <h1>Paints</h1>
                <div className={Styles.paintImagesSection}>
                  {modelAssets.paints.map((paint) => (
                    <div
                      className={`${
                        paintColor === paint.color ? Styles.paintImgDiv : ""
                      }`}
                      onClick={() => setPaintColor(paint.color)}
                    >
                      <img src={paint.image} alt="" width="50" />
                    </div>
                  ))}
                </div>

                {modelAssets.paints.map((paint) => (
                  <>
                    {paintColor === paint.color ? (
                      <div className="d-flex gap-3 align-items-center mt-3">
                        <span className={Styles.colorName}>
                          {paint.colorname}
                        </span>{" "}
                        <span className={Styles.colorPrice}>{paint.price}</span>
                      </div>
                    ) : (
                      <></>
                    )}
                  </>
                ))}
              </div>

              <div className={Styles.paintSection} ref={wheelRef}>
                <h1>Wheels</h1>
                <div className={Styles.paintImagesSection}>
                  {modelAssets.wheels.map((wheel) => (
                    <div
                      className={`${
                        wheelDesign === wheel.name ? Styles.paintImgDiv : ""
                      }`}
                      onClick={() => setWheelDesign(wheel.name)}
                    >
                      <img src={wheel.image} alt="" width="50" />
                    </div>
                  ))}
                </div>
                {modelAssets.wheels.map((wheel) => (
                  <>
                    {wheel.name === wheelDesign ? (
                      <div className="text-center">
                        <div className="d-flex align-items-center gap-3 mt-3">
                          <span className={Styles.colorName}>{wheel.type}</span>
                          <span className={Styles.colorPrice}>
                            {wheel.price}
                          </span>
                        </div>
                        <p className={Styles.colorName}>All-Season Tires</p>
                        <p className={Styles.colorName}>
                          Range (EPA est.) : 260mi
                        </p>
                      </div>
                    ) : (
                      <></>
                    )}
                  </>
                ))}
              </div>

              <div className={Styles.paintSection} ref={interiorRef}>
                <h1>Interior</h1>

                <div className={Styles.paintImagesSection}>
                  {modelAssets.interiorsColor.map((item) => (
                    <div
                      className={`${
                        interiorColor === item.color ? Styles.paintImgDiv : ""
                      }`}
                      onClick={() => setInteriorColor(item.color)}
                    >
                      <img src={item.image} alt="" width="50" />
                    </div>
                  ))}
                </div>

                {modelAssets.interiorsColor.map((item) => (
                  <>
                    {interiorColor === item.color ? (
                      <div className="d-flex gap-3 align-items-center mt-3">
                        <span className={Styles.colorName}>
                          {item.colorName}
                        </span>{" "}
                        <span className={Styles.colorPrice}>{item.price}</span>
                      </div>
                    ) : (
                      <></>
                    )}
                  </>
                ))}
              </div>

              <div className={`${Styles.paintSection} mt-4`}>
                <h1 className="m-0">Order Your {data.models[0].name}</h1>
                <span className={Styles.colorName}>
                  Est. Delivery: Apr – May 2024
                </span>

                <button className={Styles.continueButton}>Continue</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Models;