import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);

/* Keep styles targeted without changing your app logic */
(function enableInkScrollbar(){
  const html = document.documentElement;
  const body = document.body;
  html.classList.add('ink-scroll');
  body.classList.add('ink-scroll');
})();
