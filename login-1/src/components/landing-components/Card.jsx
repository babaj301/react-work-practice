import React from "react";
import Star from "../../assets/landing-assets/stars.svg";
import Cart from "../../assets/landing-assets/cart.svg";
import { useState } from "react";
import { motion } from "framer-motion";

const Card = ({
  image,
  category,
  title,
  price,
  rating,
  count,
  addToCart,
  deleteCart,
  quantity,
}) => {
  const splitPrice = price.toString().split(".");
  const roundedRating = Math.round(rating);
  const [exists, setExists] = useState(false);

  const handleExists = () => {
    addToCart();
    if (quantity >= 0) {
      setExists(!exists);
    }
  };

  const handleMinus = () => {
    if (quantity <= 1) {
      deleteCart();
      setExists(false);
    }
    deleteCart();
  };

  return (
    <div>
      <div className=" flex flex-col gap-1 justify-evenly min-h-[400px] max-h-[400px]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <div className="flex flex-col justify-evenly">
            <img
              className="w-full object-cover min-h-[260px] max-h-[260px] rounded-md"
              src={image}
              alt=""
            />
          </div>
        </motion.div>

        <div className="flex justify-between items-center gap-2">
          <p className="font-medium text-[#101928] text-base">
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </p>
          <p className="font-semibold text-lg">
            <span className="text-xs lg:text-sm font-semibold">$</span>
            {splitPrice[0]}
            <span className="text-xs font-semibold">.{splitPrice[1]}</span>
          </p>
        </div>
        <p className="text-xs text-[#1D2739]">{title.slice(0, 30)}</p>
        <div className="flex items-center gap-2">
          <div className="flex justify-between">
            {Array.from({ length: roundedRating }, (_, i) => (
              <img key={i} src={Star} alt="" />
            ))}
          </div>
          <p className="text-sm text-[#1D2739]">{count}</p>
        </div>
        {exists || quantity ? (
          <div className="flex gap-2 border-gray-400 border-2 rounded-full max-w-36 items-center justify-evenly text-lg">
            <button onClick={handleMinus}>-</button>
            <p>{quantity}</p>
            <button onClick={addToCart}>+</button>
          </div>
        ) : (
          <button
            onClick={handleExists}
            className="flex gap-2 min-w-24 max-w-36 px-4 py-2 hover:bg-[#CC400C] hover:text-white rounded-full border border-[#D0D5DD] text-[#667185] "
          >
            <img src={Cart} alt="" />
            <p className="text-sm font-medium">Add to cart</p>
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
