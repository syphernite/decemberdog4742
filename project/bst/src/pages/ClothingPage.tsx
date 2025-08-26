import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, Instagram, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FaSnapchatGhost } from 'react-icons/fa';

const FORM_ENDPOINT = 'https://formspree.io/f/meolqpjn';

const ClothingPage = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const startedRef = useRef(false);

  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'err'>('idle');

  // particles background
  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    const DPR = Math.min(window.devicePixelRatio || 1, 2);

    let w = 0, h = 0;
    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.floor(w * DPR);
      canvas.height = Math.floor(h * DPR);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    type P = { x: number; y: number; vx: number; vy: number; r: number; a: number };
    const count = Math.min(120, Math.floor(w * h / 13000));
    const parts: P[] = new Array(count).fill(0).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      r: 1 + Math.random() * 1.8,
      a: 0.08 + Math.random() * 0.08
    }));

    const step = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, w, h);

      parts.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(234,179,8,${p.a})`;
        ctx.fill();
      });

      rafRef.current = requestAnimationFrame(step);
    };
    step();

    return () => {
      window.removeEventListener('resize', resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // glitch + spin CSS
  useEffect(() => {
    const id = 'staks-coming-css';
    if (document.getElementById(id)) return;
    const style = document.createElement('style');
    style.id = id;
    style.innerHTML = `
      @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      .animate-spin-slow { animation: spin-slow 6s linear infinite; }

      .glitch { position: relative; display: inline-block; }
      .glitch::before, .glitch::after {
        content: attr(data-text);
        position: absolute; left: 0; top: 0;
        pointer-events: none; opacity: 0.9;
      }
      .glitch::before { color: #facc15; mix-blend-mode: screen; }
      .glitch::after { color: #fde047; mix-blend-mode: screen; }
      @keyframes glitchTop {
        0% { clip-path: inset(0 0 60% 0); transform: translate(-2px,-2px); }
        20% { clip-path: inset(0 0 40% 0); transform: translate(2px,2px); }
        40% { clip-path: inset(0 0 70% 0); transform: translate(-1px,1px); }
        60% { clip-path: inset(0 0 30% 0); transform: translate(3px,-1px); }
        80% { clip-path: inset(0 0 65% 0); transform: translate(-3px,2px); }
        100% { clip-path: inset(0 0 60% 0); transform: translate(0,0); }
      }
      @keyframes glitchBottom {
        0% { clip-path: inset(40% 0 0 0); transform: translate(2px,2px); }
        20% { clip-path: inset(60% 0 0 0); transform: translate(-2px,-2px); }
        40% { clip-path: inset(30% 0 0 0); transform: translate(1px,-1px); }
        60% { clip-path: inset(70% 0 0 0); transform: translate(-3px,1px); }
        80% { clip-path: inset(35% 0 0 0); transform: translate(3px,-2px); }
        100% { clip-path: inset(40% 0 0 0); transform: translate(0,0); }
      }
      .glitch-run::before { animation: glitchTop 1s steps(2,end) 1; }
      .glitch-run::after  { animation: glitchBottom 1s steps(2,end) 1; }

      @keyframes check-pop {
        0%   { transform: scale(0.6); opacity: 0; }
        100% { transform: scale(1); opacity: 1; }
      }
      .animate-check-pop {
        animation: check-pop 300ms ease-out forwards;
      }
    `;
    document.head.appendChild(style);
  }, []);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'sending') return;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('err');
      return;
    }
    try {
      setStatus('sending');
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      if (res.ok) {
        setStatus('ok');
        setEmail('');
      } else setStatus('err');
    } catch {
      setStatus('err');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      <nav className="fixed top-0 left-0 z-50 p-6">
        <Link to="/select" className="flex items-center text-gray-300 hover:text-white transition-colors duration-300">
          <ArrowLeft className="w-6 h-6 mr-2" />
          <span className="font-medium">BACK</span>
        </Link>
      </nav>

      <div className="relative z-10 flex min-h-screen items-center justify-center text-center px-6">
        <div>
          <img
            src={`${import.meta.env.BASE_URL}staks_logo.png`}
            alt="Staks Logo"
            className="h-48 md:h-64 mx-auto mb-6 animate-pulse"
          />
          <h1 className="text-5xl md:text-7xl font-light tracking-widest mb-3">STAKS</h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10">CLOTHING COLLECTION</p>

          <h2
            data-text="NEW DROP COMING SOON"
            className="glitch text-3xl md:text-4xl font-semibold text-yellow-400 mb-6 select-none hover:glitch-run inline-block"
            onMouseEnter={(e) => e.currentTarget.classList.add('glitch-run')}
            onAnimationEnd={(e) => e.currentTarget.classList.remove('glitch-run')}
          >
            NEW DROP COMING SOON
          </h2>

          {status !== 'ok' && (
            <>
              <form
                onSubmit={onSubmit}
                className="mx-auto mt-4 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xl"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); if (status !== 'idle') setStatus('idle'); }}
                  placeholder="Your email"
                  className="w-full sm:w-96 px-4 py-3 bg-black/60 border border-yellow-500/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white placeholder-gray-500"
                  aria-label="Email"
                  required
                />
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="px-6 py-3 rounded-lg border-2 border-yellow-400 text-yellow-400 font-medium tracking-wide hover:bg-yellow-400 hover:text-black transition-all duration-300 disabled:opacity-60"
                >
                  {status === 'sending' ? 'Sending' : 'Notify me'}
                </button>
              </form>
              <div className="h-6 mt-2">
                {status === 'err' && <p className="text-red-400 text-sm">Enter a valid email.</p>}
              </div>
            </>
          )}

          {status === 'ok' && (
            <div className="mt-6 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center animate-check-pop shadow-[0_0_15px_rgba(34,197,94,0.6)]">
                <Check className="w-10 h-10 text-white" strokeWidth={3} />
              </div>
            </div>
          )}

          <div className="mt-8 mx-auto w-20 h-20 relative">
            <svg viewBox="0 0 100 100" className="absolute inset-0 animate-spin-slow">
              <circle cx="50" cy="50" r="42" stroke="#facc15" strokeWidth="3" fill="none" strokeLinecap="round" strokeDasharray="40 260" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-yellow-400">⏰</div>
          </div>
        </div>
      </div>

      <footer className="relative z-10 py-8 px-6 border-t border-gray-800">
        <div className="max-w-4xl mx-auto flex justify-center space-x-6">
          <a href="https://instagram.com/staks.tn" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-yellow-400 transition-colors">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="https://t.snapchat.com/RInsoZeO" target="_blank" rel="noopener noreferrer" aria-label="Snapchat" className="flex items-center space-x-2 hover:text-yellow-400 transition-colors">
            <FaSnapchatGhost className="w-6 h-6" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default ClothingPage;
