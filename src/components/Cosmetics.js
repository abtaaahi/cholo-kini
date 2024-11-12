// src/components/Cosmetics.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { cosmeticProducts } from '../data/products';
import ProductCards from './ProductCards';
import './Cosmetics.css';

const Cosmetics = () => {
  const navigate = useNavigate();
  
  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="cosmetics-container">
        {/* <h1 className="cosmetics-title">Cosmetics Store</h1>  */}
        <ProductCards products={cosmeticProducts}
        sectionSubtitle="Latest Items"
        sectionMainTitle="Our Cosmetics Collections" />
      {/* {cosmeticProducts.map((product) => (
        <div className="cosmetics-card" key={product.id} onClick={() => handleProductClick(product.id)}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>BDT {product.price}</p>
        </div>
      ))} */}
    </div>
  );
};

export default Cosmetics;