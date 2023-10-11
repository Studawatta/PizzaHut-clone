import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Cart from '../../components/Cart';
import { promos } from '../../data/data';

import { useDispatch } from 'react-redux';

import { addToCart } from '../../features/cartSlice';

const PromoCard = ({ id, name, price, pic }) => {
  const dispatch = useDispatch();

  const addCart = () => {
    dispatch(
      addToCart({
        id: id,
        name: name,
        price: price,
        amout: 1,
      })
    );
  };
  return (
    <div className="w-[100%] h-[300px] bg-white shadow-[2px_4px_3px_#999] rounded-lg overflow-hidden cursor-pointer">
      <img src={pic} className="h-[220px] w-full " alt="promotionImage" />
      <div className="mt-2">
        <div className="flex justify-between ">
          <h4 className=" font-semibold text-lg w-fit ml-4">{name}</h4>

          <h4 className=" font-semibold text-lg w-fit mr-4">Rs.{price}.00</h4>
        </div>
        <div className="flex justify-between w-full">
          <p className=" text-slate-400 text-sm ml-4">
            Only available from 11AM - 3PM
          </p>
          <button
            onClick={addCart}
            className=" bg-primaryButton w-fit  px-12 py-1 text-white rounded-md hover:bg-primaryButtonHover text-sm mr-4"
          >
            Add to cart
          </button>
        </div>
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
            {promos.map((promo, index) => (
              <PromoCard
                key={index}
                id={promo.id}
                name={promo.name}
                price={promo.price}
                pic={promo.pic}
              />
            ))}
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
