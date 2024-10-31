// src/components/ProductDetails.js
import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { products, electronicsProducts, cosmeticProducts, realEstateProducts, sliderProducts, footwearProducts } from "../data/products";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const productId = parseInt(id);
  const { addToCart } = useContext(CartContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const product = products.find((p) => p.id === productId) ||
    electronicsProducts.find((p) => p.id === productId) ||
    cosmeticProducts.find((p) => p.id === productId) ||
    realEstateProducts.find((p) => p.id === productId) ||
    sliderProducts.find((p) => p.id === productId) ||
    footwearProducts.find((p) => p.id === productId);

  const handleAddToCart = (product) => {
    addToCart(product);
    window.alert(`${product.name} has been added to the cart!`);
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage("");
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
          <img
            className="product-image"
            src={product.image}
            alt={product.name}
            onClick={() => openModal(product.image)}
          />
          <p className="product-price">BDT {product.price}</p>
          <p className="product-description">{product.description}</p>
          <button onClick={() => handleAddToCart(product)} className="add-to-cart">Add to Cart</button>
          
          {/* New section for "More Images" */}
          <div className="more-images">
            <h2 className="more-images-title">More Images</h2>
            <div className="image-gallery">
              {product.moreImages && product.moreImages.length > 0 ? (
                product.moreImages.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`More of ${product.name} ${index}`}
                    className="album-image"
                    onClick={() => openModal(img)}
                  />
                ))
              ) : (
                <p className="no-images-text">No images added</p>
              )}
            </div>
          </div>
        </>
      ) : (
        <p>Product not found</p>
      )}

      {/* Modal for full-screen image */}
      {isModalOpen && (
        <div className="modal">
          <span className="close" onClick={closeModal}>&times;</span>
          <img className="modal-content" src={selectedImage} alt="Selected" />
        </div>
      )}
    </div>
  );
};

export default ProductDetails;