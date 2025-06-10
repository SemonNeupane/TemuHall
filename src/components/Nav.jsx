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
          <a href="/" className="hover:text-gray-400">
            Home
          </a>
        </li>

       <li className="relative group cursor-pointer">
          <span className="hover:text-gray-400">Products</span>
           <ul className="absolute top-full left-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-300 z-50">
         <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer onClick={() => window.location.href = '/products/bags'}>">
             <Link to="/products/bags"/>
               Bags
              </li>
             <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer ">
               <link rel="stylesheet" href="/products/shoes" />
              Shoes
               </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
               <link rel="stylesheet" href="/products/perfume" />
               Perfume
               </li>
             <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
               <link rel="stylesheet" href="/products/makeups" />
               Makeups
               </li>
             <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
               <link rel="stylesheet" href="/products/cloth" />
               Cloth
               </li>
           </ul>
         </li>

        <li>
         <a href="/signin" className="hover:text-gray-400">
           Sign In
         </a>
        </li>
      </ul>

    {/* Right: Empty placeholder for balance */}
       <div className="flex-shrink-0 w-20"></div>
     </div>
  );
};

export default Nav;
