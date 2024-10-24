// src/components/Cosmetics.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { cosmeticProducts } from '../data/products'; // Import the cosmetic products
import './Cosmetics.css';

const Cosmetics = () => {
  const navigate = useNavigate();
  
  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="cosmetics-container">
        <h1 className="title">Cosmetics Store</h1> 
      {cosmeticProducts.map((product) => (
        <div className="cosmetics-card" key={product.id} onClick={() => handleProductClick(product.id)}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Cosmetics;