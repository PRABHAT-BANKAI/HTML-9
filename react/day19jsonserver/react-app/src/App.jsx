import React from "react";
import Create from "./components/Create";
import { Route, Routes } from "react-router";
import Read from "./components/Read";
import Update from "./components/Update";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Create />} />
        <Route path="/read/:productId" element={<Read />} />
        <Route path="/edit/:id" element={<Update />} />
      </Routes>
    </>
  );
};

export default App;
