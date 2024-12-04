import React from 'react';
import './CategorySection.css';

const CategorySection = () => {
  return (
    <div className="category-section">
      <div className="category-card">
        <div className="category-info">
          <span className="item-count">Coming Soon</span>
          <h2>Footwear</h2>
          <ul>
            <li>Sneakers</li>
            <li>Keds</li>
            <li>Boots</li>
            <li>Shoes...</li>
          </ul>
        </div>
        <div className="category-image woman"></div>
      </div>

      <div className="category-card">
        <div className="category-info">
          <span className="item-count">Coming Soon</span>
          <h2>Cosmetics</h2>
          <ul>
            <li>Sunscreen</li>
            <li>Serum</li>
            <li>Mascara</li>
            <li>Foundation...</li>
          </ul>
        </div>
        <div className="category-image man"></div>
      </div>

      <div className="category-card">
        <div className="category-info">
          <span className="item-count">Coming Soon</span>
          <h2>Accessories</h2>
          <ul>
            <li>Handbags</li>
            <li>Watches</li>
            <li>Sunglasses</li>
            <li>Hat...</li>
          </ul>
        </div>
        <div className="category-image accessories"></div>
      </div>
    </div>
  );
};

export default CategorySection;
