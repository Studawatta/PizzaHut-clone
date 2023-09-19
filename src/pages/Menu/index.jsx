import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Cart from '../../components/Cart';

import { pizzas } from '../../data/data';
import { Link } from 'react-router-dom';
const MenuCard = ({ id, name, desc, price, pic }) => {
  // to={`/filteredProducts/${type}/` + id}
  return (
    <Link
      to={'/menu/' + id}
      className=" w-[270px] h-fit shadow-[0_4px_5px_#808080] rounded-lg cursor-pointer"
    >
      <img src={pic} alt="" className=" w-full rounded-[8px_8px_0_0]" />
      <div className=" px-2 flex flex-col gap-1">
        <h1 className=" font-semibold text-sm ">{name}</h1>
        <p className=" text-slate-500 text-[13px]  w-full text-ellipsis line-clamp-2">
          {desc}
        </p>
        <h1 className=" text-slate-500 text-[12px]  text-right">
          Starting from{' '}
          <span className=" text-black font-semibold text-sm">RS.{price}</span>
        </h1>
        <button className=" w-full rounded-[4px] text-sm py-[6px] bg-primaryButton text-white hover:bg-primaryButtonHover mb-2">
          Customize
        </button>
      </div>
    </Link>
  );
};

const Menu = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <div className="w-[76.5%] mt-14 pt-8 gap-4 p-4 bg-slate-200 flex flex-wrap">
          {pizzas.map((pizza, index) => (
            <MenuCard
              key={index}
              id={pizza.id}
              name={pizza.name}
              desc={pizza.desc}
              price={pizza.price}
              pic={pizza.pic}
            />
          ))}
        </div>

        <div>
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default Menu;
