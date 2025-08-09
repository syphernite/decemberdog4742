import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Content from './pages/Content';
import Services from './pages/Services';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';
import MediaKit from './pages/MediaKit';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/content" element={<Content />} />
          <Route path="/collab" element={<Services />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Contact />} />
          <Route path="/media-kit" element={<MediaKit />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;