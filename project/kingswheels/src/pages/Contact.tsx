// src/pages/Contact.tsx
import React from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Phone, MessageSquare, MapPin, Clock, Instagram, CreditCard } from "lucide-react";

// Effects (match Home/Catalog)
import ShinyText from "../components/ShinyText";
import "../components/ShinyText.css";

const contactBg = `${import.meta.env.BASE_URL}contactbg.png`;
const marbleTx = `${import.meta.env.BASE_URL}marble.jpg`;
const chromeNoise = `${import.meta.env.BASE_URL}chrome-noise.png`;

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.0 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  hover: { scale: 1.03, boxShadow: "0 24px 60px rgba(212,212,216,.25)" },
  tap: { scale: 0.99 },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  hover: { scale: 1.02 },
};

const Contact: React.FC = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [gridRef, gridInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [mapRef, mapInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [extraRef, extraInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  // Click handlers for cards
  const handleCardClick = (type: "call" | "text" | "visit" | "hours") => {
    switch (type) {
      case "call":
        window.location.href = "tel:5805076262";
        break;
      case "text":
        window.location.href = "sms:5805076262";
        break;
      case "visit":
        window.open(
          "https://www.google.com/maps/search/?api=1&query=4410+NW+Cache+Rd%2C+Lawton%2C+OK+73505",
          "_blank",
          "noopener,noreferrer"
        );
        break;
      case "hours":
        document.getElementById("contact-map")?.scrollIntoView({ behavior: "smooth", block: "start" });
        break;
    }
  };

  const handleKey = (e: React.KeyboardEvent, type: "call" | "text" | "visit" | "hours") => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleCardClick(type);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 sm:pt-24 bg-gradient-to-b from-black to-zinc-950 text-white relative overflow-hidden"
    >
      {/* Background image */}
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${contactBg}')` }}
      />
      {/* Texture overlays */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{ backgroundImage: `url('${marbleTx}')`, backgroundSize: "cover" }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-20 mix-blend-overlay"
        style={{ backgroundImage: `url('${chromeNoise}')`, backgroundSize: "cover" }}
      />
      {/* Global black blur overlay */}
      <div aria-hidden className="absolute inset-0 bg-zinc-950/50 backdrop-blur-md" />

      {/* Header */}
      <section ref={heroRef} className="py-20 sm:py-24 text-center relative isolate">
        <motion.div
          className="relative z-10"
          variants={sectionVariants}
          initial="hidden"
          animate={heroInView ? "visible" : ""}
        >
          <ShinyText
            text="Contact"
            className="font-cinzel text-4xl md:text-7xl font-bold mb-4 md:mb-6 tracking-wide uppercase block leading-tight"
            speed={5}
          />
          <p className="text-zinc-300/90 text-lg md:text-2xl">
            Call, text, visit, or follow.
          </p>
        </motion.div>
      </section>

      {/* Contact Grid */}
      <section ref={gridRef} className="py-20 sm:py-24 relative">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-12 text-center">
          {[
            {
              icon: Phone,
              title: "Call",
              action: () => handleCardClick("call"),
              onKey: (e: React.KeyboardEvent) => handleKey(e, "call"),
              content: <span className="text-zinc-100 text-lg sm:text-xl font-bold">(580) 507 6262</span>,
            },
            {
              icon: MessageSquare,
              title: "Text",
              action: () => handleCardClick("text"),
              onKey: (e: React.KeyboardEvent) => handleKey(e, "text"),
              content: <span className="text-zinc-100 text-lg sm:text-xl font-bold">(580) 507 6262</span>,
            },
            {
              icon: MapPin,
              title: "Visit",
              action: () => handleCardClick("visit"),
              onKey: (e: React.KeyboardEvent) => handleKey(e, "visit"),
              content: (
                <p className="text-zinc-200/90 text-sm sm:text-base leading-relaxed">
                  4410 NW Cache Rd
                  <br />
                  Lawton, OK 73505
                </p>
              ),
            },
            {
              icon: Clock,
              title: "Hours",
              action: () => handleCardClick("hours"),
              onKey: (e: React.KeyboardEvent) => handleKey(e, "hours"),
              content: (
                <p className="text-zinc-200/90 text-sm sm:text-base leading-relaxed">
                  Mon to Sat: 9 AM to 6 PM
                  <br />
                  Sun: Closed
                </p>
              ),
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              initial="hidden"
              animate={gridInView ? "visible" : ""}
              whileHover="hover"
              whileTap="tap"
              transition={{ delay: i * 0.08 }}
              role="button"
              tabIndex={0}
              onClick={item.action}
              onKeyDown={item.onKey}
              className="cursor-pointer select-none bg-white/8 text-white border border-white/20 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-xl
                         hover:bg-white/12 hover:border-white/30 focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              <item.icon className="h-10 w-10 sm:h-14 sm:w-14 text-zinc-100 mx-auto mb-3 sm:mb-4" />
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">
                {item.title}
              </h3>
              {item.content}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Map */}
      <section id="contact-map" ref={mapRef} className="bg-zinc-950/50 py-20 sm:py-24 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center relative z-10"
            variants={sectionVariants}
            initial="hidden"
            animate={mapInView ? "visible" : ""}
          >
            <ShinyText
              text="Find Us"
              className="font-cinzel text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 block leading-tight"
              speed={5}
            />
          </motion.div>
          <motion.div
            className="rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-white/8 backdrop-blur-md
                       hover:bg-white/12 hover:border-white/30 transition"
            variants={itemVariants}
            initial="hidden"
            animate={mapInView ? "visible" : ""}
            whileHover="hover"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3343.7877767785895!2d-98.44412768481993!3d34.62433188044809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87ad268b4c871a4f%3A0xefd0a4d1e56e11dc!2s4410%20NW%20Cache%20Rd%2C%20Lawton%2C%20OK%2073505!5e0!3m2!1sen!2sus!4v1695756999905!5m2!1sen!2sus"
              width="100%"
              height="420"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[420px] sm:h-[500px] rounded-2xl"
              title="Kings Wheels Map"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* Finance and Instagram */}
      <section ref={extraRef} className="py-20 sm:py-24 relative">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 text-center">
          {[
            {
              icon: CreditCard,
              title: "Finance Options",
              desc: "Simple approvals with trusted partners.",
              link: "https://snapfinance.com",
              btn: "Check Snap",
            },
            {
              icon: Instagram,
              title: "Instagram",
              desc: "@kingswheelslawton",
              link: "https://www.instagram.com/kingswheelslawton/",
              btn: "Open Instagram",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              initial="hidden"
              animate={extraInView ? "visible" : ""}
              whileHover="hover"
              whileTap="tap"
              transition={{ delay: i * 0.08 }}
              role="link"
              tabIndex={0}
              onClick={() => window.open(item.link, "_blank", "noopener,noreferrer")}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  window.open(item.link, "_blank", "noopener,noreferrer");
                }
              }}
              className="cursor-pointer select-none bg-white/8 rounded-2xl p-8 sm:p-10 border border-white/20 shadow-xl backdrop-blur-md
                         hover:bg-white/12 hover:border-white/30 focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              <item.icon className="h-10 w-10 sm:h-12 sm:w-12 text-zinc-100 mx-auto mb-3 sm:mb-4" />
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">
                {item.title}
              </h3>
              <p className="text-zinc-200/90 text-sm sm:text-base mb-5 sm:mb-6 break-words">
                {item.desc}
              </p>
              <span
                className="inline-block w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 bg-white/10 text-white border border-white/25
                           backdrop-blur-md font-bold text-sm sm:text-base uppercase tracking-widest rounded-xl sm:rounded-full
                           transition shadow-lg hover:bg-white/15 hover:border-white/40"
              >
                {item.btn}
              </span>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
