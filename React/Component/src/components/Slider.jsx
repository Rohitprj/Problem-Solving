import React, { useState } from "react";

function Slider() {
  const images = [
    "https://picsum.photos/id/1015/600/300",
    "https://picsum.photos/id/1016/600/300",
    "https://picsum.photos/id/1018/600/300",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Simple React Slider</h2>

      <img
        src={images[currentIndex]}
        alt="slider"
        style={{
          width: "600px",
          height: "300px",
          borderRadius: "10px",
        }}
      />

      <div style={{ marginTop: "10px" }}>
        <button onClick={prevSlide}>Previous</button>

        <button onClick={nextSlide} style={{ marginLeft: "10px" }}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Slider;
