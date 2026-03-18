import React, { useState, useEffect, useRef } from "react";

// --- Data ---
// Coordinates updated to fit the new proportional world map scale (0-100)
const reviewData = [
  {
    id: "rohit",
    name: "Rohit Sharma",
    date: "April 26, 2024",
    avatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=Rohit&backgroundColor=e2e8f0",
    rating: 5,
    text: "Wave Visas made my PR application process smooth and stress-free. Their team guided me clearly at every stage and handled my documentation with great professionalism. Highly recommended!",
    x: 68,
    y: 36,
    cardPos: "top-right",
  },
  {
    id: "neha",
    name: "Neha Verma",
    date: "April 22, 2024",
    avatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=Neha&backgroundColor=d4e157",
    rating: 5,
    text: "I had an excellent experience with Wave Visas. Their consultants provided honest advice and realistic guidance, which gave me full confidence throughout my visa journey.",
    x: 45,
    y: 22,
    cardPos: "top-center",
  },
  {
    id: "dest",
    // Destination dot in North America
    x: 22,
    y: 26,
    isDest: true,
  },
];

// --- Components ---

const StarIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-4 h-4 text-yellow-400"
  >
    <path
      fillRule="evenodd"
      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
      clipRule="evenodd"
    />
  </svg>
);

const ReviewCard = ({ review, isVisible }) => {
  if (!review.name) return null;

  const posClasses =
    review.cardPos === "top-right"
      ? "bottom-full left-0 mb-4 ml-[-10px] origin-bottom-left"
      : "bottom-full left-1/2 -translate-x-1/2 mb-4 origin-bottom";

  return (
    <div
      className={`absolute w-80 bg-white rounded-2xl p-5 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.15)] z-50 transition-all duration-300 ease-out pointer-events-none
        ${isVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-90 translate-y-4"}
        ${posClasses}
      `}
    >
      <div className="flex items-center gap-3 mb-3">
        <img
          src={review.avatar}
          alt={review.name}
          className="w-10 h-10 rounded-full border border-gray-100"
        />
        <div>
          <h4 className="font-bold text-gray-900 text-sm leading-tight">
            {review.name}
          </h4>
          <span className="text-xs text-gray-500">{review.date}</span>
        </div>
      </div>
      <div className="flex gap-1 mb-2">
        {[...Array(review.rating)].map((_, i) => (
          <StarIcon key={i} />
        ))}
      </div>
      <p className="text-gray-600 text-xs leading-relaxed font-medium">
        {review.text}
      </p>
    </div>
  );
};

// Simplified SVG Continents
const MapPaths = () => (
  <>
    <path d="M 10 15 C 20 5, 40 10, 35 25 C 30 35, 25 45, 20 45 C 15 35, 5 25, 10 15 Z" />
    <path d="M 20 48 C 28 48, 32 55, 28 70 C 25 80, 22 85, 20 80 C 15 70, 18 55, 20 48 Z" />
    <path d="M 42 15 C 50 10, 60 15, 62 25 C 55 30, 45 28, 42 15 Z" />
    <path d="M 40 32 C 55 30, 62 40, 55 55 C 50 65, 42 68, 40 50 C 35 40, 38 35, 40 32 Z" />
    <path d="M 58 12 C 75 5, 95 15, 92 35 C 85 50, 70 45, 60 30 C 55 20, 58 12, 58 12 Z" />
    <path d="M 75 60 C 85 55, 95 60, 90 70 C 85 80, 75 75, 75 60 Z" />
  </>
);

