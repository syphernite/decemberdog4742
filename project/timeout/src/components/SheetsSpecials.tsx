// src/components/Header.tsx
import React, { useEffect, useMemo, useState } from "react";
import logo from "../assets/tavern.png";

/* -------------------------- HOURS (Eastern Time) -------------------------- */
const HOURS: { [k: number]: { open: string | null; close: string | null } } = {
  0: { open: "11:00", close: "00:00" },
  1: { open: "11:00", close: "00:00" },
  2: { open: "11:00", close: "00:00" },
  3: { open: "11:00", close: "00:00" },
  4: { open: "11:00", close: "02:00" },
  5: { open: "11:00", close: "02:00" },
  6: { open: "11:00", close: "02:00" },
};
const TZ = "America/New_York";

function toMin(str: string) {
  const [h, m] = str.split(":").map(Number);
  return h * 60 + m;
}
function getDebugOverride(): { mins?: number; dow?: number } {
  try {
    const sp = new URLSearchParams(window.location.search);
    const dn = sp.get("debug_now");
    const dd = sp.get("debug_dow");
    const out: { mins?: number; dow?: number } = {};
    if (dn && /^\d{1,2}:\d{2}$/.test(dn)) {
      const [h, m] = dn.split(":").map(Number);
      out.mins = h * 60 + m;
    }
    if (dd && /^\d$/.test(dd)) out.dow = Number(dd);
    return out;
  } catch {
    return {};
  }
}
function nowInET() {
  const debug = getDebugOverride();
  if (debug.mins != null && debug.dow != null) return { mins: debug.mins, dow: debug.dow };
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: TZ,
    hour12: false,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).formatToParts(new Date());
  const h = Number(parts.find((p) => p.type === "hour")?.value || "0");
  const m = Number(parts.find((p) => p.type === "minute")?.value || "0");
  const wd = new Intl.DateTimeFormat("en-US", { timeZone: TZ, weekday: "short" }).format(new Date());
  const map: any = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
  return { mins: h * 60 + m, dow: map[wd] as number };
}

type Status =
  | { kind: "open"; minutesToClose: number }
  | { kind: "closingSoon"; minutesToClose: number }
  | { kind: "closed"; minutesToOpen?: number }
  | { kind: "openingSoon"; minutesToOpen: number };

function computeStatus(): Status {
  const { mins, dow } = nowInET();
  const today = HOURS[dow] || { open: null, close: null };
  const yDow = (dow + 6) % 7;
  const y = HOURS[yDow] || { open: null, close: null };

  const intervals: Array<{ start: number; end: number }> = [];
  if (today.open && today.close) {
    const o = toMin(today.open);
    const c = toMin(today.close);
    if (c > o) intervals.push({ start: o, end: c });
    else {
      intervals.push({ start: 0, end: c });
      intervals.push({ start: o, end: 24 * 60 });
    }
  }
  if (y.open && y.close) {
    const yo = toMin(y.open);
    const yc = toMin(y.close);
    if (yc <= yo && yc > 0) intervals.push({ start: 0, end: yc });
  }

  intervals.sort((a, b) => a.start - b.start);
  const merged: typeof intervals = [];
  for (const iv of intervals) {
    if (!merged.length || iv.start > merged[merged.length - 1].end) merged.push({ ...iv });
    else merged[merged.length - 1].end = Math.max(merged[merged.length - 1].end, iv.end);
  }

  for (const iv of merged) {
    if (mins >= iv.start && mins < iv.end) {
      const minutesToClose = iv.end - mins;
      if (minutesToClose <= 60) return { kind: "closingSoon", minutesToClose };
      return { kind: "open", minutesToClose };
    }
  }

  let nextOpen: number | null = null;
  for (const iv of merged) {
    if (iv.start > mins) {
      nextOpen = iv.start - mins;
      break;
    }
  }
  if (nextOpen == null) {
    const tDow = (dow + 1) % 7;
    const t = HOURS[tDow] || { open: null, close: null };
    if (t.open) nextOpen = 24 * 60 - mins + toMin(t.open);
  }

  if (nextOpen != null && nextOpen <= 60) return { kind: "openingSoon", minutesToOpen: nextOpen };
  if (nextOpen != null) return { kind: "closed", minutesToOpen: nextOpen };
  return { kind: "closed" };
}

