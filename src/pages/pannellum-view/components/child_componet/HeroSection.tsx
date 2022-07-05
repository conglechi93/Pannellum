import React from 'react';
import { Button } from './Button';

import '../../views/App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="../videos/video-2.mp4" autoPlay loop muted />
      <h1>Go Endlessly</h1>
      <p>Ready to explore?</p>
      <div className="hero-btns">
       
      </div>
    </div>
  );
}

export default HeroSection;
