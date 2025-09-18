// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import FloatingBurgerMenu from "./components/FloatingBurgerMenu";

/**
 * Use BASE_URL in prod. In dev, auto detect if the app is mounted at /seo or root.
 */
function detectBase(): string {
  const envBase = import.meta.env.BASE_URL; // "/seo/" in prod build, "/" in dev
  if (envBase && envBase !== "/") return envBase;
  const path = window.location.pathname;
  return path.startsWith("/seo") ? "/seo/" : "/";
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename={detectBase()}>
      <App />
      {/* Global floating burger */}
      <FloatingBurgerMenu />
    </BrowserRouter>
  </React.StrictMode>
);
