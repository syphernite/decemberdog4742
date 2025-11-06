import eggLogo from '../assets/egg-logo.png';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#89CFF0] to-[#B0E0E6] text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <img src={eggLogo} alt="Havelock Cafe Logo" className="h-10 w-auto object-contain" />
            <div>
              <p className="font-chalk text-2xl">Havelock Cafe</p>
              <p className="text-white/90 text-sm">Good coffee. Hot eggs. Friendly faces.</p>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-white/90 mb-2">1000 E Main St, Havelock, NC 28532</p>
            <a href="tel:2526526115" className="text-[#B0E0E6] hover:text-white transition-colors text-lg font-medium">
              (252) 652-6115
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 text-center text-white/90 text-sm space-y-2">
          <p>&copy; 2024 Havelock Cafe. All rights reserved.</p>
          <p>
            Demo <span aria-hidden></span> by{' '}
            <a href="https://built4you.org" target="_blank" rel="noopener noreferrer" className="text-[#B0E0E6] hover:text-white underline">
              Built4You
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
