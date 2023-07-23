import React from "../_snowpack/pkg/react.js";
import App from "./App.js";
import {createRoot} from "../_snowpack/pkg/react-dom/client.js";
import {HashRouter} from "../_snowpack/pkg/react-router-dom.js";
const container = document.getElementById("app");
const root = createRoot(container);
root.render(/* @__PURE__ */ React.createElement(HashRouter, null, /* @__PURE__ */ React.createElement(App, null)), document.getElementById("app"));
