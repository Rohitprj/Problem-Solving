import React, { useState } from "react";

function Slider3() {
  const images = [
    "https://picsum.photos/id/1015/300/200",
    "https://picsum.photos/id/1016/300/200",
    "https://picsum.photos/id/1018/300/200",
    "https://picsum.photos/id/1019/300/200",
    "https://picsum.photos/id/1020/300/200",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const imageWidth = 320;

  const nextSlide = () => {
    if (currentIndex < images.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      <h2>Animated Carousel</h2>

      <div
        style={{
          width: "980px",
          margin: "auto",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "20px",
            transition: "transform 0.5s ease",
            transform: `translateX(-${currentIndex * imageWidth}px)`,
          }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="slider"
              style={{
                width: "300px",
                height: "200px",
                borderRadius: "10px",
                flexShrink: 0,
              }}
            />
          ))}
        </div>
      </div>

      <div style={{ marginTop: "20px" }}>
        <button onClick={prevSlide}>Previous</button>

        <button onClick={nextSlide} style={{ marginLeft: "10px" }}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Slider3;
