import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { products, electronicsProducts, cosmeticProducts, sliderProducts, footwearProducts, foodproducts, healthproducts } from "../data/products";
import './SearchBox.css';

const SearchBox = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const searchBoxRef = useRef(null);

  const allProducts = [
    ...products,
    ...electronicsProducts,
    ...cosmeticProducts,
    ...sliderProducts,
    ...footwearProducts,
    ...foodproducts,
    ...healthproducts
  ];

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = allProducts.filter(product =>
      product.name.toLowerCase().includes(query) ||
      product.keyword.some(keyword => keyword.toLowerCase().includes(query))
    );

    setFilteredProducts(filtered);
  };

  const handleReset = () => {
    setSearchQuery('');
    setFilteredProducts([]);
  };

  const handleClickOutside = useCallback((event) => {
    if (searchBoxRef.current && !searchBoxRef.current.contains(event.target)) {
      handleReset();
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [handleClickOutside]); 

  const handleProductClick = () => {
    handleReset();
  };

  return (
    <form className="search-container" ref={searchBoxRef} onReset={handleReset}>
      <div className="search-box">
        <input
          id="search-input"
          type="text"
          placeholder=""
          value={searchQuery}
          onChange={handleSearch}
          autoComplete="off"
        />
        <button type="reset" />
      </div>

      {searchQuery && filteredProducts.length > 0 && (
        <div className="search-results">
          {filteredProducts.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="search-result-item"
              onClick={handleProductClick}
            >
              <img src={product.image} alt={product.name} className="search-product-image" />
              <p>{product.name}</p>
            </Link>
          ))}
        </div>
      )}
    </form>
  );
};

export default SearchBox;