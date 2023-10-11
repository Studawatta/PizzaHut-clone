import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import {
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
  AiOutlineDelete,
} from 'react-icons/ai';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import {
  increaseAmount,
  decreaseAmount,
  deletePizza,
} from '../features/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const increase = (id) => {
    dispatch(increaseAmount(id));
  };

  const decrease = (id) => {
    dispatch(decreaseAmount(id));
  };
  const de = (id) => {
    dispatch(deletePizza(id));
  };

  return (
    <div className="fixed top-16 w-[23.5%] hidden md:block select-none">
      <div className="border h-14 flex text-xl text-slate-600 gap-2 items-center justify-center border-slate-300">
        <FiShoppingCart />
        <h1 className=" font-bold ">YOUR CART</h1>
      </div>
      <div className=" relative px-2 border border-slate-300 h-[calc(100vh-120px)]">
        {cart.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between border-b border-slate-300 py-3">
              <div>
                <h1 className="text-sm text-slate-600">{item.name}</h1>
                <span className="text-[12px] text-slate-600">
                  Rs.{item.price}.00
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center  gap-2 text-[20px]">
                  <AiOutlineMinusCircle
                    className={` cursor-pointer ${
                      item.amount > 1 ? ' text-slate-700' : 'text-slate-400'
                    }`}
                    onClick={() => decrease(item.id)}
                  />
                  <span>{item.amount}</span>
                  <AiOutlinePlusCircle
                    className="text-slate-700 cursor-pointer"
                    onClick={() => increase(item.id)}
                  />
                </div>
                <AiOutlineDelete
                  className=" text-xl cursor-pointer hover:text-red-500"
                  onClick={() => de(item.id)}
                />
              </div>
            </div>
          </div>
        ))}

        <h1 className=" absolute bottom-20 text-xl font-semibold text-center  left-0 right-0">
          Total = RS.{totalPrice}.00
        </h1>

        <button className=" absolute bottom-0 mb-4 left-0 right-0 m-auto bg-primaryButton hover:bg-primaryButtonHover text-white w-[90%] py-[6px] rounded-md">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
