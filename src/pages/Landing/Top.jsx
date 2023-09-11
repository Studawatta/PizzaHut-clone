import React, { useState } from 'react';
import delivery from '../../assets/delivery.gif';
import takeaway from '../../assets/takeaway.gif';
import { SlTarget } from 'react-icons/sl';
import { Link } from 'react-router-dom';

const Top = () => {
  const [isTakeaway, setIsTakeaway] = useState(false);
  const [showLocation, setShowLocation] = useState(false);

  const buttonStyle =
    'rounded-[4px_4px_0_0] flex-[1] shadow-[0px_-1px_3px_#ccc] flex justify-center gap-2 items-center font-bold';

  return (
    <div className=" w-full h-[370px]">
      {/* TOP IMAGE */}
      <div className="w-full h-[250px] bg-landing-top ">
        <div className="w-3/4 flex m-auto justify-end">
          <Link
            className=" text-white font-bold p-2 rounded-[4px] bg-[#739900] mt-8 hover:bg-[#608000]"
            to="/sign-in"
          >
            Sign In / Register
          </Link>
        </div>
      </div>

      {/* ADD LOCATION */}

      <div className=" w-[90%] md:w-[500px] h-[200px] m-auto z-10 mt-[-80px] ">
        {/* SWITCH BUTTONS */}

        <div className=" w-full h-fit flex justify-between">
          {/* DELIVERY BUTTON  */}

          <button
            className={`  ${buttonStyle}
                   ${
                     isTakeaway
                       ? 'h-14 mt-2 text-slate-700 bg-white'
                       : 'h-16 text-red-600 bg-slate-200'
                   }`}
            onClick={() => setIsTakeaway(false)}
          >
            <img src={delivery} alt="devivery" className="h-8 w-8" />
            Delivery
          </button>

          {/* TAKE AWAY BUTTON */}

          <button
            className={` ${buttonStyle}
                 ${
                   isTakeaway
                     ? 'h-16 text-red-600 bg-slate-200'
                     : 'h-14 mt-2 text-slate-700 bg-white'
                 }`}
            onClick={() => setIsTakeaway(true)}
          >
            <img src={takeaway} alt="takeaway" className="h-8 w-8" />
            Takeaway
          </button>
        </div>

        {/* LOCATION INPUT */}
        <div className=" relative">
          <div
            className={`h-[136px] bg-white items-center gap-2 w-full rounded-[0_0_4px_4px] 
        shadow-[0_5px_5px_#ccc] flex flex-col pt-6 `}
          >
            <button
              className="bg-slate-200 w-[90%] rounded-[4px] p-2 text-slate-700 font-semibold text-left cursor-text"
              onClick={() => setShowLocation(true)}
            >
              Enter your takeaway location
            </button>

            <button className="bg-[#739900] text-white w-[90%] rounded-[4px] py-2 hover:bg-[#608000]">
              Search
            </button>
          </div>
          {showLocation && (
            <div
              className={`fixed w-[90%] md:w-[500px] animate-moveUp flex z-10 px-2 py-4  rounded-[4px] bg-white
            shadow-[0_0px_10px_#808080] flex-col gap-4 `}
            >
              <div className=" flex justify-end mr-4 h-fit">
                <span
                  className="text-slate-600 cursor-pointer "
                  onClick={() => setShowLocation(false)}
                >
                  Close
                </span>
              </div>

              <h1 className=" text-slate-700 font-semibold text-[18px] text-center">
                Locate You -OR- Enter Your Location
              </h1>
              <div className="  md:flex justify-between w-[90%] m-auto">
                <div className="flex flex-col gap-2">
                  <label className="text-slate-600">House No</label>
                  <input
                    type="text"
                    placeholder="25/4"
                    className="border border-slate-300 rounded-[4px] w-24 px-2 py-1 focus:outline-none "
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-slate-600">Street</label>
                  <input
                    type="text"
                    placeholder="Anderson Road, Colombo 04"
                    className="border border-slate-300 rounded-[4px] w-[320px] px-2 py-1 focus:outline-none "
                  />
                </div>
              </div>
              <button
                className={`border border-slate-400 w-[90%] flex items-center justify-center
               gap-3 font-thin text-[14px] py-1 m-auto hover:bg-slate-200 rounded-[4px]`}
              >
                <SlTarget /> LOCATE ME
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Top;