function StatusBadge() {
  const [status, setStatus] = useState<Status>(computeStatus());
  useEffect(() => {
    const id = setInterval(() => setStatus(computeStatus()), 30000);
    return () => clearInterval(id);
  }, []);

  const base = "inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-semibold animate-badgeblink";
  if (status.kind === "open")
    return <span className={`${base} bg-green-500/20 text-green-300 ring-1 ring-green-400/30`}><span className="h-2.5 w-2.5 rounded-full bg-green-400 animate-pulse" />OPEN</span>;
  if (status.kind === "closingSoon")
    return <span className={`${base} bg-yellow-500/20 text-yellow-300 ring-1 ring-yellow-400/30`}><span className="h-2.5 w-2.5 rounded-full bg-yellow-400 animate-pulse" />Closing within an hour</span>;
  if (status.kind === "openingSoon")
    return <span className={`${base} bg-yellow-500/20 text-yellow-300 ring-1 ring-yellow-400/30`}><span className="h-2.5 w-2.5 rounded-full bg-yellow-400 animate-pulse" />Opening within an hour</span>;
  return <span className={`${base} bg-red-500/20 text-red-300 ring-1 ring-red-400/30`}><span className="h-2.5 w-2.5 rounded-full bg-red-400" />CLOSED</span>;
}

export default function Header() {
  const [elevated, setElevated] = useState(false);
  const [open, setOpen] = useState(false);
  const HEADER_BG = "#151312";

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const items = useMemo(
    () => [
      { href: "#events", label: "🎵 Events" },
      { href: "#menu", label: "🍔 Menu" },
      { href: "#visit", label: "📍 Visit" },
    ],
    []
  );

  return (
    <>
      <header
        className={`sticky top-0 z-50 ${elevated ? "shadow-lg" : ""}`}
        style={{
          backgroundColor: HEADER_BG,
          color: "#fff",
          backgroundImage: [
            "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)",
            "linear-gradient(0deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            "linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)"
          ].join(","),
          backgroundSize: "10px 10px, 6px 6px, 6px 6px",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="container-pad h-20 md:h-24 flex items-center justify-between font-['Bebas_Neue',sans-serif]">
          {/* Left: logo */}
          <a href="/" className="flex items-center">
            <img src={logo} alt="TimeOut Tavern" className="h-16 w-auto md:h-20 object-contain" />
          </a>

          {/* Center (mobile only): status badge between logo and burger */}
          <div className="md:hidden mx-2 flex items-center">
            <div className="scale-90 origin-center">
              <StatusBadge />
            </div>
          </div>

          {/* Right: desktop nav + status; mobile burger */}
          <div className="hidden md:flex items-center gap-6">
            <div className="relative overflow-hidden rounded-full border border-white/20 bg-white/10 backdrop-blur-xl ring-1 ring-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_8px_30px_rgba(0,0,0,0.35)]">
              <ul className="flex items-center">
                {items.map((item, i) => (
                  <li key={item.href} className="relative">
                    <a
                      href={item.href}
                      className="px-6 py-2.5 text-white text-sm font-semibold block hover:bg-white/10 transition-colors"
                    >
                      {item.label}
                    </a>
                    {i < items.length - 1 && (
                      <span className="absolute right-0 top-1/2 -translate-y-1/2 h-5 w-px bg-white/20" />
                    )}
                  </li>
                ))}
              </ul>
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(120deg,transparent_30%,rgba(255,255,255,.35)_45%,rgba(255,255,255,.6)_50%,rgba(255,255,255,.35)_55%,transparent_70%)] blur-sm animate-[sheen_2.2s_infinite]" />
              <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-white/10" />
            </div>
            <StatusBadge />
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-white/20 bg-white/10 backdrop-blur active:scale-95 transition"
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-white/10">
            <nav className="container-pad pb-3 flex flex-col gap-2">
              {items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="w-full px-4 py-3 rounded-lg border border-white/15 bg-white/5 text-white font-semibold text-base active:scale-[0.99] transition"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}

        <svg viewBox="0 0 100 10" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "14px" }}>
          <polygon
            points="0,0 5,10 10,0 15,10 20,0 25,10 30,0 35,10 40,0 45,10 50,0 55,10 60,0 65,10 70,0 75,10 80,0 85,10 90,0 95,10 100,0"
            fill={HEADER_BG}
          />
        </svg>
      </header>

      <style>{`
        @keyframes sheen { 0% { transform: translateX(-120%); } 100% { transform: translateX(120%); } }
        @keyframes badgeblink { 0%, 100% { opacity: .85 } 50% { opacity: 1 } }
        .animate-badgeblink { animation: badgeblink 1.6s ease-in-out infinite; }
      `}</style>
    </>
  );
}
