import { Menu } from 'lucide-react';
import EggLogo from './EggLogo';

type Props = {
  scrollToSection: (id: string) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
};

export default function Navigation({ scrollToSection, mobileMenuOpen, setMobileMenuOpen }: Props) {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <EggLogo />
            <span className="font-chalk text-2xl text-[#8B6F47]">Havelock Cafe</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('about')} className="text-[#6B5B3E] hover:text-[#F4C430] transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('menu')} className="text-[#6B5B3E] hover:text-[#F4C430] transition-colors">
              Menu
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-[#6B5B3E] hover:text-[#F4C430] transition-colors">
              Gallery
            </button>
            <button onClick={() => scrollToSection('visit')} className="text-[#6B5B3E] hover:text-[#F4C430] transition-colors">
              Visit
            </button>
          </div>

          <button
            className="md:hidden text-[#6B5B3E]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-[#E8DCC8]">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left py-2 text-[#6B5B3E] hover:text-[#F4C430]"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="block w-full text-left py-2 text-[#6B5B3E] hover:text-[#F4C430]"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="block w-full text-left py-2 text-[#6B5B3E] hover:text-[#F4C430]"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('visit')}
              className="block w-full text-left py-2 text-[#6B5B3E] hover:text-[#F4C430]"
            >
              Visit
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
