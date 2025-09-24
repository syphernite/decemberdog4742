import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <nav className="nav">
          <NavLink to="/johnny/" end className="nav-link">Home</NavLink>
          <NavLink to="/johnny/portfolio" className="nav-link">Portfolio</NavLink>
          <NavLink to="/johnny/contact" className="nav-link cta">Book</NavLink>
        </nav>
      </header>

      <main className="container">
        <Outlet />
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Tattoo Johnny ATL • <a href="https://www.instagram.com/tattoojohnnyatl/" target="_blank" rel="noreferrer">@tattoojohnnyatl</a></p>
      </footer>
    </div>
  )
}
