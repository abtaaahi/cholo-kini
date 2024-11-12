import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductCards.css";

const ProductCards = ({ products, sectionSubtitle, sectionMainTitle }) => {
  const navigate = useNavigate();

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="product-container">
      <div className="section-title">
        <span className="section-subtitle">{sectionSubtitle}</span>
        <h2 className="section-main-title">{sectionMainTitle}</h2>
      </div>
      <div className="product-container-main">
        {products.map((product) => (
          <div className="product-card" key={product.id} onClick={() => handleProductClick(product.id)}>
            <div className="card-image">
              <img src={product.image} alt={product.name} />
              <div className="badges">
                <span className="badge featured">25% Off</span>
              </div>
            </div>
            <div className="card-content">
              <div className="product-info">
                <p className="product-type">{product.type}</p>
                <h3>{product.name}</h3>
                <div className="product-price">
                  <span className="original-price">BDT 700</span>
                  <span className="current-price">BDT {product.price}</span>
                </div>
              </div>
              <div className="rating">
                {Array.from({ length: 5 }, (_, index) => (
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