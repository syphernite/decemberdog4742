import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

/**
 * Use Vite's BASE_URL for a dev/prod-safe basename:
 * - dev: "/"  => basename ""
 * - prod: "/johnny/" => basename "/johnny"
 */
const base = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename={base}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
