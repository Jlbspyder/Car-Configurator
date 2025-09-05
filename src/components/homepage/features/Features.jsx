import { useState } from "react";
import "./features.css";

const Features = () => {
  const [discover, setDiscover] = useState(false);
  const [getConnected, setGetConnected] = useState(false);
  const [exploreFeatures, setExploreFeatures] = useState(false);

  return (
    <section id="features">
      <div className="features">
        <div
          onMouseEnter={() => setDiscover(true)}
          onMouseLeave={() => setDiscover(false)}
          className="features_container"
        >
          <div className="flex flex-col items-center justify-between">
            <img src="/images/kia-cards-innovation.avif" alt="cards" className="feature-img" />
            <div className="features_inner_container flex flex-col items-center px-3">
              <img
                src="/images/alt-fuel-icon.gif"
                alt="innovation"
                className={`features-icon ${
                  discover ? "features-icon_hover" : ""
                }`}
              />
              <h1 className="feature-header text-black lg:text-[1.7rem]  md:text-[1.3rem] text-[1.7rem] font-semibold">
                EV, hybrid, and beyond
              </h1>
              <p className="feature-paragraph text-black md:text-[15px] lg:text-[17px] md:w-[100%] lg:w-[78%] px-4 w-[73%] text-center text">
                Discover which Kia electric, hybrid, or plug-in hybrid vehicle
                is right for you.
              </p>
            </div>
            <div className="mb-10">
              <button className="feature-btn text-white py-4 px-6 md:py-3 bg-black font-semibold cursor-pointer hover:bg-white hover:text-black hover:border-1 hover:border-black transition duration-300">
                Discover your ride
              </button>
            </div>
          </div>
        </div>
        <div
          onMouseEnter={() => setGetConnected(true)}
          onMouseLeave={() => setGetConnected(false)}
          className="features_container"
        >
          <div className="flex flex-col items-center justify-between">
            <img src="/images/kia-connect.avif" alt="cards" className="feature-img" />
            <div className="features_inner_container flex flex-col items-center px-3">
              <img
                src="/images/connectivity-icon.gif"
                alt="connect"
                className={`features-icon ${
                  getConnected ? "features-icon_hover" : ""
                }`}
              />
              <h1 className="feature-header text-black lg:text-[1.7rem] md:text-[1.3rem] text-[1.7rem] font-semibold">
                Kia Connect
              </h1>
              <p className="feature-paragraph text-black px-4 lg:text-[17px] md:text-[15px] md:w-[100%] lg:w-[78%] w-[73%] text-center">
                Use kia Access for vehicle connectivity, boosting security,
                convenience, and comfort.
              </p>
            </div>
            <div className="mb-10">
              <button className="feature-btn text-white py-4 px-6 md:py-3 bg-black font-semibold cursor-pointer hover:bg-white hover:text-black hover:border-1 hover:border-black transition duration-300">
                Get Connected
              </button>
            </div>
          </div>
        </div>
        <div
          onMouseEnter={() => setExploreFeatures(true)}
          onMouseLeave={() => setExploreFeatures(false)}
          className="features_container"
        >
          <div className="flex flex-col items-center justify-between">
            <img src="/images/kia-keeping-you-safe.avif" alt="kia-safety" className="feature-img" />
            <div className="features_inner_container flex flex-col items-center px-3">
              <img
                src="/images/keep-you-safe-icon.gif"
                alt="kia-safety"
                className={`features-icon ${
                  exploreFeatures ? "features-icon_hover" : ""
                }`}
              />
              <h1 className="feature-header text-black lg:text-[1.7rem] md:text-[1.3rem] text-[1.7rem] font-semibold">
                Keeping you safe
              </h1>
              <p className="feature-paragraph text-black px-4 lg:text-[17px] md:text-[15px] md:w-[100%] w-[73%] lg:w-[78%] text-center">
                Explore Kia's suite of advanced safety features.
              </p>
            </div>
            <div className="mb-10">
              <button className="feature-btn text-white py-4 px-6 md:py-3 bg-black font-semibold cursor-pointer hover:bg-white hover:text-black hover:border-1 hover:border-black transition duration-300">
                Explore Features
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
