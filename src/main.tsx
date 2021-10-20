import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyles } from "@mui/material";
import { App } from "./App";
import { globalStyles } from "./App.styles";
import { ContextProvider } from "./services";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles styles={globalStyles} />
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
