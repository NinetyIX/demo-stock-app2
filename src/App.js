import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./styles.css";
import "./App.css";
//import { Signin } from "./components/pages/sign-in";

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
