import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Facebook } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-charcoal text-papel">
      <div className="h-1 bg-gradient-to-r from-chili via-marigold to-nopal"></div>
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-display font-bold">Tu Familia</h3>
          <p className="mt-3 text-papel/70">
            A taste of authentic Mexican food & Tex-Mex the way you love it.
          </p>
          <div className="mt-4 flex gap-3">
            <a
              href="https://www.facebook.com/TuFamiliaLawton/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-papel/80 hover:text-marigold"
            >
              <Facebook className="h-4 w-4" /> Facebook
            </a>
          </div>
        </motion.div>

        {/* Visit */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h4 className="font-semibold mb-3">Visítanos</h4>
          <div className="space-y-2 text-papel/80">
            <div className="flex items-start gap-2">
              <MapPin className="h-5 w-5 mt-0.5" />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://maps.apple.com/?address=111%20SW%20Lee%20Blvd,%20Lawton,%20OK%2073501,%20United%20States"
                className="hover:text-marigold"
              >
                111 SW Lee Blvd<br />Lawton, OK 73501
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              <a href="tel:+15805954900" className="hover:text-marigold">
                (580) 595-4900
              </a>
            </div>
          </div>
        </motion.div>

        {/* Hours */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h4 className="font-semibold mb-3">Horario</h4>
          <ul className="space-y-1 text-sm text-papel/80">
            <li className="flex justify-between"><span>Domingo</span><span>11:00–8:30</span></li>
            <li className="flex justify-between"><span>Lunes</span><span>Cerrado</span></li>
            <li className="flex justify-between"><span>Martes</span><span>11:00–8:30</span></li>
            <li className="flex justify-between"><span>Miércoles</span><span>11:00–8:30</span></li>
            <li className="flex justify-between"><span>Jueves</span><span>11:00–8:30</span></li>
            <li className="flex justify-between"><span>Viernes</span><span>11:00–9:30</span></li>
            <li className="flex justify-between"><span>Sábado</span><span>11:00–9:30</span></li>
          </ul>
        </motion.div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-sm text-papel/60">
        © {new Date().getFullYear()} Tu Familia Mexican Restaurant. Built by Built4You.
      </div>
    </footer>
  )
}

export default Footer
