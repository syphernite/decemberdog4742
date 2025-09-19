import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Events from './pages/Events';
import Photos from './pages/Photos';
import Visit from './pages/Visit';
import { businessConfig } from './config/business';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Set page title and meta description
  useEffect(() => {
    document.title = businessConfig.seo.title;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', businessConfig.seo.description);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'menu':
        return <Menu />;
      case 'events':
        return <Events />;
      case 'photos':
        return <Photos />;
      case 'visit':
        return <Visit />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="bg-charcoal text-white">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;