import { useState } from "react";
import "./inventory.css";
import { IoLocationSharp } from "react-icons/io5";
import VehicleOptions from "../../components/VehicleOptions";

const InventoryPage = () => {
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
    <div id="inventory">
      <div className="lg:absolute left-[-42px] right-0 top-[-35px]">
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
      <div>
        <div className="relative mt-15 lg:mt-0">
          <img src="images/inventory-bg.avif" alt="" />
          <div className="absolute bottom-0 left-[7%] sm:left-[20%] sm:bottom-[10px] md:left-[5%] md:bottom-[10px] lg:left-[100px] xl:left-[180px] text-center text-white">
            <h4 className="tracking-widest font-semibold md:text-[20px] ">
              DEALER INVENTORY
            </h4>
            <h1 className="text-[38px] md:text-[62px] lg:text-[75px] lg:pb-4 leading-none font-bold">
              Find your perfect match.
            </h1>
          </div>
        </div>
        <div className="md:flex md:mx-10 md:flex-col lg:flex-row lg:pb-10 items-center px-4 mt-10 bg-white">
          <div className="text-black md:flex md:items-center md:justify-center w-full">
            <div className="inventory-box right-border flex flex-col gap-2 md:h-[180px] md:w-[45%] lg:w-[35%]">
              <label
                className="flex flex-col text-[25px] font-semibold"
                htmlFor="location"
              >
                <span className="text-[13px] font-bold">01</span>
                Set your location.
              </label>
              <input type="text" id="location" placeholder="Zip Code (required)" required />
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
                <span className="text-[13px] font-bold">02</span>
                Pick your Kia.
              </label>
              <select
                onClick={() => setOpenOptions(!openOptions)}
                name="pick"
                id="pick"
              >
                {<option value="">{carPick ? carPick : "Model"}</option>}
              </select>
            </div>
          </div>
          <button className="inventory-btn py-3 px-6 bg-[#4f4f4f] text-white w-full md:w-[35%] lg:w-[30%] h-[60px] my-10 cursor-pointer hover:bg-black hover:underline transition duration-300">
            See Inventory
          </button>
        </div>
      </div>
    </div>
  );
};

export default InventoryPage;
