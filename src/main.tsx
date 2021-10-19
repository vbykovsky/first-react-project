import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyles } from "@mui/material";
import { App } from "./App";
import { globalStyles } from "./App.styles";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles styles={globalStyles} />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
