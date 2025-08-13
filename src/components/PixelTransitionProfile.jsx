import { animate } from "motion";
import React, { useRef, useEffect, useState } from "react";

const profileImages = [
  "/ProfilePic1.jpg",
  "/ProfilePic2.jpg",
  "/ProfilePic3.jpg",
  "/ProfilePic4.jpg",
  "/ProfilePic5.jpg",
  "/ProfilePic6.jpg",
];

// Inspiration: https://reactbits.dev/animations/pixel-transition
export default function PixelTransitionProfile({
  gridSize = 8,
  pixelColor = "#FCFBF4",
  animationDuration = 400,
}) {
  const containerRef = useRef(null);
  const pixelGridRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Generate the pixel grid on gridSize and pixelColor change
  //   Recreate pixel elements to update the pixel grid
  useEffect(() => {
    const pixelGrid = pixelGridRef.current;
    if (!pixelGrid) return;

    // Clear the pixel grid to prevent accumulation of pixels after each generation
    pixelGrid.innerHTML = "";

    const centerX = gridSize / 2;
    const centerY = gridSize / 2;
    const radius = gridSize / 2;

    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        // Calculate distance from center to determine if pixel should be inside circle
        const distanceFromCenter = Math.sqrt(
          Math.pow(col + 0.5 - centerX, 2) + Math.pow(row + 0.5 - centerY, 2),
        );

        if (distanceFromCenter <= radius) {
          const pixel = document.createElement("div");
          pixel.className = "absolute opacity-0 transition-opacity duration-75";
          pixel.style.backgroundColor = pixelColor;

          const size = 100 / gridSize;
          pixel.style.width = `${size}%`;
          pixel.style.height = `${size}%`;
          pixel.style.left = `${col * size}%`;
          pixel.style.top = `${row * size}%`;

          pixelGrid.appendChild(pixel);
        }
      }
    }
  }, [gridSize, pixelColor]);

  const animatePixelTransition = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    const pixels = pixelGridRef.current?.children;
    if (!pixels) return;

    // Show pixels in random order
    const pixelArray = Array.from(pixels);
    const shuffled = [...pixelArray].sort(() => Math.random() - 0.5);

    // index to stagger animation timing for each pixel
    // use animationDuration get animation duration for each pixel for each phase (appear/disappear)
    shuffled.forEach((pixel, index) => {
      setTimeout(
        () => {
          pixel.style.opacity = "1";
        },
        index * (animationDuration / pixelArray.length / 2),
      );
    });

    // Change image at halfway point
    setTimeout(() => {
      setCurrentImageIndex((prev) => (prev + 1) % profileImages.length);
    }, animationDuration / 2);

    // Hide pixels
    setTimeout(() => {
      shuffled.forEach((pixel, index) => {
        setTimeout(
          () => {
            pixel.style.opacity = "0";
          },
          index * (animationDuration / pixelArray.length / 2),
        );
      });
    }, animationDuration / 2);

    // Reset animation state
    setTimeout(() => {
      setIsAnimating(false);
    }, animationDuration);
  };

  return (
    <div
      className="ring-rosepinefoam hover:ring-rosepinelove relative h-32 w-32 transform cursor-pointer rounded-full ring-4 transition-all duration-300 hover:scale-110 active:scale-90 md:h-64 md:w-64"
      onMouseEnter={() => !isAnimating && setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onClick={animatePixelTransition}
    >
      {/* Show tooltip */}
      {showTooltip && !isAnimating && (
        <div className="bg-rosepinehighlight-high -rounded-lg absolute -top-9 left-1/2 z-10 -translate-x-1/2 transform px-3 py-1 text-sm">
          Click Me!
          <div className="border-t-rosepinehighlight-high absolute top-full left-1/2 h-0 w-0 -translate-x-1/2 transform border-t-4 border-r-4 border-l-4 border-transparent"></div>
        </div>
      )}

      {/* Profile Container */}
      <div ref={containerRef} className="h-full w-full rounded-full">
        {/* Current Image */}
        <img
          src={profileImages[currentImageIndex]}
          alt="Profile"
          className="ring-rosepinelove h-full w-full rounded-full object-cover"
        />

        {/* Pixel Grid overlay */}
        <div
          ref={pixelGridRef}
          className="pinelove pointer-events-none absolute inset-0 z-10 h-full w-full overflow-hidden rounded-full"
          style={{ clipPath: "circle(50% at center)" }}
        />
      </div>
    </div>
  );
}
