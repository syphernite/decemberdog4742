import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Shield, Lock } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { GlassCard } from './GlassCard';

interface DigitalGatewayProps {
  onLogin: (username: string, password: string) => void;
  isLoading?: boolean;
}

export function DigitalGateway({ onLogin, isLoading = false }: DigitalGatewayProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showIris, setShowIris] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowIris(true);
    setTimeout(() => {
      onLogin(username, password);
    }, 2000);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden" data-testid="digital-gateway">
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent animate-pulse-glow" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full glass-elevated glow-cyan mb-6 mx-auto"
          >
            <Shield className="w-10 h-10 text-primary" />
          </motion.div>
          
          <h2 className="text-3xl font-bold mb-2">Digital Gateway</h2>
          <p className="text-muted-foreground">Enter the command center</p>
        </div>

        <AnimatePresence mode="wait">
          {!showIris ? (
            <motion.div
              key="login-form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <GlassCard className="p-8" elevated>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="username" className="text-sm font-medium">
                      Username
                    </Label>
                    <Input
                      id="username"
                      type="text"
                      placeholder="Enter your username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="glass border-primary/20"
                      required
                      data-testid="input-username"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-sm font-medium">
                      Password
                    </Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="glass border-primary/20"
                      required
                      data-testid="input-password"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isLoading}
                    data-testid="button-login"
                  >
                    {isLoading ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <Lock className="w-5 h-5" />
                      </motion.div>
                    ) : (
                      <>
                        <Eye className="w-5 h-5 mr-2" />
                        Authenticate
                      </>
                    )}
                  </Button>
                </form>
              </GlassCard>
            </motion.div>
          ) : (
            <motion.div
              key="iris-scan"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.5 }}
              className="text-center"
              data-testid="iris-scanner"
            >
              <GlassCard className="p-12" elevated>
                <motion.div
                  className="w-40 h-40 mx-auto mb-6 rounded-full border-4 border-primary relative"
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(0, 245, 255, 0.4)",
                      "0 0 60px rgba(0, 245, 255, 0.8)",
                      "0 0 20px rgba(0, 245, 255, 0.4)",
                    ],
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute inset-0 border-2 border-primary/50 rounded-full"
                      initial={{ scale: 1, opacity: 1 }}
                      animate={{ scale: 1.5, opacity: 0 }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                    />
                  ))}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Eye className="w-16 h-16 text-primary" />
                  </div>
                </motion.div>

                <h3 className="text-xl font-semibold mb-2">Scanning Biometrics</h3>
                <p className="text-muted-foreground text-sm">Authenticating access credentials...</p>
              </GlassCard>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
