import React from 'react';
import Hero from '../components/Home/Hero';
import FeaturesSection from '../components/Home/FeaturesSection';
import StatsSection from '../components/Home/StatsSection';
import TestimonialsSection from '../components/Home/TestimonialsSection';
import JoinCta from '../components/Home/JoinCta';

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturesSection />
      <StatsSection />
      <TestimonialsSection />
      <JoinCta />
    </div>
  );
};

export default Home;