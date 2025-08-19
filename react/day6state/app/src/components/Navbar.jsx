import React from "react";

const Navbar = () => {
  return (
    <nav style={{backgroundColor:"aqua",height:"70px",display:"flex", justifyContent:"space-between", alignItems:"center", padding:"0px 10%"}}>
      <h1>logo</h1>
      <ul style={{display:"flex",listStyle:"none",gap:"25px"}}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Features</li>
      </ul>
    </nav>
  );
};

export default Navbar;
