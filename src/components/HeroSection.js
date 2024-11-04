import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';
import 'remixicon/fonts/remixicon.css';

const HeroSection = () => {
  return (
    <>
      {/* Large Screen Hero Section */}
      <div className="hero large-screen">
        <div className="hero-logo">
        <h1>Cholo Kini</h1>
        <h2>Shop</h2>
        </div>
        <div className="hero-sections">
          <Link to="/electronics">Electronics</Link>
          <Link to="/footwear">Footwear</Link>
          <Link to="/cosmetics">Cosmetics</Link>
          <a href="https://cholo.kini.realestate.sahossain.com/" target="_blank" rel="noopener noreferrer">Real Estate</a>
        </div>
        <div className="hero-cart">
          <Link to="/cart" className="cart-icon">
            <i className="ri-shopping-cart-2-fill" tooltp></i>
          </Link>
        </div>
      </div>

      {/* Mobile Screen Hero Section */}
      <div className="hero mobile-screen">
        <div className="hero-header">
          <div className="hero-logo">
          <h1>Cholo Kini</h1>
          <h2>Shop</h2>
          </div>
          <div className="hero-cart">
            <Link to="/cart" className="cart-icon">
              <i className="ri-shopping-cart-2-fill" tooltp></i>
            </Link>
          </div>
        </div>
        <div className="hero-sections">
          <Link to="/electronics">Electronics</Link>
          <Link to="/footwear">Footwear</Link>
          <Link to="/cosmetics">Cosmetics</Link>
          <a href="https://cholo.kini.realestate.sahossain.com/" target="_blank" rel="noopener noreferrer">RealEstate</a>
        </div>
      </div>
    </>
  );
};

export default HeroSection;