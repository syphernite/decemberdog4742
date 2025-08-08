import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import EmergencyServices from './pages/EmergencyServices';
import PestLibrary from './pages/PestLibrary';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Reviews from './pages/Reviews';
import ServiceArea from './pages/ServiceArea';
import Contact from './pages/Contact';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/emergency-services" element={<EmergencyServices />} />
        <Route path="/pest-library" element={<PestLibrary />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/service-area" element={<ServiceArea />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}

export default App;
