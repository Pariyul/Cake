import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-pink-600">CakeShop</h1>
        <ul className="flex space-x-6">
          <li className="text-gray-700 hover:text-pink-500 cursor-pointer">Home</li>
          <li className="text-gray-700 hover:text-pink-500 cursor-pointer">Cakes</li>
          <li className="text-gray-700 hover:text-pink-500 cursor-pointer">Cart</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
