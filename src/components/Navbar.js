import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./sign-up-btn";
import { Button2 } from "./sign-in-btn";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          <h1>EPIC</h1>
        </Link>
        <div className="menu-items">
          <Button2 />
          <Button />
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
