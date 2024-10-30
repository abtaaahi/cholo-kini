// src/components/HeroSection.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="hero-logo">
        <h1>Cholo Kini</h1>
      </div>
      <div className="hero-sections">
        <Link to="/realEstate">Real Estate</Link>
        <Link to="/electronics">Electronics</Link>
        <Link to="/cosmetics">Cosmetics</Link>
      </div>
      <div className="hero-cart">
      <Link to="/cart">
        <button className="cart-button">Cart</button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;