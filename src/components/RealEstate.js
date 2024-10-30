// src/components/RealEstate.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { realEstateProducts } from '../data/products';
import './RealEstate.css';

const RealEstate = () => {
  const navigate = useNavigate();
  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="realEstate-container">
      {realEstateProducts.map((product) => (
        <div className="realEstate-card" key={product.id} onClick={() => handleProductClick(product.id)}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>BDT {product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default RealEstate;
