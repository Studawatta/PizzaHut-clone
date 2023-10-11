import React from 'react';
import {
  AiOutlineDelete,
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
} from 'react-icons/ai';
import { ImArrowLeft } from 'react-icons/im';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import {
  increaseAmount,
  decreaseAmount,
  deletePizza,
} from '../../features/cartSlice';

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const increase = (id) => {
    dispatch(increaseAmount(id));
  };

  const decrease = (id) => {
    dispatch(decreaseAmount(id));
  };
  const delItem = (id) => {
    dispatch(deletePizza(id));
  };

  const orderSummeryDelailsStyle =
    'w-full border-t border-slate-300 h-9 flex justify-between items-center';
  return (
    <div>
      <Navbar />
      <div className="w-full lg:h-[calc(100vh-64px)] mt-16 bg-slate-200 flex justify-center items-center select-none ">
        <div className=" w-full lg:w-[90%] lg:h-[500px] bg-white rounded-md p-8 lg:flex gap-10">
          {/* LEFT_CONTAINER  */}

          <div className="lg:w-4/5">
            <h2 className="text-slate-700 text-2xl font-medium">Your basket</h2>
            <hr className="w-full my-5 border-slate-300" />
            <div className="w-full max-h-[300px] overflow-auto">
              {cart.length === 0 ? (
                <div>
                  <h2 className="text-2xl text-slate-600 font-bold">
                    No item in your basket
                  </h2>
                  <p className="text-slate-600 text-lg mt-2">
                    Your basket looks little empty. Why not checkout some of our
                    unbeatable deals.
                  </p>
                </div>
              ) : (
                <table className="w-full text-xs md:text-base">
                  {/* TABLE_HEADERS */}
                  <thead>
                    <tr className="text-slate-700 h-10 font-medium bg-slate-200 ">
                      <td className="w-1/2">Item</td>
                      <td className=" w-[12%]">Price(Rs.)</td>
                      <td className=" w-[15%]">Quantity</td>
                      <td className=" w-[23%]">Subtotal(Rs.)</td>
                    </tr>
                  </thead>
                  <tbody>
                    {/* ITEMS */}

                    {cart.map((item, index) => (
                      <tr
                        key={index}
                        className=" font-semibold h-12 border-b border-slate-300"
                      >
                        {/* ITEM_NAME */}
                        <td>{item.name}</td>

                        {/* ITEM_PRICE */}

                        <td>{item.price}.00</td>

                        {/* ITEM_QUANTITY */}

                        <td>
                          <div className="flex items-center  gap-2 md:text-lg">
                            <AiOutlineMinusCircle
                              className={` cursor-pointer ${
                                item.amount > 1
                                  ? ' text-slate-700'
                                  : 'text-slate-400'
                              }`}
                              onClick={() => decrease(item.id)}
                            />
                            <span>{item.amount}</span>
                            <AiOutlinePlusCircle
                              className="text-slate-700 cursor-pointer"
                              onClick={() => increase(item.id)}
                            />
                          </div>
                        </td>

                        {/* SUBTOTAL & DELETE */}

                        <td className="flex items-center h-12 justify-between">
                          {item.price * item.amount}.00
                          {/* DELETE_ITEM */}
                          <AiOutlineDelete
                            className=" text-xl md:text-2xl md:mr-5 cursor-pointer hover:text-red-600"
                            onClick={() => delItem(item.id)}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>

            {/* BACK_BUTTON */}

            <button
              className="bg-[#739900] hover:bg-[#608000] mt-6 px-10 py-2 rounded-sm text-white font-semibold flex items-center gap-2"
              onClick={() => window.history.back()}
            >
              <ImArrowLeft />
              Continue Shopping
            </button>
          </div>

          {/* RIGHT_CONTAINER */}

          <div className="lg:w-1/5 w-full mt-5 lg:mt-0 ">
            <h2 className="text-slate-700 text-2xl font-medium">
              Order Summary
            </h2>

            <hr className="w-full my-5 border-slate-300" />

            <button className="w-full py-2 text-sm text-white bg-[#739900] hover:bg-[#608000] rounded-sm">
              Enter your coupon code
            </button>

            <button className="w-full mt-2 py-2 text-sm text-white bg-slate-400 hover:bg-slate-500 rounded-sm">
              Redeem GES discount
            </button>

            {/* ORDER_PRICE_DETAILS */}

            <div className="w-full mt-2 text-slate-600">
              <div className={orderSummeryDelailsStyle}>
                <span>Sub total</span>
                <span>{totalPrice}.00</span>
              </div>

              <div className={orderSummeryDelailsStyle}>
                <span>Discount amount</span>
                <span>.00</span>
              </div>

              <div className={orderSummeryDelailsStyle}>
                <span>Discounted total</span>
                <span>{totalPrice}.00</span>
              </div>

              <div className={orderSummeryDelailsStyle}>
                <span>Service charge(7.50%)</span>
                <span>{Math.round((totalPrice * 7.5) / 100)}.00</span>
              </div>

              <div className="border-t border-slate-300 h-16 text-slate-700 font-bold flex flex-col items-end justify-center text-xl">
                <span>Net Total</span>
                <span>
                  {Math.round(totalPrice + (totalPrice * 7.5) / 100)}.00
                </span>
              </div>
            </div>

            {/* CHECKOUT_BUTTON */}

            <button className="w-full mt-2 py-2 text-sm text-white bg-red-600 hover:bg-red-700 rounded-sm">
              Check out
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShoppingCart;
