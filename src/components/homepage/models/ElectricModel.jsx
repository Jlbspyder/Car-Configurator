import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import "./electricmodel.css";
import { electricModels } from "../../../data";

const ElectricPage = () => {
  const [currentModelIndex, setCurrentModelIndex] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);

  const models = electricModels;
  const modelLength = models.length;


  const prevSlide = () => {
    setCurrentModelIndex(
      currentModelIndex === 0 ? modelLength - 1 : currentModelIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentModelIndex(
      currentModelIndex === modelLength - 1 ? 0 : currentModelIndex + 1
    );
  };

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;
    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      nextSlide();
    }

    if (diff < -5) {
      prevSlide();
    }

    setTouchPosition(null);
  };

  return (
    <>
      <div className="left">
        <GoArrowLeft className="go-left" onClick={prevSlide} />
      </div>
      <div className="right">
        <GoArrowRight className="go-right" onClick={nextSlide} />
      </div>
      <div
        className="hero_4_brand my-4"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {models.map((model, idx) => (
          <Fragment key={model.name}>
            <Link to={`/electric/${model.name}`} className="cursor-pointer">
              {idx === currentModelIndex && (
                <img src={model.img} alt={model.name} className="car-name" />
              )}
            </Link>
            <div className="md-screen flex justify-between items-start md:items-end w-full px-10 sm:px-3 lg:w-1/2">
              <div>
                {currentModelIndex === idx && (
                  <h3 className="animme text-xl font-semibold mb-2">
                    {model.year}
                  </h3>
                )}
                {currentModelIndex === idx && (
                  <h1 className="animme model_text_desktop text-3xl lg:text-5xl font-semibold">
                    {model.name}
                    <span className="text-[9px] text-gray-600 ml-3 cursor-pointer underline">
                      Disclaimers
                    </span>
                  </h1>
                )}
              </div>
              <div className="build-btn electric">
                {currentModelIndex === idx && <p>Build yours</p>}
                {currentModelIndex === idx && (
                  <MdOutlineKeyboardArrowRight className="right-arow" />
                )}
              </div>
              {currentModelIndex === idx && (
                <div className="flex sm:hidden lg:hidden">
                  {models.map((model, idx) => (
                    <div
                      key={model.id}
                      className={`dots ${
                        currentModelIndex === idx ? "active" : ""
                      }`}
                    ></div>
                  ))}
                </div>
              )}
            </div>
            {currentModelIndex === idx && (
              <h1 className="animme model_text_mobile text-3xl lg:text-5xl font-semibold">
                {model.name}
                <span className="text-[9px] text-gray-600 ml-3 cursor-pointer underline">
                  Disclaimers
                </span>
              </h1>
            )}
          </Fragment>
        ))}
      </div>
      <div className="hero_4_spec">
        {models.map((model, idx) => (
          <Fragment key={model.id}>
            {currentModelIndex === idx && (
              <div className="specs_wrapper">
                <div
                  id="spec1"
                  dir="rtl"
                  className="specs border-s-1 border-gray-300"
                >
                  <p>STARTING AT</p>
                  <h1 className="animme">${model.price.toLocaleString()}</h1>
                </div>
                <div className="specs">
                  <p> POWER UP TO</p>
                  <h1 className="animme">{model.powerTrain} miles</h1>
                </div>
                <div dir="ltr" className="specs border-s-1 border-gray-300 ">
                  <p>MPG UP TO</p>
                  <h1 className="animme">
                    {model.mpg} MPG <br />
                    Comb.
                  </h1>
                </div>
              </div>
            )}
            {currentModelIndex === idx && (
              <div className="flex items-center justify-center gap-4 py-4 ">
                <button className="learn hover:bg-white hover:text-black duration-500 cursor-pointer py-4 px-12 border-1 text-white bg-black">
                  Learn
                </button>
                <button className="py-4 hover:bg-black hover:text-white duration-500 px-12 cursor-pointer border-1 border-solid border-black md:hidden lg:hidden">
                  Build yours
                </button>
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </>
  );
};

export default ElectricPage;
