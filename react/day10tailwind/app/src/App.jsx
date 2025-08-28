import React from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar/>
      <p className="text-blue-600">Tailwind css</p>
      <div className="h-[100px] w-[200px] bg-[green] border-8"></div>
      <Card />
      <Footer/>
    </>
  );
};

export default App;
