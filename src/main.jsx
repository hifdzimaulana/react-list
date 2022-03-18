import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Gallery from "./pages/Gallery";
import Home from "./pages/Home";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </App>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
