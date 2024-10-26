// src/components/ProductDetails.js
import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { products, electronicsProducts, cosmeticProducts, realEstateProducts } from "../data/products";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const productId = parseInt(id);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const product = products.find((p) => p.id === productId) ||
    electronicsProducts.find((p) => p.id === productId) ||
    cosmeticProducts.find((p) => p.id === productId) ||
    realEstateProducts.find((p) => p.id === productId);

  const handleAddToCart = (product) => {
    addToCart(product);
    window.alert(`${product.name} has been added to the cart!`); // Alert when product is added
  };

  return (
    <div className="product-details">
      <div className="product-cart">
        <Link to="/cart">
          <button className="cart-button">Cart</button>
        </Link>
      </div>
      {product ? (
        <>
          <h1 className="product-title">{product.name}</h1>
          <img className="product-image" src={product.image} alt={product.name} />
          <p className="product-price">{product.price}</p>
          <p className="product-description">{product.description}</p>
          <button onClick={() => handleAddToCart(product)} className="add-to-cart">Add to Cart</button>
        </>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default ProductDetails;
