import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroTopSection.css';

const HeroTopSection = () => {
  const navigate = useNavigate();
  
  const handleBuyNowClick = () => {
    navigate('/electronics');
  };
  return (
    <div className="hero-top-section">
      <div className="hero-top-info">
        <span>
          <strong>GET 25% OFF</strong> for your first order. <strong className="buynow" onClick={handleBuyNowClick} >Buy Now</strong>{' '}
        </span>
      </div>
      <div className="hero-top-social">
      <a href="https://www.facebook.com/profile.php?id=61570624734394&mibextid=kFxxJD" target="_blank" rel="noopener noreferrer">
            <i className="ri-facebook-circle-fill"></i>
          </a>
          <a href="https://m.me/524882610703640" target="_blank" rel="noopener noreferrer">
            <i className="ri-messenger-fill"></i>
          </a>
          <a href="https://wa.me/message/H3HCLKGHJ6WMA1" target="_blank" rel="noopener noreferrer">
            <i className="ri-whatsapp-fill"></i>
          </a>
          <a href="https://www.instagram.com/kinbo_ekhaney/" target="_blank" rel="noopener noreferrer">
            <i className="ri-instagram-fill"></i>
          </a>
          <a href="https://www.linkedin.com/company/kinbo-ekhaney/" target="_blank" rel="noopener noreferrer">
          <i className="ri-linkedin-box-fill"></i>
          </a>
        <a href="https://www.youtube.com/@KinboEkhaney" target="_blank" rel="noopener noreferrer">
          <i className="ri-youtube-fill"></i> 
        </a>
      </div>
    </div>
  );
};

export default HeroTopSection;

// https://www.linkedin.com/company/kinbo-ekhaney/