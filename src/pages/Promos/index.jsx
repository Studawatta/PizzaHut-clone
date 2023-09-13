import React from 'react';
import Navbar from '../../components/Navbar';
import promotion03 from '../../assets/promotion03.jpg';

const PromoCard = () => {
  return (
    <div className="w-[550px] h-[300px] bg-white shadow-[2px_4px_3px_#999] rounded-lg cursor-pointer">
      <img
        src={promotion03}
        className="h-[220px] w-full rounded-[8px_8px_0_0] "
        alt=""
      />
      <div className="mt-2">
        <div className="flex justify-between ">
          <h4 className=" font-semibold text-lg w-fit bg-yellow-300 ml-4">
            My Box Rice Edition
          </h4>

          <div>
            <span className="bg-red-500">My Box Rice Edition</span>
          </div>
          <h4 className=" font-semibold text-lg w-fit mr-4">Rs.1,350.00</h4>
        </div>
        <p className=" text-slate-400 text-sm">
          Only available from 11AM - 3PM
        </p>
        ;
      </div>
    </div>
  );
};

const Promos = () => {
  return (
    <div>
      <Navbar />
      <div className="w-fit flex flex-wrap gap-8 py-10 px-6">
        <PromoCard />
        <PromoCard />
      </div>
    </div>
  );
};

export default Promos;
