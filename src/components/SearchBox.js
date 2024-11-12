import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products'
import './SearchBox.css';

const SearchBox = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(query)
    );

    setFilteredProducts(filtered);
  };

  const handleReset = () => {
    setSearchQuery('');
    setFilteredProducts([]);
  };

  return (
    <form className="search-container" onReset={handleReset}>
      <div className="search-box">
        <input
          id="search-input"
          type="text"
          placeholder=""
          value={searchQuery}
          onChange={handleSearch}
        />
        <button type="reset" />
      </div>

      {searchQuery && filteredProducts.length > 0 && (
        <div className="search-results">
          {filteredProducts.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id} className="search-result-item">
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
