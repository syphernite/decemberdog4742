export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-8 py-32 text-center">
        <div className="mb-4">
          <span className="text-white/60 text-xs tracking-[0.3em] uppercase font-medium">
            #1 Web & App Development Team
          </span>
        </div>

        <h1 className="text-white text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight">
          Custom high-end web
          <br />
          development that converts.
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
          We develop & design high quality, custom web platforms that are fast,
          reliable, and built to grow with your business. Full-stack apps, custom
          websites, SEO optimization, Google Business Profile management including
          verification, AI front-desk phone agents, and strategic paid media via
          trusted partner agencies.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24">
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-white text-black px-8 py-4 text-sm font-medium tracking-wide hover:bg-gray-200 transition-all duration-200 w-full sm:w-auto"
          >
            Start Project
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="border border-white text-white px-8 py-4 text-sm font-medium tracking-wide hover:bg-white hover:text-black transition-all duration-200 w-full sm:w-auto"
          >
            See Work
          </button>
        </div>

        <div className="relative overflow-hidden py-4">
          <div className="animate-marquee whitespace-nowrap">
            <span className="text-white/40 text-sm tracking-[0.2em] uppercase mx-8">
              Start your project today
            </span>
            <span className="text-white/40 text-sm tracking-[0.2em] uppercase mx-8">
              Start your project today
            </span>
            <span className="text-white/40 text-sm tracking-[0.2em] uppercase mx-8">
              Start your project today
            </span>
            <span className="text-white/40 text-sm tracking-[0.2em] uppercase mx-8">
              Start your project today
            </span>
            <span className="text-white/40 text-sm tracking-[0.2em] uppercase mx-8">
              Start your project today
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
