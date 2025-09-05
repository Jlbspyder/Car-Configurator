import { FaCircle } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";
import { suvModels, electricModels, sedanModels, categories  } from '../data';

const VehicleOptions = ({setOpenOptions, openOptions, handleChange, activeSuv, activeElectric, activeSedan, car, setCurrentIdx, brand }) => {
  return (
     <div
          className={`relative bg-[#f9f9f9] pb-6 md:pb-10 inventory flex flex-col mt-15 lg:mt-0 text-black ${
            openOptions ? "open" : "close"
          }`}
        >
          <IoIosClose
            onClick={() => setOpenOptions(false)}
            className="close-option"
          />
          <div  className="fixed modal overflow-y-scroll pl-2 pt-14 top-0 right-0 left-0 bottom-0 w-full bg-[#f9f9f9] lg:flex lg:justify-between z-50">
            <div className="fixed lg:static h-[140px] px-2 lg:h-[20px] pt-6 z-500 bg-white flex items-center lg:pt-0 lg:mt-[-30px] lg:flex-col lg:w-[30%] lg:items-start lg:gap-2 lg:pl-[30px] md:gap-8 md:pl-6 gap-5 w-full">
              <div
                onClick={handleChange}
                className={`cursor-pointer flex justify-center items-center gap-4 ${
                  activeSuv ? "active-group" : "md:h-[40px]"
                }`}
              >
                <label htmlFor="suv">
                  <input
                    type="radio"
                    id="suv"
                    name="model"
                    value="suv"
                    className="hidden"
                    checked={car.model === "suv"}
                    onChange={handleChange}
                  />
                  <div className="lg:flex flex-row-reverse items-center">
                    <p
                      className={`w-[140px] md:w-[240px] text-[12px] md:text-[20px] lg:w-[270px] hover:text-black font-semibold transition duration-300 cursor-pointer
                      ${
                        activeSuv
                          ? "act  text-black transition duration-300"
                          : "text-gray-300"
                      }
                    `}
                    >
                      SUVs/Crossovers/MPV ({suvModels.length})
                    </p>
                    <div className="w-[20px]">
                      {
                        <FaCircle
                          className={`${
                            activeSuv ? "bullet" : "bullet-inactive"
                          }`}
                        />
                      }
                    </div>
                  </div>
                </label>
              </div>
              <div
                onClick={handleChange}
                className={`cursor-pointer flex justify-center items-center gap-4 ${
                  activeElectric ? "active-group" : "md:h-[40px]"
                }`}
              >
                <label htmlFor="electric">
                  <input
                    type="radio"
                    id="electric"
                    name="model"
                    value="electric"
                    className="hidden"
                    checked={car.model === "electric"}
                    onChange={handleChange}
                  />
                  <div className="lg:flex flex-row-reverse items-center">
                    <p
                      className={`text-[12px] md:text-[20px] w-[120px] md:w-[183px] lg:w-[240px] font-semibold hover:text-black transition duration-300 cursor-pointer
                      ${
                        activeElectric
                          ? "act text-black transition duration-300"
                          : "text-gray-300"
                      }
                    `}
                    >
                      Hybrids/Electric ({electricModels.length})
                    </p>
                    <div className="w-[20px]">
                      {
                        <FaCircle
                          className={`${
                            activeElectric ? "bullet" : "bullet-inactive"
                          }`}
                        />
                      }
                    </div>
                  </div>
                </label>
              </div>
              <div
                onClick={handleChange}
                className={`cursor-pointer md:flex justify-center md:items-center md: gap-4 ${
                  activeSedan ? "active-group" : "md:h-[40px]"
                }`}
              >
                <label htmlFor="sedan">
                  <input
                    type="radio"
                    id="sedan"
                    name="model"
                    value="sedan"
                    className="hidden"
                    checked={car.model === "sedan"}
                    onChange={handleChange}
                  />
                  <div className="lg:flex flex-row-reverse items-center">
                    <p
                      className={`text-[12px] md:text-[20px] w-[60px] md:w-[95px] lg:w-[240px] hover:text-black font-semibold transition duration-300 cursor-pointer
                      ${
                        activeSedan
                          ? "act text-black transition duration-300"
                          : "text-gray-300"
                      }
                    `}
                    >
                      Sedans ({sedanModels.length})
                    </p>
                    <div className="w-[20px]">
                      {
                        <FaCircle
                          className={`${
                            activeSedan ? "bullet" : "bullet-inactive"
                          }`}
                        />
                      }
                    </div>
                  </div>
                </label>
              </div>
            </div>
            <div className="transition duration-300 lg:overflow-y-scroll mt-[150px] lg:mt-[-20px]">
              {categories.map((category) =>
                category.models.map((model, idx) => (
                  <label
                    htmlFor={model.name}
                    className="cursor-pointer"
                    key={idx}
                  >
                    {category.name === "SUVs/Crossovers/MPV" && activeSuv ? (
                      <div
                        onClick={() => setCurrentIdx(idx)}
                        className="car-options pb-6 flex items-center justify-between cursor-pointer transition duration-300 mr-6 mt-4"
                      >
                        {
                          <div className="flex gap-4 items-center mt-6">
                            <img
                              src={model.optionImg}
                              alt={model.name}
                              width="150px"
                              className="car-brand"
                            />

                            {
                              <p className="text-[20px] font-semibold">
                                {model.name}
                              </p>
                            }
                          </div>
                        }
                        <input
                          type="radio"
                          id={model.name}
                          name="type"
                          value={model.name}
                          className="hidden"
                          checked={brand.type === model.name}
                          onChange={handleChange}
                        />
                        {brand.type === model.name && (
                          <FaCheck
                            color="red"
                            className="text-[20px] mt-[20px] cursor-pointer"
                          />
                        )}
                      </div>
                    ) : category.name === "Hybrids/Electric" &&
                      activeElectric ? (
                      <div
                        onClick={() => setCurrentIdx(idx)}
                        className="car-options lg:ml-[140px] pb-6 flex items-center justify-center lg:w-[55%] cursor-pointer transition duration-300 mr-6 mt-4"
                      >
                        {
                          <div className="flex gap-4 w-full md:justify-start items-center justify-start mt-6">
                            {
                              <img
                                src={model.optionImg}
                                alt={model.name}
                                width="150px"
                                className={`car-brand`}
                              />
                            }

                            {
                              <p
                                className={`text-[20px] lg:text-[20px]/4 font-semibold ${
                                  idx === 0 ||
                                  idx === 3 ||
                                  idx === 4 ||
                                  idx === 8
                                    ? "mr-[70px]"
                                    : ""
                                } ${idx === 2 || idx === 9 ? "w-[50%]": ""}`}
                              >
                                {model.name}
                              </p>
                            }
                          </div>
                        }
                        {
                          <label
                            htmlFor={model.name}
                            className="cursor-pointer"
                          >
                            <input
                              type="radio"
                              id={model.name}
                              name="type"
                              value={model.name}
                              className="hidden"
                              checked={brand.type === model.name}
                              onChange={handleChange}
                            />
                            {brand.type === model.name && (
                              <FaCheck
                                color="red"
                                className="text-[20px] mt-[20px] cursor-pointer"
                              />
                            )}
                          </label>
                        }
                      </div>
                    ) : (
                      category.name === "Sedans" && (
                        <div
                          onClick={() => setCurrentIdx(idx)}
                          className={`pb-6 lg:w-[250px] flex items-center justify-between cursor-pointer transition duration-300 mr-6 mt-4 ${
                            activeSedan ? "car-options" : ""
                          }`}
                        >
                          {activeSedan && (
                            <div className="flex gap-4 items-center mt-6">
                              {
                                <img
                                  src={model.optionImg}
                                  alt={model.name}
                                  width="150px"
                                  className="car-brand"
                                />
                              }
                              {
                                <p className="text-[20px] font-semibold">
                                  {model.name}
                                </p>
                              }
                            </div>
                          )}
                          {activeSedan && (
                            <label
                              htmlFor={model.name}
                              className="cursor-pointer"
                            >
                              <input
                                type="radio"
                                id={model.name}
                                name="type"
                                value={model.name}
                                className="hidden"
                                checked={brand.type === model.name}
                                onChange={handleChange}
                              />
                              {brand.type === model.name && (
                                <FaCheck
                                  color="red"
                                  className="text-[20px] cursor-pointer"
                                />
                              )}
                            </label>
                          )}
                        </div>
                      )
                    )}
                  </label>
                ))
              )}
            </div>
          </div>
        </div>
  )
}

export default VehicleOptions
