import React from 'react';
import './RealEstateBanner.css';

const RealEstateBanner = () => {
  const handleRealEstateClick = () => {
    window.open("https://cholo.kini.realestate.sahossain.com/", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="real-estate-top-section">
      <div className="real-estate-top-info">
        <strong>Browse our </strong>
        <strong 
          className="click-real-estate" 
          onClick={handleRealEstateClick}
        >
          Real Estate!
        </strong>
      </div>
    </div>
  );
};

export default RealEstateBanner;
