import React from "react";
import client from "react-dom/client";
import {App} from "./react/App.jsx";
import "./style/index.css";
import(/* webpackChunkName: 'test1' */ "./test");

const root = client.createRoot(document.querySelector("#root"));

root.render(<App />);
