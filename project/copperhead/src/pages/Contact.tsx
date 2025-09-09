import React from 'react';
import { Phone, Facebook, MapPin, Clock } from 'lucide-react';

function Contact() {
  return (
    <section className="min-h-[92svh] bg-ink text-bone">
      <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-2 gap-10">
        <div>
          <h1 className="text-4xl md:text-5xl font-black copper-text">Contact</h1>
          <p className="mt-3 text-white/80">
            Reach out to book the mobile chair or ask about community events.
          </p>
          <div className="mt-6 space-y-3 text-white/80">
            <div className="flex items-center gap-3">
              <Phone size={18} />
              <a href="tel:+15805852072" className="hover:underline">
                580-585-2072
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Facebook size={18} />
              <a
                href="https://www.facebook.com/copperheadcutz/"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                Facebook
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Clock size={18} />
              By appointment • Booksy
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={18} />
              Lawton, Oklahoma • Mobile service
            </div>
          </div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="font-semibold text-white mb-2">Quick message</h2>
          <form
            action="https://formspree.io/f/mrblknpq"
            method="POST"
            className="grid gap-3"
          >
            <input
              className="bg-black/40 border border-white/10 rounded-xl px-3 py-2 text-white placeholder-white/40"
              name="name"
              placeholder="Name"
              required
            />
            <input
              className="bg-black/40 border border-white/10 rounded-xl px-3 py-2 text-white placeholder-white/40"
              name="phone"
              placeholder="Phone"
            />
            <input
              className="bg-black/40 border border-white/10 rounded-xl px-3 py-2 text-white placeholder-white/40"
              name="email"
              placeholder="Email"
            />
            <textarea
              className="bg-black/40 border border-white/10 rounded-xl px-3 py-2 text-white placeholder-white/40"
              name="message"
              placeholder="Message"
              rows={4}
              required
            />
            <button className="btn-shine px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
