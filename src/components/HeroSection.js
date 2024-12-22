import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import SearchBox from './SearchBox';
import { CartContext } from "../contexts/CartContext";
import './HeroSection.css';
import 'remixicon/fonts/remixicon.css';

const HeroSection = () => {
  const { cartCount } = useContext(CartContext);

  return (
    <>
      {/* Large Screen Hero Section */}
      <div className="hero large-screen">
        <div className="hero-logo">
        <Link to="/">
        <h1>Kinbo Ekhaney</h1>
        <h2>Shop</h2>
      </Link>
        </div>
        <div className="hero-sections">
          {/* <Link to="/electronics">Electronics</Link> */}
          {/* <Link to="/footwear">Footwear</Link> */}
          {/* <Link to="/cosmetics">Cosmetics</Link> */}
          <Link to="/foods">Food & Nutrition</Link>
          <Link to="/health">Health Care</Link>
          {/* <a href="https://cholo.kini.realestate.sahossain.com/" target="_blank" rel="noopener noreferrer">Real Estate</a> */}
        </div>
        
        <div className="hero-cart">
        <SearchBox />
          <Link to="/cart" className="cart-icon">
            <i className="ri-shopping-cart-2-fill" tooltp></i>
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>
        </div>
        
      </div>

      {/* Mobile Screen Hero Section */}
      <div className="hero mobile-screen">
        <div className="hero-header">
          <div className="hero-logo">
          <Link to="/">
          <h1>Kinbo Ekhaney</h1>
          <h2>Shop</h2>
        </Link>
          </div>
          <div className="hero-cart">
          <SearchBox />
            <Link to="/cart" className="cart-icon">
              <i className="ri-shopping-cart-2-fill" tooltp></i>
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </Link>
          </div>
        </div>
        <div className="hero-sections">
          {/* <Link to="/electronics">Electronics</Link> */}
          {/* <Link to="/footwear">Footwear</Link> */}
          {/* <Link to="/cosmetics">Cosmetics</Link> */}
          <Link to="/foods">Food & Nutrition</Link>
          <Link to="/health">Health Care</Link>
          {/* <a href="https://cholo.kini.realestate.sahossain.com/" target="_blank" rel="noopener noreferrer">RealEstate</a> */}
        </div>
      </div>
    </>
  );
};

export default HeroSection;