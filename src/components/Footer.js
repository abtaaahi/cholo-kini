import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>Follow us on:</p>
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="ri-facebook-circle-fill"></i> {/* Facebook icon */}
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="ri-instagram-fill"></i> {/* Instagram icon */}
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <i className="ri-youtube-fill"></i> {/* YouTube icon */}
        </a>
      </div>
      <p>&copy; 2024 Cholo Kini</p>
    </footer>
  );
};

export default Footer;
