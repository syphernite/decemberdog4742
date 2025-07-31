import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';

// Helper Hook: Intersection Observer for section animations
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

// Reusable Modal Component
const OfferModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const focusable = modalRef.current?.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (isOpen && focusable?.length) {
      focusable[0]?.focus();
    }

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        aria-modal
        role="dialog"
        tabIndex={-1}
      >
        <motion.div
          ref={modalRef}
          className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 relative transform perspective-1000"
          initial={{ rotateY: 90, scale: 0.5 }}
          animate={{ rotateY: 0, scale: 1 }}
          exit={{ rotateY: 90, scale: 0.5 }}
          transition={{ type: 'spring', stiffness: 80 }}
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-black"
            aria-label="Close modal"
          >
            ✕
          </button>
          <h2 className="text-xl font-bold mb-3 text-center text-gray-800">🚀 Get Online in 72 Hours</h2>
          <p className="text-center text-gray-600 mb-4">
            Book your <span className="font-semibold text-blue-600">free demo call</span> and we’ll build your homepage — fast.
          </p>

          <div className="flex flex-col gap-3">
            <a
              href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0hRscFCqAlikNLhx7I1rb-xghG1bygoubGeEZ3G2r-JoIKLhNVX_Lr2nV6qlc8EFCk6Ourjn1F?gv=true"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition text-center font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
            >
              📞 Schedule My Demo
            </a>
            <div className="flex justify-center text-sm gap-2 text-gray-500">
              <a
                href="/pricing#basic"
                className="hover:underline focus:outline-none focus:ring-1 rounded"
              >
                Basic
              </a>
              <span>·</span>
              <a
                href="/pricing#pro"
                className="hover:underline focus:outline-none focus:ring-1 rounded"
              >
                Pro
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
};

const WhyWeCreatedBuilt4You: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setModalOpen(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="bg-gray-50 text-gray-800 min-h-screen font-sans">
      <section className="text-center py-20 px-6 bg-white shadow">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Why We Created Built4You</h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          We exist to give small businesses the online edge they deserve — fast, affordable, and hassle-free.
        </p>
        <button
          onClick={() => setModalOpen(true)}
          className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg relative animate-pulse focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
        >
          <span className="relative z-10">✨ Let’s Build Yours</span>
        </button>
      </section>

      {[
        {
          title: 'Offline = Invisible in 2025',
          content: 'People search online first. If they can’t find your business, they’ll find someone else. We help local legends stay visible.'
        },
        {
          title: 'Agencies Are Too Slow + Pricey',
          content: 'Small businesses can’t wait 6 weeks or pay $5K. We deliver polished sites fast — sometimes within 3 days.'
        },
        {
          title: 'Built for Real People',
          content: 'Our clients are barbers, mechanics, bakers, cleaners, artists — people with hustle but no time to learn web design.'
        },
        {
          title: 'Simple. Fast. Done For You.',
          content: 'Send us your info. Pick a style. We build it. You focus on your business while we make sure people can find it.'
        }
      ].map(({ title, content }, i) => {
        const { ref, isVisible } = useInViewAnimation();
        return (
          <motion.section
            ref={ref}
            key={i}
            className="py-16 px-6 max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-3">{title}</h2>
            <p className="text-gray-600">{content}</p>
          </motion.section>
        );
      })}

      <div className="w-full max-w-4xl mx-auto px-4 pb-20">
        <h2 className="text-2xl font-semibold text-center mb-6">📅 Book a Free Demo Call</h2>
        <iframe
          src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0hRscFCqAlikNLhx7I1rb-xghG1bygoubGeEZ3G2r-JoIKLhNVX_Lr2nV6qlc8EFCk6Ourjn1F?gv=true"
          width="100%"
          height="600"
          className="w-full rounded-xl border shadow-lg"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Google Booking"
        />
      </div>

      <div className="fixed bottom-4 left-0 right-0 px-4 md:hidden z-40">
        <button
          onClick={() => setModalOpen(true)}
          className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg shadow-lg transition font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400"
        >
          🚀 Get My Site
        </button>
      </div>

      <OfferModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
};

export default WhyWeCreatedBuilt4You;
