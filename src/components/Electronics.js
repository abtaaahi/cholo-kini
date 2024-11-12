import React from 'react';
import { useNavigate } from 'react-router-dom';
import { electronicsProducts } from '../data/products';
import ProductCards from './ProductCards';
import './Electronics.css';

const Electronics = () => {
  const navigate = useNavigate();

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="electronics-container">
      {/* <h1 className="electronics-title">Electronics Store</h1> */}
      <ProductCards products={electronicsProducts}
      sectionSubtitle="Latest Items"
      sectionMainTitle="Our Electronics Collections" />
      {/* {electronicsProducts.map((product) => (
        <div className="electronics-card" key={product.id} onClick={() => handleProductClick(product.id)}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>BDT {product.price}</p>
        </div>
      ))} */}
    </div>
  );
};

export default Electronics;