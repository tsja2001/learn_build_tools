import React from "react";
import reactDom from "react-dom";
import "./style.css";

import App from "./App.jsx";

const root = reactDom.createRoot(document.querySelector("#root"));

const button = document.createElement("button");
button.textContent = "1111";
document.body.append(button);

const button2 = document.createElement("button");
button2.textContent = "222";
document.body.append(button2);

button.addEventListener("click", () => {
  import(
    /* webpackChunkName: "aaa" */
    /* webpackPrefetch: true */
    "./router/router1"
  );
});

button2.addEventListener("click", () => {
  import(
    /* webpackChunkName: "bbb" */
    /* webpackPrefetch: true */
    "./router/router2"
  );
});

root.render(<App />);
