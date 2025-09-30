import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Users, MapPin, Star, X } from 'lucide-react';

type BookingModalProps = {
  open: boolean;
  onClose: () => void;
};

const BookingModal: React.FC<BookingModalProps> = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm" role="dialog" aria-modal="true">
      <div className="mx-4 w-full max-w-md rounded-2xl bg-neutral-900 border border-white/10 shadow-xl">
        <div className="p-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-bold text-white">Booking Link</h3>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition"
              aria-label="Close booking modal"
            >
              <X size={18} />
            </button>
          </div>
          <p className="text-sm text-white/70 mb-4">
            This is a placeholder booking action for the demo. Replace with your Calendly or custom link.
          </p>
          <a
            href="#"
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-400 text-white font-semibold py-2.5 hover:bg-yellow-300 transition"
          >
            <ExternalLink size={16} />
            Continue
          </a>
        </div>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  const [bookingOpen, setBookingOpen] = useState(false);
  const openBooking = () => setBookingOpen(true);
  const closeBooking = () => setBookingOpen(false);

  return (
    <div>
      {/* HERO (shorter) */}
      <section className="relative min-h-[76vh] md:min-h-[78vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1813513/pexels-photo-1813513.jpeg"
            alt="Tattoo studio background"
            className="w-full h-full object-cover opacity-25"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[11px] sm:text-xs font-medium text-white/70 tracking-wide">
              Accepting appointments
            </span>
          </div>

          <h1 className="text-[2.25rem] sm:text-[2.75rem] md:text-[3.25rem] font-black leading-[1.05] tracking-tight">
            <span className="text-white">Clean Lines.</span>{' '}
            <span className="text-yellow-400">Bold Designs.</span>
          </h1>

          <p className="mt-2 max-w-2xl mx-auto text-white/70">
            Johnny is a professional tattoo artist in Atlanta specializing in clean linework,
            smooth shading, and custom pieces that tell your story.
          </p>

          <div className="mt-5 flex items-center justify-center gap-3">
            <button
              onClick={openBooking}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-yellow-400 text-white font-semibold hover:bg-yellow-300 transition shadow-[0_0_16px_rgba(234,179,8,0.25)]"
            >
              <ExternalLink size={18} />
              Book Now
            </button>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white/90 transition"
            >
              <ExternalLink size={18} />
              Instagram
            </a>
          </div>

          {/* Quick stats (tighter) */}
          <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl mx-auto">
            <div className="rounded-xl bg-white/5 border border-white/10 p-3">
              <div className="text-2xl font-bold text-white">10+</div>
              <div className="text-[11px] text-white/60">Years Experience</div>
            </div>
            <div className="rounded-xl bg-white/5 border border-white/10 p-3">
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-[11px] text-white/60">Happy Clients</div>
            </div>
            <div className="rounded-xl bg-white/5 border border-white/10 p-3">
              <div className="text-2xl font-bold text-white">ATL</div>
              <div className="text-[11px] text-white/60">Based in Atlanta</div>
            </div>
            <div className="rounded-xl bg-white/5 border border-white/10 p-3">
              <div className="text-2xl font-bold text-white">4.9</div>
              <div className="text-[11px] text-white/60">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA to Portfolio (tighter) */}
      <section className="relative py-12 bg-gradient-to-b from-black to-gray-900 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-yellow-400/20 bg-[radial-gradient(800px_260px_at_50%_-140px,rgba(234,179,8,0.12),transparent)]">
            <div className="relative px-6 sm:px-8 py-10 sm:py-12 flex flex-col items-center text-center">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] sm:text-xs text-white/70 mb-2">
                Portfolio
              </span>
              <h2 className="text-2xl md:text-4xl font-black tracking-tight">
                <span className="text-white">See My</span>{' '}
                <span className="text-yellow-400">Work</span>
              </h2>
              <p className="mt-2 max-w-2xl text-white/70">
                A curated gallery of fine-line, traditional, and custom script pieces.
              </p>

              <Link
                to="/portfolio"
                className="mt-5 inline-flex items-center justify-center gap-3 rounded-2xl px-6 py-3 text-[15px] font-semibold bg-yellow-400 text-white hover:bg-yellow-300 transition shadow-[0_0_24px_rgba(234,179,8,0.35)] focus:outline-none focus:ring-2 focus:ring-yellow-300"
              >
                <ExternalLink size={18} />
                See My Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials (tighter) */}
      <section className="relative py-12 bg-gradient-to-b from-gray-900 to-black border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-7 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-2">
                <Users className="w-4 h-4 text-yellow-400" />
                <span className="text-[11px] sm:text-xs font-medium tracking-wide text-white/70">Testimonials</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-black">
                <span className="text-white">Real Clients.</span>{' '}
                <span className="text-yellow-400">Real Stories.</span>
              </h3>
              <p className="mt-2 text-white/60">
                Hundreds of happy clients and a consistent 4.9★ rating.
              </p>

              <div className="mt-4 space-y-3">
                <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm font-semibold text-white">Sarah T.</span>
                  </div>
                  <p className="text-sm text-white/70">
                    “Absolutely love my fine line piece. Healing perfectly.”
                  </p>
                </div>
                <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm font-semibold text-white">Mike D.</span>
                  </div>
                  <p className="text-sm text-white/70">
                    “Johnny’s attention to detail is next level. Highly recommend.”
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="rounded-xl bg-yellow-400/10 border border-yellow-400/20 p-4">
                  <div className="text-3xl font-black text-yellow-400 mb-1">10+</div>
                  <div className="text-xs text-white/70">Years</div>
                </div>
                <div className="rounded-xl bg-yellow-400/10 border border-yellow-400/20 p-4">
                  <div className="text-3xl font-black text-yellow-400 mb-1">500+</div>
                  <div className="text-xs text-white/70">Clients</div>
                </div>
                <div className="rounded-xl bg-yellow-400/10 border border-yellow-400/20 p-4">
                  <div className="text-3xl font-black text-yellow-400 mb-1">24/7</div>
                  <div className="text-xs text-white/70">Aftercare</div>
                </div>
              </div>
              <button
                onClick={openBooking}
                className="mt-5 w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-yellow-400 text-white font-semibold hover:bg-yellow-300 transition"
              >
                <ExternalLink size={18} />
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <BookingModal open={bookingOpen} onClose={closeBooking} />
    </div>
  );
};

export default Home;
