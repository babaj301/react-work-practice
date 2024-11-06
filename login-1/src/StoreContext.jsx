import { createContext, useState, useEffect } from 'react';

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  // Making data persist over page refreshes
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [total, setTotal] = useState(0);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  console.log(cart, 'cart after json');

  const updateCart = (item) => {
    const exist = cart.find((i) => i.id === item.id);

    if (exist) {
      return setCart(
        cart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      );
    }

    return setCart([...cart, { ...item, quantity: 1 }]);
  };

  const deleteCart = (item) => {
    return setCart((prevCart) =>
      prevCart
        .map((i) => (i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i))
        .filter((i) => i.quantity > 0)
    );
  };

  console.log(cart, 'cart');

  return (
    <StoreContext.Provider value={{ cart, updateCart, deleteCart }}>
      {children}
    </StoreContext.Provider>
  );
};
