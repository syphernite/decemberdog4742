// src/components/Header.tsx
import React, { useEffect, useState } from "react";
import logo from "../assets/tavern.png";

const SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRHgAkbYaPZxYRk64At8SGv7bJNHDNqKhrFOiCzEOTtcTSlMlS48ofyVS4ZZiAIlrE2JtKMDAgIVAxH/pub?gid=0&single=true&output=csv";

type Row = { message?: string; start?: string; end?: string };

function parseCSV(text: string): Row[] {
  const lines = text.split(/\r?\n/).filter(Boolean);
  if (!lines.length) return [];
  const headers = lines[0]
    .split(/,(?=(?:[^"]*"[^"]*")*[^"]*$)/)
    .map((h) => h.replace(/^"|"$/g, "").trim().toLowerCase());
  return lines.slice(1).map((line) => {
    const cols = line
      .split(/,(?=(?:[^"]*"[^"]*")*[^"]*$)/)
      .map((c) => c.replace(/^"|"$/g, "").trim());
    const r: Row = {};
    headers.forEach((h, i) => {
      const v = cols[i] ?? "";
      if (["message", "msg", "text"].includes(h)) r.message = v;
      else if (["start", "from", "begin"].includes(h)) r.start = v;
      else if (["end", "until", "thru", "through"].includes(h)) r.end = v;
    });
    return r;
  });
}

function inWindow(now: Date, start?: string, end?: string): boolean {
  const s = start ? new Date(start) : null;
  const e = end ? new Date(end) : null;
  if (s && isNaN(+s)) return false;
  if (e && isNaN(+e)) return false;
  if (s && now < s) return false;
  if (e && now > e) return false;
  return true;
}

export default function Header() {
  const [elevated, setElevated] = useState(false);
  const [announcement, setAnnouncement] = useState<string | null>(null);

  const HEADER_BG = "#2a2a2a";

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const res = await fetch(SHEET_CSV_URL, { cache: "no-store" });
        if (!res.ok) throw new Error();
        const rows = parseCSV(await res.text()).filter((r) => r.message && r.message.trim());
        const now = new Date();
        const active = rows.find((r) => inWindow(now, r.start, r.end));
        if (!cancelled) setAnnouncement(active?.message ?? rows[0]?.message ?? null);
      } catch {
        /* no-op */
      }
    }
    load();
    const id = setInterval(load, 600_000);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, []);

  const barText = announcement || "Tonight: Live music at 8 PM • Kitchen open late";

  return (
    <>
      {/* Announcement */}
      <div
        className="text-sm"
        style={{
          backgroundColor: HEADER_BG,
          color: "#c9c9c9",
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "6px 6px",
        }}
      >
        <div className="container-pad h-9 flex items-center justify-between">
          <div className="truncate pr-4">{barText}</div>
          <a
            href="https://www.facebook.com/TimeOutTavernNC/"
            target="_blank"
            rel="noreferrer"
            className="link-underline text-[13px] shrink-0"
          >
            Follow on Facebook
          </a>
        </div>
      </div>

      {/* Header */}
      <header
        className={`sticky top-0 z-50 ${elevated ? "shadow-lg" : ""}`}
        style={{
          backgroundColor: HEADER_BG,
          color: "#fff",
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "8px 8px",
        }}
      >
        <div className="container-pad h-24 flex items-center justify-between font-['Bebas_Neue',sans-serif]">
          {/* bigger logo */}
          <a href="/" className="flex items-center">
            <img
              src={logo}
              alt="TimeOut Tavern"
              className="h-20 w-auto object-contain"
            />
          </a>

          {/* nav with liquid glass buttons */}
          <div className="hidden md:flex items-center gap-4">
            {[
              { href: "#events", label: "🎵 Events" },
              { href: "#menu", label: "🍔 Menu" },
              { href: "#visit", label: "📍 Visit" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-5 py-2 text-sm rounded-full relative overflow-hidden text-white font-semibold
                  border border-white/20 backdrop-blur-lg bg-white/10
                  before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-white/30 before:via-white/20 before:to-white/30
                  before:blur before:animate-[liquid_4s_infinite]
                  hover:before:translate-x-0 hover:scale-105 transition-all"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* downward triangles */}
        <svg
          viewBox="0 0 100 10"
          preserveAspectRatio="none"
          style={{ display: "block", width: "100%", height: "14px" }}
        >
          <polygon
            points="0,0 5,10 10,0 15,10 20,0 25,10 30,0 35,10 40,0 45,10 50,0 55,10 60,0 65,10 70,0 75,10 80,0 85,10 90,0 95,10 100,0"
            fill={HEADER_BG}
          />
        </svg>
      </header>

      {/* keyframes for liquid shimmer */}
      <style>{`
        @keyframes liquid {
          0% {transform: translateX(-100%);}
          50% {transform: translateX(0%);}
          100% {transform: translateX(100%);}
        }
      `}</style>
    </>
  );
}
