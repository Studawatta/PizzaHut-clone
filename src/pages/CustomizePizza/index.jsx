import { useParams } from 'react-router-dom';
import { Cart, Navbar } from '../../components';
import { pizzas } from '../../data/data';

import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cartSlice';
<<<<<<< HEAD
import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const CustomizePizza = () => {
  const [isHalfHalfEnabled, setIsHalfHalfEnabled] = useState(false);
  const [showSelectCrust, setShowSelectCrust] = useState(false);
  const [showSelectSize, setShowSelectSize] = useState(false);
=======

const CustomizePizza = () => {
>>>>>>> 216d408180ee7aa3e235bb14b154696a3a5fc3de
  // GET_ID_FROM_URL
  const { id } = useParams();
  const pizzaId = parseInt(id);

  // FIND_PIZZA_ACCORDING_TO_THE_ID
  const pizza = pizzas.find((pizza) => pizza.id === pizzaId);

  const dispatch = useDispatch();

  // ADD_TO_CART_FUNCTION

  const addItemToCart = () => {
    dispatch(
      addToCart({
        id: pizza.id,
        name: pizza.name,
        price: pizza.price,
        amout: 1,
      })
    );
  };

<<<<<<< HEAD
  const inputContainerStyle =
    'flex flex-col overflow-hidden rounded-md border border-slate-300 text-gray-700';
  const inputLabelStyle =
    'w-full cursor-pointer bg-[#dcdcdc] py-2 pl-4 font-thin text-red-600';

  const quentityButtonStyle =
    'flex h-10 cursor-pointer items-center text-xl rounded-md border';

=======
>>>>>>> 216d408180ee7aa3e235bb14b154696a3a5fc3de
  return (
    <div>
      {/* NAVBAR */}
      <Navbar />
<<<<<<< HEAD
      <div className="flex ">
        <div className=" mt-14 flex h-[calc(100vh-56px)] justify-center gap-4 bg-gray-100 px-5 pt-8 lg:w-[76.6%]  ">
          <div className=" h-[600px]  w-1/3">
            {/* IMAGE */}
            <div
              key={pizza.id}
              className=" flex flex-col  items-center gap-4 rounded-md  bg-white "
            >
              <img
                src={pizza.pic}
                alt=""
                className=" h-40 w-40 rounded-md object-cover sm:h-60 sm:w-60 xl:h-80 xl:w-96"
              />

              {/* DETAILS */}
              <div className="flex flex-col justify-center gap-2 p-2 pt-0">
                <h1 className=" text-2xl font-bold text-gray-700 ">
                  {pizza.name}
                </h1>
                <p className=" text-slate-700 ">{pizza.desc}</p>
                {/* <p className="text-xl font-semibold">Rs.{pizza.price}.00</p> */}

                {/* ADD_TO_CART_BUTTON */}
                {/* <button
=======
      <div className="flex">
        <div className=" mt-14 flex w-full justify-center pt-8 lg:w-[76.6%]  ">
          <div
            key={pizza.id}
            className="mt-20 flex w-2/3 flex-col items-center gap-4 xl:flex-row"
          >
            {/* IMAGE */}
            <img
              src={pizza.pic}
              alt=""
              className=" h-40 w-40 rounded-md object-cover sm:h-60 sm:w-60 xl:h-80 xl:w-80"
            />

            {/* DETAILS */}
            <div className="flex flex-col justify-center gap-6">
              <h1 className="text-center text-xl font-bold xl:text-left xl:text-3xl">
                {pizza.name}
              </h1>
              <p className="font-semibold text-slate-700 xl:text-xl">
                {pizza.desc}
              </p>
              <p className="text-xl font-semibold">Rs.{pizza.price}.00</p>

              {/* ADD_TO_CART_BUTTON */}
              <button
>>>>>>> 216d408180ee7aa3e235bb14b154696a3a5fc3de
                className={`m-auto w-fit rounded-md bg-primaryButton px-12 py-1
                          text-white hover:bg-primaryButtonHover`}
                onClick={addItemToCart}
              >
                Add to cart
<<<<<<< HEAD
              </button> */}
              </div>
            </div>
          </div>
          {/* FORM */}
          <form className=" flex h-[600px] w-2/3 flex-col gap-3 ">
            <div className="flex rounded-md border border-slate-300 bg-white py-2 text-sm font-medium text-gray-700">
              <div className=" flex h-8 flex-1 items-center justify-center gap-4 border-r border-slate-400 ">
                <label>Sauce Options :</label>
                <select className="w-40 focus:outline-none">
                  <option>Tomato Base</option>
                </select>
              </div>
              <div className=" flex h-8 flex-1 items-center justify-center gap-12 ">
                <label>Half & Half :</label>
                <div
                  className={`flex h-[22px] w-12 cursor-pointer items-center rounded-2xl px-1 duration-[600ms] ${
                    isHalfHalfEnabled ? 'bg-red-500' : 'bg-slate-300'
                  }`}
                  onClick={() => setIsHalfHalfEnabled(!isHalfHalfEnabled)}
                >
                  <div
                    className={`h-4 w-4  rounded-full bg-white duration-[600ms] ${
                      isHalfHalfEnabled && 'translate-x-6'
                    }`}
                  ></div>
                </div>
              </div>
            </div>
            <div className={inputContainerStyle}>
              <label
                onClick={() => setShowSelectCrust(!showSelectCrust)}
                className={`${
                  showSelectCrust ? 'border-b-2 border-b-red-600' : ''
                } ${inputLabelStyle}`}
              >
                Select crust*
              </label>
              <div
                className={`h-16 w-full bg-white ${
                  showSelectCrust ? 'flex' : 'hidden'
                }`}
              ></div>
            </div>
            <div className={inputContainerStyle}>
              <label
                onClick={() => setShowSelectSize(!showSelectSize)}
                className={`${
                  showSelectSize ? 'border-b-2 border-b-red-600' : ''
                } ${inputLabelStyle}`}
              >
                Select size*
              </label>
              <div
                className={`h-16 w-full bg-white ${
                  showSelectSize ? 'flex' : 'hidden'
                }`}
              ></div>
            </div>
            <div className={inputContainerStyle}>
              <label className={inputLabelStyle}>Add something extra</label>
            </div>
            <div className={inputContainerStyle}>
              <label className={inputLabelStyle}>
                Any special instructions?
              </label>
            </div>
            <div className="flex gap-2">
              {/* quantity */}
              <div className="flex h-10 flex-[1] items-center gap-4 text-slate-700">
                <div
                  className={`bg-white px-4 hover:bg-[#e8e7e7] ${quentityButtonStyle}`}
                >
                  <AiOutlineMinus />
                </div>
                <div
                  className={`cursor-not-allowed bg-[#ccc] px-8 ${quentityButtonStyle}`}
                >
                  1
                </div>
                <div
                  className={`bg-white px-4 hover:bg-[#e8e7e7] ${quentityButtonStyle}`}
                >
                  <AiOutlinePlus />
                </div>
              </div>
              {/* button */}
              <button className=" flex-[2] rounded-md bg-primaryButton  text-white hover:bg-primaryButtonHover">
                Add to cart
              </button>
            </div>
          </form>
=======
              </button>
            </div>
          </div>
>>>>>>> 216d408180ee7aa3e235bb14b154696a3a5fc3de
        </div>

        {/* CART_COMPONENT */}
        <div className="hidden lg:block">
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default CustomizePizza;
