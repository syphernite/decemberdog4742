import { MapPin, Clock, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <div
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url("https://images.pexels.com/photos/3915857/pexels-photo-3915857.jpeg?auto=compress&cs=tinysrgb&w=1600")',
        minHeight: '600px'
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block bg-yellow-400 text-red-900 px-4 py-2 rounded-full font-bold text-sm">
                EST. 1985 - Serving the Community for 40 Years
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight drop-shadow-lg">
                Big Slices.<br />
                Fresh Subs.<br />
                <span className="text-yellow-300">Real Flavor.</span>
              </h2>
              <p className="text-xl text-white leading-relaxed drop-shadow-md">
                Where every bite feels like home. From our famous oversized slices to subs packed with fresh ingredients, we're your go-to spot for comfort food done right.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-800 transition-colors shadow-xl">
                Order for Pickup
              </button>
              <button className="bg-white text-red-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors shadow-xl">
                View Full Menu
              </button>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              <div className="flex items-start space-x-3 bg-white/90 backdrop-blur rounded-lg p-3">
                <MapPin className="w-5 h-5 text-red-700 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Location</p>
                  <p className="text-sm text-gray-600">456 River Road</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 bg-white/90 backdrop-blur rounded-lg p-3">
                <Clock className="w-5 h-5 text-red-700 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Hours</p>
                  <p className="text-sm text-gray-600">11am - 10pm Daily</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 bg-white/90 backdrop-blur rounded-lg p-3">
                <Phone className="w-5 h-5 text-red-700 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Call Us</p>
                  <p className="text-sm text-gray-600">(555) 789-PIZZA</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-red-700/90 backdrop-blur rounded-2xl p-6 text-white shadow-2xl transform hover:scale-105 transition-transform">
                  <div className="text-4xl font-bold">28"</div>
                  <div className="text-lg">Giant Pizza</div>
                  <div className="text-sm text-red-100">Feeds 8-10 people</div>
                </div>
                <div className="bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl aspect-square shadow-2xl flex items-center justify-center text-white transform hover:scale-105 transition-transform">
                  <div className="text-center">
                    <div className="text-6xl mb-2">🍕</div>
                    <div className="font-bold text-lg">Fresh Daily</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl aspect-square shadow-2xl flex items-center justify-center text-white transform hover:scale-105 transition-transform">
                  <div className="text-center">
                    <div className="text-6xl mb-2">🥖</div>
                    <div className="font-bold text-lg">House-Baked</div>
                  </div>
                </div>
                <div className="bg-green-600/90 backdrop-blur rounded-2xl p-6 text-white shadow-2xl transform hover:scale-105 transition-transform">
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
