import { useState } from 'react';
import { SlTarget } from 'react-icons/sl';
import { Link } from 'react-router-dom';
import { delivery, takeaway } from '../../assets';
import { BestDeals, Footer } from '../../components';

const Landing = () => {
  const [isTakeaway, setIsTakeaway] = useState(false);
  const [showLocation, setShowLocation] = useState(false);

  const buttonStyle =
    'flex flex-[1] items-center justify-center gap-2 rounded-[4px_4px_0_0] font-bold shadow-[0px_-1px_3px_#ccc]';

  return (
    <div>
      <div className=" h-[370px] w-full">
        {/* TOP_IMAGE */}

        <div className="h-[250px] w-full bg-landing-top ">
          <div className="m-auto flex w-3/4 justify-end">
            {/* SIGN_IN/REGISTER_BUTTON */}

            <Link
              className={`mt-8 rounded-[4px] bg-primaryButton p-2 font-bold text-white
                         hover:bg-primaryButtonHover`}
              to="/sign-in"
            >
              Sign In / Register
            </Link>
          </div>
        </div>

        {/* ADD_LOCATION */}

        <div className="  z-10 m-auto mt-[-80px] h-[200px] w-[90%] md:w-[500px] ">
          {/* SWITCH_BUTTONS */}

          <div className=" flex h-fit w-full justify-between">
            {/* DELIVERY_BUTTON  */}

            <button
              className={`  ${buttonStyle}
                   ${
                     isTakeaway
                       ? 'mt-2 h-14 bg-white text-slate-700'
                       : 'h-16 bg-slate-200 text-red-600'
                   }`}
              onClick={() => setIsTakeaway(false)}
            >
              <img src={delivery} alt="devivery" className="h-8 w-8" />
              Delivery
            </button>

            {/* TAKE_AWAY_BUTTON */}

            <button
              className={` ${buttonStyle}
                 ${
                   isTakeaway
                     ? 'h-16 bg-slate-200 text-red-600'
                     : 'mt-2 h-14 bg-white text-slate-700'
                 }`}
              onClick={() => setIsTakeaway(true)}
            >
              <img src={takeaway} alt="takeaway" className="h-8 w-8" />
              Takeaway
            </button>
          </div>

          {/* LOCATION_INPUT */}

          <div className=" relative">
            <div
              className={`flex h-[136px] w-full flex-col items-center gap-2 rounded-[0_0_4px_4px]
                         bg-white pt-6 shadow-[0_5px_5px_#ccc] `}
            >
              <button
                className={`w-[90%] cursor-text rounded-[4px] bg-slate-200 p-2 text-left
                            font-semibold text-slate-700`}
                onClick={() => setShowLocation(true)}
              >
                Enter your takeaway location
              </button>

              <button className="w-[90%] rounded-[4px] bg-[#739900] py-2 text-white hover:bg-[#608000]">
                Search
              </button>
            </div>
            {showLocation && (
              <div
                className={`fixed z-10 flex w-[90%] animate-moveUp flex-col gap-4 rounded-[4px] bg-white 
                            px-2 py-4 shadow-[0_0px_10px_#808080] md:w-[500px] `}
              >
                <div className=" mr-4 flex h-fit justify-end">
                  <span
                    className="cursor-pointer text-slate-600 "
                    onClick={() => setShowLocation(false)}
                  >
                    Close
                  </span>
                </div>

                <h1 className=" text-center text-[18px] font-semibold text-slate-700">
                  Locate You -OR- Enter Your Location
                </h1>
                <div className="m-auto  w-[90%] justify-between md:flex ">
                  <div className="flex flex-col gap-2">
                    <label className="text-slate-600">House No</label>
                    <input
                      type="text"
                      placeholder="25/4"
                      className="w-24 rounded-[4px] border border-slate-300 px-2 py-1 focus:outline-none "
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-slate-600">Street</label>
                    <input
                      type="text"
                      placeholder="Anderson Road, Colombo 04"
                      className="w-[320px] rounded-[4px] border border-slate-300 px-2 py-1 focus:outline-none "
                    />
                  </div>
                </div>
                <button
                  className={`m-auto flex w-[90%] items-center justify-center gap-3 rounded-[4px] border
                             border-slate-400 py-1 text-[14px] font-thin hover:bg-slate-200`}
                >
                  <SlTarget /> LOCATE ME
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* BEST_DEALS */}

      <BestDeals />

      {/* FOOTER */}

      <Footer />
    </div>
  );
};

export default Landing;
