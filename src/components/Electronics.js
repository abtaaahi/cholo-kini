import React, { useEffect } from 'react';
import { electronicsProducts } from '../data/products';
import ProductCards from './ProductCards';
import BrandCards from './BrandCards';
import './Electronics.css';

const Electronics = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="electronics-container">
      <ProductCards 
        products={electronicsProducts}
        sectionSubtitle="Latest Items"
        sectionMainTitle="Our Electronics Collections"
      />
      <BrandCards/>
    </div>
  );
};

export default Electronics;