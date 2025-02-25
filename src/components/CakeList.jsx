import React from "react";

const cakes = [
  { id: 1, name: "Chocolate Cake", price: 500, img: "https://via.placeholder.com/150" },
  { id: 2, name: "Strawberry Cake", price: 550, img: "https://via.placeholder.com/150" },
  { id: 3, name: "Vanilla Cake", price: 450, img: "https://via.placeholder.com/150" },
];

const CakeList = ({ addToCart }) => {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {cakes.map((cake) => (
        <div key={cake.id} className="bg-white p-4 rounded-lg shadow-md">
          <img src={cake.img} alt={cake.name} className="w-full h-40 object-cover rounded-md" />
          <h2 className="text-lg font-bold mt-2">{cake.name}</h2>
          <p className="text-pink-600 font-semibold">₹{cake.price}</p>
          <button
            onClick={() => addToCart(cake)}
            className="mt-2 bg-pink-600 text-white px-4 py-2 rounded-md w-full"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default CakeList;