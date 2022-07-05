import React from 'react';
import HeroSection from '../child_componet/HeroSection';
import Cards from '../child_componet/Cards';

import '../../views/App.css';
import Footer from '../child_componet/Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
