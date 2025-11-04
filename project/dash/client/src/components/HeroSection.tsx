import { useEffect, useState, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine, ISourceOptions } from "@tsparticles/engine";
import { GradientText } from './GradientText';
import { Button } from './ui/button';
import { Zap, Sparkles, ArrowRight } from 'lucide-react';

export function HeroSection({ onLoginClick }: { onLoginClick: () => void }) {
  const [init, setInit] = useState(false);
  const [showTypewriter, setShowTypewriter] = useState(false);
  const [scanning, setScanning] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
      setTimeout(() => setShowTypewriter(true), 500);
    });
  }, []);

  const particlesOptions: ISourceOptions = useMemo(() => ({
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 120,
    particles: {
      color: {
        value: ["#059669", "#2563eb", "#7c3aed"],
      },
      links: {
        color: "#059669",
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: ["circle", "triangle", "square"],
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  }), []);

  const handleInitiateScan = useCallback(() => {
    setScanning(true);
    setTimeout(() => {
      setScanning(false);
      onLoginClick();
    }, 3000);
  }, [onLoginClick]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" data-testid="hero-section">
      {init && (
        <div className="absolute inset-0">
          <Particles
            id="tsparticles"
            options={particlesOptions}
          />
        </div>
      )}
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-6 py-3 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Digital Ecosystems for Modern Business</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            {showTypewriter && (
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "auto" }}
                transition={{ duration: 2, ease: "linear" }}
                className="inline-block overflow-hidden whitespace-nowrap"
                data-testid="typewriter-text"
              >
                We Don't Build Websites.
              </motion.span>
            )}
            <br />
            <span className="mt-4 inline-block">
              We Build <GradientText gradient="emerald-blue">Digital Ecosystems</GradientText>
            </span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Transform your small business with complete digital solutions: websites, automation, 
            Google Business optimization, and social media management—all in one command center.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="group relative overflow-hidden px-8"
              onClick={handleInitiateScan}
              disabled={scanning}
              data-testid="button-initiate-scan"
            >
              {scanning ? (
                <>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0"
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <span className="relative">Analyzing System...</span>
                </>
              ) : (
                <>
                  <Zap className="w-5 h-5 mr-2" />
                  <span className="relative">Initiate System Scan</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="glass hover-elevate px-8"
              data-testid="button-learn-more"
            >
              Learn More
            </Button>
          </div>

          {scanning && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass rounded-md p-6 max-w-md mx-auto mt-8"
              data-testid="scanning-status"
            >
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Analyzing digital presence...</span>
                  <span className="text-primary">33%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Scanning automation potential...</span>
                  <span className="text-secondary">66%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Preparing command center...</span>
                  <span className="text-accent">99%</span>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
