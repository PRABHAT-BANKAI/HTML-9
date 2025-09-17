import React from "react";
import { Route, Routes } from "react-router";
import Home from "./Home";
import Read from "./Read";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/read/:id" element={<Read />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
