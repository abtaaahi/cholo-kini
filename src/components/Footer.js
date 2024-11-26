import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>Follow us on:</p>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="ri-facebook-circle-fill"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="ri-instagram-fill"></i>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <i className="ri-youtube-fill"></i>
          </a>
        </div>
      </div>
      <div className="footer-right">
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/return-policy">Return Policy</Link>
        <Link to="/data-policy">Data Policy</Link>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Cholo Kini. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
