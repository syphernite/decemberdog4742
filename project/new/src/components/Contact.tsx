import { useState, FormEvent } from 'react';
import { Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    honeypot: ''
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
          honeypot: ''
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
    <section id="contact" className="bg-black py-24 border-t border-white/10">
      <div className="max-w-[1320px] mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            YOUR BUSINESS
            <br />
            DESERVES BETTER
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Let's improve your online image and create digital work you can be proud of.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
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
              <label htmlFor="name" className="block text-white text-sm mb-2 tracking-wide">
                NAME *
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-black border border-white/20 text-white px-4 py-3 focus:border-white focus:outline-none transition-colors duration-200"
                disabled={status === 'loading'}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-white text-sm mb-2 tracking-wide">
                EMAIL *
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-black border border-white/20 text-white px-4 py-3 focus:border-white focus:outline-none transition-colors duration-200"
                disabled={status === 'loading'}
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-white text-sm mb-2 tracking-wide">
                PHONE (OPTIONAL)
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-black border border-white/20 text-white px-4 py-3 focus:border-white focus:outline-none transition-colors duration-200"
                disabled={status === 'loading'}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-white text-sm mb-2 tracking-wide">
                MESSAGE *
              </label>
              <textarea
                id="message"
                required
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-black border border-white/20 text-white px-4 py-3 focus:border-white focus:outline-none transition-colors duration-200 resize-none"
                disabled={status === 'loading'}
              />
            </div>

            {status === 'error' && (
              <div className="text-red-400 text-sm">{errorMessage}</div>
            )}

            {status === 'success' && (
              <div className="text-green-400 text-sm">
                Thank you! We'll be in touch soon.
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-white text-black px-8 py-4 text-sm font-medium tracking-wide hover:bg-gray-200 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? (
                'SENDING...'
              ) : (
                <>
                  START YOUR PROJECT TODAY
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
