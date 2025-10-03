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
  hover: { scale: 1.05, boxShadow: "0 20px 40px rgba(255,255,255,0.2)" },
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
      className="relative min-h-screen flex flex-col justify-center items-center text-white overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.55)), url('${shopBg}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Hero */}
      <section ref={heroRef} className="text-center mb-8">
        <motion.div variants={sectionVariants} initial="hidden" animate={heroInView ? "visible" : ""}>
          <ShinyText
            text="Shop Services"
            speed={5}
            className="font-cinzel text-4xl md:text-6xl font-bold mb-4 tracking-wide uppercase"
          />
          <p className="text-zinc-200/90 text-lg md:text-xl">
            Clean installs, clean look, clean ride.
          </p>
        </motion.div>
      </section>

      {/* Services */}
      <section ref={servicesRef} className="w-full max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={svc.name}
              variants={cardVariants}
              initial="hidden"
              animate={servicesInView ? "visible" : ""}
              whileHover="hover"
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl overflow-hidden border border-white/20 bg-white/10 backdrop-blur-xl shadow-lg group"
            >
              <img
                src={svc.img}
                alt={svc.name}
                className="w-full h-40 object-cover opacity-90 group-hover:opacity-100 transition"
              />
              <div className="p-6">
                <svc.icon className="h-10 w-10 text-white mb-3 mx-auto" />
                <h3 className="font-cinzel text-xl md:text-2xl font-bold mb-2">{svc.name}</h3>
                <p className="text-zinc-300/90 text-sm md:text-base mb-4">{svc.description}</p>
                <ul className="space-y-2 text-sm text-zinc-200">
                  {svc.features.map((f, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-white mr-2" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default Shop;
