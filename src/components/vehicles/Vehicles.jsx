import { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { GrClose } from "react-icons/gr";
import { MdEco } from "react-icons/md";
import {
  suvModels,
  electricModels,
  sedanModels,
  upcomingModels,
} from "../../data";
import "./vehicles.css";

const Vehicles = ({ close }) => {
  const [suvCurrentIndex, setSuvCurrentIndex] = useState(0);
  const [electricCurrentIndex, setElectricCurrentIndex] = useState(0);
  const [sedanCurrentIndex, setSedanCurrentIndex] = useState(0);
  const [upcomingCurrentIndex, setUpcomingCurrentIndex] = useState(0);

  


  return (
    <div id="vehicles">
      <div className="fixed top-[50px] lg:top-0 left-0 right-0 h-[550px] md:h-[450px] lg:h-[550px] lg:pb-10 overflow-auto bg-white z-100">
        <div className="fixed right-0 left-0 vehicle-header font-normal flex items-center justify-center lg:justify-start lg:pl-15 gap-5 md:gap-12 lg:gap-8  h-[40px] md:h-[70px] lg:h-[60px] bg-[#323233] text-gray-300">
          <GrClose id="close" onClick={close} color="white" />
          <h3 className="text-[12px] md:text-[17px] lg:text-[13px] cursor-pointer">
            SUV / CUV / MPV
          </h3>
          <h3 className="text-[12px] md:text-[17px] lg:text-[13px] cursor-pointer ">
            Hybrid / Electric
          </h3>
          <h3 className="text-[12px] md:text-[17px] lg:text-[13px] cursor-pointer ">
            Sedan
          </h3>
          <h3 className="text-[12px] md:text-[17px] lg:text-[13px] cursor-pointer ">
            Upcoming
          </h3>
          <Link to='/vehicles' className="flex items-center gap-1">
            <h3 className="hidden md:block text-[10px] md:text-[17px] lg:text-[13px] cursor-pointer ">
              Show All
            </h3>
            <span className="inline-block ">
              <MdOutlineKeyboardArrowRight className="showall-arrow" />
            </span>
          </Link>
        </div>
        <div className="vehicle-images px-6 py-3 md:px-10 lg:px-15 lg:mt-10 text-[18px] text-black">
          <h1 className="font-semibold mt-12 md:mt-18 lg:mt-12 md:text-[20px] lg:text-[30px]">
            SUV / CUV / MPV
          </h1>
          <div className="vehicle-container">
            {suvModels.map((model, idx) => (
              <div key={model.id}>
                <div
                  onClick={close}
                  onMouseEnter={() => setSuvCurrentIndex(idx)}
                  onMouseLeave={() => setSuvCurrentIndex(null)}
                >
                  {idx !== suvCurrentIndex ? (
                    <Link to={`/vehicles/${model.name}`}>
                      <img
                        src={model.img}
                        alt="kia"
                        className="thumbnail cursor-pointer"
                      />
                    </Link>
                  ) : (
                    <Link to={`/vehicles/${model.name}`}>
                      <img
                        src={model.thumbnailHover}
                        alt="kia"
                        className="thumbnail cursor-pointer"
                      />
                    </Link>
                  )}
                </div>
                <div>
                  <h3 className="md:font-semibold lg:text-[23px] cursor-pointer">
                    {model.name}
                  </h3>
                  <small className="text-[10px]">
                    ${model.price.toLocaleString()}{" "}
                    <span className="font-normal text-[10px] text-gray-400">
                      starting MSRP*
                    </span>
                  </small>
                  <div
                    onMouseEnter={() => setSuvCurrentIndex(idx)}
                    onMouseLeave={() => setSuvCurrentIndex(null)}
                    className="flex gap-4 text-[12px] font-normal lg:font-semibold "
                  >
                    <div
                      onMouseEnter={() => setSuvCurrentIndex(idx)}
                      onMouseLeave={() => setSuvCurrentIndex(null)}
                      className="flex items-center gap-1"
                    >
                      <Link onClick={close} to={`/vehicles/${model.name}`}>
                        <button className="cursor-pointer hover:underline">
                          Build
                        </button>
                      </Link>
                      <span>
                        <MdOutlineKeyboardArrowRight
                          className={`vehicle-btn  ${
                            idx === suvCurrentIndex ? "btn_effect" : ""
                          }`}
                        />
                      </span>
                    </div>
                    <div
                      onMouseEnter={() => setSuvCurrentIndex(idx)}
                      onMouseLeave={() => setSuvCurrentIndex(null)}
                      className="flex items-center gap-1"
                    >
                      <button className="cursor-pointer hover:underline">
                        Find Nearby
                      </button>
                      <span>
                        <MdOutlineKeyboardArrowRight
                          className={`vehicle-btn  ${
                            idx === suvCurrentIndex ? "btn_effect" : ""
                          }`}
                        />
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-end flex-row-reverse">
                    {model.name === "Sorento" ? (
                      <small className="font-normal text-[8px] md:text-[10px] lg:text-[12px] text-[green]">
                        Hybrid/Electric Available
                      </small>
                    ) : (
                      model.name === "Sportage" && (
                        <small className="font-normal text-[8px] md:text-[10px] lg:text-[12px] text-[green]">
                          Hybrid/Electric Available
                        </small>
                      )
                    )}
                    {model.name === "Sorento" ? (
                      <span>
                        <MdEco color="green" className="eco" />{" "}
                      </span>
                    ) : (
                      model.name === "Sportage" && (
                        <span>
                          <MdEco color="green" className="eco" />{" "}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <br />
          <br />
          <h1 className="font-semibold md:text-[20px] lg:text-[30px]">
            Hybrid / Electric
          </h1>
          <div className="vehicle-container">
            {electricModels.map((model, idx) => (
              <div key={model.id}>
                <div
                  onMouseEnter={() => setElectricCurrentIndex(idx)}
                  onMouseLeave={() => setElectricCurrentIndex(null)}
                >
                  {idx !== electricCurrentIndex ? (
                   <Link to={`/electric/${model.name}`}>
                      <img
                        src={model.img}
                        alt="kia"
                        className="thumbnail cursor-pointer"
                      />
                    </Link>
                  ) : (
                    <Link to={`/electric/${model.name}`}>
                      <img
                        src={model.thumbnailHover}
                        alt="kia"
                        className="thumbnail cursor-pointer"
                      />
                    </Link>
                  )}
                </div>
                <div>
                  <h3 className="md:font-semibold lg:text-[23px] cursor-pointer">
                    {model.name}
                  </h3>
                  <small className="text-[10px]">
                    ${model.price.toLocaleString()}{" "}
                    <span className="font-normal text-[10px] text-gray-400">
                      starting MSRP*
                    </span>
                  </small>
                  <div
                    onMouseEnter={() => setElectricCurrentIndex(idx)}
                    onMouseLeave={() => setElectricCurrentIndex(null)}
                    className="flex gap-4 text-[12px] font-normal lg:font-semibold"
                  >
                    <div
                      onMouseEnter={() => setElectricCurrentIndex(idx)}
                      onMouseLeave={() => setElectricCurrentIndex(null)}
                      className="flex items-center gap-1"
                    >
                      <Link onClick={close} to={`/electric/${model.name}`}>
                        <button className="cursor-pointer hover:underline">
                          Build
                        </button>
                      </Link>
                      <span className="inline-block ">
                        <MdOutlineKeyboardArrowRight
                          className={`vehicle-btn  ${
                            idx === electricCurrentIndex ? "btn_effect" : ""
                          }`}
                        />
                      </span>
                    </div>
                    <div
                      onMouseEnter={() => setElectricCurrentIndex(idx)}
                      onMouseLeave={() => setElectricCurrentIndex(null)}
                      className="flex items-center gap-1"
                    >
                      <button className="cursor-pointer hover:underline">
                        Find Nearby
                      </button>
                      <span>
                        <MdOutlineKeyboardArrowRight
                          className={`vehicle-btn  ${
                            idx === electricCurrentIndex ? "btn_effect" : ""
                          }`}
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <br />
          <br />
          <h1 className="font-semibold md:text-[20px] lg:text-[30px]">Sedan</h1>
          <div className="vehicle-container">
            {sedanModels.map((model, idx) => (
              <div key={model.id}>
                <div
                  onMouseEnter={() => setSedanCurrentIndex(idx)}
                  onMouseLeave={() => setSedanCurrentIndex(null)}
                >
                  {idx !== sedanCurrentIndex ? (
                    <img
                      src={model.img}
                      alt="kia"
                      className="thumbnail cursor-pointer"
                    />
                  ) : (
                    <img
                      src={model.thumbnailHover}
                      alt="kia"
                      className="thumbnail cursor-pointer"
                    />
                  )}
                </div>
                <div>
                  <h3 className="md:font-semibold lg:text-[23px] cursor-pointer">
                    {model.name}
                  </h3>
                  <small className="text-[10px] lg:text-[15px] ">
                    ${model.price.toLocaleString()}{" "}
                    <span className="font-normal text-[10px] text-gray-400">
                      starting MSRP*
                    </span>
                  </small>
                  <div
                    onMouseEnter={() => setSedanCurrentIndex(idx)}
                    onMouseLeave={() => setSedanCurrentIndex(null)}
                    className="flex gap-4 text-[12px] font-normal lg:font-semibold"
                  >
                    <div
                      onMouseEnter={() => setSedanCurrentIndex(idx)}
                      onMouseLeave={() => setSedanCurrentIndex(null)}
                      className="flex items-center gap-1"
                    >
                      <button className="cursor-pointer hover:underline">
                        Build
                      </button>
                      <span>
                        <MdOutlineKeyboardArrowRight
                          className={`vehicle-btn  ${
                            idx === sedanCurrentIndex ? "btn_effect" : ""
                          }`}
                        />
                      </span>
                    </div>
                    <div
                      onMouseEnter={() => setSedanCurrentIndex(idx)}
                      onMouseLeave={() => setSedanCurrentIndex(null)}
                      className="flex items-center gap-1"
                    >
                      <button className="cursor-pointer hover:underline">
                        Find Nearby
                      </button>
                      <span>
                        <MdOutlineKeyboardArrowRight
                          className={`vehicle-btn  ${
                            idx === sedanCurrentIndex ? "btn_effect" : ""
                          }`}
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <br />
          <br />
          <h1 className="font-semibold md:text-[20px] lg:text-[30px]">
            Upcoming
          </h1>
          <div className="vehicle-container">
            {upcomingModels.map((model, idx) => (
              <div key={model.id}>
                <div
                  onMouseEnter={() => setUpcomingCurrentIndex(idx)}
                  onMouseLeave={() => setUpcomingCurrentIndex(null)}
                >
                  {idx !== upcomingCurrentIndex ? (
                    <img
                      src={model.thumbnail}
                      alt="kia"
                      className="thumbnail cursor-pointer"
                    />
                  ) : (
                    <img
                      src={model.thumbnailHover}
                      alt="kia"
                      className="thumbnail cursor-pointer"
                    />
                  )}
                </div>
                <div>
                  <h3 className="md:font-semibold lg:text-[23px] cursor-pointer">
                    {model.title}
                  </h3>
                  <div
                    onMouseEnter={() => setUpcomingCurrentIndex(idx)}
                    onMouseLeave={() => setUpcomingCurrentIndex(null)}
                    className="flex items-center gap-1 text-[12px] font-semibold"
                  >
                    <button className="cursor-pointer hover:underline">
                      Meet {model.title}
                    </button>
                    <span>
                      <MdOutlineKeyboardArrowRight
                        className={`vehicle-btn  ${
                          idx === upcomingCurrentIndex ? "btn_effect" : ""
                        }`}
                      />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vehicles;
