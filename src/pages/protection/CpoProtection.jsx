import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import "./protection.css";
import ShoppingTools from "../../components/ShoppingTools";

const CpoProtection = () => {
  return (
    <div className="text-black mt-15">
      <div className="bg-gray-100">
        <h1 className="text-4xl font-semibold text-center pt-15 mb-8">
          Kia Protection Plans
        </h1>
        <p className="mx-6 text-center text-[18px] lg:w-[60%] lg:m-auto pb-12">
          What is a Kia Protection Plan? For eligible used vehicles, Kia offers
          three different vehicle protection plans: Powertrain, Gold and
          Platinum. The Kia Protection Plan program provides you additional
          service and repair protection for your vehicle. You can purchase a
          protection plan for your eligible vehicle, depending on its age and
          mileage.
        </p>
      </div>
      <div className="mt-8 md: md:flex lg:justify-between items-center">
        <img
          src="/cpo/cpo-powertrain.jpg"
          alt="powertrain"
          className="mb-8 md:mb-1 lg:mb-20 md:w-[400px] md:h-[400px] lg:w-[650px] lg:h-[650px]"
        />
        <div className="mx-6 lg:w-[40%] lg:pl-16">
          <h1 className="text-4xl font-semibold mb-4 md:mb-2 md:text-3xl lg:text-5xl lg:w-[50%]">
            Powertrain Coverage
          </h1>
          <p className=" text-[18px] mb-4 md:text-[15px] lg:w-[80%] lg:mb-8 lg:text-[18px]/5 ">
            Powertrain coverage offers protection against covered mechanical
            breakdowns of the following:
          </p>
          <ul className="list-disc mx-6 md:text-[13px]/4 lg:text-[18px]/5 lg:w-[60%]">
            <li>ENGINE</li>
            <li>TRANSMISSION</li>
            <li>TRANSAXLE</li>
            <li>TRANSFER CASE</li>
            <li>DRIVE AXLE</li>
            <li>ADDITIONAL HYBRID/PLUG-IN ELECTRIC/COMPRESSED</li>
            <li>NATGAS COMPONENTS</li>
          </ul>
          <div className="flex flex-col protect md:text-[15px]/3 lg:text-[18px]/4 w-[90%] my-8">
            <button className="text-left font-semibold cursor-pointer">
              Please see brochure for more details on coverage, exclusions and
              limitations.
            </button>
            <MdOutlineKeyboardArrowRight className="protection-btn" />
          </div>
        </div>
      </div>
      <div className="mt-8 md:mt-0 md:flex lg:justify-between items-center">
        <img
          src="/cpo/cpo-gold.jpg"
          alt="powertrain"
          className="mb-8 md:mb-1 lg:mb-20 md:w-[400px] md:h-[400px] lg:w-[650px] lg:h-[650px]"
        />
        <div className="mx-6 lg:w-[40%] lg:pl-16">
          <h1 className="text-4xl font-semibold mb-4 md:mb-2 md:text-3xl lg:text-5xl lg:w-[80%]">
            Gold Coverage
          </h1>
          <p className="text-[18px] mb-4 md:text-[15px] lg:w-[90%] lg:mb-8 lg:text-[18px]/5">
            Gold offers all of the same features of Powertrain, plus additional
            coverage for specific components:
          </p>
          <ul className="list-disc mx-6 md:text-[13px]/4 lg:text-[18px]/5 lg:w-[60%]">
            <li>ENGINE</li>
            <li>COOLING</li>
            <li>DRIVE AXLE</li>
            <li>STEERING</li>
            <li>BRAKES</li>
            <li>AIR CONDITIONING</li>
            <li>FRONT/REAR SUSPENSION</li>
            <li>ELECTRICAL</li>
            <li>ADDITIONAL HYBRID/PLUG-IN ELECTRICAL/COMPRESSED</li>
            <li>NATURAL GAS COMPONENTS</li>
          </ul>
          <div className="flex flex-col protect md:text-[15px]/3 lg:text-[18px]/4 w-[90%] my-8">
            <button className="text-left font-semibold cursor-pointer">
              Please see brochure for more details on coverage, exclusions and
              limitations.
            </button>
            <MdOutlineKeyboardArrowRight className="protection-btn" />
          </div>
        </div>
      </div>
      <div className="mt-8 md:mt-0 md:flex lg:justify-between lg:mt-0">
        <img
          src="/cpo/cpo-platinum.jpg"
          alt="powertrain"
          className="mb-8 md:mb-1 lg:mb-20 md:w-[400px] md:h-[400px] lg:w-[650px] lg:h-[650px]"
        />
        <div className="mx-6 lg:w-[40%] lg:pl-16">
          <h1 className="text-4xl font-semibold mb-4 md:mb-2 md:text-3xl lg:text-5xl">
            Platinum Coverage
          </h1>
          <p className=" text-[18px] mb-4 md:mb-2 lg:mb-8 md:text-[15px]/4 lg:text-[18px]/5 lg:w-[80%]">
            In addition to offering the same features of Powertrain and Gold
            protection plans, Platinum expands to cover many assemblies of your
            vehicle, excluding:
          </p>
          <p className="mx-6 md:mx-0 md:text-[15px]/4 lg:text-[18px]/5 lg:w-[90%]">
            Brake linings, brake drums and rotors, disc brake pads, standard
            manual transmission clutch friction disc, pressure plate, pilot
            bearing, throw-out bearing and arm, air bags, solar powered devices,
            glass, lenses, sealed beams, body parts and/or panels, weather
            stripping, trim, moldings, lock cylinders, tires, wheels, all
            batteries except Hybrid/EV/Hydrogen High Voltage batteries as listed
            under Gold Coverage, light bulbs, upholstery, paint, bright metal,
            freeze plugs, filters, heater and radiator hoses, exhaust system,
            catalytic converter, shock absorbers, work such as front-end
            alignment or wheel balancing (except when required in conjunction
            with a mechanical breakdown), safety restraint systems,
            audio/security or other systems not factory installed, or vinyl and
            convertible tops.
          </p>
          <div className="flex flex-col protect w-[90%] my-8 md:my-2">
            <button className="text-left font-semibold cursor-pointer md:text-[15px]/3 lg:text-[18px]/5 lg:mt-4">
              Please see brochure for more details on coverage, exclusions and
              limitations.
            </button>
            <MdOutlineKeyboardArrowRight className="protection-btn" />
          </div>
        </div>
      </div>
      <div className="mx-6">
        <h1 className="text-4xl md:text-[41px] md:w-full text-center font-semibold w-[90%] m-auto my-4">
          Kia Distinction Vehicle Protection Plans
        </h1>
        <p>
          Need a protection plan for your tires, wheels, interior or exterior
          coverage? There are for levels of coverage available: Deluxe, Premium,
          Superior and Superior Plus. Each level adds to the coverage of the
          level below it. All levels include Alternative Transportation and
          Towing/Roadside Assistance Reimbursement.
        </p>
        <div className="flex my-8">
          <button className="text-left cursor-pointer font-semibold underline">
            Vehicle Protection Plans Brochure
          </button>
          <MdOutlineKeyboardArrowRight className="innovation-btn" />
        </div>
      </div>
      <div className="">
        <h1 className="text-xl md:text-3xl font-semibold p-4 bg-gray-100">
          The Kia Distinction Appearance Plan
        </h1>
        <p className="mx-6 my-4 md:text-[18px]">
          A Ding Shield Service Plan allows you to avoid the time and expense of
          a body shop appointment and help maintain the appearance of your
          vehicle with ease at the dealership.
        </p>
        <div className="pb-8">
          <div className="flex justify-between text-[12px] md:text-[15px] md:font-semibold mx-6 mt-8">
            <p  className="lg:ml-6">Ding Shield Plus*</p>
            <p className="mr-4 md:mr-20 lg:mr-80">Ding Shield Ultimate*</p>
          </div>
          <div className="bg-gray-100 lg:border-y lg:border-gray-300 flex justify-between text-[12px] md:text-[15px]/4 lg:text-[15px]/5 lg:mx-6 py-4 mt-4">
            <p className="w-[48%] md:w-[30%] lg:w-[15%] mx-6">
              Dent & Dings*
              <br />
              Unlimted repairs of dents, dings and creases that do not exceed
              the size of a tradtional credit card(3.25"x2")
            </p>
            <p className="w-[48%] lg:w-[70%] mx-6">
              Complete Windshield Chip Repair:
              <br />
              Eliminates minor chips and nicks caused by small rocks, stones or
              other road debris that may hit your windshield.
            </p>
          </div>
          <div className="flex justify-between lg:border-y lg:border-gray-300 text-[12px] lg:mx-6 md:text-[15px]/4 py-4">
            <p className="w-[48%] md:w-[30%] lg:w-[15%] mx-6">
              Rental Reimbursment: <br /> Reinbursment of actual rental vehicle
              cost for a maximun of one day, not to exceed $50.{" "}
            </p>
            <p className="w-[48%] lg:w-[70%] lg:mt-6  mx-6">
              Headlight Brightening: Reconditions foggy or yellowed headlights.
            </p>
          </div>
          <div className="bg-gray-100 lg:border-y lg:border-gray-300 mx-6 flex justify-between text-[12px] md:text-[15px]/4 py-4">
            <p className="w-[48%] md:w-[30%] lg:w-[15%] mx-6"></p>
            <p className="w-[48%] lg:w-[70%] mx-6">
              Interior Repair Services: Unlimited repairs of minor rips, burns,
              tears, holes, punctures, and scratches up to 2" in length.
            </p>
          </div>
          <div className="mx-6 mt-25 lg:px-40">
            <p className="italic tracking-tight md:text-[20px]/5 md:w-[85%] lg:w-[63%]">
              *DING SHIELD ALLOY WHEEL REPAIR:
              <br /> As a special offer to our customers, repair aluminum or
              painted wheels damaged by minor curb scuffs, scratches, scrapes or
              rash with Ding Shield Alloy Wheel Repair. Available as an add-on
              with either the Ding Shield Plus or Ding Shield Ultimate Service
              Plan.
            </p>
            <div className="flex mt-8 md:mb-20">
              <button className="text-left cursor-pointer font-semibold underline md:text-[20px]">
                Click here for details on Appearance Plan
              </button>
              <MdOutlineKeyboardArrowRight className="innovation-btn" />
            </div>
          </div>
          <ShoppingTools />
        </div>
      </div>
    </div>
  );
};

export default CpoProtection;
