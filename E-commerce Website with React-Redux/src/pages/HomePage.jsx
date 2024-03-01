import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>Welcome to Our E-Commerce Store</h1>
        <p>Discover amazing deals on a wide range of products!</p>
        <Link to="/products" className="explore-button">Explore Products</Link>
      </div>
    </div>
  );
}

export default HomePage;
