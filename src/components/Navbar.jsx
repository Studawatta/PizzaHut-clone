import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logo } from "../assets";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const cartAmout = useSelector((state) => state.cart.totalAmount);

  const linkStyle =
    "cursor-pointer border-red-700 hover:border-b-[3px] hover:text-red-700";

  return (
    <div className=" fixed top-0 z-10 flex h-16 w-full items-center justify-between bg-white px-4 shadow-md lg:px-6">
      {/* NAV_LEFT */}

      <div className=" relative flex w-full items-center justify-between lg:w-fit  lg:justify-normal lg:gap-32">
        {/* LOGO */}

        <Link to="/">
          <img src={logo} alt="logo" className="h-10 cursor-pointer" />
        </Link>

        {/* LINKS */}

        <div className="hidden items-center gap-6 text-[18px] font-bold text-slate-700 lg:flex">
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

        <div className=" flex select-none gap-4">
          {/* DROPDOWN_ICON */}

          <BiMenu
            className=" cursor-pointer text-3xl lg:hidden"
            onClick={() => setShowMenu(!showMenu)}
          />

          {/* CART_ICON */}

          <Link
            to="/shopping_cart"
            className=" relative flex h-9 w-12 cursor-pointer items-center rounded-[20px] border border-slate-400 px-2 hover:text-red-700 lg:hidden"
          >
            <FiShoppingCart />
            <div
              className={` absolute right-1 top-[2px]  h-5 w-5  rounded-full text-center text-sm font-semibold text-white ${
                cartAmout ? " bg-red-400" : " bg-slate-200"
              }`}
            >
              {cartAmout}
            </div>
          </Link>
        </div>

        {/* DROPDOWN_MENU */}

        {showMenu && (
          <div className=" absolute right-0 top-12 flex flex-col gap-6 bg-white p-2  text-[14px] font-bold text-slate-700 shadow-[0_0_5px_black]">
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

      <div className="hidden items-center gap-6 text-slate-500 lg:flex">
        {/* LOCATION */}

        <div className="flex h-9 cursor-pointer items-center rounded-[20px] border border-slate-400 px-3 text-xl hover:text-red-700">
          <CiLocationOn />
        </div>

        {/* SIGN/REGISTER */}

        <Link
          to="/sign-in"
          className="flex h-9 cursor-pointer items-center gap-2 rounded-[20px] border border-slate-400 px-3 hover:text-red-700"
        >
          <IoPersonOutline />
          Sign In/Register
        </Link>

        {/* CART */}

        <Link
          to="/shopping_cart"
          className=" relative flex h-9 w-12 cursor-pointer items-center rounded-[20px] border border-slate-400 px-2 hover:text-red-700"
        >
          <FiShoppingCart />
          <div
            className={` absolute right-1 top-[2px]  h-5 w-5  rounded-full text-center text-sm font-semibold text-white ${
              cartAmout ? " bg-red-400" : " bg-slate-200"
            }`}
          >
            {cartAmout}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
