import React from "react";
import "./movingforward.css";

const MovingForward = () => {
  return (
    <section id="movingforward">
      <div className="movingforward__container mt-10 md:flex md:justify-between">
        <div className="mf-img_wrapper md:w-[60%] lg:w-[90%]">
          <img
            src="/images/homepage-hiking-pix.avif"
            alt="community"
            className="mf-img"
          />
        </div>
        <div className="movingforward_info px-[25px] py-8 md:px-4 md:w-[40%] lg:py-0 lg:pl-12 bg-[#697279] md:flex flex-col items-start justify-center">
          <h1 className="movingforward__header text-[1.8rem]/[1] md:text-[1.4rem] lg:text-[2rem] w-[70%] md:w-[100%] md:mt-8 font-semibold ">
            Moving Forward tomorrow
          </h1>
          <p className="movingforward__description my-4 md:my-7 w-[90%] md:w-[100%] md:text-[14px] lg:text-[18px]">
            Get inspired by stories and news within the Kia community.
          </p>
          <button className="movingforward__button border-1 px-6 py-3 mt-4 mb-4 md:mt-0 md:mb-1 font-semibold hover:bg-[#f9f9f9] hover:text-black cursor-pointer transition duration-300">
            See more
          </button>
        </div>
      </div>
    </section>
  );
};

export default MovingForward;
