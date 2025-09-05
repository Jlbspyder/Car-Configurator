import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const ShoppingTools = () => {
  return (
     <div className="bg-gray-100 text-black my-8 py-8 md:my-0 flex flex-col items-center">
            <h1 className="text-[30px] font-semibold mb-8 md:text-[35px] md:text-center md:mb-20 md:pl-8 md:w-full ">
              CPO Shopping Tools
            </h1>
            <div className="md:flex justify-between md:px-20 md:w-full lg:w-[80%]">
              <Link
                to="/inventory"
                className="flex flex-col cursor-pointer gap-2 lg:gap-8 items-center"
              >
                <img
                  src="/icons/icon-search-inventory.avif"
                  alt="cpo-inventory"
                  className="cpo-icon"
                />
                <div className="icons flex items-center mb-8">
                  <button className="font-semibold">Search Inventory</button>
                  <IoIosArrowDown className="offers-btn" />
                </div>
              </Link>
              <div className="flex flex-col cursor-pointer gap-2 lg:gap-8 items-center">
                <img
                  src="/icons/icon-trade-in.avif"
                  alt="cpo-inventory"
                  className="cpo-icon"
                />
                <div className="icons flex items-center mb-8">
                  <button className="font-semibold">
                    Estimated Trade-In Value
                  </button>
                  <IoIosArrowDown className="offers-btn" />
                </div>
              </div>
              <div className="flex flex-col cursor-pointer gap-2 lg:gap-8 items-center">
                <img
                  src="/icons/icon-cpo-dealer.avif"
                  alt="cpo-inventory"
                  className="cpo-icon"
                />
                <div className="icons flex items-center mb-8">
                  <button className="font-semibold">Find a CPO Dealer</button>
                  <IoIosArrowDown className="offers-btn" />
                </div>
              </div>
            </div>
          </div>
  )
}

export default ShoppingTools
