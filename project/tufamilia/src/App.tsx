import React, { Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LoadingSpinner from './components/LoadingSpinner'

const Home = React.lazy(() => import('./pages/Home'))
const Menu = React.lazy(() => import('./pages/Menu'))
const Reservations = React.lazy(() => import('./pages/Reservations'))
const Gallery = React.lazy(() => import('./pages/Gallery'))
const Contact = React.lazy(() => import('./pages/Contact'))

export default function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-papel text-charcoal overflow-x-hidden">
      <Navbar />
      <main className="relative">
        <AnimatePresence mode="wait">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/reservations" element={<Reservations />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}
