// src/components/ProductCards.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../data/products"; // Import centralized products data
import "./ProductCards.css";

const ProductCards = () => {
  const navigate = useNavigate();

  const handleProductClick = (id) => {
    navigate(`/product/${id}`); // Navigate to the product details page
  };

  return (
    <div className="product-container">
      {products.map((product) => (
        <div className="product-card" key={product.id} onClick={() => handleProductClick(product.id)}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>BDT {product.price}</p>
          <button className="see-details">See Details</button>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
