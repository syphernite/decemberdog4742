import { MapPin, Clock, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <div
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/3915857/pexels-photo-3915857.jpeg?auto=compress&cs=tinysrgb&w=1600")',
        minHeight: '600px',
      }}
    >
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT: Text + CTAs */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block bg-italian-gold text-italian-red px-4 py-2 rounded-full font-bold text-sm shadow-md">
                EST. 1999 · Serving Newport for 25+ Years
              </div>

              <h1 className="text-5xl md:text-6xl font-serif font-extrabold text-white leading-tight drop-shadow-lg">
                Big Slices.
                <br />
                Loaded Subs.
                <br />
                <span className="text-yellow-300">Real Riverside Flavor.</span>
              </h1>

              <p className="text-xl text-white/90 leading-relaxed max-w-xl">
                Riverside Pizza &amp; Subs has been fueling Newport with hand-tossed pies, overstuffed subs, wings,
                and Italian favorites since the 90s. Fresh dough, real cheese, and portions that actually fill you up.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-italian-red text-white font-bold text-lg shadow-xl hover:bg-terracotta transition-colors">
                Order Now
              </button>
              <button className="inline-flex items-center justify-center px-8 py-3 rounded-full border-2 border-italian-gold text-italian-gold font-semibold text-lg hover:bg-italian-gold hover:text-italian-red transition-colors">
                View Full Menu
              </button>
            </div>

            {/* Info pills: location, hours, phone */}
            <div className="grid gap-3 sm:grid-cols-3 max-w-xl">
              <div className="flex items-start space-x-3 bg-white/95 backdrop-blur rounded-lg p-3 shadow">
                <MapPin className="w-5 h-5 text-italian-red flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Location</p>
                  <p className="text-sm text-gray-700">6919 Hwy 70, Suite A</p>
                  <p className="text-xs text-gray-500">Newport, NC 28570</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-white/95 backdrop-blur rounded-lg p-3 shadow">
                <Clock className="w-5 h-5 text-italian-red flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Hours</p>
                  <p className="text-sm text-gray-700">Mon – Sat 11:00am – 9:00pm</p>
                  <p className="text-xs text-gray-500">Sunday closed</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-white/95 backdrop-blur rounded-lg p-3 shadow">
                <Phone className="w-5 h-5 text-italian-red flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Call Us</p>
                  <p className="text-sm text-gray-700">(252) 223-2277</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Fun stat cards */}
          <div className="hidden md:block">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                  <div className="bg-gradient-to-br from-italian-red to-terracotta rounded-2xl aspect-square shadow-2xl flex flex-col items-center justify-center text-white transform hover:scale-105 transition-transform">
                  <div className="text-4xl font-bold">28"</div>
                  <div className="text-lg">Giant Pizza</div>
                  <div className="text-sm text-red-100">Feeds the whole crew</div>
                </div>
                  <div className="bg-gradient-to-br from-olive-green to-soft-gray rounded-2xl aspect-square shadow-2xl flex flex-col items-center justify-center text-white transform hover:scale-105 transition-transform">
                  <div className="text-6xl mb-2">🍕</div>
                  <div className="font-bold text-lg">Fresh Dough Daily</div>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                  <div className="bg-gradient-to-br from-italian-gold to-terracotta rounded-2xl aspect-square shadow-2xl flex flex-col items-center justify-center text-white transform hover:scale-105 transition-transform">
                  <div className="text-6xl mb-2">🥖</div>
                  <div className="font-bold text-lg">Stacked Subs</div>
                </div>
                  <div className="bg-gradient-to-br from-terracotta to-italian-red rounded-2xl aspect-square shadow-2xl flex flex-col items-center justify-center text-white transform hover:scale-105 transition-transform">
                  <div className="text-3xl font-bold">50+</div>
                  <div className="text-lg">Menu Items</div>
                  <div className="text-sm text-green-100">Something for everyone</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
