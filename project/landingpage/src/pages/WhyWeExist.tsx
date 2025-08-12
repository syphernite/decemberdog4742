// src/pages/WhyWeExist.tsx
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function useInViewAnimation(threshold = 0.3) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);
  return { ref, isVisible };
}

const WhyWeExist: React.FC = () => {
  return (
    <main className="relative z-10 bg-transparent text-gray-900 dark:text-white min-h-screen font-sans">
      {/* Hero */}
      <section className="text-center py-20 px-6 bg-white/90 dark:bg-slate-800/80 shadow rounded-none">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
          Why We Created Built4You
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-200 max-w-xl mx-auto">
          We exist to give small businesses the online edge they deserve — fast, affordable, and hassle free.
        </p>
      </section>

      {/* Value sections */}
      {[
        {
          title: 'Offline = Invisible in 2025',
          content:
            'People search online first. If they can’t find your business, they will find someone else. We help local legends stay visible.',
        },
        {
          title: 'Agencies Are Too Slow + Pricey',
          content:
            'Small businesses can’t wait 6 weeks or pay $5K. We deliver polished sites fast, sometimes within 3 days.',
        },
        {
          title: 'Built for Real People',
          content:
            'Our clients are barbers, mechanics, bakers, cleaners, artists. People with hustle but no time to learn web design.',
        },
        {
          title: 'Simple. Fast. Done For You.',
          content:
            'Send us your info. Pick a style. We build it. You focus on your business while we make sure people can find it.',
        },
      ].map(({ title, content }, i) => {
        const { ref, isVisible } = useInViewAnimation();
        return (
          <div key={i} ref={ref}>
            <motion.section
              className="py-12 px-6 max-w-4xl mx-auto text-center bg-black/40 dark:bg-slate-950/50 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">
                {title}
              </h2>
              <p className="text-white/90">{content}</p>
            </motion.section>
          </div>
        );
      })}

      {/* Soft CTA for this page */}
      <section className="py-10 px-6 max-w-3xl mx-auto text-center">
        <h3 className="text-2xl font-semibold mb-4">See what we build</h3>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link
            to="/demos"
            className="inline-flex items-center justify-center rounded-lg px-5 py-3 bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
          >
            View Demos
          </Link>
          <Link
            to="/pricing"
            className="inline-flex items-center justify-center rounded-lg px-5 py-3 bg-teal-600 text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400"
          >
            See Pricing
          </Link>
        </div>
      </section>

      {/* Booking calendar */}
      <div
        id="calendar"
        className="w-full max-w-5xl mx-auto px-6 py-10 scroll-mt-20 bg-white rounded-2xl shadow-xl"
        style={{ colorScheme: 'light', minHeight: '700px' }}
      >
        <h2 className="text-3xl font-semibold text-center mb-8 text-black">
          📅 Book a Free Demo Call
        </h2>
        <iframe
          src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0hRscFCqAlikNLhx7I1rb-xghG1bygoubGeEZ3G2r-JoIKLhNVX_Lr2nV6qlc8EFCk6Ourjn1F?gv=true"
          width="100%"
          height="650"
          className="rounded-xl border border-gray-300"
          style={{ border: 0, backgroundColor: 'white' }}
          allowFullScreen
          loading="lazy"
          title="Google Booking"
        />
      </div>
    </main>
  );
};

export default WhyWeExist;
