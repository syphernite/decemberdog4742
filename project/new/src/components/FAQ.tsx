// FAQ.tsx
import { useState, useLayoutEffect, useRef } from 'react';
import { Plus, Minus } from 'lucide-react';
import { faqs } from '../data/content';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function FAQ() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 60 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            end: 'top 40%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" ref={sectionRef} className="bg-black py-24">
      <div className="max-w-[1320px] mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            YOUR QUESTIONS.
            <br />
            ANSWERED.
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Still unsure? Here's everything you need to know before starting with Built4You.
          </p>
        </div>

        <div className="max-w-4xl mx-auto border border-white/10">
          {faqs.map((faq, index) => (
            <div key={faq.id} className="border-b border-white/10 last:border-b-0">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.02] transition-colors duration-200"
                aria-expanded={openIndex === index}
              >
                <span className="text-white text-sm font-medium tracking-wide pr-8">
                  {faq.question}
                </span>
                <span className="flex-shrink-0 text-white">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
