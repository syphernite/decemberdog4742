// src/pages/Home.tsx
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  Variants,
} from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Instagram,
  PhoneCall,
  MapPin,
  Gem,
  Car,
  Award,
  Quote,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useInView } from "react-intersection-observer";

// Effects
import ShinyText from "../components/ShinyText";
import ScrollFloat from "../components/ScrollFloat";

// Effect styles
import "../components/ShinyText.css";
import "../components/ScrollFloat.css";

const MotionLink = motion(Link);

// Assets in /public
const bgUrl = `${import.meta.env.BASE_URL}bg2.png`;

// Updated images
const wheelImg1 = `${import.meta.env.BASE_URL}forged.png`;
const wheelImg2 = `${import.meta.env.BASE_URL}suspension.png`;
const wheelImg3 = `${import.meta.env.BASE_URL}fitment.png`;

const buildImg1 = `${import.meta.env.BASE_URL}build1.jpg`;
const buildImg2 = `${import.meta.env.BASE_URL}build2.jpg`;
const buildImg3 = `${import.meta.env.BASE_URL}build3.jpg`;

// Optional textures
const marbleTx = `${import.meta.env.BASE_URL}marble.jpg`;
const chromeNoise = `${import.meta.env.BASE_URL}chrome-noise.png`;

// Animations
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const popCardVariants: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 140, damping: 18, mass: 0.7 },
  },
};

const hoverVariant = { scale: 1.03 };

