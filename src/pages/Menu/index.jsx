import React from 'react';
import pizza01 from '../../assets/pizza01.jpg';
import Navbar from '../../components/Navbar';
import Cart from '../../components/Cart';
const MenuCard = () => {
  return (
    <div className=" w-[270px] h-fit shadow-[0_4px_5px_black] rounded-lg cursor-pointer">
      <img src={pizza01} alt="" className=" w-full rounded-[8px_8px_0_0]" />
      <div className=" px-2 flex flex-col gap-1">
        <h1 className=" font-semibold text-sm ">Seeni Sambol & Cheese</h1>
        <p className=" text-slate-500 text-[13px]">
          A delightful combination of cream cheese & Seeni Sambol topped with...
        </p>
        <h1 className=" text-slate-500 text-[12px]  text-right">
          Starting from{' '}
          <span className=" text-black font-semibold text-sm">RS.770</span>
        </h1>
        <button className=" w-full rounded-[4px] text-sm py-[6px] bg-primaryButton text-white hover:bg-primaryButtonHover mb-2">
          Customize
        </button>
      </div>
    </div>
  );
};

const Menu = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <div className="flex mt-14 flex-[3] gap-4 p-6 bg-slate-200 ">
          <MenuCard />
          <MenuCard />
        </div>
        <div className="flex-[1]">
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default Menu;
