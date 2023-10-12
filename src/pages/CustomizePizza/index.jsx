import { useParams } from 'react-router-dom';
import { Cart, Navbar } from '../../components';
import { pizzas } from '../../data/data';

import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cartSlice';

const CustomizePizza = () => {
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

  return (
    <div>
      {/* NAVBAR */}
      <Navbar />
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
                className={`m-auto w-fit rounded-md bg-primaryButton px-12 py-1
                          text-white hover:bg-primaryButtonHover`}
                onClick={addItemToCart}
              >
                Add to cart
              </button>
            </div>
          </div>
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
