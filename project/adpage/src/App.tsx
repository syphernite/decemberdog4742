import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Gray from "./pages/Gray";
import Mint from "./pages/Mint";
import Sky from "./pages/Sky";
import Lavender from "./pages/Lavender";
import Peach from "./pages/Peach";
import "./index.css";

/** Corner nav: dots only, no text */
function DotNav() {
  return (
    <nav className="fixed right-3 top-3 z-50 flex gap-2 sm:right-4 sm:top-4">
      <Link aria-label="Gray demo" to="/" className="dot bg-neutral-700" />
      <Link aria-label="Mint demo" to="/mint" className="dot bg-emerald-600" />
      <Link aria-label="Sky demo" to="/sky" className="dot bg-sky-600" />
      <Link aria-label="Lavender demo" to="/lavender" className="dot bg-violet-600" />
      <Link aria-label="Peach demo" to="/peach" className="dot bg-rose-500" />
    </nav>
  );
}

export default function App() {
  return (
    <>
      <DotNav />
      <Routes>
        <Route path="/" element={<Gray />} />
        <Route path="/mint" element={<Mint />} />
        <Route path="/sky" element={<Sky />} />
        <Route path="/lavender" element={<Lavender />} />
        <Route path="/peach" element={<Peach />} />
      </Routes>
    </>
  );
}
