import React from 'react';
import './Loader.css';

const Loader = ({ isVisible }) => {
  return isVisible ? (
    <div className="loader-wrapper">
      <h1 className="order-placing">Placing Order...</h1>
      <div className="body">
        <span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div className="base">
          <span>
            <div className="face"></div>
          </span>
        </div>
      </div>
      <div className="longfazers">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  ) : null;
}

export default Loader;