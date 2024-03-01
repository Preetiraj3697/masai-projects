// pages/ProductListingPage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProductListingPage.css'; // Import the CSS file

function ProductListingPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div>
      <h1 className="product-listing-container">Products Listing Page</h1>
      <div className="product-listing-wrapper">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <Link to={`/products/${product.id}`}>
              <img src={product.thumbnail} alt={product.title} />
              <h3>Name: {product.title}</h3>
              <p>Price: ${product.price}</p>
              <p>Category: {product.category}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductListingPage;
