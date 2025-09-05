import { useState } from "react";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa6";
import { GrClose } from "react-icons/gr";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { cpoFaqs } from "../../data";
import "./benefits.css";
import ShoppingTools from "../../components/ShoppingTools";

const CpoBenefits = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = (index) => {
    if (clicked === index) {
      return setClicked(false);
    }
    setClicked(index);
  };

  return (
    <div id="benefits">
      <div className="bg-gray-200 px-5 pb-20 text-black mt-[60px]">
        <h1 className="text-center text-4xl md:text-5xl pt-[15px] md:pt-[30px] lg:pt-[60px] font-semibold">
          Why Kia Certified Pre-Owned?
        </h1>
        <div className="flex flex-col items-center md:px-8 lg:flex-row lg:justify-between">
          <div className="md:mt-15">
            <img
              src="/cpo/cpo-benefits.avif"
              alt="benefits"
              className="benefits-img"
            />
          </div>
          <div className="lg:w-[30%] ">
            <p className="lg:text-[15px] lg:pt-10">
              You get reliability and peace of mind knowing that every Kia
              Certified Pre-Owned (CPO) vehicle is 6 years old or newer, or has
              less than 80,000 miles, and has undergone a thorough 165-Point
              Quality Assurance Inspection.
              <br />
              <br /> From brakes to electrical to engine, we inspect every vehicle
              to make sure they meet our highest standard.
              <br />
              <br /> Finding your perfect Kia sedan, SUV, crossover, or minivan
              will be easy with our large inventory of Certified Pre-Owned
              vehicles.
            </p>
            <br />
            <br />
            <div className="cpo-grid-container">
              <div>
                <div className="flex items-center gap-1 font-bold">
                  <FaCheck />
                  <h3>Eligibility - 6 Years or Newer</h3>
                </div>
                <p className="px-5">
                  Vehicle is less than 6 years old and has up to or fewer than
                  80,000 miles
                </p>
              </div>
              <div>
                <div className="flex items-start gap-1 font-bold">
                  <FaCheck />
                  <h3>10-Year/100,000 Mile Limited Powertrain Warranty *</h3>
                </div>
                <p className="px-5">
                  Starts on vehicle original in-service date and "0" miles
                </p>
              </div>
              <div>
                <div className="flex items-center gap-1 font-bold">
                  <FaCheck />
                  <h3>1-Year/12,000 Mile Comprehensive Platinum Coverage **</h3>
                </div>
                <p className="px-5">
                  Starts on vehicle purchase date and mileage at purchase
                </p>
              </div>
              <div>
                <div className="flex items-center gap-1 font-bold">
                  <FaCheck />
                  <h3>Towing/Rental/Travel</h3>
                </div>
                <p className="px-5">Reimbursement coverage for covered repairs</p>
              </div>
              <div>
                <div className="flex items-center gap-1 font-bold">
                  <FaCheck />
                  <h3>165-Point Inspection</h3>
                </div>
                <p className="px-5">
                  A Kia Certified Pre-Owned vehicle must pass a 165-point
                  inspection
                </p>
              </div>
              <div>
                <div className="flex items-center gap-1 font-bold">
                  <FaCheck />
                  <h3>Carfax™</h3>
                </div>
                <p className="px-5">Free</p>
              </div>
              <div>
                <div className="flex items-center gap-1 font-bold">
                  <FaCheck />
                  <h3>SiriusXM®</h3>
                </div>
                <p className="px-5">90-Day Subscription</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-black px-5 md:px-12 lg:flex flex-col lg:px-43 ">
        <h1 className="text-4xl font-semibold py-6 lg:text-5xl lg:py-10">Benefits</h1>
        <p className="text-[18px] md:text-[20px] pb-6 tracking-tight lg:w-[85%]">
          The Kia Certified Pre-Owned vehicle program gives you the peace of
          mind to enjoy your Kia mile after mile. Every Kia Certified Pre-Owned
          vehicle has undergone a 165-point inspection, offers a limited
          Powertrain Warranty, 24/7 Roadside Assistance, and much more.
        </p>
        <div className="flex items-center font-semibold pb-8 text-[13px] md:text-[19px]">
          <button className="benefits-btn">
            Click here to Download the Kia Certified Pre-Owned Brochure
          </button>
          <MdOutlineKeyboardArrowRight className="innovation-btn" />
        </div>
      </div>
      <div className="text-black pb-10 px-10 md:px-43">
        <div className="bg-gray-300 flex items-center justify-end pr-3 md:pr-6 lg:pr-16 gap-4 h-[30px] lg:h-[60px] lg:font-bold lg:gap-28">
          <div className="md:mr-[10px]">CPO</div>
          <div>Non Cpo</div>
        </div>
        <div className="bg-gray-100 p-2 flex lg:h-[60px]">
          <div className="w-[75%] text-[13px]">
            <p className="md:w-[80%] md:text-[15px] lg:text-[18px] lg:w-full">
              10-Year/100,000-Mile Powertrain Limited Warranty Coverage
            </p>
          </div>
          <div className="flex justify-between px-6 pt-2 w-[45%] lg:w-[35%]">
            <FaCheck className="check" />
            <GrClose className="reject" />
          </div>
        </div>
        <div className="bg-gray-300 p-2 flex lg:h-[60px]">
          <div className="w-[75%] text-[13px]">
            <p className="md:w-[80%] md:text-[15px] lg:text-[18px] lg:w-full">
              1-Year/12,000-Mile Platinum Coverage
            </p>
          </div>
          <div className="flex justify-between px-6 pt-2 w-[45%] lg:w-[35%]">
            <FaCheck className="check" />
            <GrClose className="reject" />
          </div>
        </div>
        <div className="bg-gray-100 p-2 flex lg:h-[60px]">
          <div className="w-[75%] text-[13px]">
            <p className="md:w-[90%] md:text-[15px] lg:text-[18px] lg:w-full">
              165-Point Inspection performed by Kia trained technician
            </p>
          </div>
          <div className="flex justify-between px-6 pt-2 w-[45%] lg:w-[35%]">
            <FaCheck className="check" />
            <GrClose className="reject" />
          </div>
        </div>
        <div className="bg-gray-300 p-2 flex lg:h-[60px]">
          <div className="w-[75%] text-[13px]">
            <p className="md:w-[100%] md:text-[15px] lg:text-[18px] lg:w-full">
              Reconditioning performed using manufacturer-authorized parts
            </p>
          </div>
          <div className="flex justify-between px-6 pt-2 w-[45%] lg:w-[35%]">
            <FaCheck className="check" />
            <GrClose className="reject" />
          </div>
        </div>
        <div className="bg-gray-100 p-2 flex lg:h-[60px]">
          <div className="w-[75%] text-[13px]">
            <p className="md:w-[100%] md:text-[15px] lg:text-[18px] lg:w-full">
              Carfax Vehicle History Report
            </p>
          </div>
          <div className="flex justify-between px-6 pt-2 w-[45%] lg:w-[35%]">
            <FaCheck className="check" />
            <GrClose className="reject" />
          </div>
        </div>
        <div className="bg-gray-300 p-2 flex lg:h-[60px]">
          <div className="flex flex-col lg:w-[80%]">
            <div className="w-[97%] md:w-[96%] text-[13px]">
              <p className="md:w-[100%] md:text-[15px] lg:text-[18px] lg:w-full">
                24-Hour Unlimited Mile Roadside Assistance
              </p>
            </div>
            <div className="w-[97%] md:w-[96%] text-[8px] md:text-[10px] lg:w-full ">
              <p className="md:w-[85%]lg:w-full ">
                24-Hour Unlimited Mile Roadside Assistance starts at the moment
                of the purchase
              </p>
            </div>
          </div>
          <div className="flex justify-between px-6 pt-2 w-[45%] lg:w-[35%]">
            <FaCheck className="check mile" />
            <GrClose className="reject" />
          </div>
        </div>
        <div className="bg-gray-100 p-2 flex lg:h-[60px]">
          <div className="w-[75%] text-[13px]">
            <p className="md:w-[90%] md:text-[15px] lg:text-[18px]">
              Rental Car allowance with warrantable repair
            </p>
          </div>
          <div className="flex justify-between px-6 pt-2 w-[45%] lg:w-[35%]">
            <FaCheck className="check" />
            <GrClose className="reject" />
          </div>
        </div>
        <div className="bg-gray-300 p-2 flex lg:h-[60px]">
          <div className="w-[75%] text-[13px]">
            <p className="md:w-[90%] md:text-[15px] lg:text-[18px]">
              Travel Breakdown protection when over 100 miles from home
            </p>
          </div>
          <div className="flex justify-between px-6 pt-2 w-[45%] lg:w-[35%]">
            <FaCheck className="check" />
            <GrClose className="reject" />
          </div>
        </div>
        <h1 className="mt-5 benefits-chart font-semibold lg:w-[37%] lg:mb-4">Benefits Chart</h1>
        <p className="lg:w-[37%]">
          From brakes to electrical to engine, we inspect every vehicle to make
          sure they meet our highest standard.
        </p>
      </div>
      <div className="md:flex lg:gap-14 items-center">
        <img src="/cpo-warranty.jpg" alt="warranty" className="warranty-pix" />
        <div className="mx-6 my-8 pb-8 text-black">
          <h1 className="text-[38px] lg:text-[45px] font-semibold">
            Limited Warranty
          </h1>
          <p className="md:text-[15px]/4 lg:w-[80%] lg:tracking-wide lg:text-[16px] ">
            Kia Certified Pre-Owned (CPO) owners can cruise the open road with
            confidence knowing their car comes with the industry leading
            10-year/100,000 mile Certified Pre-Owned Limited Powertrain
            Warranty1 and 1-year/12,000 miles of Platinum Coverage.2 Upon
            purchase, you will be welcomed with 24-hour Roadside Assistance and
            Towing/Rental/Travel Breakdown coverage.
          </p>
        </div>
      </div>
      <div className="text-black pb-6 mx-6 lg:px-35">
        <h1 className="text-4xl md:text-[40px] font-semibold md:mx-7 py-6 lg:mb-10">
          CPO FAQs
        </h1>
        <div className="md:mx-7 text-[13px] md:text-2xl lg:text-xl ">
          {cpoFaqs.map((faq, idx) => (
            <div key={faq.id}>
              <div
                onClick={() => handleClick(idx)}
                className={`flex items-center justify-between cursor-pointer pb-2 my-4 text-gray-400 ${
                  clicked !== idx ? "cpo-question" : ""
                }`}
              >
                <h3
                  className={
                    clicked === idx
                      ? "text-black font-semibold"
                      : "font-semibold"
                  }
                >
                  {faq.question}
                </h3>
                {clicked === idx ? (
                  <IoIosArrowUp className="cpo-arrow down" />
                ) : (
                  <IoIosArrowDown className="cpo-arrow down" />
                )}
              </div>
              <div
                className={`${
                  clicked === idx
                    ? "accordion-open cpo-answer md:text-[23px]"
                    : ""
                } ${clicked === idx}`}
              >
                {clicked === idx &&
                idx !== 2 &&
                clicked === idx &&
                idx !== 3 &&
                clicked === idx &&
                idx !== 10 ? (
                  <small>{faq.answer}</small>
                ) : null}
                {clicked === idx && idx === 2 ? (
                  <>
                    <small className="flex flex-col flex-wrap">
                      {faq.answer[0]}
                    </small>
                    <small className="flex flex-col flex-wrap">
                      {faq.answer[1]}
                    </small>
                    <small className="flex flex-col flex-wrap">
                      {faq.answer[2]}
                    </small>
                    <small className="flex flex-col flex-wrap">
                      {faq.answer[3]}
                    </small>
                    <small className="flex flex-col flex-wrap">
                      {faq.answer[4]}
                    </small>
                    <small className="flex flex-col flex-wrap">
                      {faq.answer[5]}
                    </small>
                    <small className="flex flex-col flex-wrap">
                      {faq.answer[6]}
                    </small>
                    <small className="flex flex-col flex-wrap">
                      {faq.answer[7]}
                    </small>
                    <small className="flex flex-col flex-wrap">
                      {faq.answer[8]}
                    </small>
                    <small className="flex flex-col flex-wrap">
                      {faq.answer[9]}
                    </small>
                    <small className="flex flex-col flex-wrap">
                      {faq.answer[10]}
                    </small>
                    <small className="flex flex-col flex-wrap">
                      {faq.answer[11]}
                    </small>
                    <small className="flex flex-col flex-wrap">
                      {faq.answer[12]}
                    </small>
                    <small className="flex flex-col flex-wrap">
                      {faq.answer[13]}
                    </small>
                  </>
                ) : null}
                {clicked === idx && idx === 3 ? (
                  <>
                    <small className="flex flex-col flex-wrap mb-2">
                      {faq.answer[0]}
                    </small>
                    <small className="flex flex-col flex-wrap">
                      {faq.answer[1]}
                    </small>
                    <small className="flex flex-col flex-wrap">
                      {faq.answer[2]}
                    </small>
                    <small className="flex flex-col flex-wrap">
                      {faq.answer[3]}
                    </small>
                    <small className="flex flex-col flex-wrap">
                      {faq.answer[4]}
                    </small>
                    <small className="flex flex-col flex-wrap">
                      {faq.answer[5]}
                    </small>
                    <small className="flex flex-col flex-wrap">
                      {faq.answer[6]}
                    </small>
                    <small className="flex flex-col flex-wrap">
                      {faq.answer[7]}
                    </small>
                    <small className="flex flex-col flex-wrap">
                      {faq.answer[8]}
                    </small>
                  </>
                ) : null}
                {clicked === idx && idx === 10 ? (
                  <>
                    <small className="flex flex-col flex-wrap mb-6">
                      {faq.answer[0]}
                    </small>
                    <small className="flex flex-col flex-wrap mb-2">
                      {faq.answer[1]}
                    </small>
                    <small className="flex flex-col flex-wrap mb-2">
                      {faq.answer[2]}
                    </small>
                    <small className="flex flex-col flex-wrap">
                      {faq.answer[3]}
                    </small>
                  </>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
      <ShoppingTools />
    </div>
  );
};

export default CpoBenefits;
