import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Root from "./Root";
import { user } from "./utils";
ReactDOM.render(
  <Root initialState={{ user }}>
    <App />
  </Root>,
  document.getElementById("root")
);
