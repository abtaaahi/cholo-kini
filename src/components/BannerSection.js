import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BannerSection.css';

const BannerSection = () => {
    const navigate = useNavigate();

    const handleShopNowClick = () => {
      navigate('/footwear');
    };

    const handleViewAllClick = () => {
        navigate('/electronics');
    };

  return (
    <section className="banner-section">
      <div className="banner-content">
        <div className="banner-header">
          <span className="banner-badge">The Best Affordable Online Store</span>
          <h1>Explore Our <span className="highlight">Modern Footwear Collection</span></h1>
          <p>Discover the best in footwear, designed for comfort, style, and durability. Our collection features premium sneakers, classic boots, and everyday essentials crafted to support every step. From the latest trends to timeless designs, our footwear is built to enhance your look and provide unmatched comfort, no matter the occasion.</p>
          <div className="banner-buttons">
            <button className="shop-now" onClick={handleShopNowClick} >Shop Now</button>
            <button className="view-products" onClick={handleViewAllClick}>View All Products</button>
          </div>
          <div className="banner-ratings">
            <div className="rating-images">
              <img src="https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="User 1" />
              <img src="https://images.unsplash.com/photo-1610652492500-ded49ceeb378?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="User 2" />
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="User 3" />
              <img src="https://images.unsplash.com/photo-1531891570158-e71b35a485bc?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="User 4" />
            </div>
            <div className="rating-text">
              <span>Trusted by a lot of Customers</span>
            </div>
          </div>
        </div>
        <div className="banner-product-card">
        <div className="banner-product-image">
            <img src="https://images.unsplash.com/photo-1704949841973-9db544ac35ec?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Sneakers" />
            <div className="hot-tag">HOT!</div>
        </div>
        <div className="banner-product-info">
            <h3>Sneakers</h3>
            <p>Browse More...</p>
            <a href="/footwear">➔</a>
        </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
