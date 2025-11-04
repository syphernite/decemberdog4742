import { HeroSection } from '@/components/HeroSection';
import { ServiceMatrix } from '@/components/ServiceMatrix';
import { LiveClientPulse } from '@/components/LiveClientPulse';
import { ContactForm } from '@/components/ContactForm';
import { useNavigate } from 'react-router-dom';
import { Terminal, Cpu, Network, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HomePage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen matrix-bg" data-testid="page-home">
      {/* Command Center Header */}
      <motion.header
        className="relative z-20 border-b border-cyan-400/30 bg-black/50 backdrop-blur-sm"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="cyber-card p-2">
                <Terminal className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h1 className="text-xl font-mono font-bold text-cyan-400">
                  CYBERNETIC COMMAND CENTER
                </h1>
                <p className="text-xs font-mono text-gray-400">
                  Neural Business Matrix v3.1.4
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <motion.div
                  className="flex items-center gap-2 text-xs font-mono"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400">ONLINE</span>
                </motion.div>

                <motion.div
                  className="flex items-center gap-2 text-xs font-mono"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  <Network className="w-3 h-3 text-cyan-400" />
                  <span className="text-cyan-400">SECURE</span>
                </motion.div>

                <motion.div
                  className="flex items-center gap-2 text-xs font-mono"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  <Cpu className="w-3 h-3 text-magenta-400" />
                  <span className="text-magenta-400">ACTIVE</span>
                </motion.div>
              </div>

              <button
                onClick={handleLogin}
                className="cyber-button text-sm px-4 py-2 font-mono"
              >
                <Zap className="w-4 h-4 mr-2" />
                ACCESS DASHBOARD
              </button>
            </div>
          </div>
        </div>

        {/* Data Stream Header */}
        <div className="h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-magenta-400 to-transparent"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          />
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="relative">
        <HeroSection onLoginClick={handleLogin} />
        <ServiceMatrix />

        {/* Live Systems Monitor */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-mono font-bold mb-4 hologram-text">
                LIVE SYSTEMS MONITOR
              </h2>
              <p className="text-xl text-gray-300 font-mono">
                Real-time neural activity and cybernetic operations
              </p>
            </motion.div>

            <LiveClientPulse />
          </div>
        </section>

        {/* Contact Interface */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-mono font-bold mb-4 hologram-text">
                NEURAL LINK ESTABLISHMENT
              </h2>
              <p className="text-xl text-gray-300 font-mono">
                Initialize cybernetic communication protocol
              </p>
            </motion.div>

            <ContactForm />
          </div>
        </section>
      </main>

      {/* Cybernetic Footer */}
      <footer className="relative border-t border-cyan-400/30 bg-black/80 backdrop-blur-sm">
        {/* Animated Border */}
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-magenta-400 to-transparent"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* System Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-mono font-bold text-cyan-400">SYSTEM CORE</h3>
              <div className="space-y-2 text-sm font-mono text-gray-400">
                <p>Framework: React Neural Matrix</p>
                <p>Engine: Cybernetic VDOM</p>
                <p>Protocol: HTTP/2 Neural Link</p>
                <p>Security: Quantum Encryption</p>
              </div>
            </div>

            {/* Neural Network */}
            <div className="space-y-4">
              <h3 className="text-lg font-mono font-bold text-magenta-400">NEURAL NETWORK</h3>
              <div className="space-y-2 text-sm font-mono text-gray-400">
                <p>Nodes: 1,247 Active</p>
                <p>Connections: 15,632 Established</p>
                <p>Data Flow: 2.4 TB/s</p>
                <p>Uptime: 99.97%</p>
              </div>
            </div>

            {/* Cyber Security */}
            <div className="space-y-4">
              <h3 className="text-lg font-mono font-bold text-green-400">CYBER DEFENSE</h3>
              <div className="space-y-2 text-sm font-mono text-gray-400">
                <p>Firewall: Active</p>
                <p>Encryption: AES-256 Neural</p>
                <p>Threat Level: MINIMAL</p>
                <p>Last Scan: 2 minutes ago</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center gap-6 pt-8 border-t border-cyan-400/20">
            <a
              href="https://instagram.com/built4youonline"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 cyber-card px-6 py-3 hover:scale-105 transition-transform"
            >
              <Terminal className="w-5 h-5 text-cyan-400" />
              <span className="text-sm font-mono text-cyan-400">@built4youonline</span>
            </a>

            <p className="text-sm font-mono text-gray-400 text-center">
              © 2025 Built4You • Neural Business Matrix • All Systems Operational
            </p>

            {/* Status Indicators */}
            <div className="flex items-center gap-8">
              <motion.div
                className="flex items-center gap-2 text-xs font-mono"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Shield className="w-3 h-3 text-green-400" />
                <span className="text-green-400">SECURE</span>
              </motion.div>

              <motion.div
                className="flex items-center gap-2 text-xs font-mono"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                <Network className="w-3 h-3 text-cyan-400" />
                <span className="text-cyan-400">CONNECTED</span>
              </motion.div>

              <motion.div
                className="flex items-center gap-2 text-xs font-mono"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: 2 }}
              >
                <Cpu className="w-3 h-3 text-magenta-400" />
                <span className="text-magenta-400">PROCESSING</span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Data Stream */}
        <div className="h-2 bg-black relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-cyan-400/50 via-magenta-400/50 to-cyan-400/50"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          />
        </div>
      </footer>
    </div>
  );
}
