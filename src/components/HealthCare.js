import React, { useEffect } from 'react';
import { healthproducts } from '../data/products';
import ProductCards from './ProductCards';
import BrandCards from './BrandCards';
import './Electronics.css';

const HealthCare = () => {
  const healthLogos = [
    "https://logos-world.net/wp-content/uploads/2020/11/Pepsodent-Logo.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnD8AAc_TF4wmpxig-iPtEWbotDhlf22kImQ&s",
    "https://ahkhan.com/wp-content/uploads/2018/07/Marico_Logo-300x300.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeDfQoPsQuj5C6oxtTl7y-ZlU1f1HnP4B_8A&s",
    "https://d2r44w8tsw4pqe.cloudfront.net/assets/eaa8bb4c-1ad3-40ad-b333-611bd74d9311/savlon-twinkle.jpg"
  ];
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
        <BrandCards
        logos={healthLogos}
        title="Top Health Care Brands"
        subtitle="Our trusted partners in Health"
      />
    </div>
  );
};

export default HealthCare;