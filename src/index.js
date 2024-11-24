import React from "react";
import ReactDOM from "react-dom/client";
import Weather from "./Weather.js";

import "./styles.css";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <body>
      <div className="weather">
        <h1>Weather App</h1>
        <Weather />
        <footer>
          This project was coded by
          <a href="https://github.com/kblizzy22/" target="_blank" rel="noreferrer"
            > Kelly Bailey-Alme</a
          >, is
          <a href="https://github.com/kblizzy22/weather-react-2" target="_blank" rel="noreferrer"
            > open-sourced on Github </a
          >
          and <a href="https://tangerine-cupcake-288dde.netlify.app/" target="_blank" rel="noreferrer">hosted on Netlify.</a>
        </footer>
      </div>
    </body>
  </React.StrictMode>
);
