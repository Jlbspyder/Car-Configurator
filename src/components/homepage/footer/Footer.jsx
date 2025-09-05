import { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { footerDetails } from "../../../data";
import "./footer.css";

const Footer = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = (index) => {
    if (clicked === index) {
      return setClicked(false);
    }
    setClicked(index);
  };

  return (
    <>
      <footer id="mobile-footer">
        <div className="md:flex justify-between">
          <div className="bg-[#1f2c35] foot-left h-[200px] w-full md:h-[100px] md:w-[60%] lg:w-[89.5%] px-[25px] md:px-[30px] lg:py-4">
            <div className="h-[50%] py-[36px] md:flex justify-between md:items-center">
              <div>
                <h1 className="text-[1.7rem] md:text-[1.2rem] lg:text-[2rem]">
                  Don't miss a beat
                </h1>
                <p className="text-[13.5px] md:text-[12px] lg:text-[15px]">
                  Sign up to get the latest updates.
                </p>
              </div>
              <button className="border-1 px-9 py-2 mt-[20px] md:mt-2 md:px-6 md:text-[12px] lg:text-[13px] lg:px-10 lg:py-3 font-semibold hover:bg-[#f9f9f9] hover:text-black cursor-pointer transition duration-300 ">
                Stay Updated
              </button>
            </div>
          </div>
          <div className="bg-gray-700 mobile-foot flex justify-center items-center gap-6 md:w-[40%] h-[120px] md:h-[100px] px-[25px] lg:w-[41.3%] lg:gap-8">
            <Link to="https://www.facebook.com/kia" target="_blank" className="relative bg-[#1f2c35] w-[50px] h-[50px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] rounded-full">
              <li>
                <FaFacebookF className="socials" />
              </li>
            </Link>
            <Link to="https://x.com/kia" target="_blank" className="relative bg-[#1f2c35] w-[50px] h-[50px] md:w-[40px] md:h-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] rounded-full">
              <li>
                <FaXTwitter className="socials" />
              </li>
            </Link>
            <Link to="https://www.instagram.com/kiausa/" target="_blank" className="relative bg-[#1f2c35] w-[50px] h-[50px] md:w-[40px] md:h-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] rounded-full">
              <li>
                <RiInstagramFill className="socials" />
              </li>
            </Link>
            <Link to="https://www.youtube.com/kia" target="_blank" className="relative bg-[#1f2c35] w-[50px] h-[50px] md:w-[40px] md:h-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] rounded-full">
              <li>
                <FaYoutube className="socials" />
              </li>
            </Link>
          </div>
        </div>
        <div className="footer bg-[#05141f] px-[25px] pt-[3rem]">
          <img
            src="/images/kia-white-logo.jpg"
            alt="kia-logo"
            className="footer-logo"
          />
          <ul className="font-semibold mt-12 pb-6 text-[20px] text-[#f9f9f9]">
            <li className="footer-list w-[35%] md:w-[15%]">Vehicles</li>
            <li className="footer-list w-[80%] md:w-[35%]">
              Certfied Pre-Owned
            </li>
            <li className="footer-list w-[40%] md:w-[20%]">
              Why Kia
              <span className="ml-2 inline-block">
                <FaHeart className="heart" />
              </span>
            </li>
            <li className="footer-list w-[50%] md:w-[25%]">Kia Collection</li>
            <li className="footer-list w-[30%] md:w-[15%]">Owners</li>
          </ul>
          <div className="pb-6">
            {footerDetails.map((detail, idx) => (
              <div key={detail.id}>
                <div
                  className={`footer-accordion cursor-pointer flex items-end justify-between mt-6 ${
                    idx === footerDetails.length - 1 && !clicked
                      ? "last-border"
                      : ""
                  }`}
                  onClick={() => handleClick(idx)}
                >
                  <h3 className="pt-3 text-md md:text-xl cursor-pointer font-semibold text-[#f9f9f9]">
                    {detail.title}
                  </h3>
                  <span>
                    {clicked === idx ? (
                      <IoIosArrowUp className="footer-arrow down" />
                    ) : (
                      <IoIosArrowDown className="footer-arrow down" />
                    )}
                  </span>
                </div>
                <div
                  className={`mt-4 ${clicked === idx ? "accordion-open" : ""}`}
                >
                  {clicked === idx ? (
                    <small className="flex flex-col">{detail.info[0]}</small>
                  ) : null}
                  {clicked === idx ? (
                    <small className="flex flex-col">{detail.info[1]}</small>
                  ) : null}
                  {clicked === idx ? (
                    <small className="flex flex-col">{detail.info[2]}</small>
                  ) : null}
                  {clicked === idx ? (
                    <small className="flex flex-col">{detail.info[3]}</small>
                  ) : null}
                  {clicked === idx ? (
                    <small className="flex flex-col">{detail.info[4]}</small>
                  ) : null}
                  {clicked === idx ? (
                    <small className="flex flex-col">{detail.info[5]}</small>
                  ) : null}
                  {clicked === idx ? (
                    <small className="flex flex-col">{detail.info[6]}</small>
                  ) : null}
                  {clicked === idx ? (
                    <small className="flex flex-col">{detail.info[7]}</small>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-start md:flex-row md:items-center justify-between gap-4 pb-8">
            <div className="flex gap-4">
              <h1 className="font-semibold cursor-pointer">ESPANOL</h1>|
              <h1 className="font-semibold cursor-pointer"> 中国人</h1>
            </div>
            <h5 className="text-[10px] text-gray-400">
              Copyright &copy;2025 Kia America, Inc.
            </h5>
          </div>
        </div>
      </footer>
      <footer id="desktop-footer">
       <div className="hidden lg:block lg:flex justify-between">
          <div className="bg-[#1f2c35] foot-left h-[200px] w-full md:h-[100px] md:w-[60%] lg:w-[89.5%] px-[25px] md:px-[50px] lg:py-4">
            <div className="h-[50%] py-[36px] md:flex justify-between md:items-center">
              <div>
                <h1 className="text-[1.7rem] md:text-[1.2rem] lg:text-[2rem] lg:tracking-tight">
                  Don't miss a beat
                </h1>
                <p className="text-[13.5px] md:text-[12px] lg:text-[15px]">
                  Sign up to get the latest updates.
                </p>
              </div>
              <button className="border-1 px-9 py-2 mt-[20px] md:mt-2 md:px-6 md:text-[12px] lg:text-[13px] lg:px-10 lg:py-3 font-semibold hover:bg-[#f9f9f9] hover:text-black cursor-pointer transition duration-300 ">
                Stay Updated
              </button>
            </div>
          </div>
          <div className="bg-gray-700 desktop-foot flex justify-center items-center gap-6 md:w-[40%] h-[120px] md:h-[100px] px-[25px] lg:w-[41.3%] lg:gap-8">
            <Link to="https://www.facebook.com/kia" target="_blank" className="relative bg-[#1f2c35] w-[50px] h-[50px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] rounded-full hover:bg-[#f9f9f9]">
              <li>
                <FaFacebookF className="socials" />
              </li>
            </Link>
            <Link to="https://x.com/kia" target="_blank" className="relative bg-[#1f2c35] w-[50px] h-[50px] md:w-[40px] md:h-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] rounded-full hover:bg-[#f9f9f9]">
              <li>
                <FaXTwitter className="socials" />
              </li>
            </Link>
            <Link to="https://www.instagram.com/kiausa/" target="_blank"  className="relative bg-[#1f2c35] w-[50px] h-[50px] md:w-[40px] md:h-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] rounded-full hover:bg-[#f9f9f9]">
              <li>
                <RiInstagramFill className="socials" />
              </li>
            </Link>
            <Link to="https://www.youtube.com/kia" target="_blank" className="relative bg-[#1f2c35] w-[50px] h-[50px] md:w-[40px] md:h-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] rounded-full hover:bg-[#f9f9f9]">
              <li>
                <FaYoutube className="socials" />
              </li>
            </Link>
          </div>
        </div>
        <div className="hidden lg:block bg-[#05141f] px-[50px] py-[80px] ">
          <img
            src="/images/kia-white-logo.jpg"
            alt="kia-logo"
            className="footer-logo"
          />
          <div className="flex">
            <ul className="flex mt-6 text-lg flex-col font-semibold h-[220px] justify-between w-[25%]">
              <li>Vehicles</li>
              <li>Certified Pre-Owned</li>
              <li>
                Why Kia
                <span className="ml-2 inline-block">
                  <FaHeart className="heart" />
                </span>
              </li>
              <li>Kia Collective</li>
              <li>Owners</li>
            </ul>
            <div className="flex mt-6 items-start text-left justify-between w-[90%]">
              {footerDetails.map((detail) => (
                <table  className="table-border h-[100%]" key={detail.id}>
                  <thead >
                    <tr>
                      <th className="pl-[30px]">{detail.title}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="cursor-pointer pl-[30px] text-[#c2bfbf] text-[13px] mt-4 font-bold flex flex-col gap-2">
                        <td>{detail.info[0]}</td>
                        <td>{detail.info[1]}</td>
                        <td>{detail.info[2]}</td>
                        <td>{detail.info[3]}</td>
                        <td>{detail.info[4]}</td>
                        <td>{detail.info[5]}</td>
                        <td className="w-[90%]">{detail.info[6]}</td>
                        <td>{detail.info[7]}</td>
                    </tr>
                  </tbody>
                </table>
              ))}
            </div>
          </div>
          <div className="flex flex-row items-center justify-between pt-8">
            <div className="flex gap-4">
              <h1 className="font-semibold cursor-pointer">ESPAÑOL</h1>|
              <h1 className="font-semibold cursor-pointer">한글</h1>
            </div>
            <h5 className="text-[10px] text-gray-400">
              Copyright &copy;2025 Kia America, Inc.
            </h5>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
