import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { Terminal, Zap, Cpu, Network, Database, Shield, ArrowRight } from 'lucide-react';

export function HeroSection({ onLoginClick }: { onLoginClick: () => void }) {
  const [matrixRain, setMatrixRain] = useState<string[]>([]);
  const [neuralActivity, setNeuralActivity] = useState(0);
  const [systemBoot, setSystemBoot] = useState(false);
  const [glitchText, setGlitchText] = useState('');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  // Matrix Rain Effect
  useEffect(() => {
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const rain = Array.from({ length: 50 }, () =>
      chars[Math.floor(Math.random() * chars.length)]
    );
    setMatrixRain(rain);

    const interval = setInterval(() => {
      setMatrixRain(prev => prev.map(() =>
        chars[Math.floor(Math.random() * chars.length)]
      ));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // Neural Network Animation
  useEffect(() => {
    const interval = setInterval(() => {
      setNeuralActivity(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Canvas Particle System
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      color: string;
      size: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        color: ['#00ffff', '#ff00ff', '#00ff00', '#0080ff'][Math.floor(Math.random() * 4)],
        size: Math.random() * 3 + 1
      });
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 17, 34, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        // Draw connections
        particles.slice(i + 1).forEach(other => {
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(0, 255, 255, ${0.2 * (1 - distance / 100)})`;
            ctx.stroke();
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const handleSystemBoot = () => {
    setSystemBoot(true);
    setGlitchText('INITIALIZING NEURAL MATRIX...');

    setTimeout(() => setGlitchText('CONNECTING TO CYBERSPACE...'), 1000);
    setTimeout(() => setGlitchText('LOADING COMMAND PROTOCOLS...'), 2000);
    setTimeout(() => setGlitchText('SYSTEM READY'), 3000);
    setTimeout(() => {
      setSystemBoot(false);
      onLoginClick();
    }, 4000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden matrix-bg">
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'transparent' }}
      />

      {/* Matrix Rain Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {matrixRain.map((char, i) => (
          <motion.div
            key={i}
            className="absolute text-green-400 font-mono text-sm opacity-60"
            style={{
              left: `${(i * 2) % 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, window.innerHeight],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            {char}
          </motion.div>
        ))}
      </div>

      {/* Neural Network Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          {Array.from({ length: 20 }, (_, i) => (
            <motion.circle
              key={i}
              cx={Math.random() * 100}
              cy={Math.random() * 100}
              r="0.5"
              fill="#00ffff"
              opacity={neuralActivity > i * 5 ? 1 : 0.3}
              animate={{
                scale: neuralActivity > i * 5 ? [1, 1.5, 1] : 1,
              }}
              transition={{ duration: 0.5 }}
            />
          ))}
          {Array.from({ length: 15 }, (_, i) => (
            <motion.line
              key={`line-${i}`}
              x1={Math.random() * 100}
              y1={Math.random() * 100}
              x2={Math.random() * 100}
              y2={Math.random() * 100}
              stroke="#00ffff"
              strokeWidth="0.2"
              opacity="0.3"
              animate={{
                opacity: neuralActivity > i * 6 ? [0.3, 1, 0.3] : 0.1,
              }}
              transition={{ duration: 1 }}
            />
          ))}
        </svg>
      </div>

      {/* Holographic Interface */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="space-y-12"
        >
          {/* System Status */}
          <div className="flex justify-center items-center gap-8 mb-8">
            <motion.div
              className="flex items-center gap-2 cyber-card px-4 py-2"
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs font-mono text-green-400">SYSTEM ONLINE</span>
            </motion.div>

            <motion.div
              className="flex items-center gap-2 cyber-card px-4 py-2"
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              <Network className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-mono text-cyan-400">NEURAL LINK ACTIVE</span>
            </motion.div>

            <motion.div
              className="flex items-center gap-2 cyber-card px-4 py-2"
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              <Shield className="w-4 h-4 text-magenta-400" />
              <span className="text-xs font-mono text-magenta-400">FIREWALL ENGAGED</span>
            </motion.div>
          </div>

          {/* Main Title */}
          <div className="space-y-6">
            <motion.div
              className="inline-flex items-center gap-3 cyber-card px-6 py-3"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <Terminal className="w-5 h-5 text-cyan-400" />
              <span className="text-sm font-mono text-cyan-400 tracking-wider">
                CYBERNETIC BUSINESS MATRIX v2.0.7
              </span>
            </motion.div>

            <motion.h1
              className="text-6xl md:text-8xl font-mono font-bold leading-none"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.2, type: "spring", stiffness: 100 }}
            >
              <span className="block glitch-text" data-text="WE DON'T BUILD">
                WE DON'T BUILD
              </span>
              <span className="block text-cyan-400 hologram-text mt-4">
                WE CYBERNETICIZE
              </span>
              <span className="block text-4xl md:text-6xl text-magenta-400 mt-2">
                YOUR BUSINESS
              </span>
            </motion.h1>

            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
            >
              <p className="text-xl md:text-2xl text-gray-300 font-mono leading-relaxed">
                Transform your analog operations into a{' '}
                <span className="text-cyan-400 hologram-text">fully automated</span>{' '}
                digital ecosystem. Websites, AI automation, social media dominance,{' '}
                <span className="text-magenta-400">and complete business cybernetization</span>{' '}
                in one neural command center.
              </p>
            </motion.div>
          </div>

          {/* System Capabilities */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
          >
            {[
              { icon: Cpu, label: 'AI AUTOMATION', color: 'text-cyan-400' },
              { icon: Database, label: 'DATA MATRIX', color: 'text-green-400' },
              { icon: Network, label: 'SOCIAL CYBER', color: 'text-magenta-400' },
              { icon: Shield, label: 'DIGITAL FORTRESS', color: 'text-blue-400' },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                className="cyber-card p-4 text-center"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 255, 255, 0.5)' }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <item.icon className={`w-8 h-8 mx-auto mb-2 ${item.color}`} />
                <div className="text-xs font-mono font-bold tracking-wider">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
          >
            <Button
              size="lg"
              className="cyber-button text-lg px-12 py-6 font-mono font-bold tracking-wider"
              onClick={handleSystemBoot}
              disabled={systemBoot}
            >
              {systemBoot ? (
                <motion.div
                  className="flex items-center gap-3"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Cpu className="w-6 h-6 animate-spin" />
                  <span>BOOTING NEURAL MATRIX...</span>
                </motion.div>
              ) : (
                <>
                  <Zap className="w-6 h-6 mr-3" />
                  <span>INITIALIZE CYBERNETIC PROTOCOL</span>
                  <ArrowRight className="w-6 h-6 ml-3" />
                </>
              )}
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="cyber-border text-lg px-12 py-6 font-mono font-bold tracking-wider text-cyan-400 border-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300"
            >
              <Terminal className="w-6 h-6 mr-3" />
              ACCESS TERMINAL
            </Button>
          </motion.div>

          {/* Boot Sequence */}
          <AnimatePresence>
            {systemBoot && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="cyber-card p-8 max-w-2xl mx-auto mt-8"
              >
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-mono font-bold text-cyan-400 mb-2">
                      SYSTEM BOOT SEQUENCE
                    </div>
                    <div className="text-lg font-mono text-magenta-400 terminal-text">
                      {glitchText}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm font-mono">
                      <span className="text-cyan-400">Neural Link:</span>
                      <span className="text-green-400">ESTABLISHED</span>
                    </div>
                    <div className="flex justify-between text-sm font-mono">
                      <span className="text-cyan-400">Data Matrix:</span>
                      <span className="text-green-400">SYNCHRONIZED</span>
                    </div>
                    <div className="flex justify-between text-sm font-mono">
                      <span className="text-cyan-400">Command Center:</span>
                      <span className="text-green-400">ONLINE</span>
                    </div>
                  </div>

                  <div className="w-full bg-gray-800 rounded-none h-2 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-cyan-400 to-magenta-400"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 3 }}
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Floating Data Streams */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        {Array.from({ length: 5 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute text-cyan-400 font-mono text-xs opacity-30"
            style={{
              left: `${20 + i * 15}%`,
              top: '-20px',
            }}
            animate={{
              y: ['0vh', '120vh'],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: 'linear',
            }}
          >
            {Array.from({ length: 20 }, () => '01010101').join('\n')}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
