import { Fragment, useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import { electricModels, sedanModels, suvModels } from "../../../data";
import ElectricPage from "../models/ElectricModel";
import "./hero.css";
import SedanPage from "../models/sedan/Sedan";

const Hero = ({ cars, suvModel, electricModelLength, sedanModelLength }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentModelIndex, setCurrentModelIndex] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);
  const [activeSuv, setActiveSuv] = useState(true);
  const [activeElectric, setActiveElectric] = useState(false);
  const [activeSedan, setActiveSedan] = useState(false);
  const [suv, setSuv] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [electric, setElectric] = useState(false);
  const [sedan, setSedan] = useState(false);
  const [all, setAll] = useState(false);
  const [car, setCar] = useState({
    model: "suv",
  });

  const navigate = useNavigate();
  const containerRef = useRef(null);

  const handleMeet = () => {
    navigate("/vehicles/Sportage");
  };

  const handleBuild = () => {
    navigate("/build/Sportage/9");
  };

  const itemWidthPercent = 0.9; // matches css flex-basis percentage

  // Sync bullets with scroll snap on for car-list
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const boxWidth = container.clientWidth * itemWidthPercent; // matches item width percentage
      const index = Math.round(container.scrollLeft / boxWidth);
      setCurrentIndex(index);
    };
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  // Bullet click handler
  const goToSlide = (index) => {
    const container = containerRef.current;
    if (container) {
      const boxWidth = container.clientWidth * itemWidthPercent;
      container.scrollTo({
        left: index * boxWidth,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const suvImage = suvModel.map((model) => model.img);

  useEffect(() => {
    setLoaded(false);
  }, [currentModelIndex]);

  useEffect(() => {
    if (suvImage[currentModelIndex + 1]) {
      const img = new Image();
      img.src = suvImage[currentModelIndex + 1];
    }
  }, [currentModelIndex, suvImage]);

  const length = cars.length;
  const suvModelLength = suvModel.length;

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
  };
  const nextSlide = () => {
    setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
  };

  const prevModelSlide = () => {
    setCurrentModelIndex(
      currentModelIndex === 0 ? suvModelLength - 1 : currentModelIndex - 1
    );
  };

  const nextModelSlide = () => {
    setCurrentModelIndex(
      currentModelIndex === suvModelLength - 1 ? 0 : currentModelIndex + 1
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

  const handleModelTouchMove = (e) => {
    const touchDown = touchPosition;
    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      nextModelSlide();
    }

    if (diff < -5) {
      prevModelSlide();
    }

    setTouchPosition(null);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCar((prevModel) => {
      return {
        ...prevModel,
        [name]: type === "checked" ? checked : value,
      };
    });
    if (value === "suv") {
      setActiveSuv(!activeSuv);
      setActiveElectric(false);
      setActiveSedan(false);
    } else if (value === "electric") {
      setActiveElectric(!activeElectric);
      setActiveSedan(false);
      setActiveSuv(false);
    } else {
      setActiveSedan(!activeSedan);
      setActiveElectric(false);
      setActiveSuv(false);
    }
  };

  return (
    <div>
      <section id="hero">
        <div className="relative hero">
          <video className="hidden md:block" autoPlay loop muted playsInline>
            <source src="/images/homepage-hero-video.mp4" type="video/mp4" />
          </video>
          <picture className="md:hidden">
            <source
              media="(min-width: 650px)"
              srcSet="/images/kia-2025-homepage-top.jpg"
            />
            <img src="/images/kia-hero-mobile.JPG" alt="consumer" />
          </picture>
          <div className="hero_dets">
            <h1>
              Keep the <br /> adventure going
            </h1>
            <div className="hero_btn">
              <button onClick={handleMeet} className="left-btn py-5 px-8">
                Meet Sportage
              </button>
              <button onClick={handleBuild} className="right-btn py-5 px-8">
                Build Yours
              </button>
            </div>
            <p id="mobile-disclaimer">Dislaimers</p>
          </div>
          <p id="desktop-disclaimer">Dislaimers</p>
        </div>
      </section>
      <section id="hero_2">
        <div className="relative ">
          <div
            className="slideshow relative bg-gray-900 md:flex md:flex-row gap-8 md:px-8"
            ref={containerRef}
          >
            {cars.map((car, idx) => (
              <div
                key={car.name}
                className="slideshow-gallery-track md:flex md:gap-10"
              >
                {<img src={car.img} alt={car.name} />}
                <div
                  className={`slideshow-info ${
                    idx === currentIndex ? "active" : ""
                  }`}
                >
                  <h4 className="text-white text-xs font-semibold">
                    {car.info}
                  </h4>
                  <h1 className="text-white text-xl font-bold mt-2">
                    {car.name}
                  </h1>
                  <button className="bg-transparent border-1 border-white py-4 px-12 mt-4 text-white font-semibold hover:bg-white hover:text-black duration-300 cursor-pointer">
                    {car.meet}
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute bottom-4 right-14 flex">
            {cars.map((car, idx) => (
              <div
                key={car.id}
                className={`dot ${currentIndex === idx ? "alive" : ""}`}
                onClick={() => goToSlide(idx)}
              ></div>
            ))}
          </div>
          <div className="car-list relative bg-gray-900 md:flex md:flex-row gap-8 px-8">
            {cars.map((car) => (
              <div
                key={car.name}
                className="relative cars sm:hover:scale-110 sm:transform md:hover:scale-110 md:transform duration-500 cursor-pointer"
              >
                <img src={car.img} alt={car.name} />
                <div className="meet absolute bottom-10 left-4">
                  <h4 className="text-white text-xs font-semibold">
                    {car.info}
                  </h4>
                  <h1 className="text-white text-xl font-bold mt-2">
                    {car.name}
                  </h1>
                  <button className="meet-btn bg-transparent border-1 border-white py-4 px-9 mt-4 text-white font-semibold hover:bg-white hover:text-black duration-300 cursor-pointer">
                    {car.meet}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="hero_3">
        <div className="consumer-info">
          <div className="mt-4">
            <h1 className="cr-main_text text-3xl md:text-3xl sm:ml-4 sm:text-sm font-semibold mb-4">
              Trusted by consumers.
            </h1>
            <p className="cr-text text-center sm:text-left sm:ml-4 mb-4 text-md sm:text-xs md:text-xl">
              Explore Kia models that made Consumer Reports' Recommended list
              for 2025
            </p>
            <p className="consumer-note text-center sm:text-left sm:ml-4 mb-4 text-2xl sm:text-xs md:text-[17px]">
              Explore Kia models that made Consumer
              <br /> Reports' Recommended list for 2025
            </p>
          </div>
          <div className="cr-badge"></div>
          <div className="recommend flex items-center text-white py-4 mt-4 md:mr-[150px] lg:mt-18">
            <p className="text-2xl sm:text-sm cursor-pointer">
              View Recommended
            </p>
            <MdOutlineKeyboardArrowRight className="right-arrow" />
          </div>
        </div>
      </section>
      <section
        className={`hero-4 ${activeSuv ? "suv_bg" : ""} ${
          activeElectric ? "electric_bg" : ""
        } ${activeSedan ? "sedan_bg" : ""} `}
      >
        <div className="left">
          <GoArrowLeft className="go-left" onClick={prevModelSlide} />
        </div>
        <div className="right">
          <GoArrowRight className="go-right" onClick={nextModelSlide} />
        </div>
        <div className="hero_4">
          <div className="hero_4_info">
            <h1>Discover the new Kia</h1>
          </div>
          <div className="model">
            <div
              onMouseEnter={() => setSuv(true)}
              onMouseLeave={() => setSuv(false)}
              className={`md:flex justify-center md:items-center md: gap-4 ${
                activeSuv ? "model-active extra" : ""
              } ${suv && !activeSuv ? "list_hover" : ""}`}
            >
              <label htmlFor="suv">
                <input
                  type="radio"
                  id="suv"
                  name="model"
                  value="suv"
                  className="hidden"
                  checked={car.model === "suv"}
                  onChange={handleChange}
                />
                <li className={activeSuv ? "act" : ""}>SUV / CUV / MPV</li>
              </label>
              {activeSuv ? (
                <Link to={``}>
                  <span
                    className={`font-bold text-[8px] text-white py-[3px] px-[5px] rounded-full border-1 bg-transparent cursor-pointer hover:bg-white hover:text-black ${
                      suv ? "light-up_hover" : ""
                    }`}
                  >
                    Show all
                  </span>
                </Link>
              ) : (
                <Link to={``}>
                  <span
                    className={`font-bold text-[10px] text-[#c2bfbf] py-[2px] px-[6px] rounded-full bg-gray-600 cursor-pointer hover:bg-white hover:text-black ${
                      suv ? "light-up_hover" : ""
                    }`}
                  >
                    {suvModel.length}
                  </span>
                </Link>
              )}
            </div>
            <div
              onMouseEnter={() => setElectric(true)}
              onMouseLeave={() => setElectric(false)}
              className={`md:flex justify-center md:items-center md: gap-4 ${
                activeElectric ? "model-active extra" : ""
              } ${electric && !activeElectric ? "list_hover" : ""}`}
            >
              <label htmlFor="electric">
                <input
                  type="radio"
                  id="electric"
                  name="model"
                  value="electric"
                  className="hidden"
                  checked={car.model === "electric"}
                  onChange={handleChange}
                />
                <li className={activeElectric ? "act" : ""}>
                  Hybrid / Electric
                </li>
              </label>
              {activeElectric ? (
                <span
                  className={`font-bold text-[8px] text-white py-[3px] px-[5px] rounded-full border-1 bg-transparent cursor-pointer hover:bg-white hover:text-black ${
                    electric ? "light-up_hover" : ""
                  }`}
                >
                  Show all
                </span>
              ) : (
                <span
                  className={`font-bold text-[10px] py-[2px] text-[#c2bfbf] px-[6px] rounded-full bg-gray-600 cursor-pointer hover:bg-white hover:text-black ${
                    electric ? "light-up_hover" : ""
                  }`}
                >
                  {electricModelLength}
                </span>
              )}
            </div>
            <div
              onMouseEnter={() => setSedan(true)}
              onMouseLeave={() => setSedan(false)}
              className={`md:flex justify-center  md:items-center md: gap-4 ${
                activeSedan ? "model-active extra" : ""
              } ${sedan && !activeSedan ? "list_hover" : ""}`}
            >
              <label htmlFor="sedan">
                <input
                  type="radio"
                  id="sedan"
                  name="model"
                  value="sedan"
                  className="hidden"
                  checked={car.model === "sedan"}
                  onChange={handleChange}
                />
                <li className={activeSedan ? "act" : ""}>Sedan</li>
              </label>
              {activeSedan ? (
                <span
                  className={`font-bold text-[8px] text-white py-[3px] px-[5px] rounded-full border-1 bg-transparent cursor-pointer hover:bg-white hover:text-black ${
                    sedan ? "light-up_hover" : ""
                  }`}
                >
                  Show all
                </span>
              ) : (
                <span
                  className={`font-bold text-[10px] text-[#c2bfbf] py-[2px] px-[6px] rounded-full bg-gray-600 cursor-pointer hover:bg-white hover:text-black ${
                    sedan ? "light-up_hover" : ""
                  }`}
                >
                  {sedanModelLength}
                </span>
              )}
            </div>
            <div
              onMouseEnter={() => setAll(true)}
              onMouseLeave={() => setAll(false)}
              className="flex items-center gap-4"
            >
              <Link to="/vehicles">
                <li className="hidden md:block">All Vehicles</li>
              </Link>
              <Link to="/vehicles">
                <li className="md:hidden">All</li>
              </Link>
              <MdOutlineKeyboardArrowRight
                className={`all-btn ${all ? "btn_hover " : ""}`}
              />
            </div>
          </div>
          {activeElectric && <ElectricPage />}
          {activeSedan && <SedanPage />}
          {activeSuv && (
            <div
              className="hero_4_brand my-4"
              onTouchStart={handleTouchStart}
              onTouchMove={handleModelTouchMove}
            >
              {suvModel.map((model, idx) => (
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
                    <Link to={`/build/${model.name}/${model.id}`}>
                      <button
                        disabled={model.name !== "Soul"}
                        className="build-btn"
                      >
                        {currentModelIndex === idx && <p>Build yours</p>}
                        {currentModelIndex === idx && (
                          <MdOutlineKeyboardArrowRight className="right-arow" />
                        )}
                      </button>
                    </Link>
                    {currentModelIndex === idx && (
                      <div className="flex sm:hidden lg:hidden">
                        {suvModel.map((model, idx) => (
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
          )}
          {activeSuv && (
            <div className="hero_4_spec">
              {suvModel.map((model, idx) => (
                <Fragment key={model.id}>
                  {currentModelIndex === idx && (
                    <div className="specs_wrapper">
                      <div
                        id="spec1"
                        dir="rtl"
                        className="specs border-s-1 border-gray-300"
                      >
                        <p>STARTING AT</p>
                        <h1 className="animme">
                          ${model.price.toLocaleString()}
                        </h1>
                      </div>
                      <div className="specs">
                        <p> POWER UP TO</p>
                        <h1 className="animme">{model.powerTrain} hp</h1>
                      </div>
                      <div
                        dir="ltr"
                        className="specs border-s-1 border-gray-300 "
                      >
                        <p>MPG UP TO</p>
                        <h1 className="animme">
                          {model.fuel} MPG <br />
                          Comb.
                        </h1>
                      </div>
                    </div>
                  )}
                  {currentModelIndex === idx && (
                    <div className="flex lg:w-[60%] items-center justify-center lg:justify-end lg:pr-8 gap-4 py-4 ">
                      <Link to={`/vehicles/${model.name}`}>
                        <button className="hover:bg-white hover:text-black duration-500 cursor-pointer xl:mr-4 border-1 px-9 py-4 text-white bg-black">
                          Learn <span className="ml-2 xl:ml-0">more</span>
                        </button>
                      </Link>
                      <Link to={`/build/${model.name}/${model.id}`}>
                        <button
                          disabled={model.name !== "Soul"}
                          className="py-4 hover:bg-black hover:text-white duration-500 px-9 cursor-pointer border-1 border-solid border-black md:hidden lg:hidden"
                        >
                          Build yours
                        </button>
                      </Link>
                    </div>
                  )}
                </Fragment>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Hero;
