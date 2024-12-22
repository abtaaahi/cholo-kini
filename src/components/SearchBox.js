import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
// import { products, electronicsProducts, cosmeticProducts, sliderProducts, footwearProducts, foodproducts, healthproducts } from "../data/products";
import { foodproducts, healthproducts } from "../data/products";
import './SearchBox.css';
import Fuse from 'fuse.js';

const SearchBox = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const searchBoxRef = useRef(null);

  const allProducts = useMemo(() => [
    // ...products,
    // ...electronicsProducts,
    // ...cosmeticProducts,
    // ...sliderProducts,
    // ...footwearProducts,
    ...foodproducts,
    ...healthproducts
  ], []);

  const fuse = useMemo(() => new Fuse(allProducts, {
    keys: ['name', 'keyword'],
    threshold: 0.3,
    includeScore: true,
  }), [allProducts]);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedQuery(searchQuery), 300); // 300ms delay
    return () => clearTimeout(handler);
  }, [searchQuery]);

  useEffect(() => {
    if (debouncedQuery) {
      const results = fuse.search(debouncedQuery);
      setFilteredProducts(results.map(result => result.item));
    } else {
      setFilteredProducts([]);
    }
  }, [debouncedQuery, fuse]);
  
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
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

      {debouncedQuery && filteredProducts.length > 0 && (
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