import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

function App() {
  return (
    // <Router>
    //   <Navbar />
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/products" element={<ProductCard />} />
    //     <Route path="/cart" element={<Cart />} />
    //   </Routes>
    // </Router>

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductCard />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
