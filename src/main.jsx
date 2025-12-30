import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { FavouritesProvider } from "./context/FavouritesContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <FavouritesProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavouritesProvider>
);
