import React from "react";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center h-[400px] flex items-center justify-center"
      style={{ backgroundImage: "url('/banner.jpg')" }}
    >
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white">Delicious Cakes for Every Occasion!</h2>
        <button className="mt-4 bg-pink-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-pink-700">
          Order Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
