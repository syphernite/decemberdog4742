import { MapPin, Phone } from 'lucide-react';
import eggLogo from '../assets/egg-logo.png';
 
 

export default function Hero({ scrollToSection, openMenuModal }: { scrollToSection: (id: string) => void; openMenuModal: () => void }) {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-br from-[#B0E0E6] via-[#89CFF0] to-[#B0E0E6]" />
  {/* subtle darken on the left side to add contrast */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/5 to-black/0 pointer-events-none" />
  {/* radial blue fade at bottom-right to replace white corner */}
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      backgroundImage:
        "radial-gradient(600px circle at 85% 85%, rgba(176,224,230,0.55) 0%, rgba(137,207,240,0.20) 40%, rgba(255,255,255,0) 70%)",
    }}
  />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B0E0E6' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <div className="mb-8 flex justify-center">
          <div className="transform hover:scale-105 transition-transform duration-200">
            <img src={eggLogo} alt="Havelock Cafe Logo" className="h-28 w-auto object-contain" />
          </div>
        </div>
        <h1 className="font-chalk text-5xl sm:text-6xl md:text-7xl text-[#F5F3EE] mb-6 leading-tight">
          Good coffee.<br />Hot eggs.<br />Friendly faces.
        </h1>
        <p className="text-xl sm:text-2xl text-[#F4C430] mb-10 font-light">
          Your neighborhood breakfast spot in Havelock
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={openMenuModal}
            className="px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full font-medium text-lg hover:bg-white/30 transition-all duration-300 transform hover:scale-105 min-w-[200px]"
          >
            View Menu
          </button>
          <a
            href="tel:2526526115"
            className="px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full font-medium text-lg hover:bg-white/30 transition-all duration-300 transform hover:scale-105 min-w-[200px] flex items-center justify-center gap-2"
          >
            <Phone size={20} />
            Call Now
          </a>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=1000+E+Main+St,+Havelock,+NC+28532"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full font-medium text-lg hover:bg-white/30 transition-all duration-300 transform hover:scale-105 min-w-[200px] flex items-center justify-center gap-2"
          >
            <MapPin size={20} />
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
