// src/components/WalkthroughModal.tsx
import React from "react";
import { X, ExternalLink, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useWalkthrough } from "../context/Walkthrough";

export default function WalkthroughModal() {
  const { isOpen, close } = useWalkthrough();
  const navigate = useNavigate();
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm" onClick={close} role="dialog" aria-modal="true">
      <div className="mx-4 w-full max-w-3xl rounded-2xl bg-neutral-900 border border-white/10 shadow-xl" onClick={(e) => e.stopPropagation()}>
        <div className="p-5">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-2xl font-bold text-white">How Built4You works</h2>
            <button onClick={close} aria-label="Close" className="p-2 rounded-lg hover:bg-white/10">
              <X className="h-5 w-5 text-slate-200" />
            </button>
          </div>

          <p className="mt-2 text-slate-300">
            Fast, custom sites for small businesses. Transparent pricing. Free mockups, no payment until you're satisfied.
          </p>

          <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="text-lg font-semibold text-white">1. Check out our pricing</div>
              <p className="mt-1 text-sm text-slate-300">We charge 50% less than the industry standard.</p>
              <button
                onClick={() => { close(); navigate("/pricing"); }}
                className="mt-2 inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-3 py-2 text-white hover:bg-emerald-500"
              >
                View pricing <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="text-lg font-semibold text-white">2. See mockups</div>
              <p className="mt-1 text-sm text-slate-300">Explore examples of our work.</p>
              <button
                onClick={() => { close(); navigate("/demos"); }}
                className="mt-2 inline-flex items-center gap-2 rounded-lg border border-white/15 px-3 py-2 text-white hover:bg-white/10"
              >
                Demo showcase <ExternalLink className="h-4 w-4" />
              </button>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="text-lg font-semibold text-white">3. Get started</div>
              <p className="mt-1 text-sm text-slate-300">Tell us about your business. Submit the form for a free demo.</p>
              <button
                onClick={() => { close(); navigate("/contact"); }}
                className="mt-2 inline-flex items-center gap-2 rounded-lg bg-sky-600 px-3 py-2 text-white hover:bg-sky-500"
              >
                Contact form <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
