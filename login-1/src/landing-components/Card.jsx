import React from 'react';
import Star from '../assets/landing-assets/stars.svg';
import Cart from '../assets/landing-assets/cart.svg';

const Card = ({ image }) => {
  return (
    <div>
      <div className="">
        <div className="flex flex-col">
          <img className="w-full object-cover rounded-md" src={image} alt="" />
        </div>

        <div className="flex justify-between items-center gap-2">
          <p className="font-medium text-[#101928] text-base">Court Heels</p>
          <p className="font-semibold text-lg">
            <span className="text-xs lg:text-sm font-semibold">$</span>95
            <span className="text-xs font-semibold">.00</span>
          </p>
        </div>
        <p className="text-xs text-[#1D2739]">Red Stilettos</p>
        <div className="flex items-center gap-2">
          <div className="flex justify-between">
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
          </div>
          <p className="text-sm text-[#1D2739]">(91)</p>
        </div>
        <div className="flex gap-2 w-36 px-4 py-2 rounded-full border border-[#D0D5DD] text-[#667185] mt-4">
          <img src={Cart} alt="" />
          <p className="text-sm font-medium">Add to cart</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
