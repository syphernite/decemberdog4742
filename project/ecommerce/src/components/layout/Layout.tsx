import React from 'react'
import { Outlet, Link, NavLink, useNavigate } from 'react-router-dom'
import SearchModal from '../search/SearchModal'

export function Layout() {
  const [open, setOpen] = React.useState(false)
  const nav = useNavigate()

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === '/' && !e.metaKey && !e.ctrlKey && !e.altKey) {
        e.preventDefault()
        setOpen(true)
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  const link = 'px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-[#171826] transition'
  const active = 'text-white bg-[#171826]'

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[rgba(6,6,7,.7)] backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="h-16 flex items-center justify-between">
            <Link to="/" className="text-white font-extrabold text-lg tracking-tight">
              <span style={{background:'linear-gradient(90deg,var(--acc),var(--acc2))',WebkitBackgroundClip:'text',color:'transparent'}}>Nightwave</span> Supply
            </Link>
            <nav className="hidden md:flex items-center gap-1">
              <NavLink to="/collections" className={({isActive})=>`${link} ${isActive?active:''}`}>Collections</NavLink>
              <NavLink to="/new-arrivals" className={({isActive})=>`${link} ${isActive?active:''}`}>New Arrivals</NavLink>
              <button onClick={()=>setOpen(true)} className={link} aria-label="Open search">Search</button>
            </nav>
            <button onClick={()=>nav('/cart')} className="btn btn-ghost">Cart</button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6">
        <Outlet />
      </main>

      <footer className="mt-16 border-t border-[var(--line)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 text-center text-sm muted">
          © {new Date().getFullYear()} Nightwave Supply — demo theme
        </div>
      </footer>

      <SearchModal open={open} onClose={()=>setOpen(false)} />
    </div>
  )
}
export default Layout
