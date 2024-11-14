import React from 'react';
import './CategorySection.css';

const CategorySection = () => {
  return (
    <div className="category-section">
      <div className="category-card">
        <div className="category-info">
          <span className="item-count">2500+ Items</span>
          <h2>For Women's</h2>
          <ul>
            <li>Blazers</li>
            <li>T-Shirts and Blouses</li>
            <li>Dresses</li>
            <li>Jackets & Coats</li>
          </ul>
        </div>
        <div className="category-image woman"></div>
      </div>

      <div className="category-card">
        <div className="category-info">
          <span className="item-count">1500+ Items</span>
          <h2>For Men's</h2>
          <ul>
            <li>Blazers</li>
            <li>T-Shirts and Shirts</li>
            <li>Jackets & Coats</li>
            <li>Jeans</li>
          </ul>
        </div>
        <div className="category-image man"></div>
      </div>

      <div className="category-card">
        <div className="category-info">
          <span className="item-count">800+ Items</span>
          <h2>Accessories</h2>
          <ul>
            <li>Handbags</li>
            <li>Watches</li>
            <li>Sunglasses</li>
            <li>Hat</li>
          </ul>
        </div>
        <div className="category-image accessories"></div>
      </div>
    </div>
  );
};

export default CategorySection;
