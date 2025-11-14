import { ArrowRight } from 'lucide-react';
import { services } from '../data/content';

export default function Services() {
  return (
    <section id="services" className="bg-black py-24">
      <div className="max-w-[1320px] mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            SERVICES WE
            <br />
            SPECIALIZE IN
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Custom digital solutions that make your brand stand out and get more customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-black border border-white/10 p-8 hover:bg-white/[0.02] transition-all duration-200 group"
            >
              <h3 className="text-white text-xl font-medium mb-4 tracking-wide">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {service.description}
              </p>
              <a
                href={`#service-${service.slug}`}
                className="inline-flex items-center gap-2 text-white/60 text-xs tracking-wide hover:text-white transition-colors duration-200 group-hover:translate-x-1 transition-transform"
              >
                Explore service
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
