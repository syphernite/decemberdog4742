import { HeroSection } from '@/components/HeroSection';
import { ServiceMatrix } from '@/components/ServiceMatrix';
import { LiveClientPulse } from '@/components/LiveClientPulse';
import { AIChatbot } from '@/components/AIChatbot';
import { Testimonials } from '@/components/Testimonials';
import { useNavigate } from 'react-router-dom';
import { SiInstagram } from 'react-icons/si';

export default function HomePage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen" data-testid="page-home">
      <HeroSection onLoginClick={handleLogin} />
      <ServiceMatrix />
      <Testimonials />
      <LiveClientPulse />
      
      <footer className="py-12 px-4 border-t border-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center gap-4">
            <a
              href="https://instagram.com/built4youonline"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors hover-elevate px-4 py-2 rounded-md"
              data-testid="link-instagram"
            >
              <SiInstagram className="w-5 h-5" />
              <span className="text-sm font-medium">@built4youonline</span>
            </a>
            <p className="text-sm text-muted-foreground text-center">
              © 2025 Built4You. Building digital ecosystems for modern businesses.
            </p>
          </div>
        </div>
      </footer>

      <AIChatbot />
    </div>
  );
}
