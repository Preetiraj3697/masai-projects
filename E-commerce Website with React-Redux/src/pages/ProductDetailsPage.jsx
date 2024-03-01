// pages/ProductDetailsPage.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ImageModal from "../components/ImageModal"; // Import the ImageModal component
import "./ProductDetailsPage.css";
import { addToCart, addToWishlist } from "../Redux/actions";
import { connect } from "react-redux";
function ProductDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  // Function to handle click on image
  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="product-details-container">
      <h1>Product Details Page</h1>
      <div className="product-details-content">
        <div className="product-images">
          {/* Render multiple images */}
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${product.title} - ${index + 1}`}
              onClick={() => handleImageClick(image)}
            />
          ))}
        </div>
        <div>
          <p>Name: {product.title}</p>
          <p>Brand: {product.brand}</p>
          <p>Price: ${product.price}</p>
          <p>Category: {product.category}</p>
          <p>Description: {product.description}</p>

          <button className="btn" onClick={() => addToWishlist(product)}>Like ❤️</button>
          <button className="btn" onClick={() => addToCart(product)}>Add ➕</button>
        </div>
      </div>
      {selectedImage && (
        <ImageModal imageUrl={selectedImage} onClose={handleCloseModal} />
      )}{" "}
      {/* Render the modal */}
    </div>
  );
}

const mapStateToProps = (state) => ({
  product: state.product,
});

const mapDispatchToProps = {
  addToCart,
  addToWishlist,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailsPage);
