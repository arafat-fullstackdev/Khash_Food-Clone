import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "../Home/Home.js";
import Product from "../Product/Product.js";
import Corporate from "../Home/Corporate.js";

function RouteControl() {
  return (
    <div className=" mx-auto flex justify-between items-center">
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/product">Product</Link>
        <Link to="/corporate">Corporate</Link>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product/>}/>
          <Route path="/corporate" element={<Corporate/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default RouteControl;
