import React from "react";
import Pricing from "../components/Pricing";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white">
      <div className="max-w-7xl mx-auto py-20 px-4">
        <h1 className="text-4xl font-bold text-center mb-12">BUILT4YOU Pricing</h1>
        <Pricing />
      </div>
    </main>
  );
}
