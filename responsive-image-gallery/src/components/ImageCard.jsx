import React from "react";

const ImageCard = ({ title, price, imageUrl }) => {
  return (
    <div className="image-card">
      <img src={imageUrl} alt={title} />
      <div className="image-info">
        <h3>{title}</h3>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default ImageCard;
