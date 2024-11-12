// src/components/ImageSlider.js
import React from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import { sliderProducts } from "../data/products"; // Import centralized products data
import "./ImageSlider.css";

const ImageSlider = () => {
  const navigate = useNavigate();

  const handleImageClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="slider-container">
      <Slider
        dots={false}
        infinite={true}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={3000}
      >
        {sliderProducts.map((product) => (
          <div key={product.id} onClick={() => handleImageClick(product.id)}>
            <img src={product.image} alt={product.name} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;