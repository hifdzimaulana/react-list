import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import EventCalendar from "./pages/EventCalendar";
import ShoppingCart from "./pages/ShoppingCart";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/event-scheduler" element={<EventCalendar />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
        </Routes>
      </App>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
