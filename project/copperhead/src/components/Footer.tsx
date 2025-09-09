import React from 'react';
import { Facebook, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-ink border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-10 text-white/70 grid md:grid-cols-3 gap-6">
        <div>
          <h3 className="font-semibold text-white mb-2">Copperhead Cutz</h3>
          <p className="text-sm">Mobile barbershop serving Lawton and nearby communities.</p>
        </div>
        <div className="text-sm">
          <div className="flex items-center gap-2"><Phone size={16}/> <a href="tel:+15805852072">580-585-2072</a></div>
          <div className="flex items-center gap-2 mt-2"><Mail size={16}/> <a href="mailto:info@copperheadcutz.com">info@copperheadcutz.com</a></div>
        </div>
        <div className="md:text-right">
          <a className="inline-flex items-center gap-2 text-white/80 hover:text-white" href="https://www.facebook.com/copperheadcutz/" target="_blank" rel="noreferrer">
            <Facebook size={16}/> Facebook
          </a>
        </div>
      </div>
      <div className="text-center text-xs text-white/50 py-4 border-t border-white/10">© {new Date().getFullYear()} Copperhead Cutz</div>
    </footer>
  )
}
