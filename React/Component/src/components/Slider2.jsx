import React, { useState } from "react";

function Slider2() {
  const images = [
    "https://picsum.photos/id/1015/300/200",
    "https://picsum.photos/id/1016/300/200",
    "https://picsum.photos/id/1018/300/200",
    "https://picsum.photos/id/1019/300/200",
    "https://picsum.photos/id/1020/300/200",
  ];

  const [startIndex, setStartIndex] = useState(0);

  const visibleImages = 3;

  const nextSlide = () => {
    if (startIndex < images.length - visibleImages) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      <h2>Multi Image Slider</h2>

      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        {images
          .slice(startIndex, startIndex + visibleImages)
          .map((image, index) => (
            <img
              key={index}
              src={image}
              alt="slider"
              style={{
                width: "300px",
                height: "200px",
                borderRadius: "10px",
              }}
            />
          ))}
      </div>

      <button onClick={prevSlide}>Previous</button>

      <button onClick={nextSlide} style={{ marginLeft: "10px" }}>
        Next
      </button>
    </div>
  );
}

export default Slider2;
