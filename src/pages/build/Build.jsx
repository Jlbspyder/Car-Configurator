import { Fragment, useEffect, useRef, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { suvModels } from "../../data";
import { FiArrowLeftCircle } from "react-icons/fi";
import { FiArrowRightCircle } from "react-icons/fi";
import { IoIosArrowDropup } from "react-icons/io";
import { PiCalculatorThin } from "react-icons/pi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { TbPointFilled } from "react-icons/tb";
import { TbCurrencyDollar } from "react-icons/tb";
import { MdEdit } from "react-icons/md";
import "./build.css";
import Navbar from "../../components/homepage/navbar/Navbar";

const Build = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [currentModelIdx, setCurrentModelIdx] = useState(7);
  const [currentTrimIdx, setCurrentTrimIdx] = useState(0);
  const [amount, setAmount] = useState(false);
  const [viewFeatures, setViewFeatures] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [exterior, setExterior] = useState(false);
  const [touchPosition, setTouchPosition] = useState(null);
  const [currentStep, setcurrentStep] = useState(0);

  const steps = ["Trim", "Exterior", "Summary", "View"];

  const { id, name } = useParams();
  const navigate = useNavigate();
  const specContainerRef = useRef(null);

  const scrollToSpecContainer = (idx) => {
    const container = specContainerRef.current;
    const box = container.children[idx];
    if (container && box) {
      const containerRect = container.getBoundingClientRect();
      const boxRect = box.getBoundingClientRect();

      const scrollLeft =
        boxRect.left -
        containerRect.left +
        container.scrollLeft -
        (container.clientWidth / 2 - box.clientWidth / 2);

      container.scrollTo({
        left: scrollLeft,
        behaviour: "smooth",
      });
    }
  };

  useEffect(() => {
    if (viewFeatures) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [viewFeatures]);

  const car = suvModels?.flatMap((model) => model.specs);

  const model = suvModels?.find((model) => model.name === name);
  const trims = car?.find((spec) => spec.id === parseInt(id));

  const [selectedSpec, setSelectedSpec] = useState(trims.id);
  const spec = model?.specs.find((spec) => spec.id === selectedSpec);

  const [trim, setTrim] = useState("");

  const colors = Object.keys(spec.colors);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedOption, setSelectedOption] = useState(spec.name);
  const [price, setPrice] = useState(null);
  const [estPayments, setEstPayments] = useState(0)

  const choiceCar = spec?.colors[selectedColor].map((color) => color);

  useEffect(() => {
    setLoaded(false);
  }, [currentModelIdx]);

  useEffect(() => {
    if (choiceCar[currentModelIdx + 1]) {
      const img = new Image();
      img.src = choiceCar[currentModelIdx + 1];
    }
  }, [currentModelIdx, choiceCar]);

  const handleUpdateSpec = (idx, id, name) => {
    setSelectedOption(spec.name);
    setAmount(true);
    setSelectedSpec(id);
    setSelectedColor(selectedColor);
    setCurrentIdx(idx);
    setCurrentModelIdx(7);
    setCurrentTrimIdx(0);
    setTrim(name);
    monthlyPayments()
  };

  const buildTotal = () => {
    let delivery = 1445;
    let buildTotal;
    return (buildTotal = Number(delivery) + Number(spec.price) + Number(price));
  };


  const monthlyPayments = () => {
    const downPayment = spec.price / 10
    const  loanMonths = 60
    const interestRate = 0.03

    const loanAmount = spec.price - downPayment

    // Monthly payment
    const monthlyInterestRate = interestRate / 12

    const monthlyPayment = (loanAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanMonths))) / (Math.pow(1 + monthlyInterestRate, loanMonths) - 1);
    
    setEstPayments(monthlyPayment)
  }


  useEffect(() => {
    setSelectedOption(spec.name);
  }, [spec.name]);

  const handleNextBtn = () => {
    setcurrentStep((prev) => prev + 1);
  };

  let carChoice = spec.hex.map((spe) => spe.name.replace(/\s+/g, ""));
  const [selectedTrim, setSelectedTrim] = useState(carChoice[0]);


  const nextImage = () => {
    setCurrentModelIdx((prev) => (prev === 7 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentModelIdx((prev) => (prev === 0 ? 7 : prev - 1));
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
      nextImage();
    }

    if (diff < -5) {
      prevImage();
    }

    setTouchPosition(null);
  };

  return (
    <>
      <div
        onClick={() => setViewFeatures(false)}
        className={`feat-wrapper z-700 ${viewFeatures ? "active" : ""}`}
      >
        <div className="feat">
          <div
            onClick={() => setViewFeatures(false)}
            className="flex items-center cursor-pointer bg-gray-100 py-4 md:pt-2 pl-2"
          >
            <IoIosArrowBack className="feat-back-arrow" />
            <p className="text-[20px]">Back</p>
          </div>
          {spec?.features?.map((feature, idx) => (
            <div key={idx}>
              {idx === currentTrimIdx && (
                <h1 className="text-4xl mt-4 pl-4 pt-4 mb-4 md:pt-0 font-semibold">
                  Features
                </h1>
              )}
              <div className="flex items-start gap-1 pt-2 px-4 ">
                <TbPointFilled className="point" />
                <p className="text-[20px] md:text-[18px]">{feature}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Navbar />
      {
        <div className="mt-15 text-black">
          <div className="xl:hidden build flex overflow-x-hidden">
            <nav className="bg-black fixed left-0 right-0 md:top-[50px] z-50 md:w-full text-white h-[70px] md:h-[70px] px-3 md:px-4 gap-1 flex flex-col items-center">
              <div className="relative h-[6px] mt-[20px] w-[100%] bg-[#9ea1a2]">
                <div
                  style={{
                    width:
                      currentStep === 0
                        ? "55%"
                        : currentStep === 1
                        ? "75%"
                        : "100%",
                    height: "100%",
                    background: "#fff",
                  }}
                ></div>
              </div>
              <div className="flex items-center justify-between w-full md:h-[40px]">
                <li className="flex self-start">Model</li>
                <li className="flex">Fuel Type</li>
                <li className="" onClick={() => setcurrentStep(0)}>
                  Trim
                </li>
                <li
                  className="flex self-start"
                  onClick={() => setcurrentStep(1)}
                >
                  Exterior
                </li>
                <li>Summary</li>
              </div>
            </nav>
          </div>
          {currentStep === 2 && (
            <div className="summary text-white">
              <div className="h-full">
                <div>
                  <h1 className="text-3xl text-center">{spec.model}</h1>
                  <h1 className="text-center text-2xl">{spec.name}</h1>
                </div>
                <img src={choiceCar[7]} alt={spec.name} />
                <div className="md:hidden flex flex-col items-center gap-4">
                  <button className="bg-white text-black px-30 py-3 cursor-pointer font-semibold">
                    View Inventory
                  </button>
                  <button className="border px-28 py-3 cursor-pointer font-semibold">
                    Request a Quote
                  </button>
                </div>
              </div>
              <div className="border-t md:bg-[rgba(0,0,0,0.7)] border-gray-500 w-[83%] h-full md:h-[50%] xl:h-full md:mt-[-200px] xl:mt-0 xl:mr-0 md:mr-[20px] mt-10 md:w-[80%] xl:w-[50%] md:p-4 xl:px-8 xl:pt-20 xl:mt-[-50px]">
                <h1 className="my-4 font-semibold text-[18px] md:text-[15px] xl:text-[20px]">
                  Price Breakdown
                </h1>
                <div className="flex flex-col gap-6 md:gap-2 font-semibold">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center md:text-[13px] xl:text-[18px] gap-1">
                      <MdEdit className="edit" />
                      {spec.name}
                    </div>
                    <div className="md:text-[13px] xl:text-[18px]">
                      ${spec.price.toLocaleString()}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 md:gap-1 md:text-[13px] xl:text-[18px]">
                      <MdEdit className="edit" />
                      {selectedColor}
                    </div>
                    <div className="md:text-[13px] xl:text-[18px]">
                      {price ? `$${price}` : "$0"}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 md:gap-1 border-t border-gray-500 mt-5">
                  <div className="flex justify-between mt-5 md:text-[13px] xl:text-[18px]">
                    <p>Destination Fee</p>
                    <h3>$1,445</h3>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-2xl  md:text-[18px] xl:text-[22px]">
                      Build Total*
                    </p>
                    <h3 className="text-3xl md:text-[15px] xl:text-[22px]">
                      ${buildTotal().toLocaleString()}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          )}
          {currentStep !== 2 && (
            <section className="relative border model-build pt-10 pb-100 xl:pb-50">
              <FiArrowLeftCircle
                onClick={nextImage}
                className={`build-arrow-left ${
                  currentStep === 0 ? "optimize-left" : ""
                }`}
              />
              <FiArrowRightCircle
                onClick={prevImage}
                className={`build-arrow-right ${
                  currentStep === 0 ? "optimize-right" : ""
                }`}
              />
              <div className="flex relative flex-col items-center text-white font-semibold">
                <div className="flex flex-col items-center xl:flex-row xl:justify-between w-full">
                  <div className="flex flex-col items-center mt-16 md:mt-2 xl:mt-[-20px] md:items-start md:pl-10 xl:w-[40%] xl:self-start w-full">
                    <h1 className="text-2xl md:text-[35px]">{trims.model}</h1>
                    <h1 className="text-[20px]">{spec.name}</h1>
                    {model?.specs?.map((spec, idx) => (
                      <Fragment key={idx}>
                        <div className="hidden md:flex flex-row-reverse gap-2 items-center">
                          {idx === currentIdx && (
                            <p className="md:text-[15px] font-normal">
                              Starting MSRP*
                            </p>
                          )}
                          {idx === currentIdx && (
                            <h1 className="font-semibold md:text-[20px]">
                              ${spec.price.toLocaleString()}
                            </h1>
                          )}
                        </div>
                        {idx === currentIdx && (
                          <div className="hidden md:flex flex-row-reverse font-normal gap-1">
                            <p>est. lease payments*</p>
                            <h1 className="font-semibold">${estPayments.toFixed(2)} / 60mo</h1>
                          </div>
                        )}
                        {idx === currentIdx && (
                          <div className="hidden md:flex cursor-pointer items-center">
                            <PiCalculatorThin />
                            <p>Payment Calculator</p>
                          </div>
                        )}
                      </Fragment>
                    ))}
                  </div>
                  {spec?.colors[selectedColor].map((color, idx) =>
                    idx === currentModelIdx ? (
                      <div key={color} className="image-wrapper">
                        {!loaded && (
                          <img
                            src={color}
                            alt={`${spec.name} ${selectedColor}`}
                            className={`placeholder`}
                          />
                        )}
                        <img
                          src={color}
                          alt={`${spec.name} ${selectedColor}`}
                          onLoad={() => setLoaded(true)}
                          className={`build-image ${loaded ? "loaded" : ""}`}
                        />
                      </div>
                    ) : null
                  )}
                </div>
                {spec?.hex?.map((trim, idx) => (
                  <Fragment key={idx}>
                    {idx === currentTrimIdx && (
                      <>
                        {currentStep === 1 && (
                          <p className="color-text">
                            {trim.name} {trim.price && "+$"}{trim.price}
                          </p>
                        )}
                      </>
                    )}
                  </Fragment>
                ))}
                <div className="mt-10 md:mt-0 xl:mt-[-50px]">
                  {currentStep === 0 && (
                    <div className="flex items-center xl:pl-[5px] space-x-4 mb-6 xl:mb-8">
                      <h3
                        onClick={() => setExterior(false)}
                        className={`text-gray-300 cursor-pointer hover:text-white ${
                          exterior ? "" : "border-t-3 text-white"
                        }`}
                      >
                        Features
                      </h3>
                      <h3
                        onClick={() => setExterior(true)}
                        className={`text-gray-300 cursor-pointer hover:text-white ${
                          exterior ? "border-t-3 text-white" : ""
                        }`}
                      >
                        Exterior Colors
                      </h3>
                    </div>
                  )}
                  {currentStep === 0 && (
                    <div className="spec-container" ref={specContainerRef}>
                      {model?.specs?.map((spec, idx) => (
                        <div
                          key={spec.id}
                          onClick={() => {
                            handleUpdateSpec(idx, spec.id, spec.name),
                            scrollToSpecContainer(idx);
                          }}
                          className={
                            spec.name === selectedOption
                              ? "builder"
                              : "builder-inactive"
                          }
                        >
                          <h1 className="text-[24px]">{spec.name}</h1>
                          {!exterior ? (
                            <h1 className="text-[20px] font-bold">
                              ${spec?.price?.toLocaleString()}{" "}
                              <span className="text-[10px]">
                                Starting MSRP*
                              </span>
                            </h1>
                          ) : (
                            <h1 className="mb-1">
                              Available In {spec.hex.length} Exterior Colors
                            </h1>
                          )}
                          {exterior && (
                            <div className="flex flex-wrap gap-[2px]">
                              {spec?.hex?.map((trim) => (
                                <div key={trim.name}>
                                  <button
                                    className="color in-trim"
                                    style={{ backgroundColor: trim.hex }}
                                  ></button>
                                </div>
                              ))}
                            </div>
                          )}
                          {idx === currentIdx && amount && (
                            <div
                              onClick={() => setViewFeatures(true)}
                              className="flex items-center font-bold mt-2"
                            >
                              {<p>View Features</p>}
                              <MdKeyboardArrowRight className="build-arrow" />
                            </div>
                          )}
                          <div className="spec-list">
                            <span className="mr-1">{currentIdx + 1}</span>/
                            <span className="ml-1">{model.specs.length}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              {currentStep === 1 && (
                <div className="absolute color-code flex items-center justify-start w-full gap-2 overflow-x-auto top-[50%] left-0 flex right-0 md:top-[52%] xl:top-[62%] z-100 gap-1 md:gap-2 justify-center items-center xl:justify-center">
                  {spec?.hex?.map((trim, idx) => (
                    <div key={idx} className="relative">
                      <button
                        className={`color  ${
                          trim.name.replace(/\s+/g, "") === selectedTrim
                            ? "match"
                            : "bold"
                        }`}
                        onClick={() => {
                          setSelectedTrim(trim.name.replace(/\s+/g, ""));
                          setSelectedColor(trim.name.replace(/\s+/g, ""));
                          setCurrentTrimIdx(idx);
                          setPrice(trim.price ? trim.price : "");
                        }}
                        style={{ backgroundColor: trim.hex }}
                      >
                        {trim.price && <TbCurrencyDollar className="dols" />}
                        <span className="font-bold text-[green]">
                          {trim.price}
                        </span>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </section>
          )}
          <footer>
            <div className="fixed bottom-0 left-0 right-0 bg-black h-[80px] xl:h-[70px] border-t md:border-0 text-white flex items-center justify-between z-100">
              <div className="md:hidden flex items-center w-[35%] px-4 border-r border-gray-300 space-x-1">
                <IoIosArrowDropup className="build-arrow" />
                <div className="w-full text-left">
                  {model?.specs?.map((spec, idx) => (
                    <Fragment key={idx}>
                      {idx === currentIdx && (
                        <p className="text-[10px] font-semibold ">
                          Starting MSRP*
                        </p>
                      )}
                      {idx === currentIdx && (
                        <h1 className="text-[18px] font-semibold ">
                          ${spec.price.toLocaleString()}
                        </h1>
                      )}
                    </Fragment>
                  ))}
                </div>
              </div>
              <div className="md:hidden flex flex-col justify-start w-[37%]">
                <p className="text-[11px] font-semibold">est. lease pymts*</p>
                <h1 className="text-[18px] font-semibold">${estPayments.toFixed(2)} / 60mo</h1>
              </div>
              <div className="md:w-full flex items-center">
                <nav className="hidden xl:block bg-black md:w-full text-white h-[70px] md:h-[70px] px-6 md:px-4 gap-1 flex flex-col items-center">
                  <div className="relative h-[6px] mt-[20px] w-[57%] bg-[#9ea1a2]">
                    <div
                      style={{
                        width:
                          currentStep === 0
                            ? "55%"
                            : currentStep === 1
                            ? "75%"
                            : "100%",
                        height: "100%",
                        background: "#fff",
                      }}
                    ></div>
                  </div>
                  <div className="flex items-center gap-5">
                    <li>Model</li>
                    <li>Fuel Type</li>
                    <li onClick={() => setcurrentStep(0)}>Trim</li>
                    <li onClick={() => setcurrentStep(1)}>Exterior</li>
                    <li>Summary</li>
                  </div>
                </nav>
                <div className="md:flex justify-between xl:justify-end md:px-8 md:w-full xl:w-[97%] w-[20%]">
                  {
                    <button onClick={() => setViewFeatures(true)} className="hidden md:block border-white border-1 cursor-pointer text-white md:ml-0 ml-[-10px] hover:underline px-6 py-2">
                      {currentStep !== 3 ? "View Features" : ""}
                    </button>
                  }
                  {currentStep !== 2 && (
                    <button
                      onClick={handleNextBtn}
                      className="md:hidden bg-white text-black mr-4  px-6 py-2"
                    >
                      Next
                    </button>
                  )}
                  {currentStep !== 2 ? (
                    <button
                      onClick={handleNextBtn}
                      className="hidden cursor-pointer font-semibold hover:underline md:block bg-white text-black xl:ml-3 ml-[-10px] px-6 py-2"
                    >
                      {currentStep === steps.length - 2
                        ? "View Summary"
                        : `Next:${steps[currentStep + 1]}`}
                    </button>
                  ) : (
                    <button className="hidden cursor-pointer font-semibold hover:underline md:block bg-white text-black xl:ml-3 ml-[-10px] px-6 py-2">
                      View Inventory
                    </button>
                  )}
                </div>
              </div>
            </div>
          </footer>
        </div>
      }
    </>
  );
};

export default Build;
