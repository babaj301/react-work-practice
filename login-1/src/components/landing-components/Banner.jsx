import React from 'react';
import Divider from '../../assets/landing-assets/divider.svg';

const Banner = () => {
  return (
    <div>
      <section className="flex bg-[#292424] px-28 h-12 items-center border border-4px border-red-600 justify-between">
        <div className="flex items-center gap-1">
          <img src="./assets/phone.svg" alt="" />
          <p className="text-[#fff] text-xs font-medium">+1 2345 56768</p>
        </div>

        <div className="flex gap-6 items-center">
          <p className="text-[#fff] text-xs font-medium">
            Get 50% Off on Selected Items
          </p>
          <img src={Divider} alt="" />
          <p className="text-[#F56630] text-xs font-medium">Shop Now</p>
        </div>

        <div className="flex gap-8 items-center">
          <div className="flex items-center gap-1">
            <p className="text-[#fff] text-xs font-medium">EN</p>
            <img src="./assets/white-drop.svg" alt="" />
          </div>

          <div className="flex gap-2 items-center">
            <img src="./assets/flag.svg" alt="" />
            <p className="text-[#fff] text-xs font-semibold">United States</p>
            <img src="./assets/white-drop.svg" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
