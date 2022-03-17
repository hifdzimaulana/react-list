import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Gallery from "./pages/Gallery";

ReactDOM.render(
  <React.StrictMode>
    <App>
      <BrowserRouter>
        <Routes>
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </BrowserRouter>
    </App>
  </React.StrictMode>,
  document.getElementById("root")
);
