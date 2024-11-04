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
          <div className="card-image">
            <img src={product.image} alt={product.name} />
            <div className="badges">
              <span className="badge featured">Latest</span>
              <span className="badge for-sale">On Sale!</span>
            </div>
          </div>
          <div className="card-content">
            <p>{product.type}</p>
            <h3>{product.name}</h3>
            <p>BDT {product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;