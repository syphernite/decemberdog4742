// src/pages/Select.tsx
import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";

const asset = (p: string) => {
  const base = (import.meta as any).env?.BASE_URL ?? "/";
  return `${base}${p}`.replace(/\/{2,}/g, "/");
};

// Page-level animation catalog (no flash)
const ANIMS = [
  "pp-anim-fade",
  "pp-anim-slide-up",
  "pp-anim-slide-right",
  "pp-anim-slide-down",
  "pp-anim-slide-left",
  "pp-anim-zoom-in",
  "pp-anim-zoom-out",
  "pp-anim-pop",
  "pp-anim-flip-x",
  "pp-anim-flip-y",
  "pp-anim-rotate-in",
  "pp-anim-blur-in",
  "pp-anim-wipe-right",
  "pp-anim-wipe-up",
  "pp-anim-split-x",
  "pp-anim-split-y",
] as const;
const pickAnim = () => ANIMS[Math.floor(Math.random() * ANIMS.length)];

export default function Select() {
  const [hovered, setHovered] = useState<number | null>(null);

  const sections = [
    { to: "/barber",   img: `url(${asset("barber.png")})`,   imgMobile: `url(${asset("barber-mobile.png")})`,   blurb: "Cuts, fades, grooming.",  label: "Get Faded" },
    { to: "/sneakers", img: `url(${asset("shoes.png")})`,    imgMobile: `url(${asset("shoes-mobile.png")})`,    blurb: "Drops, trades, heat.",   label: "Kick Game" },
    { to: "/clothing", img: `url(${asset("staks.png")})`,    imgMobile: `url(${asset("staks-mobile.png")})`,    blurb: "Fits, caps, essentials.",label: "Stay Fresh" },
  ];

  const pageAnim = useMemo(pickAnim, []);

  return (
    <div className={`relative min-h-screen w-full bg-[#0b1220] text-white overflow-hidden ${pageAnim}`}>
      {/* Scoped keyframes/classes */}
      <style>{`
        @keyframes ppFade{from{opacity:0}to{opacity:1}}
        .pp-anim-fade{animation:ppFade .45s ease-out both}
        @keyframes ppSlideUp{from{transform:translateY(24px);opacity:0}to{transform:none;opacity:1}}
        .pp-anim-slide-up{animation:ppSlideUp .5s cubic-bezier(.22,.8,.36,1) both}
        @keyframes ppSlideRight{from{transform:translateX(-24px);opacity:0}to{transform:none;opacity:1}}
        .pp-anim-slide-right{animation:ppSlideRight .5s cubic-bezier(.22,.8,.36,1) both}
        @keyframes ppSlideDown{from{transform:translateY(-24px);opacity:0}to{transform:none;opacity:1}}
        .pp-anim-slide-down{animation:ppSlideDown .5s cubic-bezier(.22,.8,.36,1) both}
        @keyframes ppSlideLeft{from{transform:translateX(24px);opacity:0}to{transform:none;opacity:1}}
        .pp-anim-slide-left{animation:ppSlideLeft .5s cubic-bezier(.22,.8,.36,1) both}
        @keyframes ppZoomIn{from{transform:scale(.96);opacity:0}to{transform:scale(1);opacity:1}}
        .pp-anim-zoom-in{animation:ppZoomIn .45s ease-out both}
        @keyframes ppZoomOut{from{transform:scale(1.06);opacity:0}to{transform:scale(1);opacity:1}}
        .pp-anim-zoom-out{animation:ppZoomOut .45s ease-out both}
        @keyframes ppPop{0%{transform:scale(.86);opacity:0}60%{transform:scale(1.04);opacity:1}100%{transform:scale(1)}}
        .pp-anim-pop{animation:ppPop .5s cubic-bezier(.2,.9,.2,1.1) both}
        @keyframes ppFlipX{from{transform:perspective(800px) rotateX(-12deg);opacity:0}to{transform:perspective(800px) rotateX(0);opacity:1}}
        .pp-anim-flip-x{animation:ppFlipX .55s ease-out both; transform-style:preserve-3d}
        @keyframes ppFlipY{from{transform:perspective(800px) rotateY(12deg);opacity:0}to{transform:perspective(800px) rotateY(0);opacity:1}}
        .pp-anim-flip-y{animation:ppFlipY .55s ease-out both; transform-style:preserve-3d}
        @keyframes ppRotateIn{from{transform:rotate(-6deg);opacity:0}to{transform:rotate(0);opacity:1}}
        .pp-anim-rotate-in{animation:ppRotateIn .45s ease-out both}
        @keyframes ppBlurIn{from{filter:blur(14px);opacity:0}to{filter:blur(0);opacity:1}}
        .pp-anim-blur-in{animation:ppBlurIn .45s ease-out both}
        @keyframes ppWipeRight{from{clip-path:inset(0 100% 0 0)}to{clip-path:inset(0 0 0 0)}}
        .pp-anim-wipe-right{animation:ppWipeRight .6s ease-out both}
        @keyframes ppWipeUp{from{clip-path:inset(100% 0 0 0)}to{clip-path:inset(0 0 0 0)}}
        .pp-anim-wipe-up{animation:ppWipeUp .6s ease-out both}
        @keyframes ppSplitX{from{clip-path:inset(0 50% 0 50%)}to{clip-path:inset(0 0 0 0)}}
        .pp-anim-split-x{animation:ppSplitX .6s ease-out both}
        @keyframes ppSplitY{from{clip-path:inset(50% 0 50% 0)}to{clip-path:inset(0 0 0 0)}}
        .pp-anim-split-y{animation:ppSplitY .6s ease-out both}
      `}</style>

      {/* header overlay */}
      <div className="absolute top-0 left-0 right-0 h-20 flex items-center justify-center pointer-events-none z-10">
        <div className="text-center">
          <h2 className="text-sm uppercase tracking-[0.25em] text-white/60">BST</h2>
          <p className="text-xs text-white/40">Select your experience</p>
        </div>
      </div>

      {/* MOBILE: fixed viewport, 3 equal panels, text fits */}
      <div className="md:hidden fixed inset-0 flex flex-col overflow-hidden" style={{ height: "100svh" }}>
        {sections.map((s, i) => (
          <Link
            key={i}
            to={s.to}
            className="relative block flex-1 w-full"
            aria-label={s.label}
          >
            {/* BG */}
            <div
              className="absolute inset-0 bg-cover bg-center brightness-150 saturate-125 contrast-105"
              style={{ backgroundImage: s.imgMobile || s.img }}
            />
            <div className="absolute inset-0 bg-black/25" />
            {/* Content grid: button top, spacer, caption bottom */}
            <div className="relative z-10 h-full w-full grid grid-rows-[auto,1fr,auto] justify-items-center px-4">
              <span className="mt-2 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold bg-white/10 ring-1 ring-white/15 backdrop-blur-md">
                {s.label}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="opacity-90">
                  <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <div />
              <span className="mb-3 rounded-full bg-black/35 px-3 py-1 text-[13px] font-medium text-white/90">
                {s.blurb}
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* DESKTOP: original tri-panel */}
      <div className="hidden md:block absolute inset-0 pt-24 pb-24 px-4 md:p-0">
        <div className="h-full flex flex-col md:flex-row items-stretch gap-6 md:gap-0 overflow-hidden">
          {sections.map((s, i) => (
            <TriPanel
              key={i}
              index={i}
              hovered={hovered}
              setHovered={setHovered}
              to={s.to}
              image={s.img}
              imageMobile={s.imgMobile}
              blurb={s.blurb}
              buttonLabel={s.label}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* Desktop-only panel */
function TriPanel({
  index,
  hovered,
  setHovered,
  to,
  image,
  imageMobile,
  blurb,
  buttonLabel,
}: {
  index: number;
  hovered: number | null;
  setHovered: (v: number | null) => void;
  to: string;
  image: string;
  imageMobile?: string;
  blurb: string;
  buttonLabel: string;
}) {
  const isActive = hovered === index;
  const someoneHovering = hovered !== null;
  const flexGrow = !someoneHovering ? 1 : isActive ? 1.6 : 0.8;
  const scale = !someoneHovering ? 1 : isActive ? 1.04 : 0.98;
  const opacity = !someoneHovering ? 1 : isActive ? 1 : 0.85;

  return (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={[
        "group relative overflow-hidden h-full",
        "flex items-center justify-center",
        "py-12 md:py-0",
        "rounded-2xl md:rounded-none",
        "border-t md:border-t-0 md:border-l border-white/5",
        "transition-all duration-500 ease-out will-change-transform",
      ].join(" ")}
      style={{ flexGrow, transform: `scale(${scale})`, opacity }}
    >
      <div
        className="absolute inset-0 hidden md:block bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105 brightness-150 saturate-125 contrast-105"
        style={{ backgroundImage: image }}
      />
      <div
        className="absolute inset-0 md:hidden bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
        style={{ backgroundImage: imageMobile ?? image }}
      />
      <div className="absolute inset-0 bg-black/25" />

      <div className="relative hidden md:flex flex-col items-center text-center text-white">
        <Link
          to={to}
          aria-label={buttonLabel}
          className="inline-flex items-center gap-2 rounded-full px-5 py-3 font-semibold
                     bg-white/10 hover:bg-white/15 ring-1 ring-white/15
                     backdrop-blur-md transition-all mb-6"
        >
          {buttonLabel}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="opacity-90">
            <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
        <div className="relative flex items-end justify-center w-64 h-64 xl:w-[26rem] xl:h-[26rem]">
          <p className="text-white/90 mb-3 drop-shadow">{blurb}</p>
        </div>
      </div>
    </div>
  );
}
