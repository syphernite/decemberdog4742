import { motion } from 'framer-motion';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-black">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-emerald-500/20 animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Left */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              Never Settle Nutrition
            </h3>
            <p className="text-gray-400 mb-6">Lawton&apos;s premier shake and tea bar. Fuel your best life with every sip.</p>
            <div className="flex gap-4">
              <motion.a
                href="https://facebook.com/NeverSettleNutrition"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center text-white hover:scale-110 transition-transform"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://instagram.com/NeverSettleNutrition"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center text-white hover:scale-110 transition-transform"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Middle */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Menu', 'Blog', 'Classes', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`/${link.toLowerCase()}`} className="text-gray-400 hover:text-emerald-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <h4 className="text-lg font-semibold text-white mb-4">Get in Touch</h4>
            <div className="space-y-3 text-gray-400 mb-8">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-emerald-400" />
                <span>Lawton, Oklahoma</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-400" />
                <a href="tel:+15555555555" className="hover:text-emerald-400 transition-colors">
                  (555) 555-5555
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald-400" />
                <a href="mailto:info@neversettlenutrition.com" className="hover:text-emerald-400 transition-colors">
                  info@neversettlenutrition.com
                </a>
              </div>
            </div>

            {/* External Links (added) */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-gray-300 mb-2">External Links</h4>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>
                  <a
                    href="https://erikatoepfer.goherbalife.com/Catalog/Home/Index/en-US"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-emerald-300"
                  >
                    Herbalife Catalog
                  </a>
                </li>
                <li>
                  <a href="https://linktr.ee/NeverSettleNutrition" target="_blank" rel="noreferrer" className="hover:text-emerald-300">
                    All Links (Linktree)
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Never Settle Nutrition. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <a href="/privacy" className="text-gray-500 hover:text-emerald-400 transition-colors">Privacy Policy</a>
              <a href="/terms" className="text-gray-500 hover:text-emerald-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
