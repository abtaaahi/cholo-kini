// src/components/Footwear.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { footwearProducts } from '../data/products';
import './Footwear.css';

const Footwear = () => {
  const navigate = useNavigate();

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="footwear-container">
      <h1 className="footwear-title">Footwear</h1> {/* Title for Footwear */}
      {footwearProducts.map((product) => (
        <div className="footwear-card" key={product.id} onClick={() => handleProductClick(product.id)}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>BDT {product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Footwear;