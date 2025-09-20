import React from "react";

type Demo = {
  category: string;
  name: string;
  headline: string;
  sub: string;
  primary: string;
  secondary?: string;
  accent: "emerald" | "sky" | "violet" | "rose";
};

export default function DemoCard(d: Demo) {
  const accentBar =
    d.accent === "emerald" ? "accent-emerald" :
    d.accent === "sky" ? "accent-sky" :
    d.accent === "violet" ? "accent-violet" :
    "accent-rose";

  return (
    <div className="card p-3">
      <div className="flex items-center justify-between px-1 pb-2">
        <div className="text-xs font-medium text-neutral-600">{d.category}</div>
        <div className="badges">
          <span className="badge">Mobile-first</span>
          <span className="badge">No stock images</span>
        </div>
      </div>

      <div className="phone">
        <div className="phone-notch" />
        <div className="phone-screen">
          <div className={`demo-header ${accentBar}`}>
            <span>{d.name}</span>
            <span className="opacity-90">• • •</span>
          </div>

          <div className="p-4 space-y-2">
            <h3 className="h-title">{d.headline}</h3>
            <p className="h-sub">{d.sub}</p>

            <div className="mt-3 flex gap-2">
              <button className="btn btn-gray">{d.primary}</button>
              {d.secondary && <button className="btn btn-ghost">{d.secondary}</button>}
            </div>
          </div>

          <div className="px-4 py-3 border-t border-neutral-200 bg-neutral-50 text-[11px] text-neutral-600">
            Clean layout. High contrast under glare. Gray-first palette.
          </div>
        </div>
      </div>

      <div className="pt-2 flex items-center justify-between">
        <div className="text-[11px] text-neutral-500">Open demo • Generic</div>
        <button className="text-[11px] font-semibold text-neutral-800 underline underline-offset-2">
          Start a project →
        </button>
      </div>
    </div>
  );
}
