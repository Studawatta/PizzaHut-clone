import { useEffect } from 'react';
import { Cart, Navbar } from '../../components';
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
    <div
      className={`h-[300px] w-[100%] cursor-pointer overflow-hidden rounded-lg
                     bg-white shadow-[2px_4px_3px_#999]`}
    >
      {/* IMAGE */}

      <img src={pic} className="h-[220px] w-full " alt="promotionImage" />
      <div className="mt-2">
        <div className="flex justify-between ">
          {/* NAME */}

          <h4 className=" ml-4 w-fit text-lg font-semibold">{name}</h4>
          {/* PRICE */}

          <h4 className=" mr-4 w-fit text-lg font-semibold">Rs.{price}.00</h4>
        </div>

        <div className="flex w-full justify-between">
          <p className=" ml-4 text-sm text-slate-400">
            Only available from 11AM - 3PM
          </p>

          {/* ADD_TO_CART_BUTTON */}

          <button
            onClick={addCart}
            className={`mr-4 w-fit  rounded-md bg-primaryButton px-12 py-1 text-sm
                       text-white hover:bg-primaryButtonHover`}
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
      {/* NAVAR */}
      <Navbar />

      <div className="flex">
        <div className="mt-14 w-full py-8 md:w-[76.6%] ">
          {/* PROMOTIONS */}

          <div className="mx-auto grid w-full  grid-cols-1 gap-4 px-4 md:grid-cols-2">
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

        {/* CART_COMPONENT */}

        <div>
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default Promos;
