import { processSteps } from '../data/content';

export default function Process() {
  return (
    <section id="process" className="bg-black py-24">
      <div className="max-w-[1320px] mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            How We Work
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            A proven process that delivers results every time.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-12 left-0 right-0 h-[2px] bg-white/10" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
            {processSteps.map((step, index) => (
              <div key={step.id} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full border-2 border-white/20 bg-black flex items-center justify-center mb-6 relative z-10">
                    <span className="text-white text-2xl font-bold">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-white text-lg font-medium mb-3 tracking-wide">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
