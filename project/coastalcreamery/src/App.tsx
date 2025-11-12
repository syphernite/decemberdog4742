import React, { useEffect } from 'react';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import FlavorForecast from './components/FlavorForecast';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

class ErrorBoundary extends React.Component<React.PropsWithChildren<{}>, { error: Error | null }> {
  constructor(props: React.PropsWithChildren<{}>) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: Error, info: any) {
    // Log to console; dev server will show more details in terminal
    // You could also send this to an error tracking service
    // eslint-disable-next-line no-console
    console.error('ErrorBoundary caught', error, info);
  }

  render() {
    if (this.state.error) {
      return (
        <div className="p-8">
          <h2 className="text-2xl font-bold text-red-600 mb-4">An error occurred while rendering the app</h2>
          <pre className="whitespace-pre-wrap text-sm bg-white p-4 rounded shadow">
            {String(this.state.error && this.state.error.stack ? this.state.error.stack : this.state.error)}
          </pre>
        </div>
      );
    }
    return this.props.children as React.ReactNode;
  }
}

function App() {
  useEffect(() => {
    // On component mount (page load/refresh), scroll to the top of the page.
    window.scrollTo(0, 0);
  }, []);

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gradient-to-b from-sky-100 to-cyan-50 coastal-cursor">
  <Hero />
  <FlavorForecast />
  <MenuSection />
        <ContactSection />
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
