import React from "react";
import { Clock, Smartphone, Headphones, Shield } from "lucide-react";
import { GlowArea, GlowCard } from "../components/Glow";

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: Clock,
      title: "Fast Turnaround",
      description:
        "Most projects completed within 7–14 days. We respect your timeline and deliver on our promises.",
    },
    {
      icon: Smartphone,
      title: "Mobile-Optimized",
      description:
        "Every website is built mobile-first, ensuring perfect performance across all devices and screen sizes.",
    },
    {
      icon: Headphones,
      title: "Real Support",
      description:
        "Direct access to your developer. No chatbots or outsourced support – just genuine, helpful assistance.",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description:
        "Built with modern security practices and hosted on reliable infrastructure for peace of mind.",
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-transparent">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Why Choose Built4You?
          </h2>
          <p className="text-xl text-slate-200/90 max-w-3xl mx-auto">
            We're not just another web agency. We're your dedicated partner in
            building a strong online presence.
          </p>
        </div>

        {/* Glow scope + cards */}
        <GlowArea glowColor="132,0,255">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {features.map((f) => (
              <GlowCard key={f.title} className="p-8">
                <div className="flex items-center justify-center mb-6">
                  <div className="p-3 bg-emerald-100/15 rounded-lg">
                    <f.icon className="h-8 w-8 text-emerald-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center">
                  {f.title}
                </h3>
                <p className="text-slate-200/90 text-center leading-relaxed">
                  {f.description}
                </p>
              </GlowCard>
            ))}
          </div>
        </GlowArea>
      </div>
    </section>
  );
};

export default WhyChooseUs;
