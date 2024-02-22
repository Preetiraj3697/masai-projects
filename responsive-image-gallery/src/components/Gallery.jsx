import React from "react";
import ImageCard from "./ImageCard";

const Gallery = () => {
  // Sample data for testing
  const images = [
    {
      id: 1,
      title: "Image 1",
      price: "$10",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Image 2",
      price: "$15",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Image 3",
      price: "$20",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      title: "Image 1",
      price: "$10",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      title: "Image 2",
      price: "$15",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      title: "Image 3",
      price: "$20",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 7,
      title: "Image 1",
      price: "$10",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 8,
      title: "Image 2",
      price: "$15",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 9,
      title: "Image 3",
      price: "$20",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 10,
      title: "Image 1",
      price: "$10",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 11,
      title: "Image 1",
      price: "$10",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 12,
      title: "Image 2",
      price: "$15",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 13,
      title: "Image 3",
      price: "$20",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 14,
      title: "Image 1",
      price: "$10",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 15,
      title: "Image 2",
      price: "$15",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 16,
      title: "Image 3",
      price: "$20",
      imageUrl: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="gallery" id="gallery">
      {images.map((image) => (
        <ImageCard
          key={image.id}
          title={image.title}
          price={image.price}
          imageUrl={image.imageUrl}
        />
      ))}
    </div>
  );
};

export default Gallery;
