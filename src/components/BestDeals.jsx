import React from 'react';
import { Link } from 'react-router-dom';
import {
  promotion01,
  promotion02,
  promotion03,
  promotion04,
} from '../data/images';

const BestDeals = () => {
  const promotionStyle =
    ' rounded-[4px] shadow-[0_4px_5px_#a6a6a6] cursor-pointer';
  return (
    <div className="py-16">
      <fieldset className="m-auto w-3/4 border-t border-slate-700 text-xl font-semibold text-slate-700">
        {/* HEADER */}

        <legend className="m-auto px-6">Our Most Popular Deals</legend>

        {/* PROMOTIONS */}

        <div className="grid grid-cols-1 gap-8  py-8 md:grid-cols-2">
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

        {/* VIEW_ALL_BUTTON */}

        <Link
          to="/promos"
          className="block w-full rounded-[4px] bg-[#739900] py-2 text-center text-white hover:bg-[#608000]"
        >
          View all deals
        </Link>
      </fieldset>
    </div>
  );
};

export default BestDeals;
