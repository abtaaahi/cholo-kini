import React, { useEffect } from 'react';
import { cosmeticProducts } from '../data/products';
import ProductCards from './ProductCards';
import './Cosmetics.css';

const Cosmetics = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="cosmetics-container">
      <ProductCards 
        products={cosmeticProducts}
        sectionSubtitle="Latest Items"
        sectionMainTitle="Our Cosmetics Collections"
      />
    </div>
  );
};

export default Cosmetics;