import React from 'react';
import Hero from '../components/Hero';
import StyleChips from '../components/StyleChips';
import TrustBadges from '../components/TrustBadges';
import ReviewsCarousel from '../components/ReviewsCarousel';
import Interlude from '../components/Interlude';
import RecentWork from '../components/RecentWork';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <StyleChips />
      <TrustBadges />
      <ReviewsCarousel />
      <Interlude />
      <RecentWork />
    </>
  );
};

export default Home;