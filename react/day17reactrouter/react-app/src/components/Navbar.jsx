import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav>
      <h1>logo</h1>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/contact"}>contact</Link>
        </li>
        <li>
          <Link to={"/services"}>Services</Link>
        </li>
        <li>
          <Link style={{textDecoration:"none"}} to={"/about"}>About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
