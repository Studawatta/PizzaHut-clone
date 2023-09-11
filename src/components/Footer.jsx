import React from 'react';
import fb from '../assets/fb.png';
import instergram from '../assets/instergram.png';

const Footer = () => {
  const headerStyle = 'text-xl text-white font-bold';
  const socialMediaStyle = 'w-8 h-8 cursor-pointer';
  const linkStyle = 'text-slate-100 cursor-pointer text-[14px] font-medium';
  const linksContStyle = 'hidden md:flex flex-col gap-2 mt-6';

  return (
    <div className="w-full bg-[#262626] py-12">
      {/* TOP */}

      <div className="w-3/4 m-auto flex-col flex justify-center items-center gap-2 md:items-start md:flex-row md:justify-between">
        {/* ORDER NOW */}

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
      <div className=" w-fit m-auto mt-4">
        <h1 className={`${headerStyle} text-center`}>
          Find Us on Social Media
        </h1>
        <div className="flex gap-1 m-auto mt-1 w-fit">
          <img src={fb} alt="facebook" className={socialMediaStyle} />
          <img src={instergram} alt="instergram" className={socialMediaStyle} />
        </div>
        <p className="hidden md:block text-slate-100 text-sm mt-4">
          2023 Pizzs Hut, Inc. All rights reserved. The Pizza Hut name, logos,
          and related marks are trademarks of Pizza Hut, Inc.
        </p>
        <p className="text-slate-100 text-sm mt-4 text-center md:hidden">
          Pizza Hut Sri Lanka
        </p>
      </div>
    </div>
  );
};

export default Footer;
