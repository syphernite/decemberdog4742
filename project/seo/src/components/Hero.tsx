// src/components/Hero.tsx
import React from "react";
import logo from "../assets/logo.svg";
import { tokens } from "../styles/tokens";

export default function Hero() {
  return (
    <section className="relative bg-neutral-900 text-white py-16">
      <img
        src={logo}
        alt="logo"
        className="pointer-events-none select-none absolute inset-0 m-auto h-64 w-64 opacity-5 blur-sm"
      />
      <div className={`${tokens.container} text-center relative`}>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          SEO support that pays for itself
        </h1>
        <p className="mt-4 text-lg text-neutral-300">
          SeoEcon makes SEO simple: quick audits, clear plans, measurable wins.
        </p>

        <form className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
          <input
            type="text"
            placeholder="yourdomain.com"
            className="w-full md:w-64 rounded-lg border border-neutral-600 bg-neutral-800 px-4 py-3 text-white placeholder-neutral-400 focus:border-emerald-500 focus:outline-none"
          />
          <input
            type="email"
            placeholder="you@email.com"
            className="w-full md:w-64 rounded-lg border border-neutral-600 bg-neutral-800 px-4 py-3 text-white placeholder-neutral-400 focus:border-emerald-500 focus:outline-none"
          />
          <button type="submit" className={tokens.button.primary}>
            Get free audit →
          </button>
        </form>

        <p className="mt-3 text-sm text-neutral-400">No spam.</p>

        <div className="mt-6 flex justify-center gap-4">
          <button className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black hover:bg-neutral-200">
            See pricing
          </button>
          <button className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black hover:bg-neutral-200">
            Talk to a specialist
          </button>
        </div>
      </div>
    </section>
  );
}
