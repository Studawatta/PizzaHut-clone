import { BsPersonAdd } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { GrPowerReset } from 'react-icons/gr';
import { IoPersonOutline } from 'react-icons/io5';
import { SlPeople } from 'react-icons/sl';
import { Footer, Navbar } from '../../components';

const SignIn = () => {
  const inputContStyle = 'flex flex-col gap-1';
  const inputStyle =
    'w-72 rounded-[4px] border border-slate-400 px-2 py-1 focus:outline-none';
  const basicButtonStyle = 'flex items-center gap-2 rounded-[4px] px-10 py-2';
  return (
    <div>
      {/* NAVBAR */}

      <Navbar />

      <div className="mt-16 flex h-[calc(100vh-64px)] w-full items-center justify-center bg-slate-200 ">
        <div className=" h-fit rounded-md bg-white p-5 shadow-2xl">
          {/* HEADER */}

          <h1 className="text-center text-xl text-slate-700">
            LET'S START YOUR ORDER
          </h1>

          <hr className="m-auto mt-8 w-4/5 border-slate-300 " />

          <div className="mt-6 md:flex ">
            {/* LEFT */}

            <div className="flex flex-col gap-4 border-slate-300 text-slate-700 md:border-r md:pr-8">
              {/* USERNAME_INPUT */}

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

              {/* REMEMBER_ME_CHECK */}

              <div className="my-4 flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4 bg-slate-400" />
                <label>Remember me</label>
              </div>

              {/* SUBMIT BUTTONS */}

              <div className="flex flex-col gap-2">
                {/* LOGIN_BUTTON */}

                <button
                  className={`flex items-center justify-center rounded-[4px] bg-primaryButton py-2
                            text-white hover:bg-primaryButtonHover`}
                >
                  <IoPersonOutline />
                  Log in with Pizza Hut
                </button>

                {/* RESET_PASSWORD_BUTTON */}

                <button className="flex w-fit items-center gap-2 hover:text-primaryButton">
                  <GrPowerReset />
                  Reset password
                </button>
              </div>
            </div>

            {/* RIGHT */}

            <div className="mt-4 flex flex-col gap-4 md:mt-0 md:pl-8">
              <button className={`${basicButtonStyle} bg-green-700 text-white`}>
                <SlPeople /> Continue as guest
              </button>
              <button className={`${basicButtonStyle} bg-red-600 `}>
                <BsPersonAdd /> Create an accout
              </button>
              <hr />
              <button
                className={`${basicButtonStyle} border border-slate-400 hover:bg-slate-200`}
              >
                <FcGoogle /> Login with Google
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}

      <Footer />
    </div>
  );
};

export default SignIn;
