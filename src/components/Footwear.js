// src/components/Footwear.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { footwearProducts } from '../data/products';
import ProductCards from './ProductCards';
import './Footwear.css';

const Footwear = () => {
  const navigate = useNavigate();

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="footwear-container">
      {/* <h1 className="footwear-title">Footwear</h1> */}
      <ProductCards products={footwearProducts}
      sectionSubtitle="Latest Items"
      sectionMainTitle="Our Footwear Collections" />
      {/* {footwearProducts.map((product) => (
        <div className="footwear-card" key={product.id} onClick={() => handleProductClick(product.id)}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>BDT {product.price}</p>
        </div>
      ))} */}
    </div>
  );
};

export default Footwear;