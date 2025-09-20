import React from "react";
import { Link } from "react-router-dom";

type Props = {
  theme: "gray" | "mint" | "sky" | "lavender" | "peach";
  title: string;
  lead: string;
  bullets: string[];
  primaryLabel: string;
  secondaryLabel?: string;
  contactHref?: string;
};

const themeButton = {
  gray: "btn btn-slate",
  mint: "btn btn-mint",
  sky: "btn btn-sky",
  lavender: "btn btn-lav",
  peach: "btn btn-peach"
} as const;

const themeAccent = {
  gray: "from-neutral-200 to-neutral-300",
  mint: "from-emerald-200 to-emerald-300",
  sky: "from-sky-200 to-sky-300",
  lavender: "from-violet-200 to-violet-300",
  peach: "from-rose-200 to-rose-300"
} as const;

export default function CTAFrame(props: Props) {
  const { theme, title, lead, bullets, primaryLabel, secondaryLabel, contactHref } = props;

  return (
    <main className="section">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        <section className="card bg-card">
          <h1 className="title">{title}</h1>
          <p className="lead mt-3">{lead}</p>

          <ul className="mt-6 space-y-2">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className={`h-2 w-2 rounded-full bg-gradient-to-br ${themeAccent[theme]} shrink-0 mt-2`} />
                <span className="text-neutral-700">{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            {contactHref ? (
              <a href={contactHref} className={themeButton[theme]} rel="noopener noreferrer">
                {primaryLabel}
              </a>
            ) : (
              <Link to="/mint" className={themeButton[theme]}>
                {primaryLabel}
              </Link>
            )}
            {secondaryLabel && (
              <Link to="/sky" className="btn bg-white border border-neutral-300 text-neutral-800 hover:bg-neutral-100">
                {secondaryLabel}
              </Link>
            )}
          </div>

          <p className="mt-4 text-xs text-neutral-500">
            Optimized for outdoor viewing. Pastel surfaces and vivid buttons show under glare.
          </p>
        </section>

        <aside className="card flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold">Need a different vibe?</h2>
            <p className="text-neutral-600 mt-2">
              Pick another colorway that fits the ad creative or venue lighting.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-4">
              <Link to="/" className="navlink text-center border border-neutral-200">Gray</Link>
              <Link to="/mint" className="navlink text-center border border-neutral-200">Mint</Link>
              <Link to="/sky" className="navlink text-center border border-neutral-200">Sky</Link>
              <Link to="/lavender" className="navlink text-center border border-neutral-200">Lavender</Link>
              <Link to="/peach" className="navlink text-center border border-neutral-200">Peach</Link>
            </div>
          </div>

          <div className="mt-6">
            <div className={`w-full h-24 rounded-xl border border-neutral-200 bg-gradient-to-tr ${themeAccent[theme]} shadow-soft`} />
            <p className="text-xs text-neutral-500 mt-2">
              Preview of accent gradient used for bullets and subtle cues.
            </p>
          </div>
        </aside>
      </div>

      <section className="grid-cards mt-6">
        <div className="card">
          <h3 className="font-semibold">Fast setup</h3>
          <p className="text-neutral-600 mt-1">Launch in hours, not weeks.</p>
        </div>
        <div className="card">
          <h3 className="font-semibold">Any industry</h3>
          <p className="text-neutral-600 mt-1">Local service, retail, creator, or pro.</p>
        </div>
        <div className="card">
          <h3 className="font-semibold">Clear CTA</h3>
          <p className="text-neutral-600 mt-1">One message, one outcome, no clutter.</p>
        </div>
        <div className="card">
          <h3 className="font-semibold">Glare-safe</h3>
          <p className="text-neutral-600 mt-1">Readable on phones outdoors.</p>
        </div>
      </section>
    </main>
  );
}
