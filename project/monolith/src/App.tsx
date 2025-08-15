import React from 'react';
import { CursorAura } from './components/CursorAura';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { ProofStrip } from './components/ProofStrip';
import { Services } from './components/Services';
import { CaseStudies } from './components/CaseStudies';
import { Process } from './components/Process';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { CommandPalette } from './components/CommandPalette';
import './styles/globals.css';

function App() {
  return (
    <div className="min-h-screen text-white">
      <CursorAura />
      <Navigation />
      <CommandPalette />
      
      <main>
        <Hero />
        <ProofStrip />
        <Services />
        <CaseStudies />
        <Process />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;