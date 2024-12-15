import React, { useEffect } from 'react';
import { healthproducts } from '../data/products';
import ProductCards from './ProductCards';
// import BrandCards from './BrandCards';
import './Electronics.css';

const HealthCare = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="healthcare-container">
      <ProductCards 
        products={healthproducts}
        sectionSubtitle="Latest Items"
        sectionMainTitle="Our Health Care Products"
      />
      {/* <BrandCards/> */}
    </div>
  );
};

export default HealthCare;