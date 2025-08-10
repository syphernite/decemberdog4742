import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// App should own the router (HashRouter) to avoid nesting Router inside Router.
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
