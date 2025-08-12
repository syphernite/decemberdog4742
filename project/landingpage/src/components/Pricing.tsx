// src/components/Pricing.tsx
import React from "react";
import { Check, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { GlowArea, GlowCard } from "./Glow";

const plans = [
  {
    name: "Basic",
    price: "$350 One-time",
    features: ["1-Page Website", "Mobile-Responsive", "Contact Form", "Basic SEO"],
  },
  {
    name: "Pro",
    price: "$600 One-time",
    features: ["Up to 5 Pages", "Google Maps + Socials", "Photo Gallery", "Custom Domain Setup"],
  },
  {
    name: "Business",
    price: "$129/mo",
    popular: true,
    features: ["Unlimited Edits", "Hosting + Domain", "Monthly Reports", "Priority Support"],
  },
  {
    name: "Business Pro",
    price: "$199/mo",
    features: ["Advanced Integrations", "2x Monthly Strategy Calls", "Same-Day Edits", "VIP Support"],
  },
  {
    name: "Custom",
    price: "Quote Only",
    features: ["Fully Custom Design", "Menu / Store Integration", "Dedicated Manager"],
  },
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-transparent">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Pricing Plans</h2>
          <Link
            to="/pricing"
            className="inline-block mt-3 px-5 py-2 rounded-lg bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-500 transition-colors"
          >
            View Full Pricing →
          </Link>
        </div>

        <GlowArea className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-6">
          {plans.map((p) => (
            <GlowCard key={p.name} className={`p-8 ${p.popular ? "ring-1 ring-emerald-400/50" : ""}`}>
              {p.popular && (
                <div className="flex items-center justify-center -mt-2 mb-4">
                  <span className="inline-flex items-center gap-2 px-2 py-1 rounded-full text-emerald-300 bg-emerald-500/10 text-xs border border-emerald-400/30">
                    <Star className="h-3.5 w-3.5" /> Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold text-white mb-1">{p.name}</h3>
              <div className="text-sky-400 text-2xl font-semibold mb-5">{p.price}</div>

              <ul className="space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="text-slate-200 flex items-start">
                    <Check className="h-5 w-5 text-emerald-400 mt-0.5 mr-3 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </GlowCard>
          ))}
        </GlowArea>

        {/* Optional mini add-ons (no table) */}
        <div className="text-center mt-10">
          <p className="text-slate-300/90">
            Add-ons available: Extra Page ($50), Logo Design ($75), Hosting-only ($25/mo), Rush (48h) +$100
          </p>
          <Link
            to="/contact"
            className="mt-3 inline-block text-emerald-300 hover:text-emerald-200 font-semibold transition-colors"
          >
            Need something custom? Let’s talk →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
