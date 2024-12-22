import React from "react";
import "./BrandCards.css";

const BrandCards = ({ logos, title, subtitle }) => {
  return (
    <div className="brand-cards-container">
      <div className="brand-cards-header">
        <h1 className="brand-cards-title">{title}</h1>
        <p className="brand-cards-subtitle">{subtitle}</p>
      </div>

      <div className="brand-cards-grid">
        {logos.map((logo, index) => (
          <div key={index} className="brand-card">
            <img src={logo} alt="Brand Logo" className="brand-logo" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandCards;
