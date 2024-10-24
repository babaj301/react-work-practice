import React from 'react';
import Logo from '../assets/landing-assets/rayna-logo.svg';
import Search from '../assets/landing-assets/search.svg';
import User from '../assets/landing-assets/user.svg';
import Heart from '../assets/landing-assets/heart.svg';
import Cart from '../assets/landing-assets/cart.svg';

const Nav = () => {
  return (
    <div>
      <nav className="flex py-6 justify-between">
        <div className="flex gap-5 md:mr-10lg:gap-20 items-center lg:mr-24">
          <img src={Logo} alt="" />
          <ul className="text-base hidden lg:flex text-[background: #101928; ] font-semibold flex gap-8 items-center">
            <a href="./men.html">Men</a>
            <a href="./women.html">Women</a>
            <a href="./kids.html">Kids</a>
            <a href="./sale.html">On Sale</a>
          </ul>
        </div>

        <div className="relative md:flex-shrink lg:flex-grow lg:max-w-[500px] flex items-center h-9 px-3 py-2 bg-[#F0F2F5] border-2 border-[#D0D5DD] rounded-md text-center">
          <img className="absolute left-4" src={Search} alt="" />
          <input
            type="text"
            className="appearance-none focus:outline-none bg-transparent indent-8"
            placeholder="Search here..."
          />
        </div>

        <div className="flex justify-between gap-8 items-center lg:ml-8">
          <div className="flex gap-6 items-center">
            <div className="flex flex-col gap-1 items-center justify-center text-center">
              <img src={User} alt="" />
              <p className="text-[#101928] text-xs font-medium">Profile</p>
            </div>
            <div className="flex flex-col gap-1 items-center justify-center text-center">
              <img src={Heart} alt="" />
              <p className="text-[#101928] text-xs font-medium">
                All Categories
              </p>
            </div>
            <div className="flex flex-col gap-1 items-center justify-center text-center">
              <img src={Cart} alt="" />
              <p className="text-[#101928] text-xs font-medium">Cart</p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
