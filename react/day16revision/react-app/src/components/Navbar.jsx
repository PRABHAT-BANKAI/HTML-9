import React from "react";

const Navbar = () => {
  return (
    <nav style={{ height:"70px",backgroundColor:"aqua",display:"flex",alignItems:"center", justifyContent:"space-between",padding:"0 10%"}}>
      <h1>Logo</h1>

      <ul style={{display:"flex",listStyle:"none",gap:"15px"}}>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
