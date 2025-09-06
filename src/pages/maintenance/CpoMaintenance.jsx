import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { cpoMaintenance } from "../../data";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import ShoppingTools from "../../components/ShoppingTools";
import "./maintenance.css";

const CpoMaintenance = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  

  return (
    <div className="text-black mt-15 py-8 md:py-14 bg-gray-100">
      <div className="lg:flex lg:mt-10 flex-row-reverse justify-between items-center">
        <div className="mx-5 md:mx-15 lg:mx-0 lg:w-[40%]">
          <div className="">
            <h1 className="text-5xl font-semibold mb-6 md:text-[43px] lg:text-[40px] lg:w-[80%]">
              Kia Care Choice Service Plans
            </h1>
            <p className="md:text-[17px] lg:w-[78%]">
              The Kia Care Choice service plans are pre-paid maintenance plans
              that you can purchase at any time. Just select the plan that meets
              your budget and driving needs.
            </p>
            <br />
            <p className="md:text-[17px] lg:w-[80%]">
              Choose from Kia Care Essential, Kia Care, Kia Care Plus or Kia Care
              Premium.
            </p>
             <br />
             <br />
            <div className="hidden lg:flex items-center justify-between lg:flex-col lg:border-t lg:border-gray-300 lg:mx-0 lg:items-start lg:w-[85%] lg:gap-2 lg:text-[20px] py-4 w-[97%] pl-5 text-[15px] md:w-[80%] md:pl-0 md:mx-15 md:text-[20px]">
            {cpoMaintenance.map((item, idx) => (
            <div key={item.id} className="lg:flex flex-row-reverse items-center">
              <div onClick={()=> setCurrentIndex(idx)} className={idx === currentIndex ? "border-t-2 md:border-t-5 lg:border-0 border-black text-black cursor-pointer" : "text-gray-400 cursor-pointer"}>
                {item.title}
              </div>
              <div
                  className={`dot care-pointer ${currentIndex === idx ? "care-active" : ""}`}
                ></div>
              </div>
            ))}
          </div>
          </div>
        </div>
        <div className="lg:w-[50%]">
          <div className="lg:hidden flex items-center justify-between py-4 w-[97%] pl-3 text-[15px] md:w-[80%] md:pl-0 md:mx-15 md:text-[20px]">
            {cpoMaintenance.map((item, idx) => (
              <p key={item.id} onClick={()=> setCurrentIndex(idx)} className={idx === currentIndex ? "border-t-2 md:border-t-5 border-black text-black cursor-pointer text-[12px] md:text-[18px]" : "text-gray-400 text-[12px] md:text-[18px] cursor-pointer"}>
                {item.title}
              </p>
            ))}
          </div>
          <div>
            {cpoMaintenance.map((item, idx) => (
              <div key={item.id} className={idx === currentIndex ? "relative md:mx-15 lg:mx-0" : "md:mx-15 lg:mx-0"}>
                {idx === currentIndex && <img src={item.img} alt="kia-care" className="care-img" />}
                {idx === currentIndex && <p className="absolute bottom-0 text-[12px] p-2 md:text-[15px] md:px-16 ">{item.info}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="p-5 flex flex-col gap-2 md:p-14 md:text-[20px] lg:py-14  lg:px-34">
        <p>To learn more about the various maintenance plans click on the link below: </p>
        <div className="flex items-center font-semibold underline">
          <button className="cursor-pointer">Kia Care Essential Maintenance Brochure</button>
          <MdOutlineKeyboardArrowRight className="innovation-btn" />
        </div>
        <div className="flex items-center font-semibold underline">
          <button className="cursor-pointer">Kia Care Choice Maintenance Brochure</button>
          <MdOutlineKeyboardArrowRight className="innovation-btn" />
        </div>
      </div>
      <ShoppingTools />
    </div>
  );
};

export default CpoMaintenance;
