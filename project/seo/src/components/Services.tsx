// src/components/Services.tsx
import React from "react";
import { BarChart3, MapPin, FileSearch } from "lucide-react";
import { tokens } from "../styles/tokens";

const items = [
  {
    icon: FileSearch,
    title: "Audit",
    desc: "Technical crawl, on-page checks, speed, indexing, and content gaps. Clear actions in 24 hours.",
  },
  {
    icon: BarChart3,
    title: "Monthly SEO",
    desc: "Execute the plan. Content, links, tech fixes. One number to watch: qualified leads.",
  },
  {
    icon: MapPin,
    title: "Local SEO",
    desc: "Maps and reviews. Citations cleaned. Rankings where it matters: near your customers, wherever they are.",
  },
];

export const Services = () => {
  return (
    <section className={tokens.section}>
      <div className={tokens.container}>
        <h2 className={tokens.heading.h2}>Simple services that compound</h2>
        <p className={`${tokens.text.muted} mt-2`}>Pick one. Upgrade later. No long contracts.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className={tokens.card}>
              <Icon className="h-6 w-6" />
              <h3 className={tokens.heading.h3}>{title}</h3>
              <p className={tokens.text.body}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
