import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const ContactUs = () => {
  const lableStyle = 'text-slate-600';
  const inputContStyle = 'flex flex-col gap-1';
  const inputStyle =
    'w-full border border-slate-400 p-1 rounded-md focus:outline-none text-slate-700';
  return (
    <div>
      <Navbar />
      <div className="flex bg-slate-200 w-full ">
        <div className="mt-28 mb-6 m-auto md:w-[45%] bg-white p-5 rounded-md">
          <h1 className="text-2xl text-slate-700 text-center font-bold">
            FEEDBACK
          </h1>
          <hr className="my-6" />
          <form>
            <div className="md:flex justify-between">
              {/* LeftContainer */}
              <div className=" flex flex-col gap-4 w-full md:w-[49%] ">
                {/* Inquiry Type */}

                <div className={inputContStyle}>
                  <label className={lableStyle}>
                    Inquiry Type<sup>*</sup>
                  </label>
                  <select className=" w-full border border-slate-400 p-1 rounded-md focus:outline-none text-slate-700">
                    <option>Contact</option>
                    <option>Order Inquiry</option>
                    <option>Appreciation</option>
                    <option>Complaint</option>
                  </select>{' '}
                </div>

                {/* First Name */}

                <div className="md:flex justify-between ">
                  <div className={`${inputContStyle} flex-[1]`}>
                    <label className={lableStyle}>
                      Title <sup>*</sup>
                    </label>
                    <select className="w-16 border border-slate-400 p-1 rounded-md focus:outline-none text-slate-700">
                      <option></option>
                      <option>Mr.</option>
                      <option>Mrs.</option>
                      <option>Miss.</option>
                    </select>
                  </div>
                  <div className={`${inputContStyle} flex-[3]`}>
                    <label className={lableStyle}>
                      First Name<sup>*</sup>
                    </label>
                    <input
                      type="text"
                      placeholder="First Name"
                      className={inputStyle}
                    />
                  </div>
                </div>

                {/* Last Name */}

                <div>
                  <label className={lableStyle}>
                    Last Name<sup>*</sup>
                  </label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className={inputStyle}
                  />
                </div>

                {/* Email */}

                <div>
                  <label className={lableStyle}>
                    Email<sup>*</sup>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Email"
                    className={inputStyle}
                  />
                </div>

                {/* Re Enter Email */}

                <div>
                  <label className={lableStyle}>
                    Re Enter Email<sup>*</sup>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Email"
                    className={inputStyle}
                  />
                </div>
              </div>

              {/* RightContainer */}

              <div className=" flex flex-col gap-4 w-full md:w-[49%] ">
                {/* Country */}

                <div className={inputContStyle}>
                  <label className={lableStyle}>
                    Country<sup>*</sup>
                  </label>
                  <input type="text" className={inputStyle} />
                </div>

                {/* Phone NO */}

                <div className="md:flex justify-between">
                  <div className={`${inputContStyle} flex-[1] `}>
                    <label className={lableStyle}>
                      Code<sup>*</sup>
                    </label>
                    <input
                      type="text"
                      placeholder="+94"
                      className="border border-slate-400 p-1 rounded-md focus:outline-none w-16 text-slate-700"
                    />
                  </div>
                  <div className={`${inputContStyle} flex-[3]`}>
                    <lable className={lableStyle}>
                      Phone No<sup>*</sup> (Ex:777123456)
                    </lable>
                    <input type="text" className={inputStyle} />
                  </div>
                </div>

                {/* Message */}
                <div className={inputContStyle}>
                  <label className={lableStyle}>Massege</label>
                  <textarea className={`${inputStyle} h-28`} />
                </div>
              </div>
            </div>

            <button className=" bg-primaryButton text-white w-full py-[6px] rounded-md mt-4 hover:bg-primaryButtonHover ">
              Send
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