const Home: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const prefersReducedMotion = useReducedMotion();

  // Parallax
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 160]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.12]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);

  // In-view refs
  const [whyRef] = useInView({ triggerOnce: true, threshold: 0.15 });
  const [buildsRef] = useInView({ triggerOnce: true, threshold: 0.15 });
  const [testimonialsRef] = useInView({ triggerOnce: true, threshold: 0.15 });
  const [igRef] = useInView({ triggerOnce: true, threshold: 0.15 });
  const [ctaRef] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="bg-gradient-to-b from-black to-zinc-950 text-white font-montserrat overflow-hidden"
    >
      <Helmet>
        <title>Kings Wheels | Bespoke Wheels and Suspension in Lawton, OK</title>
        <meta
          name="description"
          content="Chrome clean, marble calm. Kings Wheels creates precision builds with forged wheels and tuned suspension in Lawton, OK."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Montserrat:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      {/* HERO */}
      <section className="relative min-h-[88vh] sm:min-h-screen flex items-center justify-center text-center px-4 sm:px-8 overflow-hidden">
        <motion.div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center"
          style={
            prefersReducedMotion
              ? { backgroundImage: `url('${bgUrl}')`, opacity }
              : { y: heroY, scale: heroScale, backgroundImage: `url('${bgUrl}')`, opacity }
          }
        />
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(244,244,245,0.10)_0%,rgba(9,9,11,0.92)_70%)]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-20 mix-blend-overlay"
          style={{ backgroundImage: `url('${chromeNoise}')`, backgroundSize: "cover" }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{ backgroundImage: `url('${marbleTx}')`, backgroundSize: "cover" }}
        />

        <motion.div
          className="relative z-10 max-w-6xl mx-auto mt-14 sm:mt-28 lg:mt-36"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <ShinyText
            text="Crown Your Drive"
            className="font-cinzel text-4xl xs:text-5xl sm:text-7xl lg:text-8xl font-bold tracking-wider uppercase block leading-tight"
            speed={5}
          />

          <ScrollFloat
            containerClassName="mt-6 sm:mt-8 mb-10 sm:mb-12 px-2"
            textClassName="text-base sm:text-2xl text-zinc-200/90 max-w-4xl mx-auto leading-relaxed font-light"
          >
            Chrome level finish, marble level calm. Forged wheels and tuned suspension for a ride that looks sharp and feels precise.
          </ScrollFloat>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center px-2">
            {/* GLASS CTA (was solid white) */}
            <motion.a
              href="tel:5805076262"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 sm:px-12 py-4 sm:py-5 bg-white/10 text-white border border-white/25 backdrop-blur-md rounded-xl sm:rounded-full transition duration-300 shadow-2xl hover:bg-white/15 hover:border-white/40"
              whileHover={hoverVariant}
            >
              Call Now <PhoneCall className="ml-3 sm:ml-4 h-5 w-5 sm:h-6 sm:w-6" />
            </motion.a>

            <MotionLink
              to="/catalog"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 sm:px-12 py-4 sm:py-5 border-2 border-zinc-300/70 text-zinc-200 font-bold text-base sm:text-lg uppercase tracking-widest rounded-xl sm:rounded-full transition duration-300 hover:bg-white/10 shadow-lg"
              whileHover={hoverVariant}
            >
              Explore Catalog <ArrowRight className="ml-3 sm:ml-4 h-5 w-5 sm:h-6 sm:w-6" />
            </MotionLink>
          </div>

          <ScrollFloat
            containerClassName="mt-10 sm:mt-20 px-2"
            textClassName="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 text-zinc-300/90 text-sm sm:text-lg font-light"
          >
            <div className="flex items-center gap-2 sm:gap-4">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-200" />
              <span className="truncate">4410 NW Cache Rd, Lawton, OK 73505</span>
            </div>
            <span className="hidden sm:inline text-zinc-500">•</span>
            <div>Mon to Sat: 9 AM to 6 PM</div>
          </ScrollFloat>
        </motion.div>
      </section>

      {/* WHY CHOOSE US */}
      <section
        ref={whyRef}
        className="py-24 sm:py-40 px-4 sm:px-8 bg-gradient-to-b from-zinc-950 to-black relative overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-10"
            style={{ backgroundImage: `url('${marbleTx}')`, backgroundSize: "cover" }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.06)_0%,rgba(0,0,0,0)_60%)]" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <ScrollFloat
            containerClassName="mb-3 sm:mb-6"
            textClassName="font-cinzel text-4xl sm:text-6xl font-bold uppercase"
          >
            Precision and Presence
          </ScrollFloat>

          <ScrollFloat
            containerClassName="mb-12 sm:mb-20"
            textClassName="text-zinc-300/90 max-w-5xl mx-auto text-lg sm:text-2xl leading-relaxed font-light px-2"
          >
            Every setup is designed to fit your style and your roads. Strong under load, clean in motion, easy to maintain.
          </ScrollFloat>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-12">
            {[
              { icon: Gem, title: "Forged Quality", desc: "Lightweight and durable, tested for daily use and spirited drives.", img: wheelImg1 },
              { icon: Car, title: "Ride and Control", desc: "Dialed suspension for comfort in town and confidence at speed.", img: wheelImg2 },
              { icon: Award, title: "Clean Fitment", desc: "Fit, finish, and torque to spec. No guesswork, only results.", img: wheelImg3 },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={popCardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                whileHover={hoverVariant}
                className="relative group overflow-hidden rounded-2xl border border-zinc-600/50 shadow-2xl bg-gradient-to-br from-zinc-900/70 to-black/90 backdrop-blur-sm"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-48 sm:h-72 object-cover"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                <div className="p-6 sm:p-10">
                  <ScrollFloat
                    containerClassName="mb-2 sm:mb-4"
                    textClassName="font-cinzel text-2xl sm:text-3xl font-bold text-white"
                  >
                    {item.title}
                  </ScrollFloat>
                  <ScrollFloat textClassName="text-zinc-300 text-base sm:text-lg leading-relaxed font-light">
                    {item.desc}
                  </ScrollFloat>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED BUILDS */}
      <section ref={buildsRef} className="py-24 sm:py-40 px-4 sm:px-8 bg-black relative">
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div
            className="absolute inset-0"
            style={{ backgroundImage: `url('${marbleTx}')`, backgroundSize: "cover" }}
          />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <ScrollFloat
            containerClassName="mb-3 sm:mb-6"
            textClassName="font-cinzel text-4xl sm:text-6xl font-bold uppercase"
          >
            Featured Builds
          </ScrollFloat>

          <ScrollFloat
            containerClassName="mb-12 sm:mb-20"
            textClassName="text-zinc-300/90 max-w-5xl mx-auto text-lg sm:text-2xl leading-relaxed font-light px-2"
          >
            Select work that shows our approach to fitment, finish, and feel.
          </ScrollFloat>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 auto-rows-fr">
            {[buildImg1, buildImg2, buildImg3].map((img, index) => (
              <motion.div
                key={index}
                variants={popCardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                whileHover={hoverVariant}
                className="relative overflow-hidden rounded-2xl shadow-2xl group cursor-pointer bg-zinc-900/50 border border-zinc-700/40"
              >
                <div className="absolute inset-0 rounded-2xl pointer-events-none ring-1 ring-inset ring-white/10 group-hover:ring-white/25 transition-all" />
                <img
                  src={img}
                  alt={`Build ${index + 1}`}
                  className="w-full h-56 sm:h/full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent flex items:end p-6 sm:p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <ScrollFloat textClassName="text-white text-lg sm:text-xl font-semibold tracking-wide">
                    Build {index + 1}
                  </ScrollFloat>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 sm:mt-16 px-2">
            <MotionLink
              to="/gallery"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 sm:px-12 py-4 sm:py-5 border-2 border-zinc-300/70 text-zinc-100 font-bold text-base sm:text-lg uppercase tracking-widest rounded-xl sm:rounded-full transition duration-300 hover:bg-white/10"
              whileHover={hoverVariant}
            >
              View Gallery <ArrowRight className="ml-3 sm:ml-4 h-5 w-5 sm:h-6 sm:w-6" />
            </MotionLink>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section
        ref={testimonialsRef}
        className="py-24 sm:py-40 px-4 sm:px-8 bg-gradient-to-b from-black to-zinc-950"
      >
        <div className="max-w-7xl mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-12">
            {[
              { name: "Marcus L.", quote: "The team installed my new wheels perfectly — smooth ride and head-turning look." },
              { name: "Sarah K.", quote: "Great service, fast turnaround, and the suspension upgrade feels amazing." },
              { name: "James R.", quote: "Professional and friendly staff. They treated my car like their own." },
            ].map((t, i) => (
              <motion.div
                key={i}
                variants={popCardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                whileHover={hoverVariant}
                className="bg-zinc-900/70 p-6 sm:p-10 rounded-2xl border border-zinc-600/40 shadow-xl backdrop-blur"
              >
                <Quote className="w-10 h-10 sm:w-12 sm:h-12 text-zinc-200 mb-4 sm:mb-6 mx-auto" />
                <ScrollFloat
                  containerClassName="mb-6 sm:mb-8"
                  textClassName="text-zinc-200 text-base sm:text-xl leading-relaxed italic font-light"
                >
                  "{t.quote}"
                </ScrollFloat>
                <ScrollFloat textClassName="text-zinc-100 font-semibold text-base sm:text-lg">
                  {t.name}
                </ScrollFloat>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section
        ref={igRef}
        className="py-24 sm:py-40 px-4 sm:px-8 bg-gradient-to-t from-zinc-950 to-black text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-10"
            style={{ backgroundImage: `url('${marbleTx}')`, backgroundSize: "cover" }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(65%_65%_at_50%_50%,rgba(255,255,255,0.06)_0%,rgba(0,0,0,0)_60%)]" />
        </div>

        <ScrollFloat
          containerClassName="mb-3 sm:mb-6 relative z-10"
          textClassName="font-cinzel text-4xl sm:text-6xl font-bold uppercase"
        >
          Follow the Work
        </ScrollFloat>

        <ScrollFloat
          containerClassName="mb-6 sm:mb-10 relative z-10 px-2"
          textClassName="text-zinc-300 text-base sm:text-2xl font-light"
        >
          Builds, wheels, and daily shop clips.
        </ScrollFloat>

        <motion.a
          href="https://instagram.com/kingswheelslawton"
          target="_blank"
          rel="noreferrer"
          className="relative z-10 inline-flex sm:inline-flex items-center gap-2 sm:gap-4 text-zinc-100 hover:text-white text-base sm:text-2xl font-bold uppercase tracking-widest px-4 sm:px-6 py-3 rounded-xl sm:rounded-full border border-white/20 w-full sm:w-auto max-w-[28rem] sm:max-w-none mx-auto overflow-hidden"
          whileHover={hoverVariant}
        >
          <span className="truncate">@kingswheelslawton</span>
          <Instagram className="flex-shrink-0 w-6 h-6 sm:w-10 sm:h-10" />
        </motion.a>
      </section>

      {/* FINAL CTA */}
      <section ref={ctaRef} className="py-24 sm:py-32 px-4 sm:px-8 bg-black text-center">
        <div>
          <h3 className="font-cinzel text-3xl sm:text-5xl font-bold mb-4 sm:mb-6">
            Ready for a cleaner stance
          </h3>

          <p className="text-zinc-300 text-base sm:text-xl mb-8 sm:mb-10 max-w-3xl mx-auto font-light px-2">
            Call now to talk wheels, suspension, and install timing. We keep it simple and sharp.
          </p>

          {/* GLASS CTA (was solid white) */}
          <motion.a
            href="tel:5805076262"
            className="w-full sm:w-auto inline-flex items-center justify-center px-10 sm:px-14 py-4 sm:py-6 bg-white/10 text-white border border-white/25 backdrop-blur-md rounded-xl sm:rounded-full transition duration-300 shadow-2xl hover:bg-white/15 hover:border-white/40"
            whileHover={hoverVariant}
          >
            Call 580 507 6262 <ArrowRight className="ml-3 sm:ml-4 h-5 w-5 sm:h-7 sm:w-7" />
          </motion.a>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
