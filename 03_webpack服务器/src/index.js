import React from "react";
import axios from "axios";
import reactDom from "react-dom/client";
import App from "./App.jsx";
import wuhu from "./wuhu";

axios
  .get("/api/user/list")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));

const root = reactDom.createRoot(document.querySelector("#root"));
root.render(<App />);
