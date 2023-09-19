import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import {
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
  AiOutlineDelete,
} from 'react-icons/ai';

const Cart = () => {
  return (
    <div className="fixed top-16 w-[23.5%]">
      <div className="border h-14 flex text-xl text-slate-600 gap-2 items-center justify-center border-slate-300">
        <FiShoppingCart />
        <h1 className=" font-bold ">YOUR CART</h1>
      </div>
      <div className=" relative px-2 border border-slate-300 h-[calc(100vh-120px)]">
        <div>
          <div className="flex justify-between border-b border-slate-300 py-3">
            <div>
              <h1 className="text-sm text-slate-600">Seeni Sambol & Cheese</h1>
              <span className="text-[12px] text-slate-600">Rs. 2,600</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center  gap-2 text-[20px]">
                <AiOutlineMinusCircle className="text-slate-400 cursor-pointer" />
                <span>1</span>
                <AiOutlinePlusCircle className="text-slate-600 cursor-pointer" />
              </div>
              <AiOutlineDelete className=" text-xl cursor-pointer hover:text-red-500" />
            </div>
          </div>
        </div>
        <button className=" absolute bottom-0 mb-4 left-0 right-0 m-auto bg-primaryButton hover:bg-primaryButtonHover text-white w-[90%] py-[6px] rounded-md">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
