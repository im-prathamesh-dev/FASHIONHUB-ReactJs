import React from 'react';
import Hero from '../components/Hero';
import Slider from '../components/Slider';
import ProductGrid from '../components/ProductGrid';
import About from '../components/About';

const Home = () => {
  return (
    <>
      <Hero />
      <Slider />
      <ProductGrid />
      <About />
    </>
  );
};

export default Home;