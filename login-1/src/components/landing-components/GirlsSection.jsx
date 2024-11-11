import React from 'react';
import Girls from '../../assets/landing-assets/girl-legs.jpeg';
import Arrow from '../../assets/landing-assets/shop-arrow.svg';
import AddidasImage from '../../assets/landing-assets/addidas-shoes.svg';
import GirlShoes from '../../assets/landing-assets/girl-shoes.svg';

const GirlsSection = () => {
  return (
    <section className="flex flex-col gap-6 mt-14">
      <div className="flex justify-between items-center">
        <div className="text-3xl font-semibold text-[#101928] text-left">
          <p>Featured Collections</p>
        </div>
        <div className="flex gap-2 text-[#EB5017]">
          <p>View All</p>
          <img src="./assets/plus.svg" alt="" />
        </div>
      </div>
      <div className="pics-container grid grid-cols-2 grid-rows-2 min-h-[700px] max-h-[770px] gap-6">
        <div
          className="relative bg-cover bg-center row-span-full rounded-lg pt-10"
          style={{ backgroundImage: `url(${Girls})` }}
        >
          <a
            className="p-1 ml-10 mt-10 bg-[#F56630] w-48 rounded-xl text-white font-semibold text-center text-sm"
            href="/"
          >
            WORLD GIRLFRIEND'S DAY
          </a>

          <div className="text-3xl text-white absolute bottom-0 left-0 w-full font-semibold bg-gradient-to-b from-[#00000000] to-[#0000008C] pl-10 pt-10 rounded-b-lg">
            <div className="gap-2 mb-6 min-w-48">
              <p>Free Delivery on all dresses</p>
              <p>ordered until November 30</p>
              <p className="text-sm text-white font-normal">
                All the sleekest dress for you to twin with your girlfriends.
              </p>
            </div>
            <button className="flex items-center justify-center text-white text-base w-32 lg:w-36 h-14 bg-[#EB5017] hover:bg-[#EB5017]/80 p-4 rounded-lg mb-24">
              Shop now
              <img src={Arrow} alt="" />
            </button>
          </div>
        </div>

        <div
          className="bg-cover bg-center min-h-[370px] rounded-lg"
          style={{ backgroundImage: `url(${AddidasImage})` }}
        ></div>
        <div
          className="bg-cover bg-center min-h-[370px] rounded-lg"
          style={{ backgroundImage: `url(${GirlShoes})` }}
        ></div>
      </div>
    </section>
  );
};

export default GirlsSection;
