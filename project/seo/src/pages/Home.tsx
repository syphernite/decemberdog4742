// src/pages/Home.tsx
import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Partnership from "../components/Partnership";
import { tokens } from "../styles/tokens";
import CrazyCTA from "../components/CrazyCTA";

const plan = {
  name: "Full Access",
  price: "$32.99",
  period: "per month",
  highlights: ["Instant SEO audit", "Access to all tools", "Email support", "Cancel anytime"],
  cta: { href: "/contact", label: "Start now" },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />

      <section id="pricing" className={tokens.section}>
        <div className={tokens.container}>
          <h2 className={tokens.heading.h2}>Get access for just $32.99/month</h2>
          <p className={`${tokens.text.muted} mt-2`}>Simple, flat pricing. No hidden fees.</p>

          <div className="mt-10 grid gap-6 sm:grid-cols-1 lg:grid-cols-1">
            <div className={tokens.card}>
              <h3 className={tokens.heading.h3}>{plan.name}</h3>
              <p className="text-3xl font-semibold">{plan.price}</p>
              <p className={tokens.text.muted}>{plan.period}</p>
              <ul className="mt-4 space-y-2">
                {plan.highlights.map((h) => (
                  <li key={h} className={tokens.text.body}>
                    • {h}
                  </li>
                ))}
              </ul>

              {/* Hide CTA on mobile; desktop shows the big animated button */}
              <div className="mt-8 hidden md:block">
                <CrazyCTA to={plan.cta.href} label={plan.cta.label} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Partnership />
    </main>
  );
}
