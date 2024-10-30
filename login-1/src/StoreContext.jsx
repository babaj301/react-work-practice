import { createContext, useState } from 'react';

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

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
    // if (item.quantity === 1) {
    //   return setCart(cart.filter((i) => i.id !== item.id));
    // } else

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
