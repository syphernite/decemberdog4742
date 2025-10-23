import { Waves, IceCream } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-b from-sky-400 via-cyan-300 to-blue-200">
      <div className="absolute inset-0 opacity-20">
        <div className="wave-animation"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <div className="mb-8 animate-float">
          <IceCream className="w-24 h-24 text-white drop-shadow-lg" strokeWidth={1.5} />
        </div>

        <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 drop-shadow-2xl font-display tracking-tight">
          Coastal Creamery
        </h1>

        <p className="text-2xl md:text-4xl text-white/90 mb-2 drop-shadow-lg font-light">
          Where the Sea Meets Sweet
        </p>

        <p className="text-xl md:text-2xl text-cyan-50 mb-12 drop-shadow-md italic">
          Dive Into Flavor!
        </p>

        <button className="group relative px-12 py-5 bg-gradient-to-r from-pink-400 to-rose-400 text-white text-xl font-semibold rounded-full shadow-2xl hover:shadow-pink-300/50 transition-all duration-300 hover:scale-110 overflow-hidden">
          <span className="relative z-10">Scoop the Menu</span>
          <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <Waves className="absolute bottom-0 left-0 w-full h-2 text-white/30 animate-wave" />
        </button>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Waves className="w-8 h-8 text-white/60" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full fill-amber-50">
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
}
