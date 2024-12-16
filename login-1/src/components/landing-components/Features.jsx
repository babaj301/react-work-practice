import React from 'react';
import OriginalProdImg from '../../assets/landing-assets/original-prod.svg';

const Features = ({ text }) => {
  return (
    <div data-testid="features" className="min-w-30 max-w-60">
      <img className="h-11" src={OriginalProdImg} alt="" />
      <p className="text-lg font-semibold text-[#101928]">{text} </p>
      <p className="text-sm font-normal text-[#475367]">
        We ensure money-back guarantee if the product is counterfeit
      </p>
    </div>
  );
};

export default Features;
