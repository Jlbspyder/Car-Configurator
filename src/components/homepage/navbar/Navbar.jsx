import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { suvModels, electricModels, sedanModels } from "../../../data";
import "./navbar.css";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";
import { IoIosCloseCircle } from "react-icons/io";
import { GrFormSearch } from "react-icons/gr";
import ShoppingAssist from "../shopping/ShoppingAssist";
import Vehicles from "../../vehicles/Vehicles";
import Innovation from "../../innovation/Innovation";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [assistModal, setAssistModal] = useState(false);
  const [vehicleModal, setVehicleModal] = useState(false);
  const [innovationModal, setInnovationModal] = useState(false);
  const [search, setSearch] = useState(false);
  const [searchClick, setSearchClick] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    if (innovationModal || assistModal || vehicleModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [innovationModal, assistModal, vehicleModal]);

  //filter cars based on search
  const filteredCars = text
    ? suvModels.filter((car) =>
        car.name.toLowerCase().includes(text.toLowerCase())
      )
    : [];

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSearch = () => {
    setSearch((prev) => !prev);
  };
  const handleSearchOpen = () => {
    setSearchClick(true);
  };
  const handleSearchClose = () => {
    setSearchClick(false);
  };

  const handleOpenMenu = () => {
    setOpenMenu(true);
  };
  const handleCloseMenu = () => {
    setOpenMenu(false);
    setAssistModal(false);
    setVehicleModal(false);
    setInnovationModal(false);
  };
  const handleVehicleClick = () => {
    setVehicleModal(!vehicleModal);
    setAssistModal(false);
    setInnovationModal(false);
  };
  const handleAssistClick = () => {
    setAssistModal(!assistModal);
    setInnovationModal(false);
    setVehicleModal(false);
  };
  const openInnovationModal = () => {
    setInnovationModal(!innovationModal);
    setVehicleModal(false);
    setAssistModal(false);
  };
  const closeModal = () => {
    setAssistModal(false);
    setVehicleModal(false);
    setInnovationModal(false);
  };

  useEffect(() => {
    setOpenMenu(false);
  }, []);

  return (
    <header className="relative">
      <div
        className={`xl:hidden transition duration-300 bg-[#1f2c35] flex flex-col items-start fixed top-[50px] right-0 left-0 bottom-0 ${
          search ? "search-container" : "search-container inactive"
        } `}
      >
        <div className="bg-gray-700 w-full h-[30px]">
          <IoIosArrowDown
            className="search-arrow-icon search_history_arrow cursor-pointer"
            onClick={handleSearch}
          />
        </div>
        <div className="search-input flex justify-between items-center w-5/6 md:w-[90%] py-2 mx-6">
          <input type="text" placeholder="search" onChange={handleChange} />
          <IoIosCloseCircle onClick={handleSearch} className="close-search" />
        </div>
        <ul>
          {filteredCars.length > 0 ? (
            filteredCars.map((car) => (
             <Link onClick={() => setSearch(false)} key={car.id} to={`/vehicles/${car.name}`}><li key={car.id} className="py-4 lg:py-0 pl-8 lg:pl-0">
                {car.name} ({car.year})
              </li>
             </Link>
            ))
          ) : (
            <p className="pl-8">No results found</p>
          )}
        </ul>
      </div>
      <div className="hidden lg:block bb fixed top-0 left-0 right-0 z-10 bg-[#000] pl-4 lg:flex items-center justify-between h-[60px]">
        <div className="flex items-center gap-10">
          <Link onClick={handleCloseMenu} to="/">
            <img
              src="/images/kia-white-logo.jpg"
              alt="logo"
              className="header-logo pl-4 w-[90px] cursor-pointer"
            />
          </Link>
          <nav>
            <ul className="lg:bg-black bg-[#05141f] text-[#8b8787] text-[16px] lg:text-[#f9f9f9] lg:flex gap-6 font-bold lg:text-[13px]">
              <div className="flex pl-8 lg:pl-0 gap-2 py-4 lg:py-0">
                <div
                  className={`models-modal ${
                    vehicleModal ? "open" : "models-modal"
                  }`}
                >
                  <Vehicles close={closeModal} />
                </div>
                <li
                  className={`noc-list ${vehicleModal ? "nav-active" : ""}`}
                  onClick={handleVehicleClick}
                >
                  Vehicles
                </li>
                {!vehicleModal ? (
                  <IoIosArrowDown
                    className="down-arrow-icon"
                    onClick={handleVehicleClick}
                  />
                ) : (
                  <IoIosArrowUp
                    className="up-arrow-icon"
                    onClick={handleVehicleClick}
                  />
                )}
              </div>
              <div id="bar"></div>
              <div className="flex pl-8 lg:pl-0 gap-2 py-4 lg:py-0">
                {
                  <div
                    className={`models-modal ${
                      assistModal ? "open" : "models-modal"
                    }`}
                  >
                    <ShoppingAssist close={handleCloseMenu} open={openMenu} />
                  </div>
                }
                <li
                  className={`noc-list ${assistModal ? "nav-active" : ""}`}
                  onClick={handleAssistClick}
                >
                  Shopping Assist
                </li>
                {!assistModal ? (
                  <IoIosArrowDown
                    className="down-arrow-icon"
                    onClick={handleAssistClick}
                  />
                ) : (
                  <IoIosArrowUp
                    className="up-arrow-icon"
                    onClick={handleAssistClick}
                  />
                )}
              </div>
              <div id="bar"></div>
              <Link onClick={closeModal} to="/inventory">
                <li className="noc-list py-4 lg:py-0 pl-8 lg:pl-0">
                  Inventory
                </li>
              </Link>
              <div id="bar"></div>
              <div className="flex pl-8 lg:pl-0 gap-2 py-4 lg:py-0">
                <div
                  className={`models-modal ${
                    innovationModal ? "open" : "models-modal"
                  }`}
                >
                  <Innovation close={closeModal} open={innovationModal} />
                </div>
                <li
                  className={`noc-list ${innovationModal ? "nav-active" : ""}`}
                  onClick={openInnovationModal}
                >
                  Kia Innovation
                </li>
                {!innovationModal ? (
                  <IoIosArrowDown
                    className="down-arrow-icon"
                    onClick={openInnovationModal}
                  />
                ) : (
                  <IoIosArrowUp
                    className="up-arrow-icon"
                    onClick={openInnovationModal}
                  />
                )}
              </div>
              <div id="bar"></div>
              <Link to="/cpo" target="_blank">
                <li className="noc-list lg:py-0 pl-8 lg:pl-0">CPO</li>
              </Link>
              <div id="bar"></div>
            </ul>
          </nav>
        </div>
        <div className="flex items-center justify-between gap-2 h-[60px] md:justify-end w-[25%] md:w-[20%] lg:hidden">
          <GrFormSearch className="search-bloc" onClick={handleSearch} />
          {!openMenu && (
            <HiMenuAlt4
              className="menu-icon hamburger"
              onClick={handleOpenMenu}
            />
          )}
          {openMenu && (
            <IoIosClose className="close-icon" onClick={handleCloseMenu} />
          )}
        </div>
        <div
          className={`hidden lg:flex w-[25%] h-[100%] ${
            searchClick ? "unlook" : "look"
          } `}
        >
          <Link
            to="/dealers"
            className="flex items-center justify-center gap-2 w-[100%] cursor-pointer hover:underline"
          >
            <IoLocationSharp />
            <p className="noc-list font-semibold text-[13px]">Find a Dealer</p>
          </Link>
          <div
            onClick={handleSearchOpen}
            className="bg-[#474747] flex items-center justify-center gap-2 w-[95%] cursor-pointer"
          >
            <GrFormSearch className="search-icon" />
            <p className="font-semibold text-[13px]">Search</p>
          </div>
        </div>
        <div
          className={`hidden lg:flex items-center ${
            searchClick ? "search-container-desktop" : "search-wrapper"
          } `}
        >
          {
            <input
              type="text"
              placeholder="Search"
              onChange={handleChange}
              className="search-text"
            />
          }
          {<IoIosClose className="search-close" onClick={handleSearchClose} />}
          <GrFormSearch
            className="search-icon  input-search"
            onClick={handleSearchClose}
          />
        </div>
        {
          <div className={`search-history ${searchClick ? "active" : ""}`}>
            {filteredCars.length > 0 ? (
              filteredCars.map((car) => (
                <Link onClick={() => setSearchClick(false)} key={car.id} to={`/vehicles/${car.name}`}>
                  <li className="py-4 lg:py-0 pl-8 lg:pl-0">
                    {car.name} ({car.year})
                  </li>
                </Link>
              ))
            ) : (
              <p>No results found</p>
            )}
          </div>
        }
      </div>
      <div className="lg:hidden fixed top-0 right-0 left-0 z-600 bg-black">
        <div className="flex items-center justify-between">
          <Link onClick={handleCloseMenu} to="/">
            <img
              src="/images/kia-white-logo.jpg"
              alt="logo"
              className="header-logo pl-4 ml-4 w-[90px] cursor-pointer"
            />
          </Link>
          <div className="flex items-center justify-between gap-2 h-[60px] md:justify-end w-[25%] md:w-[20%] lg:hidden">
            <GrFormSearch className="search-bloc" onClick={handleSearch} />
            {!openMenu && (
              <HiMenuAlt4
                className="menu-icon hamburger"
                onClick={handleOpenMenu}
              />
            )}
            {openMenu && (
              <IoIosClose className="close-icon" onClick={handleCloseMenu} />
            )}
          </div>
        </div>
      </div>
      {
        <nav
          className={`lg:hidden text-[15px] font-semibold mobile-nav ${
            openMenu ? "open" : "mobile-nav"
          }`}
        >
          <ul>
            <div className="flex h-[50px]  pl-8 lg:pl-0 gap-2 py-4 lg:py-0">
              <div
                className={
                  vehicleModal
                    ? "opacity-100 transition duration-500"
                    : "opacity-0 transition duration-500"
                }
              >
                <Vehicles close={closeModal} />
              </div>
              <li
                onClick={handleVehicleClick}
                className={`h-[25px] ${vehicleModal ? "nav-active" : ""}`}
              >
                Vehicles
              </li>
              {!vehicleModal ? (
                <IoIosArrowDown
                  className="down-arrow-icon"
                  onClick={handleVehicleClick}
                />
              ) : (
                <IoIosArrowUp
                  className="up-arrow-icon"
                  onClick={handleVehicleClick}
                />
              )}
            </div>
            <div id="bar"></div>
            <div className="flex h-[50px] pl-8 lg:pl-0 gap-2 py-4 lg:py-0">
              <div
                className={
                  assistModal
                    ? "opacity-100 transition duration-500"
                    : "opacity-0 transition duration-500"
                }
              >
                <ShoppingAssist
                  close={closeModal}
                  closeMenu={handleCloseMenu}
                />
              </div>
              <li
                onClick={handleAssistClick}
                className={`h-[25px] ${assistModal ? "nav-active" : ""}`}
              >
                Shopping Assist
              </li>
              {!assistModal ? (
                <IoIosArrowDown
                  className="down-arrow-icon"
                  onClick={handleAssistClick}
                />
              ) : (
                <IoIosArrowUp
                  className="up-arrow-icon"
                  onClick={handleAssistClick}
                />
              )}
            </div>
            <div id="bar"></div>
            <Link
              to="/inventory"
              onClick={handleCloseMenu}
              className="flex h-[50px] pl-10 lg:pl-0 gap-2 py-4 lg:py-0"
            >
              <li className="h-[25px]">Inventory</li>
            </Link>
            <div id="bar"></div>
            <div className="flex h-[50px]  pl-8 lg:pl-0 gap-2 py-4 lg:py-0">
              <div
                className={
                  innovationModal
                    ? "opacity-100 transition duration-500"
                    : "opacity-0 transition duration-500"
                }
              >
                <Innovation close={closeModal} />
              </div>
              <li
                onClick={openInnovationModal}
                className={`h-[25px] ${innovationModal ? "nav-active" : ""}`}
              >
                Kia Innovation
              </li>
              {!innovationModal ? (
                <IoIosArrowDown
                  className="down-arrow-icon"
                  onClick={openInnovationModal}
                />
              ) : (
                <IoIosArrowUp
                  className="up-arrow-icon"
                  onClick={openInnovationModal}
                />
              )}
            </div>
            <div id="bar"></div>
            <Link
              to="/cpo"
              target="_blank"
              onClick={handleCloseMenu}
              className="flex h-[50px] pl-10 lg:pl-0 gap-2 py-4 lg:py-0"
            >
              <li className="">CPO</li>
            </Link>
            <div id="bar"></div>
            <div id="bar"></div>
            <Link className="flex items-center h-[50px]  py-4 lg:py-0 pl-8">
              <IoLocationSharp color="white" />
              <li className="font-semibold">Find a Dealer</li>
            </Link>
          </ul>
        </nav>
      }
    </header>
  );
};

export default Navbar;
