// src/pages/Catalog.tsx
import React, { useMemo, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { X, ChevronLeft, ChevronRight, SlidersHorizontal } from "lucide-react";

// Effects (match Home)
import ShinyText from "../components/ShinyText";
import "../components/ShinyText.css";

// Optional textures (put in /public if you want them)
const marbleTx = `${import.meta.env.BASE_URL}marble.jpg`;
const chromeNoise = `${import.meta.env.BASE_URL}chrome-noise.png`;

// Single image used for all items
const RIM_IMG = `${import.meta.env.BASE_URL}rimexample.jpg`;

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};
const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hover: { scale: 1.03 },
};

// ----- Dropdown options -----
const BRAND_OPTIONS = [
  "Any",
  "Forgiato",
  "Vossen",
  "HRE",
  "Rotiform",
  "Fuel Off-Road",
  "Method",
  "Enkei",
  "BBS",
  "American Racing",
  "TSW",
];

const FINISH_OPTIONS = [
  "Any",
  "Gloss Black",
  "Satin Black",
  "Matte Black",
  "Chrome",
  "Brushed",
  "Polished",
  "Gunmetal",
  "Bronze",
  "Silver",
  "Two-Tone",
  "Machined Face",
];

const SIZE_OPTIONS = ["Any", "17\"", "18\"", "19\"", "20\"", "22\"", "24\"", "26\""];

const PATTERN_OPTIONS = [
  "Any",
  "4x100",
  "5x100",
  "5x112",
  "5x114.3",
  "5x115",
  "5x120",
  "6x135",
  "6x139.7",
  "8x165.1",
  "8x180",
];

// ----- Catalog data (sample) -----
type CatalogItem = {
  id: string;
  src: string;
  brand: string;
  finish: string;
  size: string;
  pattern: string;
  caption: string;
};

const CATALOG: CatalogItem[] = [
  { id: "vossen-hf6-20-5x114", src: RIM_IMG, brand: "Vossen", finish: "Gloss Black", size: "20\"", pattern: "5x114.3", caption: "Vossen HF6 — 20\" Gloss Black (5x114.3)" },
  { id: "hre-p101-20-5x112", src: RIM_IMG, brand: "HRE", finish: "Brushed", size: "20\"", pattern: "5x112", caption: "HRE P101 — 20\" Brushed (5x112)" },
  { id: "rotiform-rse-19-5x112", src: RIM_IMG, brand: "Rotiform", finish: "Silver", size: "19\"", pattern: "5x112", caption: "Rotiform RSE — 19\" Silver (5x112)" },
  { id: "forgiato-mono-24-5x120", src: RIM_IMG, brand: "Forgiato", finish: "Chrome", size: "24\"", pattern: "5x120", caption: "Forgiato Mono — 24\" Chrome (5x120)" },
  { id: "fuel-maverick-20-6x139", src: RIM_IMG, brand: "Fuel Off-Road", finish: "Matte Black", size: "20\"", pattern: "6x139.7", caption: "Fuel Maverick — 20\" Matte Black (6x139.7)" },
  { id: "method-nv-17-6x135", src: RIM_IMG, brand: "Method", finish: "Bronze", size: "17\"", pattern: "6x135", caption: "Method NV — 17\" Bronze (6x135)" },
  { id: "enkei-rpf1-18-5x114", src: RIM_IMG, brand: "Enkei", finish: "Machined Face", size: "18\"", pattern: "5x114.3", caption: "Enkei RPF1 — 18\" Machined (5x114.3)" },
  { id: "bbs-lm-19-5x112", src: RIM_IMG, brand: "BBS", finish: "Polished", size: "19\"", pattern: "5x112", caption: "BBS LM — 19\" Polished (5x112)" },
  { id: "american-racing-tt-20-5x115", src: RIM_IMG, brand: "American Racing", finish: "Gunmetal", size: "20\"", pattern: "5x115", caption: "American Racing TT — 20\" Gunmetal (5x115)" },
  { id: "tsw-bathurst-19-5x114", src: RIM_IMG, brand: "TSW", finish: "Satin Black", size: "19\"", pattern: "5x114.3", caption: "TSW Bathurst — 19\" Satin Black (5x114.3)" },
  { id: "forgiato-two-26-5x120", src: RIM_IMG, brand: "Forgiato", finish: "Two-Tone", size: "26\"", pattern: "5x120", caption: "Forgiato Two-Tone — 26\" (5x120)" },
  { id: "fuel-diesel-22-8x180", src: RIM_IMG, brand: "Fuel Off-Road", finish: "Gloss Black", size: "22\"", pattern: "8x180", caption: "Fuel Diesel — 22\" Gloss Black (8x180)" },
];

