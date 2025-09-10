import React, { useState, Fragment, useEffect } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import { sedanModels } from "../../../../data";

const SedanPage = () => {
  const [currentModelIndex, setCurrentModelIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const models = sedanModels;
  const modelLength = models.length;

  const sedanImage = models.map((model) => model.img);

  useEffect(() => {
      setLoaded(false);
    }, [currentModelIndex]);
  
    useEffect(() => {
      if (sedanImage[currentModelIndex + 1]) {
        const img = new Image();
        img.src = sedanImage[currentModelIndex + 1];
      }
    }, [currentModelIndex, sedanImage]);

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

  return (
    <>
      <div className="left">
        <GoArrowLeft className="go-left" onClick={prevSlide} />
      </div>
      <div className="right">
        <GoArrowRight className="go-right" onClick={nextSlide} />
      </div>
       <div className="hero_4_brand my-4">
              {models.map((model, idx) => (
                <div key={model.name}>
                  {idx === currentModelIndex ? (
                    <div key={model.name} className="img-wrapper">
                      {!loaded && (
                        <img
                          src={model.img}
                          alt={model.name}
                          className={`placehold`}
                        />
                      )}
                      <img
                        src={model.img}
                        alt={model.name}
                        onLoad={() => setLoaded(true)}
                        className={`car-name ${loaded ? "loaded" : ""}`}
                      />
                    </div>
                  ) : null}
                  <div className="flex justify-between items-start sm:items-end w-full px-10 sm:px-3">
                    <div>
                      {currentModelIndex === idx && (
                        <h3 className="animme text-xl font-semibold mb-2">
                          {model.year}
                        </h3>
                      )}
                      {currentModelIndex === idx && (
                        <h1 className="animme text-3xl lg:text-5xl font-semibold">
                          {model.name}
                          <span className="text-[9px] text-gray-600 ml-3 cursor-pointer underline">
                            Disclaimers
                          </span>
                        </h1>
                      )}
                    </div>
                    <div className="hidden md:flex font-semibold md:mr-7 xl:mr-1">
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
                </div>
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
                  <h1 className="animme">{model.powerTrain} hp</h1>
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
              <div className="flex lg:w-[60%] items-center justify-center lg:justify-end lg:pr-8 gap-4 py-4 ">
                  <button className="hover:bg-white hover:text-black duration-500 cursor-pointer xl:mr-4 border-1 px-8 py-4 md:py-3 text-white bg-black">
                    Learn <span className="ml-2 xl:ml-0">more</span>
                  </button>
                <button className="py-4 hover:bg-black hover:text-white duration-500 px-9 cursor-pointer border-1 border-solid border-black md:hidden lg:hidden">
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

export default SedanPage;
