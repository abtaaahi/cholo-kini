import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>Stay connected with us on:</p>
        <div className="social-icons">
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
          <i class="ri-linkedin-box-fill"></i>
          </a>
          <a href="https://www.youtube.com/@KinboEkhaney" target="_blank" rel="noopener noreferrer">
            <i className="ri-youtube-fill"></i>
          </a>
        </div>
      </div>
      <div className="footer-right">
      {/* <a href="https://realestate.kinboekhaney.com/" target="_blank" rel="noopener noreferrer">Real Estate</a> */}
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/return-policy">Return Policy</Link>
        <Link to="/data-policy">Data Policy</Link>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Kinbo Ekhaney. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
