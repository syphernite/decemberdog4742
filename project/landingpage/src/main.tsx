// project/landingpage/src/main.tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Only one Router here */}
    <HashRouter basename="/">
      <App />
    </HashRouter>
  </StrictMode>
)
