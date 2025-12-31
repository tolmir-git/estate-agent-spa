import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { FavouritesProvider } from "./context/FavouritesContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>

    <FavouritesProvider>
      <App />
    </FavouritesProvider>
  </BrowserRouter>
);
