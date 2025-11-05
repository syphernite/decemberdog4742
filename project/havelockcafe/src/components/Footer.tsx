import EggLogo from './EggLogo';

export default function Footer() {
  return (
    <footer className="bg-[#6B5B3E] text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <EggLogo />
            <div>
              <p className="font-chalk text-2xl">Havelock Cafe</p>
              <p className="text-[#E8DCC8] text-sm">Good coffee. Hot eggs. Friendly faces.</p>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-[#E8DCC8] mb-2">1000 E Main St, Havelock, NC 28532</p>
            <a href="tel:2526526115" className="text-[#F4C430] hover:text-white transition-colors text-lg font-medium">
              (252) 652-6115
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#8B6F47] text-center text-[#E8DCC8] text-sm">
          <p>&copy; 2024 Havelock Cafe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
