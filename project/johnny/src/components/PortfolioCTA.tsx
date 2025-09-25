import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const PortfolioCTA: React.FC = () => {
  return (
    <section className="relative rounded-2xl overflow-hidden border border-yellow-500/20 bg-gradient-to-b from-[#0b0f1a] to-black">
      {/* subtle glow/overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full blur-3xl opacity-20 bg-yellow-400" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full blur-3xl opacity-10 bg-yellow-600" />
      </div>

      <div className="relative px-6 py-12 md:px-12 md:py-16 text-center">
        <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/50 text-yellow-400 text-xs font-semibold tracking-wider uppercase border border-yellow-500/20">
          Styles
          <span className="h-1 w-1 rounded-full bg-yellow-400" />
        </p>

        <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-white">
          Custom Work. <span className="text-yellow-400">Zero Compromise.</span>
        </h2>
        <p className="mt-3 text-sm md:text-base text-white/70">
          From fine-line to traditional, see real pieces crafted with attention to detail.
        </p>

        <Link
          to="/portfolio"
          className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-yellow-400 text-black font-bold px-6 py-3 md:px-8 md:py-4 hover:bg-yellow-300 transition-colors shadow-[0_10px_30px_rgba(234,179,8,0.25)]"
        >
          See My Work
          <ExternalLink size={18} />
        </Link>
      </div>
    </section>
  );
};

export default PortfolioCTA;
