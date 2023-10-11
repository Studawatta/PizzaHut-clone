import React from 'react';
import {
  promotion01,
  promotion02,
  promotion03,
  promotion04,
} from '../../data/images';
import { Link } from 'react-router-dom';

const BestDeals = () => {
  const promotionStyle =
    ' rounded-[4px] shadow-[0_4px_5px_#a6a6a6] cursor-pointer';
  return (
    <div className="py-16">
      <fieldset className="border-t text-xl font-semibold border-slate-700 text-slate-700 w-3/4 m-auto">
        <legend className="m-auto px-6">Our Most Popular Deals</legend>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-8 py-8">
          <Link to="/promos">
            {' '}
            <img src={promotion01} className={promotionStyle} />
          </Link>
          <Link to="/promos">
            {' '}
            <img src={promotion02} className={promotionStyle} />
          </Link>
          <Link to="/promos">
            {' '}
            <img src={promotion03} className={promotionStyle} />
          </Link>
          <Link to="/promos">
            {' '}
            <img src={promotion04} className={promotionStyle} />
          </Link>
        </div>
        <Link
          to="/promos"
          className="bg-[#739900] w-full block text-center text-white rounded-[4px] py-2 hover:bg-[#608000]"
        >
          View all deals
        </Link>
      </fieldset>
    </div>
  );
};

export default BestDeals;
