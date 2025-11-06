import { Menu } from 'lucide-react';
import eggLogo from '../assets/egg-logo.png';

type Props = {
  scrollToSection: (id: string) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
};

export default function Navigation({ scrollToSection, mobileMenuOpen, setMobileMenuOpen }: Props) {
  return (
    <nav className="fixed top-0 w-full bg-gradient-to-b from-white to-[#89CFF0]/10 backdrop-blur-[2px] shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <img src={eggLogo} alt="Egg Logo" className="h-10 w-auto object-contain" />
            <span className="font-chalk text-2xl text-[#F4C430]">Havelock Cafe</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('about')} className="text-[#F4C430] hover:text-[#B0E0E6] transition-colors">About</button>
            <button onClick={() => scrollToSection('menu')} className="text-[#F4C430] hover:text-[#B0E0E6] transition-colors">Menu</button>
            <button onClick={() => scrollToSection('gallery')} className="text-[#F4C430] hover:text-[#B0E0E6] transition-colors">Gallery</button>
            <button onClick={() => scrollToSection('visit')} className="text-[#F4C430] hover:text-[#B0E0E6] transition-colors">Visit</button>
          </div>

          <button className="md:hidden text-[#89CFF0]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu size={24} />
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 border-t border-[#B0E0E6]/20 overflow-hidden">
          <div className="px-4 py-4 space-y-3">
            <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-[#F4C430] hover:text-[#B0E0E6]">About</button>
            <button onClick={() => scrollToSection('menu')} className="block w-full text-left py-2 text-[#F4C430] hover:text-[#B0E0E6]">Menu</button>
            <button onClick={() => scrollToSection('gallery')} className="block w-full text-left py-2 text-[#F4C430] hover:text-[#B0E0E6]">Gallery</button>
            <button onClick={() => scrollToSection('visit')} className="block w-full text-left py-2 text-[#F4C430] hover:text-[#B0E0E6]">Visit</button>
          </div>
        </div>
      )}
    </nav>
  );
}
