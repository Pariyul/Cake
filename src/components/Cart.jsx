import React from "react";

const Cart = ({ cartItems }) => {
  return (
    <div className="w-80 bg-white shadow-lg fixed top-0 right-0 h-full p-6">
      <h2 className="text-xl font-bold text-pink-600">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500 mt-4">Your cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="flex justify-between items-center border-b py-3">
            <img src={item.image} alt={item.name} className="w-16 h-16 rounded-md" />
            <div>
              <h4 className="text-gray-800">{item.name}</h4>
              <p className="text-gray-500">{item.price}</p>
            </div>
            <button className="text-red-500 hover:text-red-700">Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
