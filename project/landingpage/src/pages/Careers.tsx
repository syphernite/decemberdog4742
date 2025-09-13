import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

type ModalState =
  | { open: false }
  | { open: true; title: string; url: string; height?: number };

export default function Careers() {
  const [modal, setModal] = useState<ModalState>({ open: false });

  // --- Google Form embeds (applications + skills checks) ---
  const GOOGLE_FORM_SALES =
    "https://docs.google.com/forms/d/e/1FAIpQLSeF13qog72tavwJXw6yeBogVCgQWpHSBDUbL1a_CsLgU0TaxA/viewform?embedded=true"; // height: 3128
  const GOOGLE_FORM_DESIGN =
    "https://docs.google.com/forms/d/e/1FAIpQLSe8HiwRx1t9Ikr-TJTcBtgMVx1-gA8dUs4rxQyREMxaNm1_wQ/viewform?embedded=true"; // height: 3062
  const GOOGLE_FORM_SKILLS_SALES =
    "https://docs.google.com/forms/d/e/1FAIpQLSfsgBsEao8tH9Y0aU63ej9UWBLgKGJMPqPPl_Rpd4rLJEMgcw/viewform?embedded=true"; // height: 1440
  const GOOGLE_FORM_SKILLS_DESIGN =
    "https://docs.google.com/forms/d/e/1FAIpQLSf2ioVLlF-8C2goLNJiE4kat0fr8HqcZ20Ei6tygr3BJVLhsA/viewform?embedded=true"; // height: 1484

  return (
    <main className="relative min-h-[92svh] bg-black text-white">
      <Helmet>
        <title>Careers — Built4You</title>
        <meta
          name="description"
          content="Join the Built4You contractor network. Earn 25–50% commission. Sales and Web Design roles with quick skills checks."
        />
        <link rel="canonical" href="https://built4you.org/careers" />
      </Helmet>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-900/30 via-black to-black" />
        <div className="max-w-6xl mx-auto px-6 py-20 relative">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Join the Built4You Contractor Network
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
              Earn <span className="font-semibold text-violet-300">25–50% commission</span> per deal. Choose your path. Prove your skills. Start fast.
            </p>

            <div className="inline-flex items-center gap-3 rounded-2xl bg-white/5 ring-1 ring-white/10 px-5 py-3">
              <span className="text-white/80">Commission bands</span>
              <span className="px-3 py-1 rounded-full bg-violet-600/20 text-violet-300 text-sm">
                25% starter
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-600/20 text-emerald-300 text-sm">
                35% proven
              </span>
              <span className="px-3 py-1 rounded-full bg-amber-600/20 text-amber-300 text-sm">
                50% closer
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Paths */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Sales Card */}
          <article className="group bg-white/5 rounded-3xl p-8 ring-1 ring-white/10 hover:ring-violet-500/40 transition">
            <header className="mb-6">
              <h2 className="text-2xl font-semibold">Sales Contractor</h2>
              <p className="text-white/70 mt-2">
                Prospect, qualify, and close local small businesses. We provide assets, demos, and a simple playbook.
              </p>
            </header>

            <ul className="grid gap-2 text-white/80 mb-8">
              <li>• Use our lead lists or source your own</li>
              <li>• Book calls and aim to close same-week</li>
              <li>• Hand off signed clients to fulfillment</li>
            </ul>

            <div className="flex flex-wrap gap-3">
              <button
                className="rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold hover:bg-violet-500"
                onClick={() =>
                  setModal({
                    open: true,
                    title: "Sales Application",
                    url: GOOGLE_FORM_SALES,
                    height: 3128,
                  })
                }
              >
                Start Application
              </button>
              <button
                className="rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold hover:bg-white/20"
                onClick={() =>
                  setModal({
                    open: true,
                    title: "Sales Skills Check",
                    url: GOOGLE_FORM_SKILLS_SALES,
                    height: 1440,
                  })
                }
              >
                Quick Skills Check
              </button>
            </div>

            <footer className="mt-6 text-xs text-white/60">
              Skills check includes a short cold pitch, objection handling, and next-step framing.
            </footer>
          </article>

          {/* Design Card */}
          <article className="group bg-white/5 rounded-3xl p-8 ring-1 ring-white/10 hover:ring-emerald-500/40 transition">
            <header className="mb-6">
              <h2 className="text-2xl font-semibold">Web Design Contractor</h2>
              <p className="text-white/70 mt-2">
                Build fast sites with React + Vite + Tailwind. Follow our components and Pages deploy workflow.
              </p>
            </header>

            <ul className="grid gap-2 text-white/80 mb-8">
              <li>• Convert briefs into polished demos</li>
              <li>• Use our GitHub Pages matrix deploy</li>
              <li>• Mobile-first, accessible, and performant</li>
            </ul>

            <div className="flex flex-wrap gap-3">
              <button
                className="rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold hover:bg-emerald-500"
                onClick={() =>
                  setModal({
                    open: true,
                    title: "Designer Application",
                    url: GOOGLE_FORM_DESIGN,
                    height: 3062,
                  })
                }
              >
                Start Application
              </button>
              <button
                className="rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold hover:bg-white/20"
                onClick={() =>
                  setModal({
                    open: true,
                    title: "Designer Skills Check",
                    url: GOOGLE_FORM_SKILLS_DESIGN,
                    height: 1484,
                  })
                }
              >
                Quick Skills Check
              </button>
            </div>

            <footer className="mt-6 text-xs text-white/60">
              Skills check includes UX critique from a screenshot, a small Tailwind layout, and basic accessibility.
            </footer>
          </article>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/5 rounded-2xl p-6 ring-1 ring-white/10">
            <h3 className="font-semibold mb-2">1) Apply</h3>
            <p className="text-white/70 text-sm">Submit your info. Add portfolio links or call recordings if available.</p>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 ring-1 ring-white/10">
            <h3 className="font-semibold mb-2">2) Skills Check</h3>
            <p className="text-white/70 text-sm">Finish the short test. We assess clarity and practical thinking.</p>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 ring-1 ring-white/10">
            <h3 className="font-semibold mb-2">3) Start Earning</h3>
            <p className="text-white/70 text-sm">Get onboarded, access assets, and earn 25–50% per closed deal.</p>
          </div>
        </div>
      </section>

      {/* Modal */}
      {modal.open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full max-w-5xl rounded-2xl bg-zinc-900 ring-1 ring-white/10 overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
              <h4 className="font-semibold">{modal.title}</h4>
              <button
                className="rounded-md bg-white/10 px-3 py-1.5 text-sm hover:bg-white/20"
                onClick={() => setModal({ open: false })}
              >
                Close
              </button>
            </div>

            <div className="p-0">
              <iframe
                title={modal.title}
                src={modal.url}
                className="w-full"
                style={{ height: `${modal.height ?? 1200}px` }}
              />
            </div>

            <div className="px-5 py-4 border-t border-white/10 text-xs text-white/60">
              Having trouble with the embed?{" "}
              <a
                href={modal.url.replace("?embedded=true", "")}
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-white"
              >
                Open in a new tab
              </a>
              .
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
