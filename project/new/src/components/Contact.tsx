// Contact.tsx
import { useState, FormEvent, useLayoutEffect, useRef } from 'react';
import { Send } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Contact() {
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

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    honeypot: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (formData.honeypot) {
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (data.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          honeypot: '',
        });
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again.');
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="bg-black py-24 border-t border-white/10"
    >
      <div className="max-w-[900px] mx-auto px-6 md:px-8">
        <div className="text-center mb-14">
          <p className="text-white/50 text-[11px] md:text-xs tracking-[0.3em] uppercase mb-4">
            Start a project with Built4You
          </p>
          <h2 className="text-white text-3xl md:text-5xl font-semibold md:font-bold mb-6 tracking-tight leading-tight">
            Tell us what you
            <br />
            want to fix first.
          </h2>
          <p className="text-white/60 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
            Share a quick snapshot of your business, what is not working online right now,
            and what success would look like over the next six to twelve months.
            We will respond with next steps, not a copy pasted pitch.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Honeypot */}
            <div className="hidden">
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div>
              <label
                htmlFor="name"
                className="block text-white text-[11px] md:text-xs mb-2 tracking-[0.22em] uppercase"
              >
                Name *
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-black border border-white/20 text-white px-4 py-3 text-sm focus:border-white focus:outline-none transition-colors duration-200 placeholder:text-white/30"
                disabled={status === 'loading'}
                placeholder="Who should we address in our reply?"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-white text-[11px] md:text-xs mb-2 tracking-[0.22em] uppercase"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-black border border-white/20 text-white px-4 py-3 text-sm focus:border-white focus:outline-none transition-colors duration-200 placeholder:text-white/30"
                disabled={status === 'loading'}
                placeholder="Where should we send details?"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-white text-[11px] md:text-xs mb-2 tracking-[0.22em] uppercase"
              >
                Phone (optional)
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-black border border-white/20 text-white px-4 py-3 text-sm focus:border-white focus:outline-none transition-colors duration-200 placeholder:text-white/30"
                disabled={status === 'loading'}
                placeholder="Best number for project or call routing questions"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-white text-[11px] md:text-xs mb-2 tracking-[0.22em] uppercase"
              >
                Project details *
              </label>
              <textarea
                id="message"
                required
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-black border border-white/20 text-white px-4 py-3 text-sm focus:border-white focus:outline-none transition-colors duration-200 resize-none placeholder:text-white/30"
                disabled={status === 'loading'}
                placeholder="Briefly describe your business, what you are selling, what is not working online right now, and how we can help with web, AI reception, or visibility."
              />
            </div>

            {status === 'error' && (
              <div className="text-red-400 text-sm">{errorMessage}</div>
            )}

            {status === 'success' && (
              <div className="text-emerald-400 text-sm">
                Thank you. We will review your note and get back to you within one business
                day.
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-white text-black px-8 py-4 text-[11px] md:text-sm font-medium tracking-[0.22em] uppercase hover:bg-black hover:text-white border border-white transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? (
                'Sending...'
              ) : (
                <>
                  Submit inquiry
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>

            <p className="text-white/40 text-[11px] mt-3 text-center tracking-[0.18em] uppercase">
              No spam, no newsletter, just a focused reply.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
