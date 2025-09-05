import { useState, useEffect } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { GrClose } from "react-icons/gr";
import "./innovation.css";

const Innovation = ({ close }) => {
  const [hybrid, setHybrid] = useState(false);
  const [safety, setSafety] = useState(false);
  const [connect, setConnect] = useState(false);

  
  return (
    <div id="innovation" className="lg:absolute top-[60px] h-[100vh] left-0 right-0">
      <div className="innovation fixed top-[180px] right-0 left-0 bg-white my-6 z-70 flex flex-col md:flex-row md:justify-between md:h-[150px] lg:my-0 lg:justify-start lg:gap-0 lg:pr-10 lg:h-[300px] md:px-20 md:h-[100px] lg:top-0 cursor-pointer gap-6 items-center text-black">
        <GrClose id="close-innovation" onClick={close} color="black" />
        <div
          onMouseEnter={() => setHybrid(true)}
          onMouseLeave={() => setHybrid(false)}
          className="flex flex-col my-6 lg:gap-4 items-center"
        >
          <img
            src="/images/alt-fuel-icon.gif"
            alt="fuel"
            className={`innovation-icon ${hybrid ? "hover" : ""}`}
          />
          <div className="flex items-center">
            <p className={`lg:text-[18px] lg:font-semibold ${hybrid ? "para_hover" : ""}`}>EV and Hybrid</p>
            <MdOutlineKeyboardArrowRight
              className={`innovation-btn ${hybrid ? "btn_hover" : ""}`}
            />
          </div>
          <p
            className="hidden lg:font-normal lg:block text-center text-[13px] lg:w-[70%]">
            Explore electric, hynrid, and plug-in hybrid vehicles.
          </p>
        </div>
        <div
          onMouseEnter={() => setSafety(true)}
          onMouseLeave={() => setSafety(false)}
          className="flex flex-col lg:gap-4 items-center"
        >
          <img
            src="/images/keep-you-safe-icon.gif"
            alt="fuel"
            className={`innovation-icon ${safety ? "hover" : ""}`}
          />
          <div className="flex items-center">
            <p className={`lg:text-[18px] lg:font-semibold ${safety ? "para_hover" : ""}`}>Safety Tech</p>
            <MdOutlineKeyboardArrowRight
              className={`innovation-btn ${safety ? "btn_hover" : ""}`}
            />
          </div>
          <p
            className="hidden lg:font-normal lg:block text-center text-[13px] lg:w-[70%]">
            Explore advanced safety and performance enhancing tech.
          </p>
        </div>
        <div
          onMouseEnter={() => setConnect(true)}
          onMouseLeave={() => setConnect(false)}
          className="flex flex-col lg:gap-4 items-center"
        >
          <img
            src="/images/connectivity-icon.gif"
            alt="fuel"
            className={`innovation-icon ${connect ? "hover" : ""}`}
          />
          <div className="flex items-center">
            <p className={`lg:text-[18px] lg:font-semibold ${connect ? "para_hover" : ""}`}>Kia Connect</p>
            <MdOutlineKeyboardArrowRight
              className={`innovation-btn ${connect ? "btn_hover" : ""}`}
            />
          </div>
          <p
            className="hidden lg:font-normal lg:block text-center text-[13px] lg:w-[40%]">
            Coonect your mobile device to your Kia for added security,
            convenience, and comfort.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Innovation;
