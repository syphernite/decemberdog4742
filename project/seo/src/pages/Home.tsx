import React from 'react';
import { Hero } from '../components/Home/Hero';
import { Services } from '../components/Home/Services';
import { Why } from '../components/Home/Why';
import { Testimonials } from '../components/Home/Testimonials';
import { Partnership } from '../components/Home/Partnership';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <Why />
      <Testimonials />
      <Partnership />
    </>
  );
};