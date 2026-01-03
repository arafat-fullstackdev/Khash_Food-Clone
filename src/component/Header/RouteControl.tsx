import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "../Home/Home.js";

function RouteControl() {
  return (
    <div className=" mx-auto flex justify-between items-center">
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default RouteControl;
