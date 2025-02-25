import React from "react";
import ProductCard from "./ProductCard";

const cakes = [
  { id: 1, name: "Chocolate Cake", price: "$10", image: "https://sahnibakery.com/cdn/shop/products/DELIGHTFULLCHOCOLATECAKE599@2x.jpg?v=1609412191" },
  { id: 2, name: "Strawberry Cake", price: "$12", image: "https://misterbaker.com/cdn/shop/files/StrawberryFlavored.jpg?v=1732085194" },
  { id: 3, name: "Vanilla Cake", price: "$8", image: "https://www.fnp.com/images/pr/l/v20221205202923/floral-vanilla-cream-cake-1-kg_2.jpg" },
];

const ProductList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 py-10">
      {cakes.map((cake) => (
        <ProductCard key={cake.id} cake={cake} />
      ))}
    </div>
  );
};

export default ProductList;
