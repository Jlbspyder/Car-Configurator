import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import VehicleOptions from "../../components/VehicleOptions";
import './cpoinventory.css'

const CpoInentory = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [openOptions, setOpenOptions] = useState(false);
  const [activeSuv, setActiveSuv] = useState(true);
  const [carPick, setCarPick] = useState("");
  const [activeElectric, setActiveElectric] = useState(false);
  const [activeSedan, setActiveSedan] = useState(false);
  const [car, setCar] = useState({
    model: "",
    location: ""
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
    <>
      <h1 className="text-black text-4xl mt-[80px] font-semibold h-[150px] md:h-[200px] lg:h-[120px] pl-2 text-center ">Explore CPO Inventory</h1>
    <div className="md:flex md:mx-10 md:flex-col lg:flex-row lg:py-10 items-center px-4 mt-10 bg-white">
      <div className="absolute top-[-240px] left-1 right-0 lg:left-[-40px]">
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
      <div className="text-black px-4 md:flex md:items-center md:justify-center w-full">
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
          <input type="text" name={car.location} placeholder="Zip Code (required)" required />
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
        <button className="inventory-btn font-semibold py-3 px-6 bg-gray-500 text-white w-full  h-[60px] md:h-[50px] mt-10 cursor-pointer hover:bg-black hover:underline transition duration-300">
          CPO Inventory
        </button>
        <div className="flex items-center justify-center">
          <small className="text-black text-sm font-semibold cursor-pointer">
            Continue without a model
          </small>
          <IoIosArrowDown className="offers-btn" />
        </div>
      </div>
    </div>
    </>
  );
};

export default CpoInentory;
