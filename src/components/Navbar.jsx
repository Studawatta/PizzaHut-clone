import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import { CiLocationOn } from 'react-icons/ci';
import { IoPersonOutline } from 'react-icons/io5';
import { FiShoppingCart } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { BiMenu } from 'react-icons/bi';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const cartAmout = useSelector((state) => state.cart.totalAmount);
  const linkStyle =
    'cursor-pointer hover:text-red-700 hover:border-b-[3px] border-red-700';
  return (
    <div className=" top-0 w-full z-10 h-16 shadow-md bg-white flex justify-between items-center lg:px-6 px-20 fixed">
      {/* NAV LEFT */}
      <div className=" relative flex lg:gap-32 items-center lg:justify-normal justify-between  lg:w-fit w-full">
        {/* LOGO */}
        <Link to="/">
          <img src={logo} alt="logo" className="h-10 cursor-pointer" />
        </Link>
        {/* LINKS */}

        <div className="hidden lg:flex items-center gap-6 text-slate-700 font-bold text-[18px]">
          <Link to="/" className={linkStyle}>
            HOME
          </Link>
          <Link to="/menu" className={linkStyle}>
            MENU
          </Link>
          <Link to="/promos" className={linkStyle}>
            PROMOS
          </Link>
          <Link to="/contact" className={linkStyle}>
            CONTACT US
          </Link>
        </div>

        {/* MOBILE_VIEW */}
        <BiMenu
          className=" text-3xl lg:hidden cursor-pointer"
          onClick={() => setShowMenu(!showMenu)}
        />
        {showMenu && (
          <div className=" absolute top-12 right-0 bg-white shadow-[0_0_5px_black] p-2 flex flex-col  gap-6 text-slate-700 font-bold text-[14px]">
            <Link to="/" className={linkStyle}>
              HOME
            </Link>
            <Link to="/menu" className={linkStyle}>
              MENU
            </Link>
            <Link to="/promos" className={linkStyle}>
              PROMOS
            </Link>
            <Link to="/contact" className={linkStyle}>
              CONTACT US
            </Link>
          </div>
        )}
      </div>

      {/* NAV RIGHT */}
      <div className="hidden lg:flex items-center gap-6 text-slate-500">
        {/* LOCATION */}
        <div className="border border-slate-400 rounded-[20px] px-3 h-9 flex items-center text-xl hover:text-red-700 cursor-pointer">
          <CiLocationOn />
        </div>
        {/* SIGN/REGISTER */}
        <div className="flex items-center gap-2 border border-slate-400 rounded-[20px] px-3 h-9 cursor-pointer hover:text-red-700">
          <IoPersonOutline />
          Sign In/Register
        </div>
        {/* CART */}
        <div className=" relative border border-slate-400 rounded-[20px] px-2 w-12 h-9 flex items-center cursor-pointer hover:text-red-700">
          <FiShoppingCart />
          <div
            className={` absolute top-[2px] right-1  h-5 font-semibold  w-5 text-center text-sm rounded-full text-white ${
              cartAmout ? ' bg-red-400' : ' bg-slate-200'
            }`}
          >
            {cartAmout}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
