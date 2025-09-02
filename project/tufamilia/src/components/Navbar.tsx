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
 * Navbar
 * - Higher contrast when page is at top (solid white + border).
 * - Adds shadow when scrolled.
 * - Removed About link.
 */

const navItems = [
  { to: '/', label: 'Inicio' },
  { to: '/menu', label: 'Menu' },
  { to: '/reservations', label: 'Reservations' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

const base = (import.meta as any)?.env?.BASE_URL || '/'

const MotionLink = motion(Link)
const MotionNavLink = motion(NavLink)

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [elevated, setElevated] = useState(false)
  const location = useLocation()
  const menuLabelId = useId()

  useEffect(() => {
    setOpen(false)
    if (typeof window !== 'undefined') window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkBase =
    'px-3 py-2 text-sm font-medium rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-marigold'

  return (
    <nav
      className={`w-full sticky top-0 z-50 transition-shadow bg-white ${
        elevated ? 'shadow-sm' : 'border-b border-black/10'
      }`}
      role="navigation"
    >
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6">
        <div className="h-16 flex items-center justify-between gap-3">
          {/* Brand */}
          <MotionLink
            to="/"
            className="flex items-center gap-2 min-w-0"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <img
              src={`${base}logo.svg`}
              alt="Tu Familia"
              className="h-8 w-8 object-contain"
              onError={(e) => {
                ;(e.currentTarget as HTMLImageElement).style.display = 'none'
              }}
            />
            <span className="text-base sm:text-lg font-semibold truncate">
              Tu Familia
            </span>
          </MotionLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <MotionNavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `${linkBase} ${
                    isActive
                      ? 'bg-charcoal text-white'
                      : 'text-charcoal hover:bg-black/5'
                  }`
                }
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item.label}
              </MotionNavLink>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-2">
            <MotionLink
              to="/reservations"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-md bg-marigold text-charcoal px-3 py-2 text-sm font-semibold"
            >
              <CalendarDays className="h-4 w-4" /> Reserve
            </MotionLink>
            <a
              href="tel:+15805954900"
              className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold text-charcoal hover:bg-black/5"
            >
              <Phone className="h-4 w-4" /> (580) 595-4900
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-charcoal hover:bg-black/5"
            aria-expanded={open}
            aria-controls={menuLabelId}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Toggle menu</span>
            {open ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="md:hidden bg-white border-t border-black/10"
            id={menuLabelId}
            role="dialog"
            aria-modal="true"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="block px-3 py-2 rounded-md text-charcoal hover:bg-black/5"
                >
                  {item.label}
                </Link>
              ))}
              <div className="h-px my-2 bg-black/10" />
              <a
                href="tel:+15805954900"
                className="flex items-center gap-2 text-charcoal hover:underline"
              >
                <Phone className="h-4 w-4" /> (580) 595-4900
              </a>
              <a
                href="https://maps.apple.com/?address=111%20SW%20Lee%20Blvd,%20Lawton,%20OK%2073501,%20United%20States"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-charcoal hover:underline"
              >
                <MapPin className="h-4 w-4" /> 111 SW Lee Blvd, Lawton, OK
              </a>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.facebook.com/TuFamiliaLawton/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md hover:bg-black/5"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-md hover:bg-black/5"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </nav>
  )
}
