import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdEco } from "react-icons/md";
import Navbar from "../../components/homepage/navbar/Navbar";
import {
  suvModels,
  electricModels,
  sedanModels,
  upcomingModels,
} from "../../data";
import "./vehiclespage.css";

const VehiclesPage = () => {
  const [suvCurrentIndex, setSuvCurrentIndex] = useState(0);
  const [electricCurrentIndex, setElectricCurrentIndex] = useState(0);
  const [sedanCurrentIndex, setSedanCurrentIndex] = useState(0);
  const [upcomingCurrentIndex, setUpcomingCurrentIndex] = useState(0);
  const [hideHeader, setHideHeader] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)



  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setHideHeader(true)
      } else {
        setHideHeader(false)
      }
      setLastScrollY(currentScrollY)
    }
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll)
  },[lastScrollY])

  return (
    <div>
      {!hideHeader && <Navbar />}
      <div className="mt-[60px] lg:pb-10 bg-white">
        <div className="mt-10 flex items-center justify-start pl-6 md:pl-9 lg:pl-15 gap-5 md:gap-12 lg:gap-8  h-[40px] md:h-[70px] lg:h-[60px] text-black">
          <h3 className="text-[12px] text-black font-semibold md:text-[17px] lg:text-[18px] cursor-pointer">
            SUVs/Crossovers/MPV
          </h3>
          <h3 className="text-[12px] text-gray-300 md:text-[17px] lg:text-[18px] cursor-pointer">
            Hybrid/Electric
          </h3>
          <h3 className="text-[12px] text-gray-300 md:text-[17px] lg:text-[18px] cursor-pointer">
            Sedan
          </h3>
          <h3 className="text-[12px] text-gray-300 md:text-[17px] lg:text-[18px] cursor-pointer">
            Upcoming
          </h3>
        </div>
        <div className="px-6 py-3 md:px-10 lg:px-15 lg:mt-0 text-[18px] text-black">
          <div className={`fixed top-0 left-0 right-0 flex items-center justify-start pl-5 md:pl-8 lg:pl-12 gap-5 md:gap-12 lg:gap-8  h-[40px] md:h-[50px] lg:h-[60px] bg-black text-white ${hideHeader ? "show-header" : "hide"}`}>
            <h3 className="text-[12px] text-gray-300 md:text-[17px] lg:text-[20px] cursor-pointer hover:text-white">
              SUVs/Crossovers/MPV
            </h3>
            <h3 className="text-[12px] text-gray-300 md:text-[17px] lg:text-[20px] cursor-pointer hover:text-white">
              Hybrid/Electric
            </h3>
            <h3 className="text-[12px] text-gray-300 md:text-[17px] lg:text-[20px] cursor-pointer hover:text-white">
              Sedan
            </h3>
            <h3 className="text-[12px] text-gray-300 md:text-[17px] lg:text-[20px] cursor-pointer hover:text-white">
              Upcoming
            </h3>
          </div>
          <h1 className="font-semibold mt-2 text-[28px] lg:mt-0 md:text-[35px] lg:text-[38px]">
            SUVs/Crossovers/MPV
          </h1>
          <div className="vehicles-grid">
            {suvModels.map((model, idx) => (
              <div key={model.id}>
                <Link
                to={`/vehicles/${model.name}`}
                  onMouseEnter={() => setSuvCurrentIndex(idx)}
                  onMouseLeave={() => setSuvCurrentIndex(null)}
                >
                  {idx !== suvCurrentIndex ? (
                    <img
                      src={model.img}
                      alt="kia"
                      className="avatar cursor-pointer"
                    />
                  ) : (
                    <img
                      src={model.thumbnailHover}
                      alt="kia"
                      className="avatar cursor-pointer"
                    />
                  )}
                </Link>
                <div>
                  <h3 className="md:font-semibold md:text-[23px] cursor-pointer">
                    {model.name}
                  </h3>
                  <small className="text-[10px] md:text-xl font-semibold">
                    ${model.price.toLocaleString()}{" "}
                    <span className="font-normal text-[10px] md:text-xl text-gray-400">
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
                      <button className="cursor-pointer hover:underline md:font-bold lg:font-semibold">
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
                      <small className="hidden md:block font-normal text-[8px] md:text-[13px] lg:text-[15px] font-semibold text-[green]">
                        Hybrid/Electric Available
                      </small>
                    ) : (
                      model.name === "Sportage" ? (
                        <small className="hidden md:block font-normal text-[8px] md:text-[13px] lg:text-[15px] font-semibold text-[green]">
                          Hybrid/Electric Available
                        </small>
                      ) : model.name === "Carnival MPV" && (
                         <small className="hidden md:block font-normal text-[8px] md:text-[13px] lg:text-[15px] font-semibold text-[green]">
                          Hybrid/Electric Available
                        </small>
                      )
                    )}
                    {model.name === "Sorento" ? (
                      <small className="md:hidden text-[green] font-semibold">
                        Available
                      </small>
                    ) : (
                      model.name === "Sportage" ? (
                        <small className="md:hidden text-[green] font-semibold">
                          Available
                        </small>
                      ) : model.name === "Carnival MPV" && (
                        <small className="md:hidden text-[green] font-semibold">
                        Available
                        </small>
                      )
                    )}
                    {model.name === "Sorento" ? (
                      <span>
                        <MdEco color="green" className="ev" />
                      </span>
                    ) : (
                      model.name === "Sportage" ? (
                        <span>
                          <MdEco color="green" className="ev" />
                        </span>
                      ) : model.name === "Carnival MPV" && (
                        <span>
                          <MdEco color="green" className="ev" />
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
          <h1 className="font-semibold text-[28px] md:text-[35px] lg:text-[38px]">
            Hybrid/Electric
          </h1>
          <div className="vehicles-grid">
            {electricModels.map((model, idx) => (
              <div key={model.id}>
                <div
                  onMouseEnter={() => setElectricCurrentIndex(idx)}
                  onMouseLeave={() => setElectricCurrentIndex(null)}
                >
                  <Link
                to={`/electric/${model.name}`}
                  onMouseEnter={() => setSuvCurrentIndex(idx)}
                  onMouseLeave={() => setSuvCurrentIndex(null)}
                >
                  {idx !== suvCurrentIndex ? (
                    <img
                      src={model.img}
                      alt="kia"
                      className="avatar cursor-pointer"
                    />
                  ) : (
                    <img
                      src={model.thumbnailHover}
                      alt="kia"
                      className="avatar cursor-pointer"
                    />
                  )}
                </Link>
                </div>
                <div>
                  <h3 className="md:font-semibold md:text-[23px] cursor-pointer">
                    {model.name}
                  </h3>
                  <small className="text-[10px] md:text-xl font-semibold">
                    ${model.price.toLocaleString()}{" "}
                    <span className="font-normal text-[10px] md:text-xl text-gray-400">
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
                      <button className="cursor-pointer hover:underline md:font-bold lg:font-semibold">
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
          <h1 className="font-semibold text-[28px] md:text-[35px] lg:text-[38px]">
            Sedan
          </h1>
          <div className="vehicles-grid">
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
                      className="avatar cursor-pointer"
                    />
                  ) : (
                    <img
                      src={model.thumbnailHover}
                      alt="kia"
                      className="avatar cursor-pointer"
                    />
                  )}
                </div>
                <div>
                  <h3 className="md:font-semibold md:text-[23px] cursor-pointer">
                    {model.name}
                  </h3>
                  <small className="text-[10px] md:text-xl md:font-semibold lg:text-[15px]">
                    ${model.price.toLocaleString()}{" "}
                    <span className="font-normal text-[10px] md:text-xl text-gray-400">
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
                      <button className="cursor-pointer md:font-bold lg:font-semibold hover:underline">
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
                      <button className="cursor-pointer md:font-bold lg:font-semibold hover:underline">
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
          <h1 className="font-semibold text-[28px]  md:text-[35px] lg:text-[38px]">
            Upcoming
          </h1>
          <div className="vehicles-grid">
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
                      className="avatar cursor-pointer"
                    />
                  ) : (
                    <img
                      src={model.thumbnailHover}
                      alt="kia"
                      className="avatar cursor-pointer"
                    />
                  )}
                </div>
                <div>
                  <h3 className="md:font-semibold md:text-[23px] cursor-pointer">
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

export default VehiclesPage;
