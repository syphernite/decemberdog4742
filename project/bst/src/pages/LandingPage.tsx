// src/pages/LandingPage.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Cover from "./Cover";
import Select from "./Select";

export default function LandingPage() {
  return (
    <Routes>
      <Route path="/" element={<Cover />} />
      <Route path="/select" element={<Select />} />
    </Routes>
  );
}
