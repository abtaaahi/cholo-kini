import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>Follow us on:</p>
      <div className="social-icons">
        <a href="https://facebook.com">Facebook</a>
        <a href="https://twitter.com">Twitter</a>
        <a href="https://instagram.com">Instagram</a>
      </div>
      <p>&copy; 2024 Cholo Kini</p>
    </footer>
  );
};

export default Footer;
