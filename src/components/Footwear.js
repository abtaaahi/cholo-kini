import React, { useEffect } from 'react';
import { footwearProducts } from '../data/products';
import ProductCards from './ProductCards';
import './Footwear.css';

const Footwear = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="footwear-container">
      <ProductCards 
        products={footwearProducts}
        sectionSubtitle="Latest Items"
        sectionMainTitle="Our Footwear Collections"
      />
    </div>
  );
};

export default Footwear;