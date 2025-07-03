import React from "react";
import BackgroundImage from "../../assets/landing-assets/waves.svg";
import Arrow from "../../assets/landing-assets/shop-arrow.svg";

const Hero = () => {
  return (
    <section className="">
      <div
        className="bg-cover bg-center h-[520px] flex flex-col justify-center rounded-lg px-4 sm:px-8"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        <div className="flex flex-col gap-6 max-w-[100%] sm:max-w-[80%] lg:max-w-[464px]">
          <a
            className="px-4 py-1 bg-[#1671D9] max-w-fit rounded-xl text-white font-semibold text-xs sm:text-sm text-center"
            href="/"
          >
            ENDLESS SUMMER SALE
          </a>
          <div className="text-white">
            <p className="text-4xl sm:text-5xl font-medium leading-tight">
              Up to <span className="font-bold">60% off</span>
            </p>
            <p className="text-4xl sm:text-5xl font-medium">
              on all items till
            </p>
            <p className="text-4xl sm:text-5xl font-bold">September 11</p>
          </div>
          <button className="flex items-center justify-center gap-2 text-white text-sm sm:text-base font-semibold w-fit h-12 sm:h-14 bg-[#EB5017] hover:bg-[#EB5017]/80 px-4 rounded-lg">
            Shop now
            <img src={Arrow} alt="" className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
