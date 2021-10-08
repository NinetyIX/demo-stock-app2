import React, { useState } from "react";
import ReactDOM from "react-dom";
import CountUp from "react-countup";

const genNumber = () => {
  document.querySelector("div").style.setProperty("--percent", Math.random());
};

setInterval(genNumber, 2000);
setTimeout(genNumber);
