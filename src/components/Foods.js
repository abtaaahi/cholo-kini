import React, { useEffect } from 'react';
import { foodproducts } from '../data/products';
import ProductCards from './ProductCards';
// import BrandCards from './BrandCards';
import './Foods.css';

const Foods = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="foods-container">
      <ProductCards 
        products={foodproducts}
        sectionSubtitle="Latest Items"
        sectionMainTitle="Our Food & Nutrition Collections"
      />
      {/* <BrandCards/> */}
    </div>
  );
};

export default Foods;