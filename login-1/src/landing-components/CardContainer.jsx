import { useState, useEffect } from 'react';
import Card from './Card';
import BlueShoes from '../assets/landing-assets/blue-shoes.svg';
import RedShoes from '../assets/landing-assets/red-shoes.svg';
import GoldShoes from '../assets/landing-assets/gold-shoes.svg';
import GreenShoes from '../assets/landing-assets/green-shoes.svg';

const CardContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => {
        const firstFive = json.slice(10, 14);
        setData(firstFive);
        console.log(firstFive);
      });
  }, []);

  console.log(data);
  return (
    <div>
      <div className="text-3xl font-semibold text-[#101928] text-left mb-6">
        <p>Popular</p>
      </div>

      <div className="grid grid-rows-1 grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-6 mb-12">
        {data.map((item) => (
          <Card
            key={item.id}
            image={item.image}
            category={item.category}
            id={item.id}
            title={item.title}
            price={item.price}
            rating={item.rating.rate}
            count={item.rating.count}
          />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
