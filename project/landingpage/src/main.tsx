import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, useNavigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import "./index.css";

/**
 * If GitHub Pages served 404.html, we arrive at "/?p=/some/deep/route".
 * Restore that route once the router is mounted, then strip the query.
 */
function RestoreInitialPath() {
  const navigate = useNavigate();

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const p = params.get("p");

    if (p && window.location.pathname === "/") {
      try {
        const decoded = decodeURIComponent(p);
        if (decoded.startsWith("/")) {
          // Navigate to the intended path and replace history to drop ?p=
          navigate(decoded + window.location.hash, { replace: true });
        }
      } catch {
        // ignore decode errors
      }
    }
  }, [navigate]);

  return null;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <RestoreInitialPath />
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
