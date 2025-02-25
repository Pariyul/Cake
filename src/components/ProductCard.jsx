import React from "react";

const ProductCard = ({ cake }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <img src={cake.image} alt={cake.name} className="w-full h-48 object-cover rounded-md" />
      <h3 className="text-lg font-semibold mt-2">{cake.name}</h3>
      <p className="text-gray-500 mt-1">{cake.price}</p>
      <button className="mt-3 w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
