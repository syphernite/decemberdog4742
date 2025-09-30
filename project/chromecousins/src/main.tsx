import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './index.css';

// Automatically pick "/" in dev, "/chromecousins/" in production
const base =
  import.meta.env.DEV ? '/' : '/chromecousins/';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <HashRouter basename={base}>
        <App />
      </HashRouter>
    </HelmetProvider>
  </React.StrictMode>
);
