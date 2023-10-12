import { Link } from 'react-router-dom';
import { Cart, Navbar } from '../../components';
import { pizzas } from '../../data/data';

const MenuCard = ({ id, name, desc, price, pic }) => {
  return (
    <Link
      to={'/menu/' + id}
      className=" h-fit w-3/4 cursor-pointer overflow-hidden rounded-lg shadow-[0_4px_5px_#808080] sm:w-full"
    >
      {/* IMAGE */}

      <img src={pic} alt="" className=" w-full " />

      <div className=" flex flex-col gap-1 bg-white px-2">
        {/* NAME */}

        <h1 className=" text-sm font-semibold ">{name}</h1>

        {/* DESCRIPTION */}

        <p className=" line-clamp-2 w-full  text-ellipsis text-[13px] text-slate-500">
          {desc}
        </p>

        {/* PRICE */}

        <h1 className=" text-right text-[12px]  text-slate-500">
          Starting from{' '}
          <span className=" text-sm font-semibold text-black">RS.{price}</span>
        </h1>

        {/* CUSTOMIZE_BUTTON */}

        <button
          className={`mb-2 w-full rounded-[4px] bg-primaryButton py-[6px] text-sm
                      text-white hover:bg-primaryButtonHover`}
        >
          Customize
        </button>
      </div>
    </Link>
  );
};

const Menu = () => {
  return (
    <div>
      {/* NAVBAR */}
      <Navbar />
      <div className="flex">
        {/* MENU_ITEMS */}

        <div
          className={`mt-14 flex w-full flex-col items-center gap-4 bg-slate-200 p-4
                          pt-8 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:w-[76.5%] xl:grid-cols-4`}
        >
          {pizzas.map((pizza, index) => (
            <MenuCard
              key={index}
              id={pizza.id}
              name={pizza.name}
              desc={pizza.desc}
              price={pizza.price}
              pic={pizza.pic}
            />
          ))}
        </div>

        {/* CART_COMPONENT */}

        <div className="hidden lg:block">
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default Menu;
