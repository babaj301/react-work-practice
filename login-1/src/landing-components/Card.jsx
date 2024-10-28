import React from 'react';
import Star from '../assets/landing-assets/stars.svg';
import Cart from '../assets/landing-assets/cart.svg';

const Card = ({ image, category, id, title, price, rating, count }) => {
  const splitPrice = price.toString().split('.');
  const roundedRating = Math.round(rating);
  return (
    <div>
      <div className=" flex flex-col gap-1 justify-evenly min-h-[400px] max-h-[450px]">
        <div className="flex flex-col justify-evenly">
          <img
            className="w-full object-cover min-h-[260px] max-h-[260px] rounded-md"
            src={image}
            alt=""
          />
        </div>

        <div className="flex justify-between items-center gap-2">
          <p className="font-medium text-[#101928] text-base"> {category}</p>
          <p className="font-semibold text-lg">
            <span className="text-xs lg:text-sm font-semibold">$</span>
            {splitPrice[0]}.
            <span className="text-xs font-semibold">{splitPrice[1]}</span>
          </p>
        </div>
        <p className="text-xs text-[#1D2739]">{title}</p>
        <div className="flex items-center gap-2">
          <div className="flex justify-between">
            {Array.from({ length: roundedRating }, (_, i) => (
              <img key={i} src={Star} alt="" />
            ))}
          </div>
          <p className="text-sm text-[#1D2739]">{count}</p>
        </div>
        <button className="flex gap-2 w-36 px-4 py-2 rounded-full border border-[#D0D5DD] text-[#667185] ">
          <img src={Cart} alt="" />
          <p className="text-sm font-medium">Add to cart</p>
        </button>
      </div>
    </div>
  );
};

export default Card;
