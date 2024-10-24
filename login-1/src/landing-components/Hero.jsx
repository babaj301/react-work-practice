import React from 'react';
import BackgroundImage from '../assets/landing-assets/waves.svg';
import Arrow from '../assets/landing-assets/shop-arrow.svg';

const Hero = () => {
  return (
    <section>
      <div
        className="bg-cover bg-center pl-16 h-[520px] flex flex-col justify-center rounded-lg"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        <div className="flex flex-col gap-6 h-80">
          <a
            className="p-1 bg-[#1671D9] w-48 rounded-xl text-white font-semibold text-center text-sm"
            href="/"
          >
            ENDLESS SUMMER SALE
          </a>
          <div className="text-white w-[464px] h-[189px]">
            <p className="text-6xl font-medium">
              Up to <span className="text-6xl font-bold">60% off</span>
            </p>
            <p className="text-6xl font-medium">on all items till</p>
            <p className="text-6xl font-bold">September 11</p>
          </div>
          <button className="flex items-center justify-center text-white text-base font-semibold w-36 h-14 bg-[#EB5017] hover:bg-[#EB5017]/80 p-4 rounded-lg">
            Shop now
            <img src={Arrow} alt="" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
