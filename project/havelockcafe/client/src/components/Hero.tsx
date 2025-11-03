import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Coffee } from "lucide-react";
import { motion } from "framer-motion";

/**
 * We intentionally avoid `import heroImage from '@assets/...'` because the folder
 * doesn't exist in the Replit export. Using a public-path string keeps the build green.
 *
 * If you later add an image to `client/public/havelock-hero.jpeg`, it will render automatically
 * at runtime (no rebuild changes needed beyond a rebuild to publish).
 */
const HERO_URL = "/havelockcafe/assets/cafe-hero.webp";

export default function Hero() {
  const scrollToMenu = () => {
    const menuSection = document.getElementById("menu-preview");
    menuSection?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      className="relative w-full min-h-[60vh] md:min-h-[70vh] grid place-items-center overflow-hidden bg-gradient-to-b from-slate-800 via-slate-900 to-black"
      aria-label="Havelock Cafe hero"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 42, 0.9), rgba(0, 0, 0, 0.95)), url(${HERO_URL})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Optional hero image from public/ — will 404 quietly if not present */}
      <img
        src={HERO_URL}
        alt="Havelock Cafe"
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => {
          // Hide the <img> if the file isn't there so we still look clean.
          (e.currentTarget as HTMLImageElement).style.display = "none";
        }}
      />

      {/* Dark overlay for contrast whether image exists or not */}
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 w-full max-w-5xl px-6 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="flex items-center justify-center gap-2">
            <Badge className="bg-blue-500 text-white hover:bg-blue-400">
              <Coffee className="mr-1 h-3.5 w-3.5" />
              Freshly Brewed Daily
            </Badge>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow">
            Havelock Cafe
          </h1>

          <p className="mx-auto max-w-2xl text-white/90">
            Coastal coffee, scratch-made bites, and good vibes in Havelock.
          </p>

          <div className="flex items-center justify-center gap-4 text-white/90">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              7:00a – 6:00p
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
              Havelock, NC
            </span>
          </div>

          <div className="pt-2 flex items-center justify-center gap-3">
            <Button size="lg" onClick={scrollToMenu}>
              View Menu
            </Button>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="text-white/90 underline underline-offset-4 hover:text-white"
            >
              Get Directions
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
