import { fb, instergram } from '../assets';

const Footer = () => {
  const headerStyle = 'text-xl font-bold text-white';
  const socialMediaStyle = 'h-8 w-8 cursor-pointer';
  const linkStyle = 'cursor-pointer text-[14px] font-medium text-slate-100';
  const linksContStyle = 'mt-6 hidden flex-col gap-2 md:flex';

  return (
    <div className="w-full select-none bg-[#262626] py-12">
      {/* TOP */}

      <div
        className={`m-auto flex w-3/4 flex-col  items-center justify-center
                      gap-2 md:flex-row md:items-start md:justify-between`}
      >
        {/* ORDER_NOW */}

        <div>
          <h1 className={headerStyle}>Order Now</h1>
          <div className={linksContStyle}>
            <span className={linkStyle}>PROMOS</span>
            <span className={linkStyle}>PIZZAS</span>
            <span className={linkStyle}>MELTS</span>
            <span className={linkStyle}>PASTAS</span>
            <span className={linkStyle}>APPETIZERS</span>
            <span className={linkStyle}>RICE</span>
            <span className={linkStyle}>DESSERTS</span>
            <span className={linkStyle}>BEVERAGES</span>
          </div>
        </div>

        {/* ABOUT */}

        <div>
          <h1 className={headerStyle}>About</h1>
          <div className={linksContStyle}>
            <span className={linkStyle}>CAREERS</span>
            <span className={linkStyle}>ABOUT US</span>
            <span className={linkStyle}>FEEDBACK</span>
            <span className={linkStyle}>HOTLINE</span>
          </div>
        </div>

        {/* POLICY */}

        <div>
          <h1 className={headerStyle}>Policy</h1>
          <div className={linksContStyle}>
            <span className={linkStyle}>TERMS & CONDITONS</span>
            <span className={linkStyle}>PRIVACY POLICY</span>
          </div>
        </div>

        {/* MY PIZZA HUT */}

        <div>
          <h1 className={headerStyle}>My Pizza Hut</h1>
          <div className={linksContStyle}>
            <span className={linkStyle}>SIGN IN / REGISTER</span>
          </div>
        </div>
      </div>

      {/* BOTTOM */}

      <div className=" m-auto mt-4 w-fit">
        <h1 className={`${headerStyle} text-center`}>
          Find Us on Social Media
        </h1>

        <div className="m-auto mt-1 flex w-fit gap-1">
          <img src={fb} alt="facebook" className={socialMediaStyle} />
          <img src={instergram} alt="instergram" className={socialMediaStyle} />
        </div>

        <p className="mt-4 hidden text-sm text-slate-100 md:block">
          2023 Pizzs Hut, Inc. All rights reserved. The Pizza Hut name, logos,
          and related marks are trademarks of Pizza Hut, Inc.
        </p>

        <p className="mt-4 text-center text-sm text-slate-100 md:hidden">
          Pizza Hut Sri Lanka
        </p>
      </div>
    </div>
  );
};

export default Footer;
