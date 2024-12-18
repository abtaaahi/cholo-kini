import React, { useEffect, useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products, electronicsProducts, cosmeticProducts, sliderProducts, footwearProducts, foodproducts, healthproducts } from "../data/products";
import { CartContext } from "../contexts/CartContext";
import { toast, ToastContainer } from 'react-toastify';
import ProductCards from "../components/ProductCards";
import 'react-toastify/dist/ReactToastify.css';
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const productId = parseInt(id);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [selectedImage, setSelectedImage] = useState("");
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [quantity] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  const product = products.find((p) => p.id === productId) ||
    electronicsProducts.find((p) => p.id === productId) ||
    cosmeticProducts.find((p) => p.id === productId) ||
    sliderProducts.find((p) => p.id === productId) ||
    foodproducts.find((p) => p.id === productId) ||
    healthproducts.find((p) => p.id === productId) ||
    footwearProducts.find((p) => p.id === productId);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    toast.success(`${product.name} has been added to the cart!`);
  };

  const handleBuyNow = () => {
    addToCart({ ...product, quantity });
    navigate("/cart");
  };

  const handleImageClick = () => {
    setIsFullScreen(true);
  };

  const closeFullScreen = () => {
    setIsFullScreen(false);
  };

  let relatedProducts = [];
  if (product) {
    if (product.type === "Electronics") {
      relatedProducts = electronicsProducts;
    } else if (product.type === "Footwear") {
      relatedProducts = footwearProducts;
    } else if (product.type === "Cosmetics") {
      relatedProducts = cosmeticProducts;
    } else if (product.type === "Food") {
      relatedProducts = foodproducts;
    } else if (product.type === "Health") {
      relatedProducts = healthproducts;
    } else {
      relatedProducts = products;
    }
    relatedProducts = relatedProducts.filter((p) => p.id !== productId);
  }

  return (
    <div className="product-details">
      <ToastContainer position="bottom-right" />
      {product ? (
        <>
          <div className="product-image-info">
            <div className="product-image-gallery">
              <div className="main-image-wrapper" onClick={handleImageClick}>
                <img
                  className="main-image"
                  src={selectedImage || product.image}
                  alt={product.name}
                />
              </div>
              <div className="thumbnail-gallery">
                {product.moreImages &&
                  product.moreImages.map((img, index) => (
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
          </div>

          <div className="product-details-info">
            <p className="product-type-details">{product.type}</p>
            <h1 className="product-name-details">{product.name}</h1>
            <p className="rating-details">⭐⭐⭐⭐⭐</p>
            <div className="price">
              <span className="current-price-details">BDT {product.price}</span>
              <span className="original-price-details">BDT {product.originalPrice}</span>
            </div>
            <p>Weight: {product.weight} KG</p>
            <p className="product-description-details">{product.description}</p>
            <div className="action-buttons">
              <button onClick={handleAddToCart} className="add-to-cart">Add to Cart</button>
              <button onClick={handleBuyNow} className="buy-now">Buy Now</button>
            </div>
          </div>

          {isFullScreen && (
            <div className="fullscreen-overlay show" onClick={closeFullScreen}>
              <img src={selectedImage || product.image} alt="Full Screen" className="fullscreen-image" />
            </div>
          )}

            <ProductCards 
              products={relatedProducts} 
              sectionSubtitle="Related Products"
              sectionMainTitle="Discover More Collections"
            />
        </>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default ProductDetails;
