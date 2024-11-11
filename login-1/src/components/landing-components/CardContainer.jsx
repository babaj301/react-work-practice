import { useState, useEffect, useContext } from 'react';
import Card from './Card';
import LoadingCard from './LoadingCard';
import { StoreContext } from '../../StoreContext';

const CardContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // New loading state
  const { cart, updateCart, deleteCart } = useContext(StoreContext);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => {
        const firstFive = json.slice(10, 14);
        setProducts(firstFive);
        setLoading(false); // Set loading to false once data is fetched
      });
  }, []);

  const addToCart = (item) => {
    updateCart(item);
  };

  const removeFromCart = (item) => {
    const quantity = cart.find((i) => i.id === item.id)?.quantity || 0;
    if (quantity > 0) {
      deleteCart(item);
    }
  };

  return (
    <div>
      <div className="text-3xl font-semibold text-[#101928] text-left mb-6">
        <p>Popular</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {loading
          ? Array(4)
              .fill(0)
              .map((_, index) => <LoadingCard key={index} />)
          : products.map((item) => (
              <Card
                key={item.id}
                image={item.image}
                category={item.category}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating.rate}
                count={item.rating.count}
                addToCart={() => addToCart(item)}
                quantity={cart.find((i) => i.id === item.id)?.quantity || 0}
                deleteCart={() => removeFromCart(item)}
              />
            ))}
      </div>
    </div>
  );
};

export default CardContainer;
