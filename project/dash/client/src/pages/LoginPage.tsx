import { useState } from 'react';
import { DigitalGateway } from '@/components/DigitalGateway';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function LoginPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (username: string, password: string) => {
    setIsLoading(true);
    
    // Simulated authentication - in real app, this would call the API
    setTimeout(() => {
      // Cinematic transition to dashboard
      navigate('/dashboard');
    }, 2500);
  };

  return (
    <div className="min-h-screen relative overflow-hidden" data-testid="page-login">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(0, 245, 255, 0.1) 0%, transparent 50%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <DigitalGateway onLogin={handleLogin} isLoading={isLoading} />

      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <button
          onClick={() => { window.location.href = '/api/auth/google'; }}
          className="px-6 py-3 rounded-full bg-white/10 text-white backdrop-blur-sm border border-white/20 hover:bg-white/20 transition"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
