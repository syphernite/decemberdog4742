import React from "react";
import { Link } from "react-router-dom";

export default function Cover() {
  return (
    <div className="min-h-screen w-full bg-[#0b1220] text-white overflow-hidden flex items-center justify-center">
      <div className="relative w-full max-w-3xl px-6">
        <div className="absolute -inset-8 bg-gradient-to-b from-cyan-500/10 to-fuchsia-500/10 blur-3xl rounded-3xl" />
        <div className="relative rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur-md p-10 text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">BST</h1>
          <p className="text-lg text-white/70">One brand. Three experiences.</p>

          <Link
            to="/select"
            className="mx-auto inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-semibold
                       bg-gradient-to-r from-cyan-500 to-fuchsia-500
                       hover:from-cyan-400 hover:to-fuchsia-400
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400
                       transition-transform active:scale-95"
          >
            Enter
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="opacity-90">
              <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

          <p className="text-xs text-white/50">Continue to choose Barber • Sneakers • Clothing</p>
        </div>
      </div>
    </div>
  );
}
