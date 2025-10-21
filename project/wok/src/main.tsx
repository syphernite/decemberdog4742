import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Force the browser NOT to restore scroll on reload/back-forward
if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

// As an extra guard: when the page is about to unload, reset scroll
window.addEventListener('beforeunload', () => {
  window.scrollTo(0, 0);
});

// Also, on first paint after resources load, snap to top
window.addEventListener('load', () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
