import React from "react";
import ReactDOM from "react-dom/client";
import Weather from "./Weather.js";

import "./styles.css";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <div className="weather">
      <h1>Weather App</h1>
      <Weather />
    </div>
  </React.StrictMode>
);
