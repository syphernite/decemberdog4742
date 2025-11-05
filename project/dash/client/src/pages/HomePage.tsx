import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import {
  ArrowRight,
  Zap,
  Sparkles,
  Rocket,
  Brain,
  Code,
  Palette,
  Globe,
  Heart,
  Star,
  Moon,
  Sun,
  Cloud,
  Flame,
  Wind,
  Droplets,
  Flower,
  TreePine,
  Mountain,
  Waves,
  Eye,
  Target,
  Compass,
  Lightbulb,
  Coffee,
  Music,
  Camera,
  PenTool,
  Layers,
  Shuffle,
  RotateCcw,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Mic,
  MicOff,
  Video,
  VideoOff,
  Phone,
  Mail,
  MapPin,
  Clock,
  Calendar,
  Users,
  User,
  Crown,
  Trophy,
  Award,
  Gift,
  Diamond,
  Gem,
  Key,
  Lock,
  Unlock,
  Shield,
  Sword,
  Wand2,
  Scroll,
  BookOpen,
  Feather,
  Anchor,
  Ship,
  Plane,
  Car,
  Bike,
  Train,
  Bus,
  Truck,
  Tractor,
  Hammer,
  Wrench,
  Cog,
  Settings,
  Sliders,
  BarChart3,
  PieChart,
  TrendingUp,
  TrendingDown,
  Activity,
  Battery,
  Wifi,
  Bluetooth,
  Cpu,
  HardDrive,
  Monitor,
  Keyboard,
  Mouse,
  Printer,
  Smartphone,
  Tablet,
  Laptop,
  Gamepad2,
  Headphones,
  Speaker,
  Radio,
  Film,
  Clapperboard,
  Scissors,
  Crop,
  Move,
  ZoomIn,
  ZoomOut,
  RotateCw,
  FlipHorizontal,
  FlipVertical,
  Type,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  List,
  ListOrdered,
  Quote,
  Link,
  Unlink,
  Hash,
  AtSign,
  DollarSign,
  Euro,
  PoundSterling,
  Bitcoin,
  CreditCard,
  Wallet,
  PiggyBank,
  Banknote,
  Receipt,
  ShoppingCart,
  Package,
  Fuel,
  Gauge,
  Thermometer,
  Snowflake
} from 'lucide-react';

