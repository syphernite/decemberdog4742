// src/components/LiveSpecials.tsx
import React from "react";

type Special = {
  title: string;
  subtitle?: string;
  when?: string;
  desc?: string;
  img?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

const specials: Special[] = [
  {
    title: "Acoustic Night",
    subtitle: "Local Artists",
    when: "Fridays • 7–10 PM",
    desc: "Laid-back sets, classic covers, and tavern vibes.",
    img: "https://images.pexels.com/photos/164745/pexels-photo-164745.jpeg?auto=compress&cs=tinysrgb&w=1280",
    ctaLabel: "Details",
    ctaHref: "/events"
  },
  {
    title: "Trivia + Prizes",
    subtitle: "Teams up to 6",
    when: "Wednesdays • 7 PM",
    desc: "Five rounds. Gift cards and swag for winners.",
    img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1280",
    ctaLabel: "Sign Up",
    ctaHref: "/events"
  },
  {
    title: "Wing Night",
    subtitle: "House Sauces",
    when: "Tuesdays • 5–9 PM",
    desc: "$0.75 wings with drink purchase. Dine-in only.",
    img: "https://images.pexels.com/photos/4109112/pexels-photo-4109112.jpeg?auto=compress&cs=tinysrgb&w=1280",
    ctaLabel: "See Specials",
    ctaHref: "/specials"
  }
];

export default function LiveSpecials() {
  return (
    <section className="relative py-14">
      {/* Stylized title (mirrors “Menu” header style) */}
      <div className="relative mx-auto max-w-3xl">
        <div className="pointer-events-none absolute inset-0 -z-10 blur-3xl opacity-30">
          <div className="mx-auto h-24 w-3/4 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(185,28,28,0.25),rgba(17,24,39,0))]" />
        </div>
        <h2 className="text-center text-4xl md:text-5xl font-extrabold tracking-wide">
          <span className="relative inline-block">
            <span className="absolute -inset-1 rounded-lg bg-red-900/20 blur-sm" />
            <span className="relative bg-gradient-to-b from-red-200 via-red-100 to-gray-200 bg-clip-text text-transparent drop-shadow">
              LIVE EVENTS &amp; SPECIALS
            </span>
          </span>
        </h2>
        <div className="mt-3 flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-white/15" />
          <span className="text-xs uppercase tracking-[0.25em] text-white/50">Happenings</span>
          <span className="h-px w-12 bg-white/15" />
        </div>
      </div>

      {/* Cards */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {specials.map((s) => (
          <article
            key={s.title}
            className={[
              // dark transparent glass
              "group relative overflow-hidden rounded-2xl border border-white/10",
              "bg-neutral-900/45 backdrop-blur-md",
              // subtle glow ring
              "ring-1 ring-red-800/20",
              // subtle float animation
              "animate-float-slow will-change-transform",
              // soft hover lift
              "transition-transform duration-300 hover:-translate-y-1"
            ].join(" ")}
          >
            {s.img && (
              <div className="h-36 w-full">
                <img
                  src={s.img}
                  alt={s.title}
                  className="h-full w-full object-cover opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                  loading="lazy"
                />
              </div>
            )}
            <div className="p-5">
              <div className="flex items-baseline gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <h3 className="text-lg font-semibold text-red-200">{s.title}</h3>
              </div>
              {s.subtitle && <p className="mt-1 text-sm text-white/70">{s.subtitle}</p>}
              {s.when && <p className="mt-1 text-[13px] text-white/60 tabular-nums">{s.when}</p>}
              {s.desc && <p className="mt-3 text-[13px] leading-snug text-white/70">{s.desc}</p>}

              {s.ctaHref && s.ctaLabel && (
                <div className="mt-4">
                  <a
                    href={s.ctaHref}
                    className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/80 backdrop-blur-sm transition-colors hover:bg-white/10"
                  >
                    {s.ctaLabel}
                    <svg width="16" height="16" viewBox="0 0 24 24" className="opacity-80">
                      <path fill="currentColor" d="M13 5l7 7-7 7v-4H4v-6h9V5z" />
                    </svg>
                  </a>
                </div>
              )}
            </div>

            {/* faint edge highlight */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5" />
            <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-b from-white/5 via-transparent to-transparent opacity-5" />
          </article>
        ))}
      </div>

      {/* Local keyframes for subtle float */}
      <style>{`
        @keyframes float-slow {
          0%   { transform: translateY(0px); }
          50%  { transform: translateY(-4px); }
          100% { transform: translateY(0px); }
        }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
