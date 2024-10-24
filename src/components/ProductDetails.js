// src/components/ProductDetails.js
import React from "react";
import { useParams } from "react-router-dom";
import { products, electronicsProducts, cosmeticProducts, realEstateProducts } from "../data/products";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const productId = parseInt(id);

  const product = products.find((p) => p.id === productId) || electronicsProducts.find((p) => p.id === productId)
  || cosmeticProducts.find((p) => p.id === productId) || realEstateProducts.find((p) => p.id === productId);

  return (
    <div className="product-details">
      {product ? (
        <>
          <h1 className="product-title">{product.name}</h1>
          <img className="product-image" src={product.image} alt={product.name} />
          <p className="product-price">{product.price}</p>
          <p className="product-description">{product.description}</p>
          <button className="add-to-cart">Add to Cart</button>
        </>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default ProductDetails;