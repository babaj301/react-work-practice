import Logo from "../../assets/landing-assets/rayna-logo.svg";
import Search from "../../assets/landing-assets/search.svg";
import User from "../../assets/landing-assets/user.svg";
import Heart from "../../assets/landing-assets/heart.svg";
import CartIcon from "../../assets/landing-assets/cart.svg";
import Banner from "./Banner";
import Card from "./Card";

import { StoreContext } from "../../StoreContext";
import { useContext, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, updateCart, deleteCart } from "../../redux/storeSlice";

const Nav = () => {
  // const { cart, updateCart, deleteCart } = useContext(StoreContext);
  const dispatch = useDispatch();
  const { products, cart } = useSelector(
    (state) => state.store || { cart: [], products: [] }
  );
  const [search, setSearch] = useState("");
  const [searching, setSearching] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleCart = () => {
    setShowCart(!showCart);
  };

  // const addToCart = (item) => {
  //   updateCart(item);
  //   console.log(cart);
  // };

  // const removeFromCart = (item) => {
  //   const quantity = cart.find((i) => i.id === item.id)?.quantity || 0;
  //   if (quantity > 0) {
  //     deleteCart(item);
  //   } else {
  //     return;
  //   }
  // };

  // Redux version of add to cart
  const addToCart = (item) => {
    dispatch(updateCart(item));
  };

  // Redux version of add to cart
  const removeFromCart = (item) => {
    const quantity = cart.find((i) => i.id === item.id)?.quantity || 0;
    if (quantity > 0) {
      dispatch(deleteCart(item));
    } else {
      return;
    }
  };

  // useEffect(() => {
  //   fetch('https://fakestoreapi.com/products')
  //     .then((res) => res.json())
  //     .then((json) => {
  //       const filtered = json.filter((n) =>
  //         n.category.includes(search.toLowerCase())
  //       );

  //       setProducts(filtered.slice(1, 5));
  //       console.log(filtered);
  //     });
  // }, [search]);

  useEffect(() => {
    const filtered = products.filter((n) =>
      n.category.includes(search.toLowerCase())
    );
    setFiltered(filtered.slice(1, 5));
  }, [search, products]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    if (search === "") {
      setSearching(false);
    }
    if (search) {
      setSearching(true);
    }
  };

  const onClose = () => {
    setSearching(false);
    setSearch("");
  };

  const onCartClose = () => {
    setShowCart(false);
  };
  return (
    <section className="mb-32 fixed right-0 left-0 top-0 z-20">
      <div className="flex bg-white w-full  justify-center flex-col ">
        <Banner />
        <nav className="flex py-6 px-28 justify-evenly ">
          <div className="flex gap-5 md:mr-10 lg:gap-20 items-center lg:mr-24">
            <img src={Logo} alt="" />
            <ul className="text-base hidden lg:flex text-[background: #101928; ] font-semibold flex gap-8 items-center ">
              <a className="hover:underline" href="./men.html">
                Men
              </a>
              <a className="hover:underline" href="./women.html">
                Women
              </a>
              <a className="hover:underline" href="./kids.html">
                Kids
              </a>
              <a className="hover:underline" href="./sale.html">
                On Sale
              </a>
            </ul>
          </div>

          {/* Search Bar */}
          <div className="relative md:flex-shrink lg:flex-grow lg:max-w-[500px] flex items-center h-9 px-3 py-2 bg-[#F0F2F5] border-2 border-[#D0D5DD] rounded-md text-center">
            <img className="absolute left-4" src={Search} alt="" />
            <input
              type="text"
              onChange={handleSearch}
              className="appearance-none focus:outline-none bg-transparent indent-8 w-full"
              placeholder="Search here..."
            />
          </div>

          {/* Profile, Categories, Cart */}
          <div className="flex justify-between gap-8 items-center lg:ml-8">
            <div className="flex gap-6 items-center">
              <div className="flex flex-col gap-1 items-center justify-center text-center">
                <img src={User} alt="" />
                <p className="text-[#101928] text-xs font-medium">Profile</p>
              </div>
              <div className="flex flex-col gap-1 items-center justify-center text-center">
                <img src={Heart} alt="" />
                <p className="text-[#101928] text-xs font-medium">
                  All Categories
                </p>
              </div>
              <button
                onClick={handleCart}
                className="flex relative flex-col gap-1 items-center justify-center text-center"
              >
                <img src={CartIcon} alt="" />
                <p
                  data-testid="cart-button"
                  className="text-[#101928] text-xs font-medium"
                >
                  Cart
                </p>
                <div className="text-white text-md bg-amber-600 rounded-full w-5 h-5 flex justify-center items-center font-medium absolute left-6 top-0">
                  {cart.length}
                </div>
              </button>
            </div>
          </div>
        </nav>
      </div>
      {/* The Modal Products */}
      {products.length > 1 && searching ? (
        <div className=" bg-slate-700/60 flex items-center justify-center pt-4">
          <div className="bg-white">
            {/* Header and Button */}
            <div className="text-black px-12 flex justify-between">
              <p className="md:text-3xl font-medium text-sm">
                Showing results for "{search}"
              </p>
              <button
                onClick={onClose}
                className="md:text-3xl font-medium text-sm"
              >
                X
              </button>
            </div>
            <div className="grid grid-flow-row bg-white px-12 min-h-[60vh] max-h-[70vh] max-w-[1000px] grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 mb-12 overflow-y-auto">
              {filtered.map((item) => (
                <Card
                  key={item.id}
                  image={item.image}
                  category={item.category}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  rating={item.rating.rate}
                  count={item.rating.count}
                  addToCart={() => {
                    addToCart(item);
                  }}
                  data-testid="card"
                  quantity={cart.find((i) => i.id === item.id)?.quantity || 0}
                  deleteCart={() => {
                    removeFromCart(item);
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      ) : null}

      {/* Cart Modal */}
      {!searching && showCart ? (
        <div className="top-0 bottom-0 max-h-[800px] bg-slate-700/60 flex relative items-center justify-center">
          <div className="bg-white absolute top-0 right-0  w-full max-w-[450px]">
            {/* Header and Close Button */}
            <div className="text-black px-4 py-2 m-auto flex justify-between items-center border-b border-gray-400">
              <p className="text-3xl">CART</p>
              <button
                data-testid="close-button"
                onClick={onCartClose}
                className="text-2xl"
              >
                X
              </button>
            </div>

            {cart.length > 0 ? (
              <div className="flex flex-col items-center gap-6 bg-white px-12 pb-32 h-[60vh]  min-w-[200px] overflow-y-auto">
                {cart.map((item) => (
                  <div key={item.id} className="flex flex-col gap-4">
                    <img
                      className="w-full object-cover max-w-[260px] min-h-[260px] max-h-[260px] rounded-md"
                      src={item.image}
                      alt=""
                    />
                    <div className="flex justify-between items-center max-w-[260px]">
                      <p className="font-medium text-[#101928] text-base">
                        {item.category.charAt(0).toUpperCase() +
                          item.category.slice(1)}
                      </p>
                      <p className="font-semibold text-lg">
                        <span className="text-xs lg:text-sm font-semibold">
                          $
                        </span>
                        {item.price}
                      </p>
                    </div>
                    <div className="flex gap-2 border-gray-400 border-2 rounded-full w-full items-center justify-evenly text-lg">
                      <button onClick={() => removeFromCart(item)}>-</button>
                      <p>{item.quantity}</p>
                      <button onClick={() => addToCart(item)}>+</button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex border grow border-green-500 items-center justify-center h-screen md:min-h-[60vh] max-h-[70vh] ">
                <p className="text-lg font-medium  text-gray-500">
                  No items in your cart
                </p>
              </div>
            )}

            {/* Total Amount */}
            <div className="px-4 py-4 w-full absolute bottom-0 bg-white border-t border-gray-200 text-lg font-medium flex justify-between items-center">
              <p>
                Total Amount: $
                {cart
                  .reduce((acc, item) => acc + item.price * item.quantity, 0)
                  .toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default Nav;
