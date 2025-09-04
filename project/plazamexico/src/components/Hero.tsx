// src/components/Hero.tsx
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, Utensils, ChevronDown } from "lucide-react";
import site from "../content/site.json";

export default function Hero() {
  const base = (import.meta as any).env.BASE_URL || "/";
  const logo = base + "images/logo.png";
  const storefront = base + "images/storefront.jpg";

  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const onMove: React.MouseEventHandler = (e) => {
    const { innerWidth: w, innerHeight: h } = window;
    const x = (e.clientX / w) * 2 - 1;
    const y = (e.clientY / h) * 2 - 1;
    setTilt({ rx: y * -3.5, ry: x * 3.5 });
  };

  const hours = useMemo(() => {
    const h: any = (site as any).hours;
    return Array.isArray(h) ? (h as Array<{ day: string; open: string; close: string }>) : null;
  }, []);

  const fadeUp = (d = 0) => ({
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay: d } },
  });

  return (
    <section
      onMouseMove={onMove}
      className="relative min-h-[92svh] flex items-center justify-center bg-black text-white overflow-hidden"
    >
      <style>{`
        @keyframes kenburns {
          0% { background-position: 50% 50%; transform: scale(1.02); }
          50% { background-position: 52% 48%; transform: scale(1.045); }
          100% { background-position: 50% 50%; transform: scale(1.02); }
        }
        @keyframes duoShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes orbit {
          from { transform: rotate(0deg) }
          to   { transform: rotate(360deg) }
        }

        .bg-hero {
          background-size: 110% 110%;
          animation: kenburns 28s ease-in-out infinite;
          will-change: background-position, transform;
        }
        .duo {
          background: linear-gradient(115deg, rgba(220,38,38,0.22), rgba(0,0,0,0) 40%, rgba(34,197,94,0.18));
          background-size: 200% 200%;
          animation: duoShift 22s ease-in-out infinite;
          mix-blend-mode: overlay;
        }
        .vignette {
          background: radial-gradient(85% 75% at 50% 50%, transparent 60%, rgba(0,0,0,0.55) 100%);
          pointer-events: none;
        }
        .grain {
          background-image:
            radial-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
            radial-gradient(rgba(255,255,255,0.02) 1px, transparent 1px);
          background-size: 3px 3px, 5px 5px;
          background-position: 0 0, 1px 1px;
          opacity: .10;
          pointer-events: none;
        }

        /* Orbiting pips (renamed to avoid Tailwind .group) */
        .orbits { pointer-events: none; }
        .orbitGroup {
          position:absolute; left:50%; top:50%;
          will-change: transform;
        }
        .orbitGroup.left  { transform: translate(calc(-50% - min(28vw, 300px)), -50%); }
        .orbitGroup.right { transform: translate(calc(-50% + min(28vw, 300px)), -50%); }

        .orbit {
          position:relative;
          border-radius: 9999px;
          will-change: transform;
        }
        .o1 { width: 36rem; height: 36rem; animation: orbit 24s linear infinite; }
        .o2 { width: 26rem; height: 26rem; animation: orbit 18s linear infinite reverse; }

        .pip {
          position:absolute; left:50%; top:50%;
          width: 9px; height: 9px; border-radius: 999px;
          box-shadow: 0 0 12px currentColor, 0 6px 18px rgba(0,0,0,0.35);
          opacity:.9;
        }
        .pip::after {
          content:""; position:absolute; inset:-6px; border-radius:999px;
          background: currentColor; filter: blur(8px); opacity:.22;
        }

        @media (max-width: 640px) {
          .orbitGroup.left  { transform: translate(calc(-50% - min(22vw, 180px)), -50%); }
          .orbitGroup.right { transform: translate(calc(-50% + min(22vw, 180px)), -50%); }
          .o1 { width: 28rem; height: 28rem; }
          .o2 { width: 20rem; height: 20rem; }
          .pip { width: 7px; height: 7px; }
          .pip::after { inset:-5px; filter: blur(7px); }
        }

        @media (prefers-reduced-motion: reduce) {
          .bg-hero, .duo, .o1, .o2 { animation: none !important; }
        }
      `}</style>

      {/* Background */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-hero"
        style={{ backgroundImage: `url(${storefront})` }}
        aria-hidden
      />
      <div className="duo absolute inset-0" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/65 to-black/85" aria-hidden />
      <div className="vignette absolute inset-0" aria-hidden />
      <div className="grain absolute inset-0" aria-hidden />

      {/* Mirrored orbiting accent pips */}
      <div className="orbits absolute inset-0 -z-0" aria-hidden>
        <div className="orbitGroup left">
          <div className="orbit o1">
            {[
              { a:   0,  c: "#dc2626" },
              { a:  60,  c: "#eab308" },
              { a: 120,  c: "#22c55e" },
              { a: 180,  c: "rgba(255,255,255,0.85)" },
              { a: 240,  c: "#eab308" },
              { a: 300,  c: "#22c55e" },
            ].map((p, i) => (
              <div
                key={`L-o1-${i}`}
                className="pip"
                style={{
                  color: p.c,
                  transform: `rotate(${p.a}deg) translateY(18rem) translate(-50%, -50%) rotate(-${p.a}deg)`,
                }}
              />
            ))}
          </div>
          <div className="orbit o2">
            {[
              { a:  30,  c: "#22c55e" },
              { a:  90,  c: "#dc2626" },
              { a: 150,  c: "#eab308" },
              { a: 210,  c: "rgba(255,255,255,0.85)" },
              { a: 270,  c: "#22c55e" },
              { a: 330,  c: "#dc2626" },
            ].map((p, i) => (
              <div
                key={`L-o2-${i}`}
                className="pip"
                style={{
                  color: p.c,
                  transform: `rotate(${p.a}deg) translateY(13rem) translate(-50%, -50%) rotate(-${p.a}deg)`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="orbitGroup right">
          <div className="orbit o1">
            {[
              { a:   0,  c: "#dc2626" },
              { a:  60,  c: "#eab308" },
              { a: 120,  c: "#22c55e" },
              { a: 180,  c: "rgba(255,255,255,0.85)" },
              { a: 240,  c: "#eab308" },
              { a: 300,  c: "#22c55e" },
            ].map((p, i) => (
              <div
                key={`R-o1-${i}`}
                className="pip"
                style={{
                  color: p.c,
                  transform: `rotate(${p.a}deg) translateY(18rem) translate(-50%, -50%) rotate(-${p.a}deg)`,
                }}
              />
            ))}
          </div>
          <div className="orbit o2">
            {[
              { a:  30,  c: "#22c55e" },
              { a:  90,  c: "#dc2626" },
              { a: 150,  c: "#eab308" },
              { a: 210,  c: "rgba(255,255,255,0.85)" },
              { a: 270,  c: "#22c55e" },
              { a: 330,  c: "#dc2626" },
            ].map((p, i) => (
              <div
                key={`R-o2-${i}`}
                className="pip"
                style={{
                  color: p.c,
                  transform: `rotate(${p.a}deg) translateY(13rem) translate(-50%, -50%) rotate(-${p.a}deg)`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div
        className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center will-change-transform"
        style={{ transform: `perspective(1100px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)` }}
      >
        <motion.img
          src={logo}
          alt={(site as any).name ?? "Plaza Mexico"}
          className="mx-auto w-[26rem] md:w-[40rem]"
          loading="eager"
          initial={{ opacity: 0, y: -10, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.55 }}
          style={{
            filter:
              "drop-shadow(0 10px 26px rgba(0,0,0,0.45)) drop-shadow(0 0 8px rgba(234,179,8,0.16))",
          }}
        />

        <motion.div {...fadeUp(0.12)} className="mt-3 inline-block">
          <p className="text-lg md:text-2xl" style={{ color: "var(--pm-gold)" }}>
            {(site as any).heroSubheadline || "Authentic Mexican flavors served hot daily"}
          </p>
          <motion.span
            initial={{ width: 0, opacity: 0.6 }}
            animate={{ width: 180, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.22, ease: "easeOut" }}
            className="mt-2 block h-0.5 mx-auto bg-gradient-to-r from-red-600 via-yellow-400 to-green-500 rounded-full"
          />
        </motion.div>

        <motion.div
          {...fadeUp(0.22)}
          className="mt-6 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.div whileHover={{ scale: 1.02, y: -1 }} whileTap={{ scale: 0.98 }}>
            <Link
              to="/menu"
              aria-label="View Menu"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-base md:text-lg font-semibold tracking-wide
                         bg-gradient-to-br from-emerald-600 to-emerald-700
                         shadow-[0_8px_28px_rgba(16,185,129,0.30)]
                         hover:shadow-[0_10px_36px_rgba(16,185,129,0.45)]
                         ring-1 ring-emerald-400/30
                         hover:from-emerald-500 hover:to-emerald-700
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/80
                         transition-all"
            >
              <Utensils className="h-5 w-5" />
              <span>View Menu</span>
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02, y: -1 }} whileTap={{ scale: 0.98 }}>
            <a
              href={`tel:${(site as any).phone}`}
              aria-label={`Call ${(site as any).phone}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-base md:text-lg font-semibold tracking-wide
                         bg-gradient-to-br from-rose-600 to-rose-700
                         shadow-[0_8px_28px_rgba(244,63,94,0.30)]
                         hover:shadow-[0_10px_36px_rgba(244,63,94,0.45)]
                         ring-1 ring-rose-400/30
                         hover:from-rose-500 hover:to-rose-700
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-300/80
                         transition-all"
            >
              <Phone className="h-5 w-5" />
              <span>Call {(site as any).phone}</span>
            </a>
          </motion.div>
        </motion.div>

        <div className="mt-9 grid grid-cols-1 sm:grid-cols-3 gap-6 text-base md:text-lg">
          {[0.08, 0.14, 0.2].map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: d }}
              className="card-glass-square p-6"
            >
              {i === 0 && (
                <>
                  <div className="font-semibold text-lg" style={{ color: "var(--pm-green)" }}>
                    Hours
                  </div>
                  <ul className="mt-3 space-y-2 text-neutral-200">
                    {hours?.map((h) => (
                      <li key={h.day}>
                        {h.day}: {h.open}–{h.close}
                      </li>
                    )) || <li>See menu for hours</li>}
                  </ul>
                </>
              )}
              {i === 1 && (
                <>
                  <div className="font-semibold text-lg" style={{ color: "var(--pm-red)" }}>
                    Address
                  </div>
                  <div className="mt-3 text-neutral-200">{(site as any).address}</div>
                </>
              )}
              {i === 2 && (
                <>
                  <div className="font-semibold text-lg" style={{ color: "var(--pm-gold)" }}>
                    Special
                  </div>
                  <div className="mt-3 text-neutral-200">{(site as any).dailySpecials}</div>
                </>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-9 flex justify-center text-white/70"
        >
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
