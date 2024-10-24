import React from 'react';
import Card from './Card';
import BlueShoes from '../assets/landing-assets/blue-shoes.svg';
import RedShoes from '../assets/landing-assets/red-shoes.svg';
import GoldShoes from '../assets/landing-assets/gold-shoes.svg';
import GreenShoes from '../assets/landing-assets/green-shoes.svg';

const CardContainer = () => {
  return (
    <div className="grid grid-rows-1 grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-2 mb-12">
      <Card image={RedShoes} />
      <Card image={BlueShoes} />
      <Card image={GoldShoes} />
      <Card image={GreenShoes} />
    </div>
  );
};

export default CardContainer;
