import { Footer, Navbar } from '../../components';

const ContactUs = () => {
  const lableStyle = 'text-slate-600';
  const inputContStyle = 'flex flex-col gap-1';
  const inputStyle =
    ' w-full rounded-md border border-slate-400 p-1 text-slate-700 focus:outline-none';
  return (
    <div>
      {/* NAVBAR */}
      <Navbar />
      <div className="flex w-full bg-slate-200">
        <div className="m-auto mb-6 mt-28 rounded-md bg-white p-5 md:w-[45%]">
          {/* HEADER */}
          <h1 className="text-center text-2xl font-bold text-slate-700">
            FEEDBACK
          </h1>

          <hr className="my-6" />

          <form>
            <div className="justify-between md:flex">
              {/* LeftContainer */}

              <div className=" flex w-full flex-col gap-4 md:w-[49%] ">
                {/* Inquiry Type */}

                <div className={inputContStyle}>
                  <label className={lableStyle}>
                    Inquiry Type<sup>*</sup>
                  </label>
                  <select className=" w-full rounded-md border border-slate-400 p-1 text-slate-700 focus:outline-none">
                    <option>Contact</option>
                    <option>Order Inquiry</option>
                    <option>Appreciation</option>
                    <option>Complaint</option>
                  </select>{' '}
                </div>

                {/* First Name */}

                <div className="justify-between xl:flex ">
                  <div className={`${inputContStyle} flex-[1]`}>
                    <label className={lableStyle}>
                      Title <sup>*</sup>
                    </label>
                    <select className="w-16 rounded-md border border-slate-400 p-1 text-slate-700 focus:outline-none">
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

              <div className=" flex w-full flex-col gap-4 md:w-[49%] ">
                {/* Country */}

                <div className={inputContStyle}>
                  <label className={lableStyle}>
                    Country<sup>*</sup>
                  </label>
                  <input type="text" className={inputStyle} />
                </div>

                {/* Phone NO */}

                <div className="justify-between xl:flex">
                  <div className={`${inputContStyle} flex-[1] `}>
                    <label className={lableStyle}>
                      Code<sup>*</sup>
                    </label>
                    <input
                      type="text"
                      placeholder="+94"
                      className="w-16 rounded-md border border-slate-400 p-1 text-slate-700 focus:outline-none"
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

            {/* SUBMIT_BUTTON */}

            <button className=" mt-4 w-full rounded-md bg-primaryButton py-[6px] text-white hover:bg-primaryButtonHover ">
              Send
            </button>
          </form>
        </div>
      </div>
      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default ContactUs;