export default function App() {
  const [hoveredId, setHoveredId] = useState(null);
  const [progress, setProgress] = useState(0);

  // Use a ref to access the latest hoveredId inside the animation loop
  const hoveredIdRef = useRef(hoveredId);
  hoveredIdRef.current = hoveredId;

  // Animation Loop for the spinning globe
  useEffect(() => {
    let animationFrameId;
    const animate = () => {
      // Pause rotation if hovering over a dot/card
      if (!hoveredIdRef.current) {
        setProgress((prev) => (prev + 0.08) % 100);
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Helper to calculate Euclidean distance from the center of the globe (50, 50)
  const getDistanceFromCenter = (x, y) => {
    return Math.sqrt(Math.pow(x - 50, 2) + Math.pow(y - 50, 2));
  };

  // Maps the base coordinate to the current wrapped screen coordinate
  const getScreenPos = (baseX, baseY) => {
    return {
      x: (baseX - progress + 100) % 100,
      y: baseY,
    };
  };

  // Computes dots visibility. Fades out smoothly when nearing the edge to mimic passing behind the globe.
  const getDotStyle = (item) => {
    const pos = getScreenPos(item.x, item.y);
    const d = getDistanceFromCenter(pos.x, pos.y);
    // Outer edge is 50. Fade out starts at 40.
    const opacity = Math.max(0, Math.min(1, 1 - (d - 40) / 10));

    return {
      left: `${pos.x}%`,
      top: `${pos.y}%`,
      opacity: opacity,
      zIndex: hoveredId === item.id ? 50 : 20,
      display: opacity === 0 ? "none" : "block", // Remove from flow completely if invisible
    };
  };

  // Helper to render dynamically moving curved lines between dots
  const renderConnectionLine = (startItem, endItem) => {
    const startPos = getScreenPos(startItem.x, startItem.y);
    const endPos = getScreenPos(endItem.x, endItem.y);

    // Calculate opacities based on how close they are to the horizon
    const startD = getDistanceFromCenter(startPos.x, startPos.y);
    const endD = getDistanceFromCenter(endPos.x, endPos.y);
    const startOp = Math.max(0, Math.min(1, 1 - (startD - 40) / 10));
    const endOp = Math.max(0, Math.min(1, 1 - (endD - 40) / 10));

    // The line should fade if either dot fades
    const lineOpacity = Math.min(startOp, endOp);

    // If the distance on screen jumps massively, it means the line crosses the back of the globe
    if (Math.abs(startPos.x - endPos.x) > 50) return null;

    // Generate a sweeping arch
    const midX = (startPos.x + endPos.x) / 2;
    const midY = Math.min(startPos.y, endPos.y) - 15;

    return (
      <path
        d={`M ${startPos.x} ${startPos.y} Q ${midX} ${midY} ${endPos.x} ${endPos.y}`}
        fill="none"
        stroke="white"
        strokeWidth="0.3"
        opacity={lineOpacity}
        vectorEffect="non-scaling-stroke"
      />
    );
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center p-8 overflow-hidden">
      {/* Container scales responsively while keeping a perfect circle aspect ratio */}
      <div className="relative w-[90vw] max-w-[600px] aspect-square rounded-full">
        {/* 1. Globe Background - Contains the clipping mask and inner 3D shadows */}
        <div className="absolute inset-0 rounded-full overflow-hidden bg-[#eaf2f8] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1),_inset_-20px_-20px_50px_rgba(0,0,0,0.08),_inset_10px_10px_30px_rgba(255,255,255,0.9)] border border-[#d6e5ef]">
          {/* Moving Map Wrapper - Spans 200% width to allow seamless scrolling */}
          <div
            className="absolute h-full w-[200%] flex text-[#b5c7d3] opacity-90 transition-transform ease-linear"
            style={{ transform: `translateX(-${progress / 2}%)` }}
          >
            <svg
              className="w-1/2 h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              fill="currentColor"
            >
              <MapPaths />
            </svg>
            <svg
              className="w-1/2 h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              fill="currentColor"
            >
              <MapPaths />
            </svg>
          </div>

          {/* Globe Surface Overlay - Adds subtle latitude/longitude grid and spherical highlight */}
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,_rgba(255,255,255,0.6)_0%,_transparent_60%,_rgba(0,0,0,0.05)_100%)] pointer-events-none" />
          <svg
            className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
            viewBox="0 0 100 100"
          >
            <ellipse
              cx="50"
              cy="50"
              rx="49"
              ry="15"
              fill="none"
              stroke="black"
              strokeWidth="0.2"
            />
            <ellipse
              cx="50"
              cy="50"
              rx="15"
              ry="49"
              fill="none"
              stroke="black"
              strokeWidth="0.2"
            />
          </svg>
        </div>

        {/* 2. Interactive Foreground Layer - Positioned exactly on top, NO overflow-hidden */}
        <div className="absolute inset-0 w-full h-full z-20 pointer-events-none">
          {/* Connection Lines rendered behind the dots */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {renderConnectionLine(reviewData[0], reviewData[1])}
            {renderConnectionLine(reviewData[1], reviewData[2])}
          </svg>

          {/* Render moving dots and their cards */}
          {reviewData.map((item) => (
            <div
              key={item.id}
              className="absolute pointer-events-auto"
              style={getDotStyle(item)}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* The Blue Hitbox Dot */}
              <div
                className={`
                absolute w-4 h-4 bg-[#2b6aff] rounded-full -translate-x-1/2 -translate-y-1/2 cursor-pointer
                shadow-[0_0_0_4px_rgba(255,255,255,0.7)] transition-transform duration-300
                ${hoveredId === item.id ? "scale-150 shadow-[0_0_0_6px_rgba(255,255,255,0.9)]" : "scale-100"}
              `}
              />

              {/* Review Card Popup (Visible on Hover) */}
              {!item.isDest && (
                <ReviewCard review={item} isVisible={hoveredId === item.id} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
