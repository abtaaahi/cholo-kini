import React, { useState, useEffect } from 'react';
import './FloatingButtons.css';

const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="floating-buttons">
      <a
        href="https://m.me/your-page-id"
        target="_blank"
        rel="noopener noreferrer"
        className="messenger-button"
      >
        <i className="fa-brands fa-facebook-messenger"></i>
      </a>

      {showScrollTop && (
        <button className="scroll-top-button" onClick={scrollToTop}>
          <i className="fa-solid fa-caret-up"></i>
        </button>
      )}
    </div>
  );
};

export default FloatingButtons;
