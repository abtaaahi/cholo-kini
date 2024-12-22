import React, { useEffect } from 'react';
import { foodproducts } from '../data/products';
import ProductCards from './ProductCards';
import BrandCards from "./BrandCards";
import './Foods.css';

const Foods = () => {
  const foodLogos = [
    "https://www.unileverconsumercarebd.com/content-images/92ui5egz/production/df916d2dfcbf410a31dd0b05c1b85cc65ba16aa9-1080x1080.png?w=600&h=600&fit=crop&auto=format",
    "https://www.unileverconsumercarebd.com/content-images/92ui5egz/production/accb4c6313038d384f791f5e9a865358198965e4-1080x1080.png?w=600&h=600&fit=crop&auto=format"
  ];

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
        <BrandCards
        logos={foodLogos}
        title="Top Food Brands"
        subtitle="Our trusted partners in Food"
      />
    </div>
  );
};

export default Foods;