export default function HomePage() {
  const navigate = useNavigate();
  const [currentPhase, setCurrentPhase] = useState(0);
  // start playing by default for full visual experience
  const [isPlaying, setIsPlaying] = useState(true);
  const [chaosLevel, setChaosLevel] = useState(0);

  // Crazy refs for wild animations
  const chaosRef = useRef<HTMLDivElement>(null);
  const morphRef = useRef<HTMLDivElement>(null);
  const quantumRef = useRef<HTMLDivElement>(null);
  const dimensionRef = useRef<HTMLDivElement>(null);

  // Wild state management (reduced for safe-mode)
  const [morphingElements, setMorphingElements] = useState([
    { id: 1, shape: 'circle', color: '#ff6b6b', size: 60, x: 120, y: 120, rotation: 0 },
    { id: 2, shape: 'square', color: '#4ecdc4', size: 80, x: 260, y: 180, rotation: 45 },
    { id: 3, shape: 'triangle', color: '#45b7d1', size: 70, x: 380, y: 220, rotation: 90 }
  ]);
  

  // Canvas-based particle system for performance
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [particleCount, setParticleCount] = useState<number>(300);
  const particlesRef = useRef<Array<any>>([]);

  // Crazy phases of the website
  const phases = [
    { name: 'CHAOS', color: '#ff6b6b', theme: 'destructive' },
    { name: 'CREATION', color: '#4ecdc4', theme: 'constructive' },
    { name: 'EVOLUTION', color: '#45b7d1', theme: 'transformative' },
    { name: 'HARMONY', color: '#f9ca24', theme: 'balanced' },
    { name: 'TRANSCENDENCE', color: '#6c5ce7', theme: 'infinite' }
  ];

  // Wild animations
  useEffect(() => {
    if (!isPlaying) return;

    const tl = gsap.timeline();

    // Phase transition animation
    tl.to(chaosRef.current, {
      backgroundColor: phases[currentPhase].color,
      duration: 2,
      ease: "power2.inOut"
    });

    // Morphing elements animation
    morphingElements.forEach((element, index) => {
      gsap.to(`.morph-${element.id}`, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        rotation: Math.random() * 360,
        scale: Math.random() * 2 + 0.5,
        duration: 3 + Math.random() * 2,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
        delay: index * 0.2
      });
    });

    return () => {
      tl.kill();
    };
  }, [currentPhase, isPlaying, morphingElements]);

  // Canvas animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let rafId: number;
    let lastTime = performance.now();

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initParticles = () => {
      const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7', '#fd79a8', '#00b894'];
      particlesRef.current = Array.from({ length: particleCount }, (_, i) => ({
        id: i,
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 100,
        entropy: Math.random()
      }));
      setParticleCount(particlesRef.current.length);
    };

    const update = (dt: number) => {
      const w = canvas.width;
      const h = canvas.height;
      for (const p of particlesRef.current) {
        // simple physics + bounce
        p.x += p.vx * dt * 0.06;
        p.y += p.vy * dt * 0.06;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        // occasional quantum jolt
        if (Math.random() < 0.002) {
          p.vx += (Math.random() - 0.5) * 4;
          p.vy += (Math.random() - 0.5) * 4;
        }

        p.entropy += (Math.random() - 0.5) * 0.02;
        p.entropy = Math.max(0, Math.min(2, p.entropy));
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // subtle background glow
      ctx.fillStyle = 'rgba(0,0,0,0.25)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (const p of particlesRef.current) {
        ctx.beginPath();
        const alpha = 0.5 + (p.entropy * 0.25);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = alpha * 0.9;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = p.size * 4;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;
      }
    };

    const loop = (time: number) => {
      const dt = time - lastTime;
      lastTime = time;
      if (isPlaying) {
        update(dt);
      }
      draw();
      rafId = requestAnimationFrame(loop);
    };

    resize();
    initParticles();
    window.addEventListener('resize', resize);
    rafId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
    };
  }, [isPlaying, particleCount]);

  // Chaos level management
  useEffect(() => {
    const chaosInterval = setInterval(() => {
      setChaosLevel(prev => (prev + Math.random() * 10 - 5) % 100);
    }, 1000);

    return () => clearInterval(chaosInterval);
  }, []);

  const nextPhase = () => {
    setCurrentPhase(prev => (prev + 1) % phases.length);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const randomizeMorphs = () => {
    setMorphingElements(prev => prev.map(element => ({
      ...element,
      shape: ['circle', 'square', 'triangle', 'hexagon', 'star', 'diamond'][Math.floor(Math.random() * 6)],
      color: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7', '#fd79a8', '#00b894'][Math.floor(Math.random() * 7)],
      size: Math.random() * 100 + 20
    })));
  };

  const currentPhaseData = phases[currentPhase];

  return (
    <div className="min-h-screen overflow-hidden relative" ref={chaosRef} style={{ backgroundColor: currentPhaseData.color }}>
      {/* Debug overlay to confirm rendering (visible even when animations paused) */}
      <div className="fixed left-4 top-4 z-60 bg-white/10 text-white backdrop-blur-sm rounded-md px-3 py-2 text-sm border border-white/10">
        <div className="font-mono text-xs">DEBUG: RENDER OK</div>
        <div className="text-[11px] mt-1">Phase: {currentPhaseData.name} · Particles: {particleCount} · Playing: {isPlaying ? 'yes' : 'no'}</div>
      </div>
      {/* Quantum Particle Field (canvas-backed) */}
      <canvas ref={canvasRef} className="fixed inset-0 w-full h-full pointer-events-none z-0" />

      {/* Morphing Elements */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {morphingElements.map(element => (
          <div
            key={element.id}
            className={`morph-${element.id} absolute`}
            style={{
              left: element.x,
              top: element.y,
              width: element.size,
              height: element.size,
              backgroundColor: element.color,
              transform: `rotate(${element.rotation}deg)`,
              clipPath: element.shape === 'circle' ? 'circle(50%)' :
                       element.shape === 'square' ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' :
                       element.shape === 'triangle' ? 'polygon(50% 0%, 0% 100%, 100% 100%)' :
                       element.shape === 'hexagon' ? 'polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)' :
                       element.shape === 'star' ? 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' :
                       'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
            }}
          />
        ))}
      </div>

      {/* Control Panel */}
      <div className="fixed top-4 right-4 z-50 bg-black/80 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
        <div className="flex gap-2">
          <button
            onClick={togglePlay}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
          >
            {isPlaying ? <Pause className="w-4 h-4 text-white" /> : <Play className="w-4 h-4 text-white" />}
          </button>
          <button
            onClick={nextPhase}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
          >
            <Shuffle className="w-4 h-4 text-white" />
          </button>
          <button
            onClick={() => { window.location.href = '/api/auth/google'; }}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            title="Sign in with Google"
          >
            <span className="w-4 h-4 flex items-center justify-center text-white font-bold">G</span>
          </button>
          <button
            onClick={randomizeMorphs}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
          >
            <RotateCcw className="w-4 h-4 text-white" />
          </button>
        </div>
        <div className="mt-2 text-xs text-white/60">
          Chaos: {Math.round(chaosLevel)}%
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <div className="max-w-4xl mx-auto">

          {/* Phase Indicator */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-4 bg-black/50 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <div
                className="w-4 h-4 rounded-full animate-pulse"
                style={{ backgroundColor: currentPhaseData.color }}
              />
              <span className="text-white font-bold text-lg tracking-wider">
                PHASE {currentPhase + 1}: {currentPhaseData.name}
              </span>
              <span className="text-white/60 text-sm">
                {currentPhaseData.theme.toUpperCase()}
              </span>
            </div>
          </div>

          {/* Crazy Title */}
          <div className="mb-12">
            <h1 className="text-6xl md:text-8xl font-black mb-4" style={{ color: 'white', textShadow: `0 0 40px ${currentPhaseData.color}` }}>
              Built<span style={{ color: currentPhaseData.color }}>4</span>You
            </h1>
            <p className="text-xl md:text-2xl text-white/80 font-light max-w-2xl mx-auto leading-relaxed">
              Where Digital Chaos Meets Business Brilliance
            </p>
          </div>

          {/* Random Icon Grid */}
          <div className="grid grid-cols-8 md:grid-cols-12 gap-4 mb-12 max-w-2xl mx-auto">
            {Array.from({ length: 48 }, (_, i) => {
              const icons = [
                Zap, Sparkles, Rocket, Brain, Code, Palette, Globe, Heart, Star, Moon, Sun, Cloud,
                Flame, Wind, Droplets, Flower, TreePine, Mountain, Waves, Eye, Target, Compass,
                Lightbulb, Coffee, Music, Camera, PenTool, Layers, Shuffle, RotateCcw, Play, Pause,
                Volume2, VolumeX, Mic, MicOff, Video, VideoOff, Phone, Mail, MapPin, Clock, Calendar,
                Users, User, Crown, Trophy, Award, Gift, Diamond, Gem, Key, Lock, Unlock, Shield,
                Sword, Wand2, Scroll, BookOpen, Feather, Anchor, Ship, Plane, Car, Bike, Train, Bus,
                Truck, Tractor, Hammer, Wrench, Cog, Settings, Sliders, BarChart3, PieChart, TrendingUp,
                TrendingDown, Activity, Battery, Wifi, Bluetooth, Cpu, HardDrive, Monitor, Keyboard,
                Mouse, Printer, Smartphone, Tablet, Laptop, Gamepad2, Headphones, Speaker,
                Radio, Film, Clapperboard, Scissors, Crop, Move, ZoomIn, ZoomOut, RotateCw, FlipHorizontal,
                FlipVertical, Type, Bold, Italic, Underline, Strikethrough, AlignLeft, AlignCenter,
                AlignRight, AlignJustify, List, ListOrdered, Quote, Link, Unlink, Hash, AtSign,
                DollarSign, Euro, PoundSterling, Bitcoin, CreditCard, Wallet, PiggyBank, Banknote,
                Receipt, ShoppingCart, Package, Fuel, Gauge, Thermometer, Wind, Cloud, Sun, Moon,
                Snowflake, Flame, Droplets, Flower, TreePine, Mountain, Waves, Eye, Target, Compass,
                Lightbulb, Coffee, Music, Camera, PenTool, Layers, Shuffle, RotateCcw, Play, Pause,
                Volume2, VolumeX, Mic, MicOff, Video, VideoOff, Phone, Mail, MapPin, Clock, Calendar,
                Users, User, Crown, Trophy, Award, Gift, Diamond, Gem, Key, Lock, Unlock, Shield,
                Sword, Wand2, Scroll, BookOpen, Feather, Anchor, Ship, Plane, Car, Bike, Train, Bus,
                Hammer, Wrench, Cog, Settings, Sliders, BarChart3, PieChart, TrendingUp, TrendingDown,
                Activity, Battery, Wifi, Bluetooth, Cpu, HardDrive, Monitor, Keyboard, Mouse, Printer,
                Smartphone, Tablet, Laptop, Gamepad2, Headphones, Speaker, Radio, Film,
                Clapperboard, Scissors, Crop, Move, ZoomIn, ZoomOut, Type, Bold, Italic, Underline,
                Strikethrough, AlignLeft, AlignCenter, AlignRight, AlignJustify, List, ListOrdered,
                Quote, Link, Unlink, Hash, AtSign, DollarSign, Euro, PoundSterling, Bitcoin,
                CreditCard, Wallet, PiggyBank, Banknote, Receipt, ShoppingCart, Fuel, Gauge, Thermometer
              ];

              const IconComponent = icons[Math.floor(Math.random() * icons.length)];
              const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7', '#fd79a8', '#00b894'];

              return (
                <div
                  key={i}
                  className="w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center animate-pulse"
                  style={{
                    backgroundColor: colors[Math.floor(Math.random() * colors.length)] + '20',
                    border: `1px solid ${colors[Math.floor(Math.random() * colors.length)]}40`,
                    animationDelay: `${Math.random() * 2}s`
                  }}
                >
                  <IconComponent className="w-4 h-4 md:w-5 md:h-5" style={{ color: colors[Math.floor(Math.random() * colors.length)] }} />
                </div>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button
              onClick={() => navigate('/login')}
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-white font-bold text-lg hover:scale-110 transition-all duration-300"
              style={{
                backgroundColor: currentPhaseData.color,
                boxShadow: `0 0 30px ${currentPhaseData.color}50`
              }}
            >
              <Rocket className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              <span>Enter the Matrix</span>
            </button>

            <button
              onClick={randomizeMorphs}
              className="group inline-flex items-center gap-3 px-8 py-4 border-2 rounded-2xl text-white font-semibold text-lg hover:scale-105 transition-all duration-300 backdrop-blur-sm"
              style={{
                borderColor: currentPhaseData.color,
                backgroundColor: currentPhaseData.color + '10'
              }}
            >
              <Shuffle className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
              <span>Chaos Mode</span>
            </button>
          </div>

          {/* Phase Description */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-black/30 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">
                {currentPhaseData.name} Phase
              </h3>
              <p className="text-white/80 leading-relaxed mb-6">
                {currentPhase === 0 && "Welcome to the chaos. Where order breaks down and creativity emerges from the void."}
                {currentPhase === 1 && "Creation flows from destruction. Build something beautiful from the ashes of what was."}
                {currentPhase === 2 && "Evolution never stops. Adapt, transform, become something greater than before."}
                {currentPhase === 3 && "Find balance in the madness. Harmony emerges when chaos finds its rhythm."}
                {currentPhase === 4 && "Transcend the ordinary. Break free from limitations and explore infinite possibilities."}
              </p>

              <div className="flex justify-center gap-4">
                {phases.map((phase, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPhase(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentPhase ? 'scale-125' : 'scale-100'
                    }`}
                    style={{
                      backgroundColor: index === currentPhase ? phase.color : phase.color + '40'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Chaos Elements */}
      <div className="fixed inset-0 pointer-events-none z-5">
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="absolute animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          >
            <div
              className="w-2 h-2 rounded-full"
              style={{
                backgroundColor: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7'][Math.floor(Math.random() * 5)],
                boxShadow: `0 0 10px ${['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7'][Math.floor(Math.random() * 5)]}50`
              }}
            />
          </div>
        ))}
      </div>

      {/* Quantum Field Overlay */}
      <div className="fixed inset-0 pointer-events-none z-1 opacity-20">
        <div className="absolute inset-0" style={{
          background: `radial-gradient(circle at ${Math.random() * 100}% ${Math.random() * 100}%, ${currentPhaseData.color}20 0%, transparent 50%)`
        }} />
        <div className="absolute inset-0" style={{
          background: `radial-gradient(circle at ${Math.random() * 100}% ${Math.random() * 100}%, ${phases[(currentPhase + 1) % phases.length].color}20 0%, transparent 50%)`
        }} />
      </div>
    </div>
  );
}