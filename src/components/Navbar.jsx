import React from 'react';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import { CiLocationOn } from 'react-icons/ci';
import { IoPersonOutline } from 'react-icons/io5';
import { FiShoppingCart } from 'react-icons/fi';

const Navbar = () => {
  const linkStyle =
    'cursor-pointer hover:text-red-700 hover:border-b-[3px] border-red-700';
  return (
    <div className="w-full z-10 h-16 shadow-md bg-white flex justify-between items-center px-6">
      {/* NAV LEFT */}
      <div className="flex gap-32">
        {/* LOGO */}
        <Link to="/">
          <img src={logo} alt="logo" className="h-10 cursor-pointer" />
        </Link>
        {/* LINKS */}
        <div className="hidden md:flex items-center gap-6 text-slate-700 font-bold text-[18px]">
          <Link className={linkStyle}>HOME</Link>
          <Link className={linkStyle}>MENU</Link>
          <Link to="/promos" className={linkStyle}>
            PROMOS
          </Link>
          <Link className={linkStyle}>CONTACT US</Link>
        </div>
      </div>

      {/* NAV RIGHT */}
      <div className="hidden md:flex items-center gap-6 text-slate-500">
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
          <div className=" absolute top-[2px] right-1 bg-slate-200 h-5 font-semibold text-white w-5 text-center text-sm rounded-full">
            0
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
