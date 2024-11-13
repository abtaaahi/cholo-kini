import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { products, electronicsProducts, cosmeticProducts, sliderProducts, footwearProducts } from "../data/products";
import { CartContext } from "../contexts/CartContext";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const productId = parseInt(id);
  const { addToCart } = useContext(CartContext);

  const [selectedImage, setSelectedImage] = useState("");
  const [quantity] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const product = products.find((p) => p.id === productId) ||
    electronicsProducts.find((p) => p.id === productId) ||
    cosmeticProducts.find((p) => p.id === productId) ||
    sliderProducts.find((p) => p.id === productId) ||
    footwearProducts.find((p) => p.id === productId);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    toast.success(`${product.name} has been added to the cart!`);
  };

  return (
    <div className="product-details">
      <ToastContainer position="bottom-right" />
      {product ? (
        <>
          <div className="product-image-info">
            <div className="product-image-gallery">
              <img className="main-image" src={selectedImage || product.image} alt={product.name} />
              <div className="thumbnail-gallery">
                {product.moreImages && product.moreImages.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${product.name} view ${index + 1}`}
                    onClick={() => setSelectedImage(img)}
                    className={`thumbnail ${selectedImage === img ? "selected" : ""}`}
                  />
                ))}
              </div>
            </div>
            
            <div className="product-details-info">
            <p className="product-type-details">{product.type}</p>
              <h1 className="product-name-details">{product.name}</h1>
              <p className="rating-details">⭐⭐⭐⭐⭐</p>
              <div className="price">
                <span className="current-price-details">BDT {product.price}</span>
                <span className="original-price-details">BDT 100.00</span>
              </div>
              
              <p className="product-description-details">{product.description}</p>
              
              <div className="action-buttons">
                <button onClick={handleAddToCart} className="add-to-cart">Add to Cart</button>
              </div>
            
            </div>
          </div>
        </>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default ProductDetails;
