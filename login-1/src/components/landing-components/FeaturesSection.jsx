import React from 'react';
import Features from './Features';

const FeaturesSection = () => {
  return (
    <div className="flex flex-col gap-10 mt-20 mb-24">
      <div className="flex flex-col text-[#101928] font-semibold text-3xl">
        <p>We provide the</p>
        <p>best customer experiences</p>
      </div>
      <div className="flex gap-4 justify-between items-center">
        <Features text={'Original Products'} />
        <Features text={'Satisfaction Guarantee'} />
        <Features text={'New Arrival Everyday'} />
        <Features text={'Fast & Free Shipping'} />
      </div>
    </div>
  );
};

export default FeaturesSection;
