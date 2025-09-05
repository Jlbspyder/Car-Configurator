import { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { PiCalculatorThin } from "react-icons/pi";
import { PiTrademarkRegisteredThin } from "react-icons/pi";
import { GrClose } from "react-icons/gr";
import "./shopping.css";

const ShoppingAssist = ({ close, open }) => {
  const [drive, setDrive] = useState(false);
  const [offer, setOffer] = useState(false);
  const [price, setPrice] = useState(false);
  const [payment, setPayment] = useState(false);
  const [build, setBuild] = useState(false);
  const [trade, setTrade] = useState(false);
  const [easyBuy, setEasyBuy] = useState(false);
  const [preowned, setPreowned] = useState(false);




  return (
    <div id="shop" className="lg:absolute top-[60px] h-[100vh] left-0 right-0">
      <div
        className={`fixed top-[100px] pb-10 h-[400px] left-0 right-0 bottom-20 lg:top-0 lg:bottom-[20px] lg:h-[510px] z-70 overflow-y-scroll bg-white`}
      >
        <GrClose id="close" onClick={close} />
        <div className="mt-4 lg:mt-10 shop gap-10 flex flex-col items-center lg:gap-20 text-black">
          <Link
            to="/offers"
            onClick={close}
            onMouseEnter={() => setOffer(true)}
            onMouseLeave={() => setOffer(false)}
            className="flex flex-col items-center cursor-pointer"
          >
            <img
              src="/images/offer-incentives.png"
              alt="offers"
              className={`warranty-icon ${offer ? "hover" : ""}`}
            />
            <div className="flex items-center justify-center">
              <p
                className={`font-bold text-[20px] md:font-semibold md:text-[18px]/4 w-[50%] lg:w-full lg:text-center lg:text-[16px] ${
                  offer ? "underline" : ""
                }`}
              >
                Offers and Incentives
              </p>
              <MdOutlineKeyboardArrowRight
                className={`warranty-btn ${offer ? "btn_hover" : ""}`}
              />
            </div>
            <p className="hidden lg:block text-center text-[14px] font-normal">
              Find special offers near you.
            </p>
          </Link>
          <div
            onMouseEnter={() => setBuild(true)}
            onMouseLeave={() => setBuild(false)}
            className="flex flex-col items-center cursor-pointer"
          >
            <img
              src="/icons/build.png"
              alt="offers"
              className={`warranty-icon ${build ? "hover" : ""}`}
            />
            <div className="flex items-center justify-center">
              <p
                className={`font-bold text-[20px] md:font-semibold md:text-[18px] lg:w-full lg:text-center lg:text-[16px] ${
                  build ? "underline" : ""
                }`}
              >
                Build Your Kia
              </p>
              <MdOutlineKeyboardArrowRight
                className={`warranty-btn ${build ? "btn_hover" : ""}`}
              />
            </div>
            <p className="hidden lg:block text-center text-[14px] font-normal">
              Configure your next Kia, view pricing, and check availability.
            </p>
          </div>
          <div
            onMouseEnter={() => setPayment(true)}
            onMouseLeave={() => setPayment(false)}
            className="flex flex-col items-center cursor-pointer"
          >
            <PiCalculatorThin className={`calc ${payment ? "hover" : ""}`} />
            <div className="flex items-center justify-center">
              <p
                className={`font-bold text-[20px] md:font-semibold md:w-[50%] md:text-[18px]/5 lg:w-full lg:text-center lg:text-[16px] ${
                  payment ? "underline" : ""
                }`}
              >
                Payment Calculator
              </p>
              <MdOutlineKeyboardArrowRight
                className={`warranty-btn ${payment ? "btn_hover" : ""}`}
              />
            </div>
            <p className="hidden lg:block text-center text-[14px] font-normal">
              Determine your estimated monthly payment.
            </p>
          </div>
          <Link
            to="/cpo"
            target="_blank"
            onClick={close}
            onMouseEnter={() => setPreowned(true)}
            onMouseLeave={() => setPreowned(false)}
            className="flex flex-col items-center  cursor-pointer"
          >
            <img
              src="/images/certified-preowned.png"
              alt="pre-owned-cars"
              className={`warranty-icon ${preowned ? "hover" : ""}`}
            />
            <div className="flex items-center justify-center">
              <p
                className={`font-bold text-[20px] md:font-semibold md:w-[60%] md:text-center md:text-[18px]/4 lg:w-full lg:text-center lg:text-[16px] ${
                  preowned ? "underline" : ""
                }`}
              >
                Certified Pre-Owned
              </p>
              <MdOutlineKeyboardArrowRight
                className={`warranty-btn ${preowned ? "btn_hover" : ""}`}
              />
            </div>
            <p className="hidden lg:block text-center text-[14px] font-normal">
              Explore Kia Certified Pre-owned inventory and offers.
            </p>
          </Link>
          <div
            onMouseEnter={() => setTrade(true)}
            onMouseLeave={() => setTrade(false)}
            className="flex flex-col items-center cursor-pointer"
          >
            <img
              src="/icons/trade.png"
              alt="trade-in"
              className={`warranty-icon ${trade ? "hover" : ""}`}
            />
            <div className="flex items-center justify-center">
              <p
                className={`font-bold text-[20px] md:font-semibold md:text-[18px] lg:w-full lg:text-center lg:text-[16px] ${
                  trade ? "underline" : ""
                }`}
              >
                Trade In
              </p>
              <MdOutlineKeyboardArrowRight
                className={`warranty-btn ${trade ? "btn_hover" : ""}`}
              />
            </div>
            <p className="hidden lg:block text-center text-[14px] font-normal">
              Get your Kelley Book
              <span>
                <PiTrademarkRegisteredThin id="tm" />
              </span>{" "}
              trade in value.
            </p>
          </div>
          <div
            onMouseEnter={() => setPrice(true)}
            onMouseLeave={() => setPrice(false)}
            className="flex flex-col items-center cursor-pointer"
          >
            <img
              src="/images/price.png"
              alt="price"
              className={`warranty-icon ${price ? "hover" : ""}`}
            />
            <div className="flex items-center justify-center">
              <p
                className={`font-bold text-[20px] md:font-semibold md:w-[60%] md:text-center md:text-[18px]/4 lg:w-full lg:text-center lg:text-[16px] ${
                  price ? "underline" : ""
                }`}
              >
                Get a Local Price
              </p>
              <MdOutlineKeyboardArrowRight
                className={`warranty-btn ${price ? "btn_hover" : ""}`}
              />
            </div>
            <p className="hidden lg:block text-center text-[14px] font-normal">
              Connect with your local dealer for pricing and offers in your
              area.
            </p>
          </div>
          <div
            onMouseEnter={() => setEasyBuy(true)}
            onMouseLeave={() => setEasyBuy(false)}
            className="flex flex-col items-center cursor-pointer"
          >
            <img
              src="/icons/buy.png"
              alt="easy-buy"
              className={`warranty-icon ${easyBuy ? "hover" : ""}`}
            />
            <div className="flex items-center justify-center">
              <p
                className={`font-bold text-[20px] md:font-semibold md:text-[18px] lg:w-full lg:text-center lg:text-[16px] ${
                  easyBuy ? "underline" : ""
                }`}
              >
                Kia EasyBuy
              </p>
              <MdOutlineKeyboardArrowRight
                className={`warranty-btn ${easyBuy ? "btn_hover" : ""}`}
              />
            </div>
            <p className="hidden lg:block text-center text-[14px] font-normal">
              Streamline your dealer experience and start your Kia purchase from
              home.
            </p>
          </div>
          <div
            onMouseEnter={() => setDrive(true)}
            onMouseLeave={() => setDrive(false)}
            className="flex flex-col items-center cursor-pointer"
          >
            <img
              src="/icons/drive.png"
              alt="test-drive"
              className={`warranty-icon ${drive ? "hover" : ""}`}
            />
            <div className="flex items-center justify-center">
              <p
                className={`font-bold text-[20px] md:font-semibold md:text-[18px] lg:w-full lg:text-center lg:text-[16px] ${
                  drive ? "underline" : ""
                }`}
              >
                Test Drive
              </p>
              <MdOutlineKeyboardArrowRight
                className={`warranty-btn ${drive ? "btn_hover" : ""}`}
              />
            </div>
            <p className="hidden lg:block text-center text-[14px] font-normal">
              Test drive your future vehicle at a dealership near you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingAssist;
