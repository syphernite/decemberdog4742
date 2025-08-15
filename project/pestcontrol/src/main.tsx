import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);

/**
 * Roach scroll indicator: a small SVG that moves along the right edge
 * according to scroll progress. No extra assets required.
 */
(function attachRoachIndicator(){
  if (document.getElementById('roach-scroll-indicator')) return;

  const track = document.createElement('div');
  track.id = 'roach-track';
  document.body.appendChild(track);

  const host = document.createElement('div');
  host.id = 'roach-scroll-indicator';
  host.setAttribute('aria-hidden', 'true');

  // Red roach SVG
  host.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
      <g fill="#B20000">
        <ellipse cx="18" cy="18" rx="7.5" ry="10"/>
        <rect x="16.5" y="5" width="3" height="8" rx="1.5"/>
        <rect x="16.5" y="23" width="3" height="8" rx="1.5"/>
        <rect x="5" y="16.5" width="8" height="3" rx="1.5" transform="rotate(-30 9 18)"/>
        <rect x="23" y="16.5" width="8" height="3" rx="1.5" transform="rotate(30 27 18)"/>
        <rect x="6" y="22" width="9" height="2.4" rx="1.2" transform="rotate(20 10.5 23)"/>
        <rect x="21" y="22" width="9" height="2.4" rx="1.2" transform="rotate(-20 25.5 23)"/>
      </g>
    </svg>
  `;
  document.body.appendChild(host);

  const update = () => {
    const doc = document.documentElement;
    const scrollable = doc.scrollHeight - doc.clientHeight;
    const ratio = scrollable > 0 ? (window.scrollY / scrollable) : 0;
    const top = Math.round(ratio * (window.innerHeight - 18)); // 18 = indicator height
    host.style.top = `${top}px`;
  };

  update();
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
})();
