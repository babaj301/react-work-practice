import { useContext } from 'react';
import { StoreContext } from '../StoreContext';

const Cart = () => {
  const { cart, updateCart, deleteCart } = useContext(StoreContext);
  console.log(cart, 'cart');

  const addToCart = (item) => {
    updateCart(item);
    console.log(cart);
  };

  const removeFromCart = (item) => {
    const quantity = cart.find((i) => i.id === item.id)?.quantity || 0;
    if (quantity > 0) {
      deleteCart(item);
    } else {
      return;
    }
  };
  return (
    <div>
      <div className="flex justify-evenly text-3xl items-center">
        <h1>My Cart</h1>
        <div className="text-white text-md bg-amber-600 rounded-full w-12 h-12 text-center">
          {cart.length}
        </div>
      </div>
      <div className="flex-col mt-6 justify-between flex gap-12 items-center">
        {cart.map((item) => (
          <div key={item.id}>
            <div className=" flex flex-col gap-1 justify-evenly min-h-[400px] max-h-[450px]">
              <div className="flex flex-col justify-evenly w-full">
                <img
                  className="w-full object-cover max-w-[260px] min-h-[260px] max-h-[260px] rounded-md"
                  src={item.image}
                  alt=""
                />
              </div>

              <div className="flex flex-col gap-2 justify-evenly">
                <div className="flex justify-between max-w-[260px] items-center gap-2">
                  <p className="font-medium text-[#101928] text-base">
                    {item.category.charAt(0).toUpperCase() +
                      item.category.slice(1)}
                  </p>
                  <p className="font-semibold text-lg">
                    <span className="text-xs lg:text-sm font-semibold">$</span>
                    {item.price}.
                    <span className="text-xs font-semibold">{item.price}</span>
                  </p>
                </div>
                <p className="text-xs max-w-[260px] text-[#1D2739]">
                  {item.title}
                </p>

                <div className="flex gap-2 border-gray-400 border-2 rounded-full max-w-36 items-center justify-evenly text-lg">
                  <button
                    onClick={() => {
                      removeFromCart(item);
                    }}
                  >
                    -
                  </button>
                  <p>{item.quantity}</p>
                  <button
                    onClick={() => {
                      addToCart(item);
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
