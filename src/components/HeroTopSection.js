import React from 'react';
import './HeroTopSection.css';

const HeroTopSection = () => {
  return (
    <div className="hero-top-section">
      <div className="hero-top-info">
        <span>
          <strong>GET 25% OFF</strong> for your first order. <strong className="buynow">Buy Now</strong>{' '}
        </span>
      </div>
      <div className="hero-top-social">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="ri-facebook-circle-fill"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="ri-instagram-fill"></i> 
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <i className="ri-youtube-fill"></i> 
        </a>
      </div>
    </div>
  );
};

export default HeroTopSection;
