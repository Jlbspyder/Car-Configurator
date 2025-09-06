import { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import "./warranty.css";

const Warranty = () => {
  const [deal, setDeal] = useState(false);
  const [offer, setOffer] = useState(false);
  const [price, setPrice] = useState(false);
  const [preowned, setPreowned] = useState(false);

  return (
    <section id="warranty">
      <div className="warranty">
        <div className="warranty_yr">
          <div
            onMouseEnter={() => setDeal(true)}
            onMouseLeave={() => setDeal(false)}
            className="warranty-box hover:bg-gray-200 bg-gray-100"
          >
            <img
              src="/images/dealer.png"
              alt="dealer"
              className={`warranty-icon ${deal ? "hover" : ""}`}
            />
            <div className="flex justify-center items-center">
              <p
                className={`text-center text-black text-sm md:text-sm lg:text-lg ${
                  deal ? "para_hover" : ""
                }`}
              >
                Find a Dealer
              </p>
              <MdOutlineKeyboardArrowRight
                className={`warranty-btn ${deal ? "btn_hover" : ""}`}
              />
            </div>
          </div>
          <Link
            to='/offers'
            onMouseEnter={() => setOffer(true)}
            onMouseLeave={() => setOffer(false)}
            className="warranty-box hover:bg-gray-200"
          >
            <img
              src="/images/offer-incentives.png"
              alt="offers"
              className={`warranty-icon ${offer ? "hover" : ""}`}
            />
            <div className="flex items-end justify-center">
              <p
                className={`text-center text-black text-sm md:text-sm lg:text-lg para_1st ${
                  offer ? "para_hover" : ""
                }`}
              >
                Offers and Incentives
              </p>
              <MdOutlineKeyboardArrowRight
                className={`warranty-btn ${offer ? "btn_hover" : ""}`}
              />
            </div>
          </Link>
          <div
            onMouseEnter={() => setPrice(true)}
            onMouseLeave={() => setPrice(false)}
            className="warranty-box hover:bg-gray-200"
          >
            <img
              src="/images/price.png"
              alt="price"
              className={`warranty-icon ${price ? "hover" : ""}`}
            />
            <div className="flex items-end justify-center">
              <p
                className={`text-center text-black text-sm md:text-sm lg:text-lg para_3rd ${
                  price ? "para_hover" : ""
                }`}
              >
                Get a Local Price
              </p>
              <MdOutlineKeyboardArrowRight
                className={`warranty-btn ${price ? "btn_hover" : ""}`}
              />
            </div>
          </div>
          <Link
            to='/cpo'
            onMouseEnter={() => setPreowned(true)}
            onMouseLeave={() => setPreowned(false)}
            className="warranty-box hover:bg-gray-200 bg-gray-100"
          >
            <img
              src="/images/certified-preowned.png"
              alt="pre-owned-cars"
              className={`warranty-icon ${preowned ? "hover" : ""}`}
            />
            <div className="flex items-end justify-center">
              <p
                className={`text-center text-black text-sm md:text-sm lg:text-lg para_3rd ${
                  preowned ? "para_hover" : ""
                }`}
              >
                Certified Pre-Owned
              </p>
              <MdOutlineKeyboardArrowRight
                className={`warranty-btn ${preowned ? "btn_hover" : ""}`}
              />
            </div>
          </Link>
        </div>
        <div className="warranty-bg">
          <img src="/images/homepage-mountain-pix.avif" alt="" />
          <div className="absolute top-[65%] left-[20px] warranty-info">
            <p className="text-[10px] md:text-[12px] lg:text-[14px] md:font-semibold">
              INDUSTRY-LEADING WARRANTY
            </p>
            <h1 className="text-2xl sm:text-xl lg:text-4xl font-semibold">
              Drive with peace of mind
            </h1>
            <button className="border-1 font-semibold py-4 px-11 mt-4 mb-10 md:mt-2 md:mb-8 md:px-8 md:py-3 sm:px-6 sm:py-2 sm:mb-4 hover:bg-white transition duration-300 ease-in-out hover:text-black cursor-pointer">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Warranty;
