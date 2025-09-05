import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt4 } from "react-icons/hi";
import { GrClose } from "react-icons/gr";

const CpoNavbar = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  useEffect(() => {
    if (openMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [openMobileMenu]);

  return (
    <div id="cpo">
      <div className={`cpo-nav ${openMobileMenu ? " open-cpo" : ""}`}>
        <div className="lg:hidden md:flex md:h-[350px] px-8 py-6">
          <ul className="font-semibold md:p-8 md:text-[33px] md:tracking-wide cursor-pointer text-[30px]">
            <Link
              onClick={() => setOpenMobileMenu(!openMobileMenu)}
              to="/cpo/inventory"
            >
              <li className="cpo-menu-item w-[36%] md:w-[52%]">Inventory</li>
            </Link>
            <Link
              onClick={() => setOpenMobileMenu(!openMobileMenu)}
              to="/cpo/benefits"
            >
              <li className="md:mt-4 cpo-menu-item w-[33%] md:w-[45%]">
                Benefits
              </li>
            </Link>
            <Link
              onClick={() => setOpenMobileMenu(!openMobileMenu)}
              to="/cpo/protection"
            >
              <li className="md:mt-4 cpo-menu-item w-[63%] md:w-[100%]">
                Protection Plans
              </li>
            </Link>
            <Link
              onClick={() => setOpenMobileMenu(!openMobileMenu)}
              to="/cpo/maintenance"
            >
              <li className="md:mt-4 cpo-menu-item w-[72%] md:w-[100%]">
                Maintenance Plans
              </li>
            </Link>
          </ul>
          <div className="text-[25px] md:self-end md:mb-2 md:text-[20px] mt-6 font-semibold">
            <Link onClick={() => setOpenMobileMenu(!openMobileMenu)} to="/">
              <p className="cursor-pointer cpo-para1">Kia.com</p>
            </Link>
            <p className="cursor-pointer cpo-para2">Owners</p>
          </div>
        </div>
      </div>
      <div className="bg-black fixed h-[60px] z-60 top-0 left-0 right-0">
        <div className="flex h-[100%] items-center justify-between">
          <div className="w-full">
            <ul className="hidden cpo-list lg:block lg:flex lg:h-[37px] gap-8 lg:pl-4 lg:w-[100%] items-center font-semibold cursor-pointer underline lg:no-underline text-[11px]">
              <Link to="/cpo/inventory">
                <li>Inventory</li>
              </Link>
              <Link to="/cpo/benefits">
                <li>Benefits</li>
              </Link>
              <Link to="/cpo/protection">
                <li>Protection Plans</li>
              </Link>
              <Link to="/cpo/maintenance">
                <li>Maintenance Plans</li>
              </Link>
            </ul>
          </div>
          <div className="flex items-center justify-center w-full lg:w-[60%] ">
            <Link to="/cpo">
              <img
                src="/images/kia-white-logo.jpg"
                alt="kia-logo"
                className="cpo-logo"
              />
            </Link>
            <div className="ml-[5px] cursor-pointer flex header-stripe flex-col items-center justify-center ">
              <p className=" text-[13px] font-semibold">CERTIFIED</p>
              <p className="text-[12px]/2 ">pre-owned</p>
            </div>
          </div>
          <div className="w-full flex justify-end lg:justify-end lg:h-[100%] lg:items-end ">
            {!openMobileMenu ? (
              <HiMenuAlt4
                className="cpo-menu"
                onClick={() => setOpenMobileMenu(!openMobileMenu)}
              />
            ) : (
              <GrClose
                className="cpo-menu"
                onClick={() => setOpenMobileMenu(!openMobileMenu)}
              />
            )}
            <div className="hidden cursor-pointer cpo lg:flex lg:items-center lg:justify-between lg:w-[25%] lg:pr-6 lg:h-[100%] text-[11px] mt-6 font-semibold">
              <Link to="/">
                <p className="h-[30%]">Kia.com</p>
              </Link>
              <div className="h-[50%] border-l"></div>
              <Link to=''>
                <p className="text-right h-[30%] ">Owners</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CpoNavbar;
