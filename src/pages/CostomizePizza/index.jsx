import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Cart from '../../components/Cart';
import { pizzas } from '../../data/data';

const CustomizePizza = () => {
  const { id } = useParams();
  const pizzaId = parseInt(id);
  const pizza = pizzas.find((pizza) => pizza.id === pizzaId);

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

              <button className=" bg-primaryButton w-fit m-auto px-12 py-1 text-white rounded-md hover:bg-primaryButtonHover">
                Add to cart
              </button>
            </div>
          </div>

          {/* {pizzas
            .filter((pizza) => pizza.id === id)
            .map((item) => (
              <div key={item.id} className="flex gap-4 w-2/3">
                <img
                  src={item.pic}
                  alt=""
                  className="w-80 h-80 object-cover rounded-md"
                />
                <div className="flex flex-col gap-6 justify-center">
                  <h1 className="text-3xl font-bold">{item.name}</h1>
                  <p className="text-xl font-semibold text-slate-700">
                    {item.desc} Rich tomato sauce base topped with cream cheese,
                    onions, green chillies & Mozzarella.
                  </p>
                  <p className="text-xl font-semibold">Rs.{item.price}.00</p>

                  <button className=" bg-primaryButton w-fit m-auto px-12 py-1 text-white rounded-md hover:bg-primaryButtonHover">
                    Add to cart
                  </button>
                </div>
              </div>
            ))} */}
        </div>
        <div>
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default CustomizePizza;
