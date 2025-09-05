import { useState } from "react";
import VehicleOptions from "../../components/VehicleOptions";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import "./preowned.css";

const Preowned = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [openOptions, setOpenOptions] = useState(false);
  const [activeSuv, setActiveSuv] = useState(true);
  const [carPick, setCarPick] = useState("");
  const [activeElectric, setActiveElectric] = useState(false);
  const [activeSedan, setActiveSedan] = useState(false);
  const [car, setCar] = useState({
    model: "",
  });
  const [brand, setBrand] = useState({
    type: "",
  });


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCar((prevModel) => {
      return {
        ...prevModel,
        [name]: type === "checked" ? checked : value,
      };
    });
    setBrand((prevBrand) => {
      return {
        ...prevBrand,
        [name]: type === "checked" ? checked : value,
      };
    });
    setCarPick(value);
    if (name === "model") {
      setOpenOptions(true);
    }
    if (name === "type") {
      setOpenOptions(false);
    }
    if (value === "suv") {
      setCarPick(null);
      setActiveSuv(true);
      setActiveElectric(false);
      setActiveSedan(false);
    }
    if (value === "electric") {
      setCarPick(null);
      setActiveElectric(true);
      setActiveSedan(false);
      setActiveSuv(false);
    }
    if (value === "sedan") {
      setCarPick(null);
      setActiveSedan(true);
      setActiveElectric(false);
      setActiveSuv(false);
    }
  };

  return (
    <div id="cpo" className="relative">
      <div className="absolute top-4 left-[-40px] right-0">
        <VehicleOptions
          openOptions={openOptions}
          setOpenOptions={setOpenOptions}
          activeSuv={activeSuv}
          activeElectric={activeElectric}
          activeSedan={activeSedan}
          handleChange={handleChange}
          car={car}
          setCurrentIdx={setCurrentIdx}
          brand={brand}
        />
      </div>
      <div className="relative mt-15 ">
        <img src="images/brochure-hero-desktop.avif" alt="" />
        <h1 className="md:hidden text-white absolute top-[10px] left-[25%]  tracking-tight font-semibold text-3xl ">
          Discover Kia CPO
        </h1>
        <h1 className="hidden text-white md:block absolute top-4 left-[15%] md:text-[40px] lg:text-[55px] md:left-[15%] lg:top-[30%] lg:left-[15%] tracking-tight font-semibold text-4xl ">
          Discover Kia Certified Pre-Owned
        </h1>
      </div>
      <div className="md:flex md:mx-10 md:flex-col lg:flex-row lg:py-10 items-center px-4 mt-10 bg-white">
        <div className="text-black md:flex md:items-center md:justify-center w-full">
          <div className="inventory-box right-border flex flex-col gap-2 md:h-[180px] md:w-[45%] lg:w-[35%]">
            <label
              className="flex flex-col text-[25px] font-semibold"
              htmlFor="location"
            >
              <span className="text-[13px] font-bold rounded-full bg-[red] px-2 py-1 text-white w-[30px]">
                01
              </span>
              Enter Zip Code.
            </label>
            <input type="text" placeholder="Zip Code (required)" required />
            {/* <small>{error.msg}</small> */}
            <div className="inventory-location flex items-center gap-2 mb-6 md:mb-0 cursor-pointer">
              <div>
                <IoLocationSharp />
              </div>
              <div className="font-semibold underline">Use My Location</div>
            </div>
          </div>
          <div className="inventory-box second-right-border md:h-[180px] flex flex-col gap-2 mt-4 md:mt-0  md:ml-10 md:w-[45%]">
            <label
              className="flex flex-col text-[25px] font-semibold"
              htmlFor="pick"
            >
              <span className="text-[13px] font- rounded-full bg-[red] px-2 py-1 text-white w-[30px]">
                02
              </span>
              Select Model.
            </label>
            <select
              onClick={() => setOpenOptions(!openOptions)}
              name="pick"
              id="pick"
            >
              {<option value="">{carPick ? carPick : "All Models"}</option>}
            </select>
          </div>
        </div>
        <div className="flex offers-button-wrapper flex-col gap-1 pb-6">
          <button className="inventory-btn font-semibold py-3 px-6 bg-[#4f4f4f] text-white w-full  h-[60px] md:h-[50px] mt-10 cursor-pointer hover:bg-black hover:underline transition duration-300">
            See Inventory
          </button>
          <div className="flex items-center justify-center">
            <small className="text-black text-sm font-semibold cursor-pointer">
              Continue without a model
            </small>
            <IoIosArrowDown className="offers-btn" />
          </div>
        </div>
      </div>      
      <div className="md:flex lg:items-center md:mt-6">
        <div>
          <img src="/images/brochure-Point-Inspection.jpg" alt="" />
        </div>
        <div className="text-black mx-8 lg:w-[40%] ">
          <p className="text-[red] font-[13px] mt-16">INSPECTION</p>
          <h4 className="text-left mt-1 w-[60%] text-[35px]/7 lg:text-[50px]/12 font-semibold">
            165-Point Inspection
          </h4>
          <p className="text-left text-[15px] lg:text-[18px] lg:w-[85%] font-normal mt-4">
            Every vehicle must pass a 165-point inspection before it can qualify
            as a Kia Certified Pre-Owned vehicle.
          </p>
          <div className="mt-4 flex items-center gap-1">
            <button className="font-semibold">
              Learn more about 165-point inspection
            </button>
            <IoIosArrowDown className="offers-btn" />
          </div>
        </div>
      </div>
      <div className="bg-gray-100 mt-10 md:mt-8">
        <div className="text-black mx-8">
          <p className="text-[red] font-[13px] pt-10">ASSISTANCE</p>
          <h4 className="text-left mt-1 w-[80%] text-[35px]/7 lg:text-[40px] lg:mb-8 font-semibold">
            24-Hour Road side Assistance
          </h4>
          <p className="text-left text-[15px] text-gray-500 font-normal mt-4 lg:text-[17px] lg:w-[50%]">
            Kia Certified Pre-Owned buyers are covered 24 hours a day, 7 days a
            week by our Unlimited Mile Roadside Assistance Program. In the event
            a service is needed, the driver simply needs to sign the billing
            invoice and drive away.
          </p>
          <div className="mt-4 flex items-center gap-1">
            <button className="font-semibold">
              Certified Pre-Owned Brochure
            </button>
            <IoIosArrowDown className="offers-btn" />
          </div>
        </div>
        <div className="cpo-services md:px-8  text-black mt-10">
          <div className="lg:w-full">
            <div>
                <img
                  src="/images/brochure-flat-tire.avif"
                  alt="cpo"
                  className="cpo-img"
                />
            </div>
            <div className="mx-6 md:mx-1 ">
                <h1 className="font-semibold text-[25px] md:text-[20px] lg:my-0 my-2 md:text-center">Flat Tire</h1>
                <p className="mb-4 text-gray-500 md:text-center lg:text-[15px]/4">
                  Service personnel will change your flat tire and replace with your
                  properly inflated spare tire.
                </p>
            </div>
          </div>
          <div className="lg:w-full">
            <img
              src="/images/brochure-jump-start.avif"
              alt="cpo"
              className="cpo-img"
            />
            <div className="mx-6 md:mx-1">
                <h1 className="font-semibold md:text-center text-[25px] md:text-[20px] lg:my-0 my-2">Jump Start</h1>
                <p className="mb-4 md:text-center text-gray-500 lg:text-[15px]/4 ">
                  Service personnel will attempt to jump start your vehicle.
                </p>
            </div>
          </div>
          <div className="lg:w-full">
            <img
              src="/images/brochure-lock-out.avif"
              alt="cpo"
              className="cpo-img"
            />
            <div className="mx-6 md:mx-1">
                <h1 className="font-semibold md:text-center text-[25px] md:text-[20px] lg:my-0 my-2">Lock Out</h1>
                <p className="mb-4 md:text-center text-gray-500 lg:text-[15px]/4 ">
                  This service provides unlocking your vehicle.
                </p>
            </div>
          </div>
          <div className="lg:w-full">
            <img
              src="/images/brochure-towing.avif"
              alt="cpo"
              className="cpo-img"
            />
            <div className="mx-6 md:mx-1">
                <h1 className="font-semibold md:text-center text-[25px] md:text-[20px] lg:my-0 my-2">Towing</h1>
                <p className="mb-4 md:text-center text-gray-500 lg:text-[15px]/4 ">
                  Your vehicle will be towed to the nearest service facility.
                </p>
            </div>
          </div>
          <div className="lg:w-full">
            <img
              src="/images/brochure-out-of-gasoline.avif"
              alt="cpo"
              className="cpo-img"
            />
            <div className="mx-6 md:mx-1">
                <h1 className="font-semibold md:text-center text-[25px] md:text-[20px] lg:my-0 my-2">Out of Gasoline</h1>
                <p className="pb-8 md:text-center text-gray-500 md:w-[90%] lg:text-[15px]/4 ">
                  This service will provide you 3 gallons of gas.
                </p>
            </div>
          </div>
        </div>
      </div>
       <div className="md:flex lg:gap-14 items-center">
          <img
            src="/icons/cpo-warranty.jpg"
            alt="warranty"
            className="warranty-pix"
          />
          <div className="mx-8 my-8 pb-8 text-black">
              <h1 className="text-[38px] lg:text-[45px] font-semibold">Limited Warranty</h1>
              <p className="lg:w-[80%] ">
                Kia Certified Pre-Owned (CPO) owners can cruise the open road with
                confidence knowing their car comes with the industry leading
                10-year/100,000 mile Certified Pre-Owned Limited Powertrain
                Warranty1 and 1-year/12,000 miles of Platinum Coverage.2 Upon
                purchase, you will be welcomed with 24-hour Roadside Assistance and
                Towing/Rental/Travel Breakdown coverage.
              </p>
          </div>
        </div>
        <div >
            <div className="relative">
                <h1 className="absolute text-white text-[33px] lg:text-[55px] top-[30px] left-[5%] md:left-[30%] lg:left-[25%] md:top-[30%] font-semibold">Introducing Kia CPO Lite</h1>
                <img src="icons/cpo-lite-banner.avif" alt="cpo-banner" className="cpo-warranty" />
            </div>
            <div className="text-black my-8 flex flex-col items-center">
                <h1 className="text-[30px] font-semibold mb-8 md:text-[35px] md:text-left md:pl-8 md:w-full lg:text-center lg:text-[45px] ">CPO Shopping Tools</h1>
                <div className="md:flex justify-between md:px-10 md:w-full lg:w-[80%]">
                    <div className="flex flex-col cursor-pointer gap-2 lg:gap-8 items-center">
                        <img src="/icons/icon-search-inventory.avif" alt="cpo-inventory" className="cpo-icon" />
                        <div className="icons flex items-center mb-8">
                            <button className="font-semibold">Search Inventory</button>
                            <IoIosArrowDown className="offers-btn"/>
                        </div>
                    </div>
                    <div className="flex flex-col cursor-pointer gap-2 lg:gap-8 items-center">
                        <img src="/icons/icon-trade-in.avif" alt="cpo-inventory" className="cpo-icon" />
                        <div className="icons flex items-center mb-8">
                            <button className="font-semibold">Estimated Trade-In Value</button>
                            <IoIosArrowDown className="offers-btn"/>
                        </div>
                    </div>
                    <div className="flex flex-col cursor-pointer gap-2 lg:gap-8 items-center">
                        <img src="/icons/icon-cpo-dealer.avif" alt="cpo-inventory" className="cpo-icon" />
                        <div className="icons flex items-center mb-8">
                            <button className="font-semibold">Find a CPO Dealer</button>
                            <IoIosArrowDown className="offers-btn"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Preowned;
