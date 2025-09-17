// src/pages/Home.tsx
import React from "react";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { Why } from "../components/Why";
import { Testimonials } from "../components/Testimonials";

export const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Why />
      <Testimonials />
    </>
  );
};

export default Home;