const Catalog: React.FC = () => {
  // Hero & grid animations
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [gridRef, gridInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  // Dropdown state
  const [brand, setBrand] = useState<string>("Any");
  const [finish, setFinish] = useState<string>("Any");
  const [size, setSize] = useState<string>("Any");
  const [pattern, setPattern] = useState<string>("Any");

  // Lightbox state
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + filteredCatalog.length) % filteredCatalog.length : null));
  const nextImage = () =>
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filteredCatalog.length : null));

  const clearFilters = () => {
    setBrand("Any");
    setFinish("Any");
    setSize("Any");
    setPattern("Any");
  };

  // Filtering (memoized)
  const filteredCatalog = useMemo(() => {
    return CATALOG.filter((item) => {
      const brandOk = brand === "Any" || item.brand === brand;
      const finishOk = finish === "Any" || item.finish === finish;
      const sizeOk = size === "Any" || item.size === size;
      const patternOk = pattern === "Any" || item.pattern === pattern;
      return brandOk && finishOk && sizeOk && patternOk;
    });
  }, [brand, finish, size, pattern]);

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="pt-20 sm:pt-24 bg-gradient-to-b from-black to-zinc-950 text-white relative"
    >
      {/* Texture backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{ backgroundImage: `url('${marbleTx}')`, backgroundSize: "cover" }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-20 mix-blend-overlay"
        style={{ backgroundImage: `url('${chromeNoise}')`, backgroundSize: "cover" }}
      />

      {/* Hero */}
      <section ref={heroRef} className="py-20 sm:py-24 relative text-center">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="relative z-10"
            variants={sectionVariants}
            initial="hidden"
            animate={heroInView ? "visible" : ""}
          >
            {/* Match Home usage: use `text` prop */}
            <ShinyText
              text="Catalog"
              className="font-cinzel text-4xl md:text-7xl font-bold mb-4 md:mb-6 tracking-wide uppercase block leading-tight"
              speed={5}
            />
            <p className="text-zinc-300/90 text-lg md:text-2xl">
              Filter by brand, finish, size, and bolt pattern.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-4 sm:pb-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="rounded-2xl border border-zinc-700/40 bg-zinc-900/50 backdrop-blur px-4 py-4 sm:px-6 sm:py-6 shadow-xl">
            <div className="flex items-center gap-2 mb-4 text-zinc-300">
              <SlidersHorizontal className="h-5 w-5" />
              <span className="uppercase tracking-widest text-sm font-semibold">Filters</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {/* Brand */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-2">Brand</label>
                <select
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  className="w-full rounded-xl bg-zinc-950/80 border border-zinc-700/60 px-4 py-3 text-sm text-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-300/30"
                >
                  {BRAND_OPTIONS.map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>

              {/* Finish */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-2">Finish</label>
                <select
                  value={finish}
                  onChange={(e) => setFinish(e.target.value)}
                  className="w-full rounded-xl bg-zinc-950/80 border border-zinc-700/60 px-4 py-3 text-sm text-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-300/30"
                >
                  {FINISH_OPTIONS.map((f) => (
                    <option key={f} value={f}>{f}</option>
                  ))}
                </select>
              </div>

              {/* Size */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-2">Size</label>
                <select
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  className="w-full rounded-xl bg-zinc-950/80 border border-zinc-700/60 px-4 py-3 text-sm text-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-300/30"
                >
                  {SIZE_OPTIONS.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              {/* Bolt Pattern */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-2">Bolt Pattern</label>
                <select
                  value={pattern}
                  onChange={(e) => setPattern(e.target.value)}
                  className="w-full rounded-xl bg-zinc-950/80 border border-zinc-700/60 px-4 py-3 text-sm text-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-300/30"
                >
                  {PATTERN_OPTIONS.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={clearFilters}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-zinc-100 text-black font-semibold text-sm uppercase tracking-widest hover:opacity-95 transition"
              >
                Clear Filters
              </button>
              <span className="text-zinc-400 text-sm sm:ml-2">
                Showing <span className="text-zinc-200 font-semibold">{filteredCatalog.length}</span> result{filteredCatalog.length === 1 ? "" : "s"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section ref={gridRef} className="py-16 sm:py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            variants={sectionVariants}
            initial="hidden"
            animate={gridInView ? "visible" : ""}
          >
            {filteredCatalog.map((item, i) => (
              <motion.div
                key={item.id}
                className="relative overflow-hidden rounded-2xl shadow-2xl group cursor-pointer bg-zinc-900/40 border border-zinc-700/40"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                whileHover="hover"
                onClick={() => openLightbox(i)}
              >
                <div className="absolute inset-0 rounded-2xl pointer-events-none ring-1 ring-inset ring-white/10 group-hover:ring-white/25 transition-all" />
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-56 sm:h-64 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-4 sm:p-6 flex items-end">
                  <div>
                    <p className="text-white text-base sm:text-lg font-semibold">{item.caption}</p>
                    <p className="text-zinc-300 text-xs sm:text-sm mt-1">
                      {item.brand} • {item.finish} • {item.size} • {item.pattern}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredCatalog.length === 0 && (
            <div className="text-center text-zinc-400 mt-10">
              No items match that combination yet. Try broadening a filter.
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="relative max-w-[95vw] sm:max-w-5xl max-h-[90vh] w-full flex items-center justify-center"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredCatalog[lightboxIndex].src}
                alt={filteredCatalog[lightboxIndex].caption}
                className="w-full h-auto object-contain rounded-xl sm:rounded-2xl shadow-2xl transition-transform duration-300"
              />
              <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm sm:text-lg font-light bg-black/50 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full">
                {filteredCatalog[lightboxIndex].caption}
              </p>
              <button className="absolute top-3 right-3 bg-black/60 hover:bg-black/80 text-white p-2 sm:p-3 rounded-full transition" onClick={closeLightbox}>
                <X className="h-6 w-6 sm:h-8 sm:w-8" />
              </button>
              <button className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 sm:p-3 rounded-full transition" onClick={prevImage}>
                <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" />
              </button>
              <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 sm:p-3 rounded-full transition" onClick={nextImage}>
                <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Catalog;
