import React, { useEffect, useId, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Menu as MenuIcon,
  X as XIcon,
  Phone,
  CalendarDays,
  Instagram,
  Facebook,
  MapPin,
} from 'lucide-react'

/**
 * HashRouter-safe Navbar:
 * - Uses <Link>/<NavLink> only. No absolute hrefs to /tufamilia/...
 * - Framer Motion props live on motion(...) elements to avoid React DOM warnings.
 * - Closes the mobile menu on route change.
 * - Supports keyboard and ARIA.
 */

const MotionLink = motion(Link)
const MotionNavLink = motion(NavLink)
const MotionButton = motion.button

const navItems = [
  { to: '/', label: 'Inicio' },
  { to: '/menu', label: 'Menú' },
  { to: '/reservations', label: 'Reservaciones' },
  { to: '/gallery', label: 'Galería' },
  { to: '/about', label: 'Nosotros' },
  { to: '/contact', label: 'Contacto' },
]

const base = (import.meta as any)?.env?.BASE_URL || '/'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [elevated, setElevated] = useState(false)
  const location = useLocation()
  const menuLabelId = useId()

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false)
    // Scroll to top on navigation for better UX
    if (typeof window !== 'undefined') window.scrollTo(0, 0)
  }, [location.pathname])

  // Add a subtle shadow after scrolling
  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkBaseClasses =
    'inline-flex items-center px-2 py-1 text-sm font-medium transition-colors'
  const linkActiveClasses =
    'text-marigold underline underline-offset-4'
  const linkIdleClasses =
    'text-charcoal/80 hover:text-charcoal'

  return (
    <nav
      className={`w-full sticky top-0 z-50 backdrop-blur bg-papel/80 transition-shadow ${
        elevated ? 'shadow-sm' : ''
      }`}
      role="navigation"
      aria-label="Primary"
    >
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6">
        <div className="h-16 flex items-center justify-between gap-3">
          {/* Brand */}
          <div className="flex items-center gap-3 min-w-0">
            <MotionLink
              to="/"
              className="flex items-center gap-2 min-w-0"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <img
                src={`${base}logo.svg`}
                alt="TuFamilia"
                className="h-8 w-8 object-contain"
                onError={(e) => {
                  // Hide if asset missing; app still works
                  ;(e.currentTarget as HTMLImageElement).style.display = 'none'
                }}
              />
              <span className="text-base sm:text-lg font-semibold truncate">
                TuFamilia
              </span>
            </MotionLink>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <MotionNavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  [
                    linkBaseClasses,
                    isActive ? linkActiveClasses : linkIdleClasses,
                  ].join(' ')
                }
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item.label}
              </MotionNavLink>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-2">
            <MotionLink
              to="/reservations"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold bg-marigold text-papel hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-marigold"
            >
              <CalendarDays className="h-4 w-4" aria-hidden="true" />
              Reservar
            </MotionLink>
            <a
              href="tel:+15555551234"
              className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-charcoal/90 hover:text-charcoal focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-marigold"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span>(555) 555-1234</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <MotionButton
              type="button"
              aria-haspopup="dialog"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-labelledby={menuLabelId}
              className="p-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-marigold text-charcoal"
              whileTap={{ scale: 0.96 }}
              onClick={() => setOpen((v) => !v)}
            >
              <span id={menuLabelId} className="sr-only">
                Abrir menú
              </span>
              {open ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </MotionButton>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: 'tween', duration: 0.2 }}
            className="md:hidden overflow-hidden border-t border-black/5 bg-papel/95 backdrop-blur"
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              {navItems.map((item) => (
                <MotionNavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    [
                      'w-full rounded-lg px-3 py-2 text-base',
                      isActive
                        ? 'bg-marigold text-papel'
                        : 'text-charcoal/90 hover:bg-black/5',
                    ].join(' ')
                  }
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.label}
                </MotionNavLink>
              ))}

              <div className="h-px my-2 bg-black/10" />

              <div className="flex flex-col gap-2">
                <MotionLink
                  to="/reservations"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="inline-flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-base font-semibold bg-marigold text-papel"
                >
                  <CalendarDays className="h-4 w-4" aria-hidden="true" />
                  Reservar
                </MotionLink>

                <a
                  href="tel:+15555551234"
                  className="inline-flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-base font-medium text-charcoal/90 hover:bg-black/5"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Llamar
                </a>
              </div>

              <div className="h-px my-2 bg-black/10" />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-sm text-charcoal/70">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  <span>123 Calle Principal, Ciudad</span>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    aria-label="Instagram"
                    href="#"
                    className="p-2 rounded-md hover:bg-black/5"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="h-4 w-4" />
                  </a>
                  <a
                    aria-label="Facebook"
                    href="#"
                    className="p-2 rounded-md hover:bg-black/5"
                    rel="noopener noreferrer"
                  >
                    <Facebook className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </nav>
  )
}
