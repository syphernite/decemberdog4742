// src/pages/Shop.tsx
import React from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CheckCircle, Car, Wrench, Zap } from "lucide-react";

import ShinyText from "../components/ShinyText";
import "../components/ShinyText.css";

const shopBg = `${import.meta.env.BASE_URL}shopbg.jpg`;

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  hover: { scale: 1.03, boxShadow: "0 18px 36px rgba(255,255,255,0.18)" }, // softer on mobile
};

const services = [
  {
    icon: Car,
    name: "Wheels and Tires",
    description: "Forged options, clean fitment, installed and torqued right.",
    features: ["Lightweight forges", "Precision fitment", "Finance available"],
    img: `${import.meta.env.BASE_URL}rims.jpg`,
  },
  {
    icon: Wrench,
    name: "Lift and Drop Kits",
    description: "Comfort in town and control at speed with the stance you want.",
    features: ["Lift kits", "Lowering kits", "Alignment included"],
    img: `${import.meta.env.BASE_URL}liftkit.jpg`,
  },
  {
    icon: Zap,
    name: "Maintenance",
    description: "Brakes, fluids, alignments. Keep it tight and quiet.",
    features: ["Brake service", "Oil and fluids", "4 wheel alignment"],
    img: `${import.meta.env.BASE_URL}maintenance.jpg`,
  },
];

const Shop: React.FC = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      // Mobile-first: gentle overlay + blur; stronger on md+
      className="relative min-h-screen text-white overflow-hidden"
      style={{
        backgroundImage: `url('${shopBg}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlays */}
      <div aria-hidden className="absolute inset-0 bg-black/55 md:bg-black/50" />
      <div aria-hidden className="absolute inset-0 backdrop-blur-sm md:backdrop-blur-md" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center pt-20 sm:pt-24 pb-16 md:pb-24 px-4">
        {/* Hero */}
        <section ref={heroRef} className="text-center w-full max-w-4xl mb-8 sm:mb-10 md:mb-12 isolate">
          <motion.div variants={sectionVariants} initial="hidden" animate={heroInView ? "visible" : ""}>
            <ShinyText
              text="Shop Services"
              speed={5}
              className="font-cinzel text-3xl xs:text-4xl md:text-6xl font-bold mb-3 md:mb-4 tracking-wide uppercase block leading-tight"
            />
            <p className="text-zinc-200/90 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
              Clean installs, clean look, clean ride.
            </p>
          </motion.div>
        </section>

        {/* Services */}
        <section ref={servicesRef} className="w-full max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {services.map((svc, i) => (
              <motion.article
                key={svc.name}
                variants={cardVariants}
                initial="hidden"
                animate={servicesInView ? "visible" : ""}
                whileHover="hover"
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl overflow-hidden border border-white/20 bg-white/10 backdrop-blur-md md:backdrop-blur-xl shadow-lg md:shadow-2xl"
              >
                <img
                  src={svc.img}
                  alt={svc.name}
                  loading="lazy"
                  className="w-full h-40 sm:h-48 object-cover opacity-95 md:opacity-100 transition-opacity"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="p-5 sm:p-6">
                  <svc.icon className="h-9 w-9 sm:h-10 sm:w-10 text-white mb-2 sm:mb-3 mx-auto" />
                  <h3 className="font-cinzel text-lg sm:text-xl md:text-2xl font-bold mb-1.5 sm:mb-2 text-center">
                    {svc.name}
                  </h3>
                  <p className="text-zinc-300/90 text-sm md:text-base mb-3 sm:mb-4 text-center">
                    {svc.description}
                  </p>
                  <ul className="space-y-2 text-sm sm:text-[0.95rem] text-zinc-200 max-w-sm mx-auto">
                    {svc.features.map((f, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-white mr-2 flex-shrink-0" />
                        <span className="leading-snug">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Shop;
