import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Cart from '../../components/Cart';
import { pizzas } from '../../data/data';
import { addToCart } from '../../features/cartSlice';

import { useDispatch } from 'react-redux';

const CustomizePizza = () => {
  const { id } = useParams();
  const pizzaId = parseInt(id);
  const pizza = pizzas.find((pizza) => pizza.id === pizzaId);

  const dispatch = useDispatch();

  const addCart = () => {
    dispatch(
      addToCart({
        id: pizza.id,
        name: pizza.name,
        price: pizza.price,
        amout: 1,
      })
    );
  };

  return (
    <div>
      <Navbar />
      <div className="flex">
        <div className="w-[76.6%] mt-14 pt-8 flex justify-center ">
          <div key={pizza.id} className="mt-20 flex gap-4 w-2/3">
            <img
              src={pizza.pic}
              alt=""
              className="w-80 h-80 object-cover rounded-md"
            />
            <div className="flex flex-col gap-6 justify-center">
              <h1 className="text-3xl font-bold">{pizza.name}</h1>
              <p className="text-xl font-semibold text-slate-700">
                {pizza.desc} Rich tomato sauce base topped with cream cheese,
                onions, green chillies & Mozzarella.
              </p>
              <p className="text-xl font-semibold">Rs.{pizza.price}.00</p>

              <button
                className=" bg-primaryButton w-fit m-auto px-12 py-1 text-white rounded-md hover:bg-primaryButtonHover"
                onClick={addCart}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <div>
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default CustomizePizza;
