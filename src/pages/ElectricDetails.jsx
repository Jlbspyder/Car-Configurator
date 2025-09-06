import { useState, useEffect, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { electricModels } from "../data";
import { FaPause } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { IoArrowUp } from "react-icons/io5";
import { IoArrowDown } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { TbPointFilled } from "react-icons/tb";
import Footer from "../components/homepage/footer/Footer";
import Navbar from "../components/homepage/navbar/Navbar";

const ElectricDetails = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [currentAllIdx, setCurrentAllIdx] = useState(0);
  const [currentExtIdx, setCurrentExtIdx] = useState(0);
  const [currentIntIdx, setCurrentIntIdx] = useState(0);
  const [interiorIdx, setInteriorIdx] = useState(0);
  const [techIdx, setTechIdx] = useState(0);
  const [connectIdx, setConnectIdx] = useState(0);
  const [performanceIdx, setPerformanceIdx] = useState(0);
  const [exteriorIdx, setExteriorIdx] = useState(0);
  const [driveIdx, setDriveIdx] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(null);
  const [touchPosition, setTouchPosition] = useState(null);
  const [hideInitialImg, setHideInitialImg] = useState(false);
  const [hideHeader, setHideHeader] = useState(true);
  const [fixHeader, setFixHeader] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [allImages, setAllImages] = useState(true);
  const [exterior, setExterior] = useState(false);
  const [interior, setInterior] = useState(false);
  const [gallery, setGallery] = useState(false);
  const [isLoaded, setIsloaded] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedCar, setSelectedCar] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  const videoRef = useRef();
  const { name } = useParams();
  const car = electricModels.find((model) => model.name === name);
  const spec = car.specs.find((vehicle) => vehicle);

  const int = car.interior?.map((int) => int.img);
  const tech = car.technology?.map((int) => int.img);
  const connect = car.connectivity?.map((int) => int.img);
  const performance = car.performance?.map((int) => int.img);
  const exter = car.exterior?.map((int) => int.img);
  const drive = car.driver?.map((int) => int.img);

  const exteriorPictures = car.gallery.exterior;
  const interiorPictures = car.gallery.interior;
  const allPictures = car.gallery.allImages;

  const extPicLength = exteriorPictures.length;
  const intPicLength = interiorPictures.length;
  const allPicLength = allPictures.length;
  const intLength = int?.length;
  const techLength = tech?.length;
  const connectLength = connect?.length;
  const perfLength = performance?.length;
  const extLength = exter?.length;
  const driveLength = drive?.length;

  const moveUp = () => {
    if (currentAllIdx > 0) {
      setCurrentAllIdx((prev) => prev - 1);
    }
    if (currentExtIdx > 0) {
      setCurrentExtIdx((prev) => prev - 1);
    }
    if (currentIntIdx > 0) {
      setCurrentIntIdx((prev) => prev - 1);
    }
  };

  const moveIntDown = () => {
    if (interiorIdx < intLength - 1) {
      setInteriorIdx((prev) => prev + 1);
    }
  };
  const moveIntUp = () => {
    if (interiorIdx > 0) {
      setInteriorIdx((prev) => prev - 1);
    }
  };

  const moveTechDown = () => {
    if (techIdx < techLength - 1) {
      setTechIdx((prev) => prev + 1);
    }
  };
  const moveTechUp = () => {
    if (techIdx > 0) {
      setTechIdx((prev) => prev - 1);
    }
  };

  const moveConDown = () => {
    if (connectIdx < connectLength - 1) {
      setConnectIdx((prev) => prev + 1);
    }
  };
  const moveConUp = () => {
    if (connectIdx > 0) {
      setConnectIdx((prev) => prev - 1);
    }
  };

  const movePerfDown = () => {
    if (performanceIdx < perfLength - 1) {
      setPerformanceIdx((prev) => prev + 1);
    }
  };
  const movePerfUp = () => {
    if (performanceIdx > 0) {
      setPerformanceIdx((prev) => prev - 1);
    }
  };

  const moveExtDown = () => {
    if (exteriorIdx < extLength - 1) {
      setExteriorIdx((prev) => prev + 1);
    }
  };
  const moveExtUp = () => {
    if (exteriorIdx > 0) {
      setExteriorIdx((prev) => prev - 1);
    }
  };

  const moveDriveDown = () => {
    if (driveIdx < driveLength - 1) {
      setDriveIdx((prev) => prev + 1);
    }
  };
  const moveDriveUp = () => {
    if (driveIdx > 0) {
      setDriveIdx((prev) => prev - 1);
    }
  };

  const moveDown = () => {
    if (currentExtIdx < extPicLength - 1 && exterior) {
      setCurrentExtIdx((prev) => prev + 1);
    }
    if (currentIntIdx < intPicLength - 1 && interior) {
      setCurrentIntIdx((prev) => prev + 1);
    }
    if (currentAllIdx < allPicLength - 1 && allImages) {
      setCurrentAllIdx((prev) => prev + 1);
    }
  };

  const handleAllPick = () => {
    setAllImages(true);
    setExterior(false);
    setInterior(false);
  };

  const handleExtPick = () => {
    setAllImages(false);
    setExterior(true);
    setInterior(false);
  };

  const handleIntPick = () => {
    setAllImages(false);
    setInterior(true);
    setExterior(false);
  };


  useEffect(() => {
    setIsloaded(false);
  }, [techIdx, interiorIdx, connectIdx, performanceIdx, exteriorIdx, driveIdx]);

  const carouselRef = useRef();
  const navigate = useNavigate();

  const prevSlide = () => {
    const itemWidth = carouselRef.current.offsetWidth / 3;

    if (currentIdx > 0) {
      setCurrentIdx((prev) => prev - 1);
      carouselRef.current.style.transform = `translateX(-${
        (currentIdx - 1) * itemWidth
      }px)`;
    }
  };
  const nextSlide = () => {
    const itemWidth = carouselRef.current.offsetWidth / 3;
    const maxIndex = length - 3;

    if (currentIdx < maxIndex) {
      setCurrentIdx((prev) => prev + 1);
      carouselRef.current.style.transform = `translateX(-${
        (currentIdx + 1) * itemWidth
      }px)`;
    }
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
      moveDown();
    }

    if (diff < -5) {
      moveUp();
    }

    setTouchPosition(null);
  };

  useEffect(() => {
    if (car) {
      const firstColor = Object.entries(car.colors)[0][1].hex;
      setSelectedColor(firstColor);
      const firstCar = Object.entries(car.colors)[0][1].image;
      setSelectedCar(firstCar);
    }
  }, [name]);

  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth < 640) {
        setVisibleSlides(1);
      } else if (window.innerWidth < 1000) {
        setVisibleSlides(2);
      } else {
        setVisibleSlides(3);
      }
    };
    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const handleClick = () => {
    navigate(`/electricbuild/${car.name}/${spec.id}`);
  };

  const handleCarSelect = (name) => {
    setSelectedCar(name);
    setSelectedColor(name);
    setHideInitialImg(true);
  };

  if (!car) {
    return <h2>Car not found</h2>;
  }

  const handlePlayPause = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 0.5) {
        if (currentScrollY > lastScrollY) {
          setHideHeader(false);
        } else {
          setHideHeader(true);
        }
      } else {
        setHideHeader(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 0.5) {
        if (currentScrollY > lastScrollY) {
          setFixHeader(true);
        } else {
          setFixHeader(false);
        }
      } else {
        setFixHeader(false);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [openMenu]);

  return (
    <div className="overflow-x-hidden">
      <div className={`top-navbar ${hideHeader ? "" : "hide"} `}>
        <Navbar />
      </div>
      <div className={`main-navbar ${fixHeader ? "stick" : ""}`}>
        <div className="flex justify-between items-center h-[50px] text-black">
          <div className="flex md:w-[50%] lg:w-[33%] border-r border-gray-300  justify-between text-[10px] md:text-[17px] font-semibold px-6">
            <h2 className="hidden lg:block lg:text-[14px] xl:text-[16px]">
              {car.year} <span>{car.name}</span>
            </h2>
            <h2 className="hidden lg:w-[55%] md:block lg:text-[14px] xl:text-[16px]">
              ${car.price.toLocaleString()}{" "}
              <span className="ml-4">Staring MSRP*</span>
            </h2>
          </div>
          <ul className="hidden lg:flex w-[30%] gap-5 ml-[-80px] xl:ml-[-120px] lg:text-[14px] xl:text-[16px] font-semibold">
            <li className="hover:underline cursor-pointer">Trims</li>
            <li className="hover:underline cursor-pointer">Offers</li>
            <li className="hover:underline cursor-pointer">Gallery</li>
            <li className="hover:underline cursor-pointer">Features</li>
            <li className="hover:underline cursor-pointer">Safety</li>
            <Link to="/vehicles">
              <li className="hover:underline cursor-pointer">Vehicles</li>
            </Link>
          </ul>
          <div className="hidden lg:text-[14px] lg:flex lg:mr-8 lg:pt-1 gap-2 justify-center">
            <button className="bg-black cursor-pointer text-white py-2 px-5 font-semibold hover:underline">
              View Inventory
            </button>
            <button
              onClick={handleClick}
              className="text-black cursor-pointer py-2 px-5 border font-semibold hover:underline"
            >
              Build Yours
            </button>
          </div>
        </div>
      </div>
      <div
        className={`lg:hidden main-nav-mobile flex flex-col  md:flex-row items-center bg-white ${
          fixHeader ? "sticky" : ""
        }`}
      >
        <div
          className={`car-menu ${openMenu ? "open" : "car-menu"} ${
            fixHeader ? "sort" : "car-menu"
          }`}
        >
          <li>Trims</li>
          <li>Offers</li>
          <li>Gallery</li>
          <li>Features</li>
          <li>Safety</li>
          <Link to="/vehicles">
            <li>Vehicles</li>
          </Link>
        </div>
        <div className="text-black font-semibold w-full md:w-[65%] flex justify-between items-center px-8 py-3 ">
          <div className="md:flex border-r border-gray-300 justify-between items-center md:w-[65%]">
            <h2 className="md:text-[15px]">
              {car.year} <span>{car.name}</span>
            </h2>
            <h2 className="hidden md:block pr-3 text-[11px] md:text-[12px]">
              ${car.price.toLocaleString()} Staring MSRP*
            </h2>
          </div>
          <div
            onClick={() => setOpenMenu(!openMenu)}
            className="flex md:w-[38%] items-center gap-2 cursor-pointer"
          >
            <h2 className="cursor-pointer md:ml-2">More</h2>
            <img
              src="/arrow-down.svg"
              className={openMenu ? "clicked" : "more-btn"}
            />
          </div>
        </div>
        <div className="flex items-center w-full  md:w-[34%]">
          <button className="bg-black elect-dets-btn cursor-pointer w-full text-white border-black h-[100%] md:text-[13px] py-3 px-4 font-semibold">
            View Inventory
          </button>
          <button
            onClick={handleClick}
            className="text-black elect-dets-btn border w-full md:border-0 cursor-pointer  py-2 px-4 h-[100%]  md:text-[13px]  font-semibold"
          >
            Build Yours
          </button>
        </div>
      </div>
      <section className="mt-20 md:mt-27 relative video-bg">
        <h2 className="car-desc md:text-[28px] font-semibold">
          {" "}
          {(car.name === "Sportage" && "The new") ||
            (car.name === "Carnival MPV" && "The new")}{" "}
          <span>{car.year}</span> {car.name}
        </h2>
        {isSmallScreen ? (
          <img src={car.mobileBg} alt={car.mainHeader} className="mobile-bg" />
        ) : car.bgVideo ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            ref={videoRef}
            controls={false}
          >
            <source src={car.bgVideo} type="video/mp4" />
          </video>
        ) : (
          <img
            src={car.DesktopBg}
            alt={car.mainHeader}
            className="desktop-bg"
          />
        )}
        {car.bgVideo && (
          <div
            onClick={handlePlayPause}
            className="hidden absolute text-[10px] w-[60px] font-semibold p-[2px] cursor-pointer md:bottom-15 md:right-4 xl:bottom-30 z-100 right-10 md:flex items-center gap-[3px]"
          >
            <FaPlay className={`play ${isPlaying ? "inactive" : ""}`} />
            <FaPause className={`play ${!isPlaying ? "inactive" : ""}`} />
            {!isPlaying ? <span>PLAY</span> : <span>PAUSE</span>}
          </div>
        )}
        <div
          className={
            "absolute car-spec text-white bottom-8 xl:bottom-16 flex items-center md:justify-center md:w-[100%] px-3"
          }
        >
          <div className="flex h-[100%] text-center xl:pt-1 flex-col items-center w-[40%] md:w-[30%] xl:w-[25%] ">
            <small className="text-[12px]/4 md:text-[14px]">
              {car.heroLeftTitle}
            </small>
            <h1 className="font-semibold md:text-[20px] xl:text-[25px]">
              {car.mpg}
            </h1>
          </div>
          <div className="car-dash"></div>
          <div className="text-center flex flex-col items-center w-[30%] md:w-[20%] xl:w-[18%]">
            <small className="text-[12px]/4 md:text-[14px]/5 xl:w-[70%]">
              {car.heroMiddleTitle}
            </small>
            <h1 className="font-semibold xl:text-[25px]">
              {car.heroMiddleInfo}
            </h1>
          </div>
          <div className="car-dash"></div>
          <div className="text-center flex flex-col items-center w-[30%] md:w-[20%] xl:w-[20%]">
            <small className="text-[12px] md:text-[14px] xl:w-[70%]">
              {car.heroRightTitle}
            </small>
            <h1 className="font-semibold xl:text-[25px]">
              {car.heroRightInfo}
            </h1>
          </div>
        </div>
      </section>
      <h2 className="md:hidden text-white bg-black pr-3 text-[18px] font-semibold text-center">
        ${car.price.toLocaleString()} Staring MSRP*
      </h2>
      <section className="bg-white px-4">
        <h1 className="text-black text-3xl mt-8 text-center md:text-5xl font-semibold">
          {car.trimHeader}
        </h1>
        {!hideInitialImg && (
          <img src={selectedCar} alt="car" className="swatch" />
        )}
        {Object.entries(car.colors).map(([_, { image, name }], idx) => (
          <div key={idx}>
            {selectedCar === name && (
              <img src={image} alt={name} className="swatch" />
            )}
          </div>
        ))}
        <div className="flex items-center mt-10 mx-auto w-[90%] md:mx-50 xl:w-[35%] xl:m-auto space-x-1">
          <h1 className="text-black text-xl font-semibold">Paint:</h1>
          {Object.entries(car.colors).map(
            ([_, { name }], idx) =>
              selectedColor === name && (
                <small
                  key={idx}
                  className="text-black text-xl md:text-[15px] md:mt-[5px] mt-[1px]"
                >
                  {name}
                </small>
              )
          )}
        </div>
        <div className="flex items-center w-[90%] mt-4 pb-4 md:w-[50%] md:mt-4 m-auto xl:w-[35%]">
          {Object.entries(car.colors).map(([_, { hex, name }], idx) => (
            <div key={idx} className="w-full flex justify-center">
              <button
                className="color"
                onClick={() => handleCarSelect(name)}
                style={{ backgroundColor: hex }}
              >
                {selectedColor === name && (
                  <FaCheck
                    className={`color-swatch ${
                      selectedColor === "Snow White Pearl" ? "tint" : ""
                    }`}
                  />
                )}
              </button>
            </div>
          ))}
        </div>
      </section>
      <section>
        <div className="relative text-black bg-gray-100">
          <h1 className="px-6 font-semibold text-[40px] text-center xl:text-[50px] xl:pb-10 pt-20 pb-4 ">
            {car.specHeader}
          </h1>
          <div
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            className="trim-container"
          >
            {car.specs.map((spec, idx) => (
              <div ref={carouselRef} key={idx} className={`trim`}>
                <div className="trim bg-white">
                  <div className="bg-black h-[140px] md:h-[160px] xl:md:h-[190px] text-white py-[6px] md:py-0 px-6">
                    {
                      <h1 className="pt-8 text-xl font-semibold xl:text-[25px]">
                        {spec.name}
                      </h1>
                    }
                    {
                      <h1 className="text-xl font-semibold xl:text-[20px]">
                        ${spec.price.toLocaleString()}
                      </h1>
                    }
                    {
                      <span className="text-gray-400 font-semibold xl:text-[13px]">
                        Starting MSRP *
                      </span>
                    }
                  </div>
                  {
                    <div className="relative pb-10 bg-white border-1 border-gray-100">
                      <img
                        src={spec.image}
                        alt={spec.name}
                        className="mt-[-65px] md:mt-[-75px] xl:mt-[-85px] pb-10"
                      />
                      <h1 className="absolute text-[17px]/5 bottom-0 h-[42px] right-0 left-3 md:w-[85%] font-semibold">
                        {spec.info}
                      </h1>
                    </div>
                  }
                  <div className="bg-white px-6 flex flex-col pb-4 h-[300px] text-[18px] mx-auto overflow-y-scroll">
                    {spec.features.map((feature, idx) => {
                      return (
                        <div key={idx} className="flex gap-2 items-start">
                          <div>
                            <TbPointFilled className="pointer" />
                          </div>
                          <div className="md:text-[17px]">{feature}</div>
                        </div>
                      );
                    })}
                  </div>
                  <Link
                    to={`/electricbuild/${car.name}/${spec.id}`}
                    className="bg-white border-t border-gray-400  py-4 flex items-center text-[19px] px-6 font-semibold"
                  >
                    <button className="cursor-pointer">Build</button>
                    <MdOutlineKeyboardArrowRight className="trim-btn" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="relative pb-14 text-black">
          <div className="flex flex-col md:flex-row md:justify-between items-center md:px-8 xl:px-15 mb-4 gap-4">
            <h1 className="text-4xl font-semibold md:text-[30px] ">Gallery</h1>
            <div
              onClick={() => setGallery(!gallery)}
              className="relative cursor-pointer mb-4 md:mb-0 flex items-center justify-between font-semibold w-[40%] md:w-[22%] xl:w-[13%] md:h-[45px] z-500 px-2 h-[50px] border"
            >
              {gallery && (
                <div className="absolute bg-white text-black flex flex-col items-start gap-4 p-6 border top-[100%] left-0 right-0">
                  <div
                    onClick={handleAllPick}
                    className="flex w-full items-center justify-between gap-[5px]"
                  >
                    {allImages && <FaCheck className="img-check" />}
                    <p className="w-full text-center xl:text-right">
                      All Images
                    </p>
                  </div>
                  <div
                    onClick={handleExtPick}
                    className="flex w-full justify-between items-center gap-[5px]"
                  >
                    {exterior && <FaCheck className="img-check" />}
                    <p className="w-full text-center xl:text-right">Exterior</p>
                  </div>
                  <div
                    onClick={handleIntPick}
                    className="flex w-full items-center gap-[5px]"
                  >
                    {interior && <FaCheck className="img-check" />}
                    <p className="w-full text-center xl:text-right">Interior</p>
                  </div>
                </div>
              )}
              <div>
                {allImages && <p>All Images</p>}
                {exterior && <p>Exterior</p>}
                {interior && <p>Interior</p>}
              </div>
              <FaAngleDown className="image-arrow" />
            </div>
          </div>
          <div className="relative xl:px-6">
            {allImages && (
              <div className="relative md:flex flex-row-reverse justify-between items-center md:px-8">
                <div className="main">
                  {allPictures.map((pix, idx) => (
                    <div key={idx}>
                      {idx === currentAllIdx && (
                        <img src={pix} alt="kia" className="main-image" />
                      )}
                    </div>
                  ))}
                </div>
                <div className="gallery my-3">
                  {allPictures.map((pix, idx) => (
                    <div className="gallery-track" key={idx}>
                      <img
                        src={pix}
                        alt="kia"
                        onClick={() => setCurrentAllIdx(idx)}
                        className="small-img"
                      />
                    </div>
                  ))}
                </div>
                {currentAllIdx !== 0 && (
                  <div onClick={moveUp} className="gallery-arrow-up">
                    <IoArrowUp className="arrow_up" />
                  </div>
                )}
                <div onClick={moveUp} className="gallery_arrow_up">
                  <FaArrowLeft className="arrow-down" />
                </div>
                {currentAllIdx !== allPicLength - 1 && (
                  <div onClick={moveDown} className="gallery-arrow-down">
                    <IoArrowDown className="arrow_down" />
                  </div>
                )}
                <div onClick={moveDown} className="gallery_arrow_down">
                  <FaArrowRight className="arrow-up" />
                </div>
                <div className="gallery-list">
                  <span className="mr-1">{currentAllIdx + 1}</span>/
                  <span className="ml-1">{allPicLength}</span>
                </div>
              </div>
            )}
            {exterior && (
              <div className="relative md:flex flex-row-reverse justify-between items-center md:px-8">
                <div className="main">
                  {exteriorPictures.map((pix, idx) => (
                    <div key={idx}>
                      {idx === currentExtIdx && (
                        <img src={pix} alt="exterior" className="main-image" />
                      )}
                    </div>
                  ))}
                </div>
                <div className="gallery my-4">
                  {exteriorPictures.map((pix, idx) => (
                    <div className="gallery-track" key={idx}>
                      <img
                        src={pix}
                        alt="exterior"
                        onClick={() => setCurrentExtIdx(idx)}
                        className="small-img"
                      />
                    </div>
                  ))}
                </div>
                {currentExtIdx !== 0 && (
                  <div onClick={moveUp} className="gallery-arrow-up">
                    <IoArrowUp className="arrow_up" />
                  </div>
                )}
                <div onClick={moveUp} className="gallery_arrow_up">
                  <FaArrowLeft className="arrow-down" />
                </div>
                <div onClick={moveDown} className="gallery_arrow_down">
                  <FaArrowRight className="arrow-up" />
                </div>
                {currentExtIdx !== extPicLength - 1 && (
                  <div onClick={moveDown} className="gallery-arrow-down">
                    <IoArrowDown className="arrow_down" />
                  </div>
                )}
                <div className="gallery-list">
                  <span className="mr-1">{currentExtIdx + 1}</span>/
                  <span className="ml-1">{extPicLength}</span>
                </div>
              </div>
            )}
            {interior && (
              <div className="relative md:flex flex-row-reverse justify-between items-center md:px-8">
                <div className="main">
                  {interiorPictures.map((pix, idx) => (
                    <div key={idx}>
                      {idx === currentIntIdx && (
                        <img src={pix} alt="interior" className="main-image" />
                      )}
                    </div>
                  ))}
                </div>
                <div className="gallery my-4">
                  {interiorPictures.map((pix, idx) => (
                    <div className="gallery-track" key={idx}>
                      <img
                        src={pix}
                        alt="interior"
                        onClick={() => setCurrentIntIdx(idx)}
                        className="small-img"
                      />
                    </div>
                  ))}
                </div>
                {currentIntIdx !== 0 && (
                  <div onClick={moveUp} className="gallery-arrow-up">
                    <IoArrowUp className="arrow_up" />
                  </div>
                )}
                {currentIntIdx !== intPicLength - 1 && (
                  <div onClick={moveDown} className="gallery-arrow-down">
                    <IoArrowDown className="arrow_down" />
                  </div>
                )}
                <div onClick={moveUp} className="gallery_arrow_up">
                  <FaArrowLeft className="arrow-down" />
                </div>
                <div onClick={moveDown} className="gallery_arrow_down">
                  <FaArrowRight className="arrow-up" />
                </div>
                <div className="gallery-list">
                  <span className="mr-1">{currentIntIdx + 1}</span>/
                  <span className="ml-1">{intPicLength}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <section>
        <div
          className={
            car.name === "Telluride" || car.name === "Soul"
              ? "bg-[#F2F2F2] mt-10 md:flex flex-row-reverse justify-between md:items-start md:pt-0 pb-15 text-black"
              : "bg-[#F2F2F2] mt-10 md:flex flex-row justify-between md:items-center md:pt-0 pb-15 text-black"
          }
        >
          <div className="md:w-[100%] xl:w-[50%]">
            <img src={car.largePix} alt={car.name} className="model-pix" />
          </div>
          <div className="md:w-[85%] xl:w-[52%] px-8 md:px-14 mt-6">
            <h5 className="font-semibold md:text-[12px] md:tracking-wider xl:text-[12px]">
              {car.teaser}
            </h5>
            <h1 className="text-[35px]/10 md:text-[30px] xl:text-[40px]/10 my-2 md:my-0 font-semibold">
              {car.header}
            </h1>
            <p className="mt-4 text-[18px] md:font-semibold md:mb-2 md:text-[13px]/4 xl:font-normal xl:pb-5 xl:text-[17px]/6">
              {car.exDesc}
            </p>
            {car.trim?.map((feature, idx) => (
              <div key={idx} className="flex items-start md:w-[100%] gap-1">
                <TbPointFilled className="pointer" />
                <p className="text-[18px] md:font-semibold md:text-[13px]/4 xl:text-[17px]/5 xl:font-normal">
                  {feature}
                </p>
              </div>
            ))}
            <h2 className="text-xl md:text-[18px]/5 xl:text-xl">
              {car.exclusive && car.exclusive}
            </h2>
            {car.exTrim?.map((feature, idx) => (
              <div key={idx} className="flex items-start md:w-[100%] gap-1">
                <TbPointFilled className="pointer" />
                <p className="text-[18px] md:font-semibold md:text-[13px] xl:font-normal xl:text-[17px]">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
        {car.exclusiveHeader && <div
          className={
            car.name === "Telluride" || car.name === "Soul"
              ? "bg-[#F2F2F2] mt-10 md:flex flex-row justify-between md:items-start pt-6 pb-30 text-black"
              : "bg-[#F2F2F2] md:flex flex-row-reverse justify-between md:items-center md:pb-10 mt-0 pt-6 pb-20 text-black"
          }
        >
          <div className="md:w-[100%] xl:w-[50%]">
            <img src={car.largePixTwo} alt={car.name} className="model-pix" />
          </div>
          <div className="md:w-[85%] xl:w-[52%] px-8 md:px-14 mt-6">
            <h5 className="font-semibold md:text-[12px] xl:text-[12px]">
              {car.standardTrim}
            </h5>
            <h1 className="text-[35px]/7 md:text-[30px] xl:text-[40px]/10 my-2 md:my-0 font-semibold">
              {car.exclusiveHeader}
            </h1>
            <p className="mt-4 text-[18px] md:font-semibold md:mb-2 md:text-[13px]/4 xl:pb-5 xl:text-[17px]/6 xl:font-normal">
              {car.desc}
            </p>
            {car.standTrim?.map((feature, idx) => (
              <div key={idx} className="flex items-start md:w-[100%] gap-1">
                <TbPointFilled className="pointer" />
                <p className="text-[18px] md:font-semibold md:text-[13px] xl:font-normal xl:text-[17px]">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>}
      </section>
      <section>
        <div className="relative">
          <img
            src="/images/warranty-black.png"
            alt="warranty"
            className="hundred-yrs"
          />
          <picture>
            <source
              media="(max-width: 650px)"
              srcSet="/images/100-year-warranty-mobile.jpg"
              alt="100 years warranty"
            />
            <source
              media="(max-width: 1200px)"
              srcSet="/images/100-years-warranty-tablet.avif"
              alt="100 years warranty"
            />
            <img
              src="/images/100-years-warranty-desktop.avif"
              alt="100 years warranty"
            />
          </picture>
          <div className="absolute left-[10%] right-[10%] top-[45%] md:left-12 md:top-16 md:text-left text-white text-center">
            <h1 className="text-4xl md:text-3xl font-semibold">
              Industry-Leading Warranty
            </h1>
            <p className="mt-4 text-[18px] md:text-[15px] md:w-[59%] xl:w-[50%]">
              Drive with confidence knowing you're covered by Kia's
              industry-leading 10-year/100,000-mile Limited Warranty.
            </p>
            <button className="border bg-white text-black font-semibold mt-6 px-28 md:px-12 py-3 cursor-pointer hover:underline">
              Learn More
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="text-black relative pb-30 mt-10">
          <h4 className="font-semibold text-center">INTERIOR</h4>
          <h1 className="text-center text-[25px] font-semibold mb-4">
            {car.interiorHeader}
          </h1>
          <div className="int-gal">
            {car.interior?.map((int, idx) => (
              <div
                className="interior-gallery-track md:flex md:gap-10 px-4"
                key={idx}
                style={{ transform: `translateX(-${interiorIdx * 100}%)` }}
              >
                {int.img ? (
                  <img src={int.img} alt="interior" className="interior-img" />
                ) : (
                  <video className="md:block" autoPlay loop muted playsInline>
                    <source src={int.vid} type="video/mp4" />
                  </video>
                )}
                <div className="gal">
                  <h1 className="my-2 font-semibold text-[20px]">
                    {int.title}
                  </h1>
                  <p className="text-[17px]">{int.info}</p>
                </div>
              </div>
            ))}
          </div>
          {car.name === "Telluride" || car.name === "Soul" ? (
            <div className="hidden relative md:flex flex-col-reverse px-8 md:block">
              <div className="w-full">
                {car.interior?.map((int, idx) => (
                  <div className="mt-10" key={idx}>
                    {idx === interiorIdx && (
                      <>
                        {int.img ? (
                          <img
                            src={int.img}
                            alt="interior"
                            className={`tech-img ${isLoaded ? "loaded" : ""}`}
                            onLoad={() => setIsloaded(true)}
                          />
                        ) : (
                          <video
                            className="md:w-[350px] xl:w-[550px]"
                            autoPlay
                            loop
                            muted
                            playsInline
                          >
                            <source src={int.vid} type="video/mp4" />
                          </video>
                        )}
                      </>
                    )}
                  </div>
                ))}
              </div>
              <div className="tech w-[50%]">
                {car.interior?.map((int, idx) => (
                  <div
                    onClick={() => setInteriorIdx(idx)}
                    style={{ transform: `translateX(-${interiorIdx * 100}%)` }}
                    className={`tech-gallery-track hover:opacity-100 transition duration-300 cursor-pointer ${
                      idx === interiorIdx ? "opacity-100" : "opacity-25"
                    }`}
                    key={idx}
                  >
                    <h1 className="text-xl font-semibold py-3">{int.title}</h1>
                    <p className="text-[16.5px]">{int.info}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="hidden relative md:flex px-8 md:block">
              <div className="w-[80%]">
                {car.interior?.map((int, idx) => (
                  <div key={idx}>
                    {idx === interiorIdx && (
                      <>
                        {int.img ? (
                          <img
                            src={int.img}
                            alt="interior"
                            className={`interior-img ${
                              isLoaded ? "loaded" : ""
                            }`}
                            onLoad={() => setIsloaded(true)}
                          />
                        ) : (
                          <video
                            className="md:w-[350px] xl:w-[550px] md:block"
                            autoPlay
                            loop
                            muted
                            playsInline
                          >
                            <source src={int.vid} type="video/mp4" />
                          </video>
                        )}
                      </>
                    )}
                  </div>
                ))}
              </div>
              <div className="int w-[50%]">
                {car.interior?.map((int, idx) => (
                  <div
                    onClick={() => setInteriorIdx(idx)}
                    className={`hover:opacity-100 transition duration-300 cursor-pointer ${
                      idx === interiorIdx ? "opacity-100" : "opacity-25"
                    }`}
                    key={idx}
                  >
                    <h1 className="text-xl font-semibold py-3">{int.title}</h1>
                    <h1>{int.info}</h1>
                  </div>
                ))}
              </div>
            </div>
          )}
          {car.name === "Telluride" || car.name === "Soul" ? (
            <>
              <div onClick={moveUp} className="gallery_arrow_up int_arrow_up">
                <FaArrowLeft className="arrow-down" />
              </div>
              <div
                onClick={moveDown}
                className="gallery_arrow_down int_arrow_down"
              >
                <FaArrowRight className="arrow-up" />
              </div>

              <div onClick={moveUp} className="tech-arrow-right">
                <FaArrowLeft className="tech_arrow_up" />
              </div>
              <div onClick={moveDown} className="tech-arrow-left">
                <FaArrowRight className="tech_arrow_down" />
              </div>
            </>
          ) : (
            <>
              <div
                onClick={moveIntUp}
                className="gallery_arrow_up int_arrow_up"
              >
                <FaArrowLeft className="arrow-down" />
              </div>
              <div
                onClick={moveIntDown}
                className="gallery_arrow_down int_arrow_down"
              >
                <FaArrowRight className="arrow-up" />
              </div>
              <div onClick={moveIntUp} className="__up">
                <IoArrowUp className="_up" />
              </div>
              <div onClick={moveIntDown} className="__down">
                <IoArrowDown className="_down" />
              </div>
            </>
          )}
          {car.name === "Telluride" || car.name === "Soul" ? (
            <>
              <div className="gallery-list tech-list">
                <span className="mr-1">{interiorIdx + 1}</span>/
                <span className="ml-1">{intLength}</span>
              </div>
            </>
          ) : (
            <>
              <div className="gallery-list int-list">
                <span className="mr-1">{interiorIdx + 1}</span>/
                <span className="ml-1">{intLength}</span>
              </div>
            </>
          )}
        </div>
      </section>
      <section>
        {car.technology && (
          <div className="text-black relative pb-30 mt-10">
            <div className="px-10">
              <h4 className="font-semibold text-center md:text-left">
                TECHNOLOGY
              </h4>
              <h1 className="text-center text-[30px] md:text-left font-semibold mb-4">
                {car.techHeader}
              </h1>
            </div>
            <div className="int-gal">
              {car.technology?.map((int, idx) => (
                <div
                  className="interior-gallery-track md:flex md:gap-10 px-4"
                  key={idx}
                  style={{ transform: `translateX(-${techIdx * 100}%)` }}
                >
                  {int.img ? (
                    <img
                      src={int.img}
                      alt="interior"
                      onLoad={() => setIsloaded(true)}
                      className={`tech-img ${isLoaded ? "loaded" : ""}`}
                    />
                  ) : (
                    <video autoPlay loop muted playsInline>
                      <source src={int.vid} type="video/mp4" />
                    </video>
                  )}
                  <div className="gal">
                    <h1 className="my-2 font-semibold text-[20px]">
                      {int.title}
                    </h1>
                    <p className="text-[17px]">{int.info}</p>
                  </div>
                </div>
              ))}
            </div>
            {car.name === "Telluride" || car.name === "Soul" ? (
              <div className="hidden relative md:flex px-8 md:block">
                <div className="w-[80%]">
                  {car.technology?.map((int, idx) => (
                    <div key={idx}>
                      {idx === techIdx && (
                        <>
                          {int.img ? (
                            <img
                              src={int.img}
                              alt="interior"
                              className={`interior-img ${
                                isLoaded ? "loaded" : ""
                              }`}
                              onLoad={() => setIsloaded(true)}
                            />
                          ) : (
                            <video
                              className="md:w-[350px] xl:w-[550px] md:block"
                              autoPlay
                              loop
                              muted
                              playsInline
                            >
                              <source src={int.vid} type="video/mp4" />
                            </video>
                          )}
                        </>
                      )}
                    </div>
                  ))}
                </div>
                <div className="int w-[50%]">
                  {car.technology?.map((int, idx) => (
                    <div
                      onClick={() => setTechIdx(idx)}
                      className={`hover:opacity-100 transition duration-300 cursor-pointer ${
                        idx === techIdx ? "opacity-100" : "opacity-25"
                      }`}
                      key={idx}
                    >
                      <h1 className="text-xl font-semibold py-3">
                        {int.title}
                      </h1>
                      <h1>{int.info}</h1>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="hidden relative md:flex flex-col px-8 md:block">
                <div className="w-full">
                  {car.technology?.map((int, idx) => (
                    <div key={idx}>
                      {idx === techIdx && (
                        <>
                          {int.img ? (
                            <img
                              src={int.img}
                              alt="interior"
                              className={`tech-img ${isLoaded ? "loaded" : ""}`}
                              onLoad={() => setIsloaded(true)}
                            />
                          ) : (
                            <video
                              className="w-[100%]"
                              autoPlay
                              loop
                              muted
                              playsInline
                            >
                              <source src={int.vid} type="video/mp4" />
                            </video>
                          )}
                        </>
                      )}
                    </div>
                  ))}
                </div>
                <div className="tech w-[50%]">
                  {car.technology?.map((int, idx) => (
                    <div
                      style={{ transform: `translateX(-${techIdx * 100}%)` }}
                      onClick={() => setTechIdx(idx)}
                      className={`tech-gallery-track hover:opacity-100 transition duration-300 cursor-pointer ${
                        idx === techIdx ? "opacity-100" : "opacity-25"
                      }`}
                      key={idx}
                    >
                      <h1 className="text-xl font-semibold py-3">
                        {int.title}
                      </h1>
                      <p className="text-[16.5px]">{int.info}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {car.name === "Telluride" || car.name === "Soul" ? (
              <>
                <div onClick={moveUp} className="gallery_arrow_up int_arrow_up">
                  <FaArrowLeft className="arrow-down" />
                </div>
                <div
                  onClick={moveDown}
                  className="gallery_arrow_down int_arrow_down"
                >
                  <FaArrowRight className="arrow-up" />
                </div>

                <div onClick={moveUp} className="__up">
                  <IoArrowUp className="_up" />
                </div>
                <div onClick={moveDown} className="__down">
                  <IoArrowDown className="_down" />
                </div>
              </>
            ) : (
              <>
                <div
                  onClick={moveTechUp}
                  className="gallery_arrow_up int_arrow_up"
                >
                  <FaArrowLeft className="arrow-down" />
                </div>
                <div
                  onClick={moveTechDown}
                  className="gallery_arrow_down int_arrow_down"
                >
                  <FaArrowRight className="arrow-up" />
                </div>

                <div onClick={moveTechUp} className="tech-arrow-right">
                  <FaArrowLeft className="tech_arrow_up" />
                </div>
                <div onClick={moveTechDown} className="tech-arrow-left">
                  <FaArrowRight className="tech_arrow_down" />
                </div>
              </>
            )}
            {car.name === "Telluride" || car.name === "Soul" ? (
              <>
                <div className="gallery-list int-list">
                  <span className="mr-1">{techIdx + 1}</span>/
                  <span className="ml-1">{techLength}</span>
                </div>
              </>
            ) : (
              <>
                <div className="gallery-list tech-list">
                  <span className="mr-1">{techIdx + 1}</span>/
                  <span className="ml-1">{techLength}</span>
                </div>
              </>
            )}
          </div>
        )}
      </section>
      <section>
        {car.connectivity && (
          <div className="text-black relative pb-30 mt-10">
            <h4 className="font-semibold text-center">CONNECTIVITY</h4>
            <h1 className="text-center text-[25px] font-semibold mb-4">
              {car.connectHeader}
            </h1>
            <div className="int-gal">
              {car.connectivity?.map((int, idx) => (
                <div
                  className="interior-gallery-track md:flex md:gap-10 px-4"
                  key={idx}
                  style={{ transform: `translateX(-${connectIdx * 100}%)` }}
                >
                  {int.img ? (
                    <img
                      src={int.img}
                      alt="interior"
                      className="interior-img"
                    />
                  ) : (
                    <video className="md:block" autoPlay loop muted playsInline>
                      <source src={int.vid} type="video/mp4" />
                    </video>
                  )}
                  <div className="gal">
                    <h1 className="my-2 font-semibold text-[20px]">
                      {int.title}
                    </h1>
                    <p className="text-[17px]">{int.info}</p>
                  </div>
                </div>
              ))}
            </div>
            {car.name === "Soul" ? (
              <div className="hidden relative md:flex flex-col-reverse px-8 md:block">
                <div className="w-full">
                  {car.connectivity?.map((int, idx) => (
                    <div className="mt-10" key={idx}>
                      {idx === connectIdx && (
                        <>
                          {int.img ? (
                            <img
                              src={int.img}
                              alt="interior"
                              className={`tech-img ${isLoaded ? "loaded" : ""}`}
                              onLoad={() => setIsloaded(true)}
                            />
                          ) : (
                            <video
                              className="md:w-[350px] xl:w-[550px]"
                              autoPlay
                              loop
                              muted
                              playsInline
                            >
                              <source src={int.vid} type="video/mp4" />
                            </video>
                          )}
                        </>
                      )}
                    </div>
                  ))}
                </div>
                <div className="tech w-[50%]">
                  {car.connectivity?.map((int, idx) => (
                    <div
                      onClick={() => setConnectIdx(idx)}
                      className={`tech-gallery-track hover:opacity-100 transition duration-300 cursor-pointer ${
                        idx === connectIdx ? "opacity-100" : "opacity-25"
                      }`}
                      key={idx}
                    >
                      <h1 className="text-xl font-semibold py-3">
                        {int.title}
                      </h1>
                      <p className="text-[16.5px]">{int.info}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="hidden relative md:flex flex-row-reverse justify-between px-8 md:block">
                <div className="w-[50%]">
                  {car.connectivity?.map((int, idx) => (
                    <div key={idx}>
                      {idx === connectIdx && (
                        <>
                          {int.img ? (
                            <img
                              src={int.img}
                              alt="interior"
                              className={`interior-img ${
                                isLoaded ? "loaded" : ""
                              }`}
                              onLoad={() => setIsloaded(true)}
                            />
                          ) : (
                            <video
                              className="md:w-[350px] xl:w-[550px] md:block"
                              autoPlay
                              loop
                              muted
                              playsInline
                            >
                              <source src={int.vid} type="video/mp4" />
                            </video>
                          )}
                        </>
                      )}
                    </div>
                  ))}
                </div>
                <div className="int w-[50%]">
                  {car.connectivity?.map((int, idx) => (
                    <div
                      onClick={() => setConnectIdx(idx)}
                      className={`hover:opacity-100 transition duration-300 cursor-pointer ${
                        idx === connectIdx ? "opacity-100" : "opacity-25"
                      }`}
                      key={idx}
                    >
                      <h1 className="text-xl font-semibold py-3">
                        {int.title}
                      </h1>
                      <h1 className="xl:w-[80%] md:w-[90%]">{int.info}</h1>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {car.name === "Soul" ? (
              <>
                <div
                  onClick={moveConUp}
                  className="gallery_arrow_up int_arrow_up"
                >
                  <FaArrowLeft className="arrow-down" />
                </div>
                <div
                  onClick={moveConDown}
                  className="gallery_arrow_down int_arrow_down"
                >
                  <FaArrowRight className="arrow-up" />
                </div>

                <div onClick={moveConUp} className="tech-arrow-right">
                  <FaArrowLeft className="tech_arrow_up" />
                </div>
                <div onClick={moveConDown} className="tech-arrow-left">
                  <FaArrowRight className="tech_arrow_down" />
                </div>
              </>
            ) : (
              <>
                <div onClick={moveConUp} className="connect_left_bg">
                  <FaArrowLeft className="connect-arrow-left" />
                </div>
                <div onClick={moveConDown} className="connect_right_bg">
                  <FaArrowRight className="connect-arrow-right" />
                </div>
                <div onClick={moveConUp} className="hidden connect__up">
                  <IoArrowUp className="connect_up" />
                </div>
                <div onClick={moveConDown} className="hidden connect__down">
                  <IoArrowDown className="connect_down" />
                </div>
              </>
            )}
            {car.name === "Telluride" || car.name === "Soul" ? (
              <>
                <div className="gallery-list tech-list connect-list">
                  <span className="mr-1">{connectIdx + 1}</span>/
                  <span className="ml-1">{connectLength}</span>
                </div>
              </>
            ) : (
              <>
                <div className="gallery-list int-list connect-list">
                  <span className="mr-1">{connectIdx + 1}</span>/
                  <span className="ml-1">{connectLength}</span>
                </div>
              </>
            )}
          </div>
        )}
      </section>
      {car.performance && (
        <section>
          <div className="text-black relative pb-30 mt-10">
            <h4 className="font-semibold text-center">PERFORMANCE</h4>
            <h1 className="text-center text-[25px] font-semibold mb-4">
              {car.perfHeader}
            </h1>
            <div className="int-gal">
              {car.performance?.map((int, idx) => (
                <div
                  className="interior-gallery-track md:flex md:gap-10 px-4"
                  key={idx}
                  style={{ transform: `translateX(-${performanceIdx * 100}%)` }}
                >
                  {int.img ? (
                    <img
                      src={int.img}
                      alt="interior"
                      className="interior-img"
                    />
                  ) : (
                    <video className="md:block" autoPlay loop muted playsInline>
                      <source src={int.vid} type="video/mp4" />
                    </video>
                  )}
                  <div className="gal">
                    <h1 className="my-2 font-semibold text-[20px]">
                      {int.title}
                    </h1>
                    <p className="text-[17px]">{int.info}</p>
                  </div>
                </div>
              ))}
            </div>
            {car.name === "Telluride" || car.name === "Soul" ? (
              <div className="hidden relative md:flex flex-col-reverse px-8 md:block">
                <div className="w-full">
                  {car.performance?.map((int, idx) => (
                    <div className="mt-10" key={idx}>
                      {idx === performanceIdx && (
                        <>
                          {int.img ? (
                            <img
                              src={int.img}
                              alt="interior"
                              className={`tech-img ${isLoaded ? "loaded" : ""}`}
                              onLoad={() => setIsloaded(true)}
                            />
                          ) : (
                            <video
                              className="md:w-[350px] xl:w-[550px]"
                              autoPlay
                              loop
                              muted
                              playsInline
                            >
                              <source src={int.vid} type="video/mp4" />
                            </video>
                          )}
                        </>
                      )}
                    </div>
                  ))}
                </div>
                <div className="tech w-[50%]">
                  {car.performance?.map((int, idx) => (
                    <div
                      onClick={() => setPerformanceIdx(idx)}
                      style={{
                        transform: `translateX(-${performanceIdx * 100}%)`,
                      }}
                      className={`tech-gallery-track hover:opacity-100 transition duration-300 cursor-pointer ${
                        idx === performanceIdx ? "opacity-100" : "opacity-25"
                      }`}
                      key={idx}
                    >
                      <h1 className="text-xl font-semibold py-3">
                        {int.title}
                      </h1>
                      <p className="text-[16.5px]">{int.info}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="hidden relative md:flex px-8 md:block">
                <div className="w-[80%]">
                  {car.performance?.map((int, idx) => (
                    <div key={idx}>
                      {idx === performanceIdx && (
                        <>
                          {int.img ? (
                            <img
                              src={int.img}
                              alt="interior"
                              className={`interior-img ${
                                isLoaded ? "loaded" : ""
                              }`}
                              onLoad={() => setIsloaded(true)}
                            />
                          ) : (
                            <video
                              className="md:w-[350px] xl:w-[550px] md:block"
                              autoPlay
                              loop
                              muted
                              playsInline
                            >
                              <source src={int.vid} type="video/mp4" />
                            </video>
                          )}
                        </>
                      )}
                    </div>
                  ))}
                </div>
                <div className="int w-[50%]">
                  {car.performance?.map((int, idx) => (
                    <div
                      onClick={() => setPerformanceIdx(idx)}
                      className={`hover:opacity-100 transition duration-300 cursor-pointer ${
                        idx === performanceIdx ? "opacity-100" : "opacity-25"
                      }`}
                      key={idx}
                    >
                      <h1 className="text-xl font-semibold py-3">
                        {int.title}
                      </h1>
                      <h1>{int.info}</h1>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {car.name === "Telluride" || car.name === "Soul" ? (
              <>
                <div
                  onClick={movePerfUp}
                  className="gallery_arrow_up int_arrow_up"
                >
                  <FaArrowLeft className="arrow-down" />
                </div>
                <div
                  onClick={movePerfDown}
                  className="gallery_arrow_down int_arrow_down"
                >
                  <FaArrowRight className="arrow-up" />
                </div>

                <div onClick={movePerfUp} className="tech-arrow-right">
                  <FaArrowLeft className="tech_arrow_up" />
                </div>
                <div onClick={movePerfDown} className="tech-arrow-left">
                  <FaArrowRight className="tech_arrow_down" />
                </div>
              </>
            ) : (
              <>
                <div
                  onClick={movePerfUp}
                  className="gallery_arrow_up int_arrow_up"
                >
                  <FaArrowLeft className="arrow-down" />
                </div>
                <div
                  onClick={movePerfDown}
                  className="gallery_arrow_down int_arrow_down"
                >
                  <FaArrowRight className="arrow-up" />
                </div>
                <div onClick={movePerfUp} className="__up">
                  <IoArrowUp className="_up" />
                </div>
                <div onClick={movePerfDown} className="__down">
                  <IoArrowDown className="_down" />
                </div>
              </>
            )}
            {car.name === "Telluride" || car.name === "Soul" ? (
              <>
                <div className="gallery-list tech-list">
                  <span className="mr-1">{performanceIdx + 1}</span>/
                  <span className="ml-1">{perfLength}</span>
                </div>
              </>
            ) : (
              <>
                <div className="gallery-list int-list">
                  <span className="mr-1">{performanceIdx + 1}</span>/
                  <span className="ml-1">{perfLength}</span>
                </div>
              </>
            )}
          </div>
        </section>
      )}
      {car.exterior && (
        <section>
          {car.exterior && (
            <div className="text-black relative pb-30 mt-10">
              <div className="px-10">
                <h4 className="font-semibold text-center md:text-left">
                  EXTERIOR
                </h4>
                <h1 className="text-center text-[25px]/6 md:text-left font-semibold mb-4">
                  {car.exteriorHeader}
                </h1>
              </div>
              <div className="int-gal">
                {car.exterior?.map((int, idx) => (
                  <div
                    style={{ transform: `translateX(-${exteriorIdx * 100}%)` }}
                    className="interior-gallery-track md:flex md:gap-10 px-4"
                    key={idx}
                  >
                    {int.img ? (
                      <img
                        src={int.img}
                        alt="interior"
                        onLoad={() => setIsloaded(true)}
                        className={`tech-img ${isLoaded ? "loaded" : ""}`}
                      />
                    ) : (
                      <video autoPlay loop muted playsInline>
                        <source src={int.vid} type="video/mp4" />
                      </video>
                    )}
                    <div className="gal">
                      <h1 className="my-2 font-semibold text-[20px]">
                        {int.title}
                      </h1>
                      <p className="text-[17px]">{int.info}</p>
                    </div>
                  </div>
                ))}
              </div>
              {car.name === "Telluride" || car.name === "Soul" ? (
                <div className="hidden relative md:flex px-8 md:block">
                  <div className="w-[80%]">
                    {car.exterior?.map((int, idx) => (
                      <div key={idx}>
                        {idx === exteriorIdx && (
                          <>
                            {int.img ? (
                              <img
                                src={int.img}
                                alt="interior"
                                className={`interior-img ${
                                  isLoaded ? "loaded" : ""
                                }`}
                                onLoad={() => setIsloaded(true)}
                              />
                            ) : (
                              <video
                                className="md:w-[350px] xl:w-[550px] md:block"
                                autoPlay
                                loop
                                muted
                                playsInline
                              >
                                <source src={int.vid} type="video/mp4" />
                              </video>
                            )}
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="int w-[50%]">
                    {car.exterior?.map((int, idx) => (
                      <div
                        onClick={() => setExteriorIdx(idx)}
                        className={`hover:opacity-100 transition duration-300 cursor-pointer ${
                          idx === exteriorIdx ? "opacity-100" : "opacity-25"
                        }`}
                        key={idx}
                      >
                        <h1 className="text-xl font-semibold py-3">
                          {int.title}
                        </h1>
                        <h1>{int.info}</h1>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="hidden relative md:flex flex-col px-8 md:block">
                  <div className="w-full">
                    {car.exterior?.map((int, idx) => (
                      <div key={idx}>
                        {idx === exteriorIdx && (
                          <>
                            {int.img ? (
                              <img
                                src={int.img}
                                alt="interior"
                                className={`tech-img ${
                                  isLoaded ? "loaded" : ""
                                }`}
                                onLoad={() => setIsloaded(true)}
                              />
                            ) : (
                              <video
                                className="w-[100%]"
                                autoPlay
                                loop
                                muted
                                playsInline
                              >
                                <source src={int.vid} type="video/mp4" />
                              </video>
                            )}
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="tech w-[50%]">
                    {car.exterior?.map((int, idx) => (
                      <div
                        style={{
                          transform: `translateX(-${exteriorIdx * 100}%)`,
                        }}
                        onClick={() => setExteriorIdx(idx)}
                        className={`tech-gallery-track hover:opacity-100 transition duration-300 cursor-pointer ${
                          idx === exteriorIdx ? "opacity-100" : "opacity-25"
                        }`}
                        key={idx}
                      >
                        <h1 className="text-xl font-semibold py-3">
                          {int.title}
                        </h1>
                        <p className="text-[16.5px]">{int.info}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {car.name === "Telluride" || car.name === "Soul" ? (
                <>
                  <div
                    onClick={moveExtUp}
                    className="gallery_arrow_up int_arrow_up"
                  >
                    <FaArrowLeft className="arrow-down" />
                  </div>
                  <div
                    onClick={moveExtDown}
                    className="gallery_arrow_down int_arrow_down"
                  >
                    <FaArrowRight className="arrow-up" />
                  </div>

                  <div onClick={moveExtUp} className="__up">
                    <IoArrowUp className="_up" />
                  </div>
                  <div onClick={moveExtDown} className="__down">
                    <IoArrowDown className="_down" />
                  </div>
                </>
              ) : (
                <>
                  <div
                    onClick={moveExtUp}
                    className="gallery_arrow_up int_arrow_up"
                  >
                    <FaArrowLeft className="arrow-down" />
                  </div>
                  <div
                    onClick={moveExtDown}
                    className="gallery_arrow_down int_arrow_down"
                  >
                    <FaArrowRight className="arrow-up" />
                  </div>

                  <div onClick={moveExtUp} className="tech-arrow-right">
                    <FaArrowLeft className="tech_arrow_up" />
                  </div>
                  <div onClick={moveExtDown} className="tech-arrow-left">
                    <FaArrowRight className="tech_arrow_down" />
                  </div>
                </>
              )}
              {car.name === "Telluride" || car.name === "Soul" ? (
                <>
                  <div className="gallery-list int-list">
                    <span className="mr-1">{exteriorIdx + 1}</span>/
                    <span className="ml-1">{extLength}</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="gallery-list tech-list">
                    <span className="mr-1">{exteriorIdx + 1}</span>/
                    <span className="ml-1">{extLength}</span>
                  </div>
                </>
              )}
            </div>
          )}
        </section>
      )}
      <section>
        {car.driver && (
          <div className="text-black relative pb-30 mt-10">
            <div className="px-10">
              <h4 className="font-semibold text-center md:text-left">
                DRIVER ASSISTANCE TECHNOLOGY
              </h4>
              <h1 className="text-center text-[25px] md:text-left font-semibold mb-4">
                {car.driveHeader}
              </h1>
            </div>
            <div className="int-gal">
              {car.driver?.map((int, idx) => (
                <div
                  style={{ transform: `translateX(-${driveIdx * 100}%)` }}
                  className="interior-gallery-track md:flex md:gap-10 px-4"
                  key={idx}
                >
                  {int.img ? (
                    <img
                      src={int.img}
                      alt="interior"
                      onLoad={() => setIsloaded(true)}
                      className={`drive-img ${isLoaded ? "loaded" : ""}`}
                    />
                  ) : (
                    <video autoPlay loop muted playsInline>
                      <source src={int.vid} type="video/mp4" />
                    </video>
                  )}
                  <div className="gal">
                    <h1 className="my-2 font-semibold text-[20px]">
                      {int.title}
                    </h1>
                    <p className="text-[17px]">{int.info}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="hidden relative md:flex flex-col px-8 md:block">
              <div className="w-full">
                {car.driver?.map((int, idx) => (
                  <div key={idx}>
                    {idx === driveIdx && (
                      <>
                        {int.img ? (
                          <img
                            src={int.img}
                            alt="interior"
                            className={`drive-img ${isLoaded ? "loaded" : ""}`}
                            onLoad={() => setIsloaded(true)}
                          />
                        ) : (
                          <video
                            className="w-[100%]"
                            autoPlay
                            loop
                            muted
                            playsInline
                          >
                            <source src={int.vid} type="video/mp4" />
                          </video>
                        )}
                      </>
                    )}
                  </div>
                ))}
              </div>
              <div className="tech w-[50%]">
                {car.driver?.map((int, idx) => (
                  <div
                    style={{ transform: `translateX(-${driveIdx * 100}%)` }}
                    onClick={() => setDriveIdx(idx)}
                    className={`tech-gallery-track hover:opacity-100 transition duration-300 cursor-pointer ${
                      idx === driveIdx ? "opacity-100" : "opacity-25"
                    }`}
                    key={idx}
                  >
                    <h1 className="text-xl font-semibold py-3">{int.title}</h1>
                    <p className="text-[16.5px]">{int.info}</p>
                  </div>
                ))}
              </div>
            </div>
            <div
              onClick={moveDriveUp}
              className="gallery_arrow_up int_arrow_up"
            >
              <FaArrowLeft className="arrow-down" />
            </div>
            <div
              onClick={moveDriveDown}
              className="gallery_arrow_down int_arrow_down"
            >
              <FaArrowRight className="arrow-up" />
            </div>

            <div onClick={moveDriveUp} className="tech-arrow-right">
              <FaArrowLeft className="tech_arrow_up" />
            </div>
            <div onClick={moveDriveDown} className="tech-arrow-left">
              <FaArrowRight className="tech_arrow_down" />
            </div>
            <div className="gallery-list tech-list">
              <span className="mr-1">{driveIdx + 1}</span>/
              <span className="ml-1">{driveLength}</span>
            </div>
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
};

export default ElectricDetails;
