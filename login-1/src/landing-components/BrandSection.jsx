import React from 'react';
import Nike from '../assets/landing-assets/brands/nike.svg';
import Adiddas from '../assets/landing-assets/brands/adiddas.svg';
import NorthFace from '../assets/landing-assets/brands/northface.svg';
import Zara from '../assets/landing-assets/brands/zara.svg';

const BrandSection = () => {
  return (
    <section className="flex flex-col mt-14 gap-6">
      <p className="text-3xl font-semibold text-[#101928] text-left">Brands</p>
      <div className="flex justify-between items-center">
        <div>
          <img src={Nike} alt="" />
        </div>

        <div>
          <img src={NorthFace} alt="" />
        </div>
        <div>
          <img src={Adiddas} alt="" />
        </div>
        <div>
          <img src={Zara} alt="" />
        </div>
        <div>
          <img src={Nike} alt="" />
        </div>
        <div>
          <img src={NorthFace} alt="" />
        </div>
        <div>
          <img src={Adiddas} alt="" />
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
