import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

export function Button2() {
  return (
    <Link to="sign-in">
      <button className="btn">Sign In</button>
    </Link>
  );
}
