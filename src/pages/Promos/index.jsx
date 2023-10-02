import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import promotion03 from '../../assets/promotion03.jpg';
import Cart from '../../components/Cart';

const PromoCard = () => {
  return (
    <div className="w-[100%] h-[300px] bg-white shadow-[2px_4px_3px_#999] rounded-lg overflow-hidden cursor-pointer">
      <img src={promotion03} className="h-[220px] w-full " alt="" />
      <div className="mt-2">
        <div className="flex justify-between ">
          <h4 className=" font-semibold text-lg w-fit ml-4">
            My Box Rice Edition
          </h4>

          <h4 className=" font-semibold text-lg w-fit mr-4">Rs.1,350.00</h4>
        </div>
        <p className=" text-slate-400 text-sm ml-4">
          Only available from 11AM - 3PM
        </p>
      </div>
    </div>
  );
};

const Promos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <div className="flex">
        <div className="w-full md:w-[76.6%] mt-14 py-8 ">
          <div className="w-full grid grid-cols-1  md:grid-cols-2 gap-4 px-4 mx-auto">
            <PromoCard />
            <PromoCard />
            <PromoCard />
            <PromoCard />
            <PromoCard />
            <PromoCard />
          </div>
        </div>
        <div>
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default Promos;
