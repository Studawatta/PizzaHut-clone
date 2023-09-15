import React from 'react';
import pizza01 from '../../assets/pizza01.jpg';
const MenuCard = () => {
  return (
    <div className=" w-[260px] shadow-[0_4px_5px_black] rounded-lg">
      <img src={pizza01} alt="" className=" w-full rounded-[8px_8px_0_0]" />
      <div className=" px-2 flex flex-col gap-1">
        <h1 className=" font-semibold text-sm ">Seeni Sambol & Cheese</h1>
        <p className=" text-slate-500 text-[13px]">
          A delightful combination of cream cheese & Seeni Sambol topped with...
        </p>
        <h1 className=" text-slate-500 text-[12px]  text-right">
          Starting from{' '}
          <span className=" text-black font-semibold">RS.770</span>
        </h1>
        <button className=" w-full rounded-[4px] text-sm py-1 bg-primaryButton text-white hover:bg-primaryButtonHover mb-2">
          Customize
        </button>
      </div>
    </div>
  );
};

const Menu = () => {
  return (
    <div className="flex gap-10 mt-16 ml-10">
      <MenuCard />
      <MenuCard />
    </div>
  );
};

export default Menu;
