import {
  AiOutlineDelete,
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
} from 'react-icons/ai';
import { ImArrowLeft } from 'react-icons/im';
import { Footer, Navbar } from '../../components';

import { useDispatch, useSelector } from 'react-redux';
import {
  decreaseAmount,
  deletePizza,
  increaseAmount,
} from '../../features/cartSlice';

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  // INCREASE_QUANTITY_FUNCTION
  const increase = (id) => {
    dispatch(increaseAmount(id));
  };

  //DECREASE_QUANTITY_FUNCTION
  const decrease = (id) => {
    dispatch(decreaseAmount(id));
  };

  //DELETE_ITEM_FUNCTION
  const delItem = (id) => {
    dispatch(deletePizza(id));
  };

  const orderSummeryDelailsStyle =
    'flex h-9 w-full items-center justify-between border-t border-slate-300';
  return (
    <div>
      {/* NAVBAR */}
      <Navbar />
      <div className="mt-16 flex w-full select-none items-center justify-center bg-slate-200 lg:h-[calc(100vh-64px)] ">
        <div className=" w-full gap-10 rounded-md bg-white p-8 lg:flex lg:h-[500px] lg:w-[90%]">
          {/* LEFT_CONTAINER  */}

          <div className="lg:w-4/5">
            {/* HEADER */}
            <h2 className="text-2xl font-medium text-slate-700">Your basket</h2>
            <hr className="my-5 w-full border-slate-300" />

            {/* ITEMS_CONTAINER */}
            <div className="max-h-[300px] w-full overflow-auto">
              {cart.length === 0 ? (
                <div>
                  <h2 className="text-2xl font-bold text-slate-600">
                    No item in your basket
                  </h2>
                  <p className="mt-2 text-lg text-slate-600">
                    Your basket looks little empty. Why not checkout some of our
                    unbeatable deals.
                  </p>
                </div>
              ) : (
                <table className="w-full text-xs md:text-base">
                  {/* TABLE_HEADERS */}
                  <thead>
                    <tr className="h-10 bg-slate-200 text-center font-medium text-slate-700 ">
                      <td className="w-2/5 sm:w-1/2">Item</td>
                      <td className=" w-[15%] sm:w-[12%]">Price(Rs.)</td>
                      <td className=" w-[19%] sm:w-[15%]">Quantity</td>
                      <td className="w-[26%] text-left sm:w-[23%]">
                        Subtotal(Rs.)
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    {/* ITEMS */}

                    {cart.map((item, index) => (
                      <tr
                        key={index}
                        className=" h-12 border-b border-slate-300 text-center font-semibold"
                      >
                        {/* ITEM_NAME */}
                        <td>{item.name}</td>

                        {/* ITEM_PRICE */}

                        <td>{item.price}.00</td>

                        {/* ITEM_QUANTITY */}

                        <td>
                          <div className="flex items-center justify-center gap-2 md:text-lg">
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
                              className="cursor-pointer text-slate-700"
                              onClick={() => increase(item.id)}
                            />
                          </div>
                        </td>

                        {/* SUBTOTAL & DELETE */}

                        <td className="flex h-12 items-center justify-between pr-1 sm:pr-5">
                          {item.price * item.amount}.00
                          {/* DELETE_ITEM */}
                          <AiOutlineDelete
                            className=" cursor-pointer text-xl hover:text-red-600  md:text-2xl"
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
              className="mt-6 flex items-center gap-2 rounded-sm bg-[#739900] px-10 py-2 font-semibold text-white hover:bg-[#608000]"
              onClick={() => window.history.back()}
            >
              <ImArrowLeft />
              Continue Shopping
            </button>
          </div>

          {/* RIGHT_CONTAINER */}

          <div className="mt-5 w-full lg:mt-0 lg:w-1/5 ">
            <h2 className="text-2xl font-medium text-slate-700">
              Order Summary
            </h2>

            <hr className="my-5 w-full border-slate-300" />

            <button className="w-full rounded-sm bg-[#739900] py-2 text-sm text-white hover:bg-[#608000]">
              Enter your coupon code
            </button>

            <button className="mt-2 w-full rounded-sm bg-slate-400 py-2 text-sm text-white hover:bg-slate-500">
              Redeem GES discount
            </button>

            {/* ORDER_PRICE_DETAILS */}

            <div className="mt-2 w-full text-slate-600">
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

              <div className="flex h-16 flex-col items-end justify-center border-t border-slate-300 text-xl font-bold text-slate-700">
                <span>Net Total</span>
                <span>
                  {Math.round(totalPrice + (totalPrice * 7.5) / 100)}.00
                </span>
              </div>
            </div>

            {/* CHECKOUT_BUTTON */}

            <button className="mt-2 w-full rounded-sm bg-red-600 py-2 text-sm text-white hover:bg-red-700">
              Check out
            </button>
          </div>
        </div>
      </div>
      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default ShoppingCart;
