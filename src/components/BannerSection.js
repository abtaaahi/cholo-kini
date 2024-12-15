import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BannerSection.css';

const BannerSection = () => {
    const navigate = useNavigate();

    const handleShopNowClick = () => {
      navigate('/electronics');
    };

    const handleViewAllClick = () => {
        navigate('/foods');
    };

  return (
    <section className="banner-section">
      <div className="banner-content">
        <div className="banner-header">
          <span className="banner-badge">The Best Affordable Online Store</span>
          <h1>Shop Everything, <span className="highlight">from Everyday to Home!</span></h1>
          <p>Your one-stop shop for electronics, food, health care, and more! Explore products crafted to enhance your lifestyle and well-being. Stay tuned for our stylish and comfortable upcoming cosmetics & footwear collection!</p>
          <div className="banner-buttons">
            <button className="shop-now" onClick={handleShopNowClick} >Shop Now</button>
            <button className="view-products" onClick={handleViewAllClick}>View All Products</button>
          </div>
          {/* <div className="banner-ratings">
            <div className="rating-images">
              <img src="https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="User 1" />
              <img src="https://images.unsplash.com/photo-1610652492500-ded49ceeb378?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="User 2" />
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="User 3" />
              <img src="https://images.unsplash.com/photo-1531891570158-e71b35a485bc?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="User 4" />
            </div>
            <div className="rating-text">
              <span>Trusted by a lot of Customers</span>
            </div>
          </div> */}
        </div>
        <div className="banner-product-card">
        <div className="banner-product-image">
            <img src="https://bd.pureitwater.com/uploads/products/classic-1.jpg" alt="Water Purifier" />
            <div className="hot-tag">HOT!</div>
        </div>
        <div className="banner-product-info">
            <h3>Water Purifier</h3>
            <p>Browse More...</p>
            <a href="/electronics">➔</a>
        </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
