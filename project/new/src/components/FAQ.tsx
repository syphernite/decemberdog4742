import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { faqs } from '../data/content';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-black py-24">
      <div className="max-w-[1320px] mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            YOUR QUESTIONS.
            <br />
            ANSWERED.
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Still unsure? Here's everything you need to know before starting with KOVSK.
          </p>
        </div>

        <div className="max-w-4xl mx-auto border border-white/10">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="border-b border-white/10 last:border-b-0"
            >
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
