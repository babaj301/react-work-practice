import React from 'react';
import raynaLogo from '../assets/rayna.svg';
import Flag from '../assets/flag.svg';
import Arrow from '../assets/button-icon.svg';

const Navbar = () => {
  return (
    <div>
      <nav className="flex flex-row justify-between items-center p-8 mb-12 h-6">
        <img src={raynaLogo} alt="" />
        <div className="w-24 h-9 flex gap-2 px-2 py-3 justify-center items-center border border-[#E4E7EC] rounded-md">
          <img src={Flag} alt="" />
          <select
            className="appearance-none text-sm font-semibold"
            name="language"
            id="lang"
          >
            <option value="english">ENG</option>
            <option value="spanish">ESP</option>
          </select>
          <img src={Arrow} alt="" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
