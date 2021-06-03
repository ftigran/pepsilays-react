import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";

import "./index.scss";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter basename={process.env.basename}>
    <App/>
  </BrowserRouter>,

  document.getElementById("root")
);
