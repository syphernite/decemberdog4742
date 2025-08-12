import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Check, Star } from "lucide-react";

const plans = [
  { name: "Basic", price: "$350 One-time", duration: "", features: ["1-Page Website", "Mobile-Responsive", "Contact Form", "Basic SEO"], popular: false },
  { name: "Pro", price: "$600 One-time", duration: "", features: ["Up to 5 Pages", "Google Maps + Socials", "Photo Gallery", "Custom Domain Setup"], popular: false },
  { name: "Business", price: "$129", duration: "/mo", features: ["Unlimited Edits", "Hosting + Domain", "Monthly Reports", "Priority Support"], popular: true },
  { name: "Business Pro", price: "$199", duration: "/mo", features: ["Advanced Integrations", "2x Monthly Strategy Calls", "Same-Day Edits", "VIP Support"], popular: false },
  { name: "Custom", price: "Quote Only", duration: "", features: ["Fully Custom Design", "Menu / Store Integration", "Dedicated Manager"], popular: false },
];

const addons = [
  { name: "Extra Page", price: "$50 per page" },
  { name: "Logo Design", price: "$75 one-time" },
  { name: "Hosting Only (Custom Server)", price: "$30/mo" },
  { name: "Rush Delivery (48 hrs)", price: "+$100" },
];

// Smooth-scroll to #hash like #basic, #pro
const ScrollToHash: React.FC = () => {
  const location = useLocation();
  useEffect(() => {
    if (!location.hash) return;
    const el = document.getElementById(location.hash.slice(1));
    if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 50);
  }, [location]);
  return null;
};

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-transparent">
      <ScrollToHash />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Glass panel wrapper */}
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 sm:p-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Pricing Plans</h2>
            <Link
              to="/pricing"
              className="inline-block mt-2 px-5 py-2 rounded-lg bg-emerald-500/90 text-white text-sm font-medium hover:bg-emerald-500 transition-colors"
            >
              View Full Pricing →
            </Link>
          </div>

          {/* Plans */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-stretch">
            {plans.map((plan) => {
              const id = plan.name.toLowerCase().replace(/\s/g, "");
              const ring =
                plan.popular ? "ring-2 ring-emerald-400" : plan.name === "Business Pro" ? "ring-2 ring-sky-400" : "ring-0";
              return (
                <div
                  id={id}
                  key={id}
                  className={`relative flex flex-col rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${ring}`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-0 right-0 rounded-t-2xl bg-gradient-to-r from-emerald-500 to-sky-500 text-white text-center py-1.5 text-xs font-semibold">
                      <Star className="inline h-4 w-4 mr-1" />
                      Most Popular
                    </div>
                  )}

                  <div className={`flex flex-col h-full ${plan.popular ? "pt-12" : "pt-6"} pb-6 px-6`}>
                    <div className="mb-5">
                      <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                      <div>
                        <span className={`text-2xl font-bold ${plan.name === "Custom" ? "text-emerald-300" : "text-sky-300"}`}>
                          {plan.price}
                        </span>
                        {plan.duration && <span className="text-slate-300 ml-1">{plan.duration}</span>}
                      </div>
                    </div>

                    <div className="flex-grow">
                      <ul className="space-y-3">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <Check className="h-5 w-5 text-emerald-400 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-slate-200 leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Add-ons */}
          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold text-white mb-3">Optional Add-Ons</h3>

            <div className="max-w-2xl mx-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-white/5">
                  <tr>
                    <th className="py-3 pl-4 pr-3 text-slate-300 text-sm">Add-On</th>
                    <th className="py-3 px-3 text-slate-300 text-sm">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {addons.map((addon, i) => (
                    <tr key={i} className="border-t border-white/10">
                      <td className="py-3 pl-4 pr-3 text-slate-100">{addon.name}</td>
                      <td className="py-3 px-3 text-slate-100">{addon.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-slate-300 mt-6">All plans include free consultations and revisions during development.</p>

            <Link
              to="/contact"
              className="inline-block mt-3 text-emerald-300 hover:text-emerald-200 font-semibold transition-colors"
            >
              Need something custom? Let’s talk →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
