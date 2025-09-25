import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";

const getBasename = () => {
  const raw = (import.meta as any).env.BASE_URL || "/";
  return raw.endsWith("/") ? raw.slice(0, -1) : raw;
};

export default function App() {
  return (
    <Router basename={getBasename()}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}
