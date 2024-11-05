import Logo from '../assets/landing-assets/rayna-logo.svg';
import Search from '../assets/landing-assets/search.svg';
import User from '../assets/landing-assets/user.svg';
import Heart from '../assets/landing-assets/heart.svg';
import CartIcon from '../assets/landing-assets/cart.svg';
import Banner from './Banner';
import Card from './Card';

import { StoreContext } from '../StoreContext';
import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const { cart, updateCart, deleteCart } = useContext(StoreContext);
  const [search, setSearch] = useState('');
  const [searching, setSearching] = useState(false);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();

  const handleCart = () => {
    navigate('/landing/cart');
  };

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

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => {
        const filtered = json.filter((n) =>
          n.category.includes(search.toLowerCase())
        );
        setProducts(filtered.slice(1, 9));
        console.log(filtered);
      });
  }, [search]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    if (search) {
      setSearching(true);
    } else if (search === '') {
      setSearching(false);
    }
  };

  const onClose = () => {
    setSearching(false);
    setSearch();
  };
  return (
    <section className="mb-32 fixed right-0 left-0 top-0 z-20">
      <div className="flex bg-white w-full  justify-center flex-col ">
        <Banner />
        <nav className="flex py-6 px-28 justify-evenly ">
          <div className="flex gap-5 md:mr-10 lg:gap-20 items-center lg:mr-24">
            <img src={Logo} alt="" />
            <ul className="text-base hidden lg:flex text-[background: #101928; ] font-semibold flex gap-8 items-center">
              <a href="./men.html">Men</a>
              <a href="./women.html">Women</a>
              <a href="./kids.html">Kids</a>
              <a href="./sale.html">On Sale</a>
            </ul>
          </div>

          {/* Search Bar */}
          <div className="relative md:flex-shrink lg:flex-grow lg:max-w-[500px] flex items-center h-9 px-3 py-2 bg-[#F0F2F5] border-2 border-[#D0D5DD] rounded-md text-center">
            <img className="absolute left-4" src={Search} alt="" />
            <input
              type="text"
              onChange={handleSearch}
              className="appearance-none focus:outline-none bg-transparent indent-8"
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
                <p className="text-[#101928] text-xs font-medium">Cart</p>
                <div className="text-white text-md bg-amber-600 rounded-full w-5 h-5 flex justify-center items-center font-medium absolute left-6 top-0">
                  {cart.length}
                </div>
              </button>
            </div>
          </div>
        </nav>
      </div>
      {/* The Modal Products */}
      {searching ? (
        <div className="h-screen bg-slate-700/60 flex items-center justify-center pt-12">
          <div className="bg-white">
            {/* Header and Button */}
            <div className="text-black px-12 flex justify-between">
              <p className="text-3xl">Showing results for "{search}"</p>
              <button onClick={onClose} className="text-3xl">
                X
              </button>
            </div>
            <div className="grid grid-flow-row bg-white px-12 py-12 min-h-[400px] max-h-screen max-w-[1000px] grid-cols-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 mb-12 overflow-y-auto">
              {products.map((item) => (
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
    </section>
  );
};

export default Nav;
