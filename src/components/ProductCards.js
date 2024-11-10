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
      <div className="section-title"> 
        <span className="section-subtitle">Our Products</span> 
      <h2 className="section-main-title">Our Products Collections</h2> 
      </div>
      <div className="product-container-main">
      {products.map((product) => (
        <div className="product-card" key={product.id} onClick={() => handleProductClick(product.id)}>
          <div className="card-image">
            <img src={product.image} alt={product.name} />
            <div className="badges">
              <span className="badge featured">25% Off</span>
              {/* <span className="badge for-sale">On Sale!</span> */}
            </div>
          </div>
          {/* <div className="card-content">
            <p>{product.type}</p>
            <h3>{product.name}</h3>
            <p>BDT {product.price}</p>
          </div> */}

      <div className="card-content">
        <div className="product-info">
        <p className="product-type">{product.type}</p>
        {/* <div className="product-name-price"> */}
          <h3>{product.name}</h3>
          <div className="product-price">
            {/* <span className="original-price">BDT {product.originalPrice}</span> */}
            <span className="original-price">BDT 700</span>
            <span className="current-price">BDT {product.price}</span>
          </div>
        </div>
        <div className="rating">
          {Array.from({ length: 5 }, (_, index) => (
            // <span key={index} className={`star ${index < product.rating ? 'filled' : ''}`}>★</span>
            <span key={index} className={`star ${index < 5 ? 'filled' : ''}`}>★</span>
          ))}
        </div>
      </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default ProductCards;