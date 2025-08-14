import React from 'react';
import Hero from '../components/Hero';
import StyleChips from '../components/StyleChips';
import TrustBadges from '../components/TrustBadges';
import ReviewsCarousel from '../components/ReviewsCarousel';
import Interlude from '../components/Interlude';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <StyleChips />
      <TrustBadges />
      <ReviewsCarousel />
      <Interlude />
    </>
  );
};

export default Home;
