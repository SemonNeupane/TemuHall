import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="flex items-center bg-black text-white p-4">
      {/* Left: Brand */}
      <div className="text-2xl font-bold flex-shrink-0">
        TemuHall
      </div>

      {/* Center: Nav Links */}
      <ul className="flex space-x-6 justify-center flex-grow">
        <li>
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>
        </li>

        <li className="relative group cursor-pointer">
          <span className="hover:text-gray-400">Products</span>
          <ul className="absolute top-full left-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-300 z-50">
            <li className="px-4 py-2 hover:bg-gray-100">
              <Link to="/products/bags">Bags</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100">
              <Link to="/products/shoes">Shoes</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100">
              <Link to="/products/perfume">Perfume</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100">
              <Link to="/products/makeups">Makeups</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100">
              <Link to="/products/cloth">Cloth</Link>
            </li>
          </ul>
        </li>

        <li>
          <Link to="/signin" className="hover:text-gray-400">
            Sign In
          </Link>
        </li>
      </ul>

      {/* Right: Empty placeholder for balance */}
      <div className="flex-shrink-0 w-20"></div>
    </div>
  );
};

export default Nav;
