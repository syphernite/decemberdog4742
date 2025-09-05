import React, { useState, useEffect, useMemo } from "react";
import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";

const Contact = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) => entry.isIntersecting && entry.target.classList.add("fade-in-up")
        ),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // --- Map ---
  const ADDRESS = "105 S 6th St, Morehead City, NC 28557";
  const [isDesktop, setIsDesktop] = useState<boolean>(
    typeof window !== "undefined" ? window.innerWidth >= 1024 : false
  );
  useEffect(() => {
    const onResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  const mapSrc = useMemo(() => {
    const q = encodeURIComponent(ADDRESS);
    const zoom = isDesktop ? 18 : 16;
    return `https://www.google.com/maps?q=${q}&z=${zoom}&output=embed`;
  }, [isDesktop]);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center bg-gradient-to-br from-ocean-blue to-slate-900 py-16 md:py-20">
        <div className="water-ripple"></div>
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="font-display text-5xl md:text-6xl text-white mb-4 neon-glow">
            Get in Touch
          </h1>
          <p className="text-lg text-sandy-beige mb-6 animate-on-scroll">
            We'd love to hear from you! Come visit us in beautiful Morehead City
          </p>

          {/* Primary phone CTA — bold, glowing, tappable */}
          <a
            href="tel:252-726-7800"
            className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full
                       bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-400 text-ocean-blue
                       font-extrabold text-xl md:text-2xl shadow-[0_10px_30px_rgba(255,200,0,0.4)]
                       ring-2 ring-white/60 hover:ring-white
                       hover:shadow-[0_12px_36px_rgba(255,210,0,0.55)]
                       transition-all duration-300 hover:-translate-y-0.5 focus:outline-none
                       focus-visible:ring-4 focus-visible:ring-amber-300/70 pulse-glow"
            aria-label="Call Beach Bumz now"
          >
            <Phone className="h-6 w-6 md:h-7 md:w-7" />
            <span>Call Now: (252) 726-7800</span>
          </a>

          {/* Subtext */}
          <div className="mt-3 text-sandy-beige/90 text-sm">
            Tap to call and place an order or ask about today’s specials
          </div>
        </div>
      </section>

      {/* Contact Info only (no form) */}
      <section className="py-20 bg-sandy-beige sand-texture">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-4xl text-ocean-blue mb-8 text-center">
            Visit Beach Bumz
          </h2>

          {/* Phone highlight card */}
          <div className="mb-8 rounded-2xl p-6 md:p-7 bg-white shadow-xl border border-yellow-300/40 relative overflow-hidden">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-yellow-200/40 blur-2xl" />
            <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-amber-200/40 blur-2xl" />
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 relative">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-amber-300 text-ocean-blue shadow-md">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-sm text-gray-600">Call us</div>
                  <div className="text-2xl font-extrabold tracking-tight text-ocean-blue">
                    (252) 726-7800
                  </div>
                </div>
              </div>
              <a
                href="tel:252-726-7800"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full
                           bg-ocean-blue text-white font-semibold shadow-lg hover:shadow-xl
                           hover:bg-ocean-blue/90 transition-colors"
              >
                Tap to Call
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4 bg-white/80 rounded-lg p-6 shadow-lg hover-lift beach-card tilt-on-hover">
              <MapPin className="h-6 w-6 text-turquoise mt-1 flex-shrink-0 bounce-subtle" />
              <div>
                <h3 className="font-semibold text-ocean-blue mb-2">Address</h3>
                <p className="text-gray-700">105 South 6th Street</p>
                <p className="text-gray-700">Morehead City, NC 28577</p>
                <a
                  href="https://www.google.com/maps/place/105+S+6th+St,+Morehead+City,+NC+28557"
                  target="_blank"
                  rel="noreferrer"
                  className="text-turquoise underline"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-white/80 rounded-lg p-6 shadow-lg hover-lift beach-card tilt-on-hover">
              <Clock className="h-6 w-6 text-turquoise mt-1 flex-shrink-0 starfish-spin" />
              <div>
                <h3 className="font-semibold text-ocean-blue mb-2">Hours</h3>
                <div className="space-y-1 text-gray-700">
                  <p>
                    <span className="font-medium">Mon - Thu:</span> 11:00 AM - 9:00 PM
                  </p>
                  <p>
                    <span className="font-medium">Fri - Sat:</span> 11:00 AM - 10:00 PM
                  </p>
                  <p>
                    <span className="font-medium">Sunday:</span> 11:00 AM - 9:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-white/80 rounded-lg p-6 shadow-lg hover-lift beach-card tilt-on-hover">
              <Instagram className="h-6 w-6 text-coral-pink mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-ocean-blue mb-2">Instagram</h3>
                <a
                  href="https://www.instagram.com/beachbumzmc"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-700 hover:text-coral-pink transition-colors duration-300"
                >
                  @beachbumz
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-white/80 rounded-lg p-6 shadow-lg hover-lift beach-card tilt-on-hover">
              <Facebook className="h-6 w-6 text-coral-pink mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-ocean-blue mb-2">Facebook</h3>
                <a
                  href="https://www.facebook.com/p/Beach-Bumz-Pub-Pizzaria-100063510343151/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-700 hover:text-coral-pink transition-colors duration-300"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section id="map" className="relative scroll-mt-24 md:scroll-mt-28">
        <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
          <iframe
            src={mapSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Beach Bumz Pub & Pizzeria Location"
            className="filter hue-rotate-15 saturate-150"
          ></iframe>
          <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-xl beach-card pulse-glow">
            <h4 className="font-semibold text-ocean-blue mb-2 flex items-center">
              <MapPin className="h-5 w-5 text-turquoise mr-2 bounce-subtle" />
              Beach Bumz Pub & Pizzeria
            </h4>
            <p className="text-gray-700 text-sm">105 South 6th Street</p>
            <p className="text-gray-700 text-sm">Morehead City, NC 28577</p>
          </div>
          <a
            href="https://www.google.com/maps/place/Beach+Bumz+Pub+%26+Pizzaria/@34.720578,-76.7094583,17z"
            target="_blank"
            rel="noreferrer"
            className="absolute top-6 right-6 bg-white/95 text-ocean-blue rounded-md px-3 py-2 shadow-md hover:bg-white transition"
          >
            Open in Google Maps
          </a>
        </div>
      </section>

      {/* Floating mobile call button */}
      <a
        href="tel:252-726-7800"
        className="fixed bottom-5 right-4 z-40 flex items-center gap-2 px-5 py-3 rounded-full
                   bg-amber-400 text-ocean-blue font-bold shadow-xl ring-2 ring-white/70
                   md:hidden hover:bg-amber-300 transition-colors pulse-glow"
        aria-label="Call Beach Bumz"
      >
        <Phone className="h-5 w-5" />
        Call Now
      </a>
    </div>
  );
};

export default Contact;
