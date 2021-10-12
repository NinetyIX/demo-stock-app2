import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./styles.css";
import "./App.css";
import SignUp from "./components/pages/SignUp";
import SignIn from "./components/pages/SignIn";
//import { Signin } from "./components/pages/sign-in";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/sign-up" component={SignUp} />
        <Route path="/sign-in" component={SignIn} />
      </Switch>
    </Router>
  );
}

export default App;
