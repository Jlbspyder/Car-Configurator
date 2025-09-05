import React, { Fragment } from "react";
import "./upcomingmodels.css";
import { upcomingModels } from "../../../../data";

const UpcomingModels = () => {
  const models = upcomingModels;

  return (
    <section id="upcoming">
      <div className="container mt-16">
        {models.map((model) => (
          <div key={model.id} className="mt-10 sm:px-0 px-8 lg:px-8 md:mt-6 upcoming-btn " >
            <img src={model.img} alt={model.name} />
            <div className="flex flex-col items-center lg:pb-[20px]">
                <small className="text-black py-6 md:py-2 md:mt-6 lg:font-semibold lg:py-4">Upcoming</small>
                <h1 className="pb-4 text-black text-3xl md:text-sm font-semibold sm:w-full sm:text-center sm:text-[20px] lg:text-[27px]">{model.name}</h1>
                <p className="text-black text-[22px] sm:text-[12px] sm:w-[100%] w-[75%] md:text-[14px] md:w-[180px] text-center lg:w-[250px] lg:text-[16px] ">{model.desc}</p>
                <div className="my-10"><button className="text-white bg-black font-semibold text-[18px] py-5 px-10 sm:py-3 sm:px-4 sm:text-[10px] md:text-[12px] md:py-3 md:px-6 md:font-bold lg:py-3 lg:px-6 lg:font-bold lg:text-[16px] hover:bg-white hover:text-black hover:border-1 transition duration-300 cursor-pointer">Learn More</button></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingModels;
