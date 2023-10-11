import React from 'react';
import Navbar from '../../components/Navbar';
import { IoPersonOutline } from 'react-icons/io5';
import { GrPowerReset } from 'react-icons/gr';
import { SlPeople } from 'react-icons/sl';
import { BsPersonAdd } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import Footer from '../../components/Footer';

const SignIn = () => {
  const inputContStyle = 'flex flex-col gap-1';
  const inputStyle =
    'border border-slate-400 rounded-[4px] py-1 px-2 w-72 focus:outline-none';
  return (
    <div>
      <Navbar />
      <div className="bg-slate-200 w-full h-[calc(100vh-64px)] flex mt-16 items-center justify-center">
        <div className="bg-white h-fit shadow-2xl rounded-md p-5">
          <h1 className="text-slate-700 text-xl text-center">
            LET'S START YOUR ORDER
          </h1>
          <hr className="w-4/5 m-auto border-slate-300 mt-8 " />
          <div className="md:flex mt-6 ">
            {/* LEFT */}
            <div className="flex flex-col gap-4 text-slate-700 md:border-r border-slate-300 md:pr-8">
              {/* USERNAME INPUT */}
              <div className={inputContStyle}>
                <label>
                  Username <sup>*</sup>{' '}
                </label>
                <input
                  type="text"
                  placeholder="Mobile (Ex: 7771234456) / Email"
                  className={inputStyle}
                />
              </div>
              {/* PASSWORD INPUT */}
              <div className={inputContStyle}>
                <label>
                  Password <sup>*</sup>{' '}
                </label>
                <input
                  type="text"
                  placeholder="Password"
                  className={inputStyle}
                />
              </div>

              <div className="flex items-center gap-2 my-4">
                <input type="checkbox" className="h-4 w-4 bg-slate-400" />
                <label>Remember me</label>
              </div>

              {/* SUBMIT BUTTONS */}

              <div className="flex flex-col gap-2">
                <button
                  className={`bg-primaryButton rounded-[4px] flex items-center justify-center text-white
                   py-2 hover:bg-primaryButtonHover`}
                >
                  <IoPersonOutline />
                  Log in with Pizza Hut
                </button>

                <button className="flex items-center gap-2 w-fit hover:text-primaryButton">
                  <GrPowerReset />
                  Reset password
                </button>
              </div>
            </div>
            {/* RIGHT */}
            <div className="flex flex-col gap-4 mt-4 md:mt-0 md:pl-8">
              <button className="bg-green-700 flex items-center py-2 px-10 gap-2 text-white rounded-[4px]">
                <SlPeople /> Continue as guest
              </button>
              <button className="bg-red-600 flex items-center justify-center gap-2 py-2 rounded-[4px]">
                <BsPersonAdd /> Create an accout
              </button>
              <hr />
              <button className="border border-slate-400 rounded-[4px] flex items-center justify-center gap-2 py-2 hover:bg-slate-200">
                <FcGoogle /> Login with Google
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;
