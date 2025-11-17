// App.tsx
import Header from './components/Header';
import Hero from './components/Hero';
// import TrustStrip from './components/TrustStrip';
import Services from './components/Services';
import Metrics from './components/Metrics';
import Projects from './components/Projects';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <ScrollProgress />
      <main>
        <Hero />
        <Services />
        <Metrics />
        <Projects />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
