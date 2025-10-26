import { useState, useEffect, useRef, useCallback } from "react";

export default function Car360Viewer({
  modelKey,
  colorKey,
  totalFrames = 36,
  colorName,
}) {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const containerRef = useRef(null);
  const dragStartX = useRef(0);
  const dragStartFrame = useRef(0);
  const imageCache = useRef({});
  const isMounted = useRef(true);

  // Detect touch device
  useEffect(() => {
    const checkTouchDevice = () => {
      setIsTouchDevice(
        "ontouchstart" in window ||
          navigator.maxTouchPoints > 0 ||
          navigator.msMaxTouchPoints > 0
      );
    };
    checkTouchDevice();
  }, []);

  // Build image path
  const getImagePath = useCallback(
    (frameIndex) => {
      return `/${modelKey}/${colorKey}/_${frameIndex}.png`;
    },
    [modelKey, colorKey]
  );

  // Preload images - simplified version
  useEffect(() => {
    isMounted.current = true;
    setIsLoading(true);
    setCurrentFrame(0);

    // Clear old cache
    imageCache.current = {};

    const loadImages = async () => {
      // Load all frames in order
      const loadPromises = [];

      for (let i = 0; i < totalFrames; i++) {
        loadPromises.push(
          new Promise((resolve) => {
            const img = new Image();
            const imgPath = getImagePath(i);

            img.onload = () => {
              if (isMounted.current) {
                imageCache.current[i] = imgPath;
              }
              resolve();
            };

            img.onerror = () => {
              console.error(`Failed to load frame ${i}: ${imgPath}`);
              resolve();
            };

            img.src = imgPath;
          })
        );
      }

      // Wait for all images
      await Promise.all(loadPromises);

      if (isMounted.current) {
        setIsLoading(false);
      }
    };

    loadImages();

    return () => {
      isMounted.current = false;
    };
  }, [modelKey, colorKey, totalFrames, getImagePath]);

  // Drag handlers
  const handlePointerDown = (e) => {
    if (isLoading) return;
    setIsDragging(true);
    dragStartX.current = e.clientX || e.touches?.[0]?.clientX;
    dragStartFrame.current = currentFrame;
    e.preventDefault();
  };

  const handlePointerMove = (e) => {
    if (!isDragging || isLoading) return;

    const currentX = e.clientX || e.touches?.[0]?.clientX;
    const deltaX = currentX - dragStartX.current;
    
    // Use different sensitivity for touch devices vs mouse
    // Lower number = more sensitive (moves faster)
    // Touch devices need lower sensitivity for smoother movement
    const sensitivity = isTouchDevice ? 2 : 6;
    const frameDelta = Math.floor(deltaX / sensitivity);

    let newFrame = (dragStartFrame.current + frameDelta) % totalFrames;

    if (newFrame < 0) {
      newFrame = totalFrames + newFrame;
    }

    setCurrentFrame(newFrame);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isLoading) return;

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setCurrentFrame((prev) => (prev - 1 + totalFrames) % totalFrames);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        setCurrentFrame((prev) => (prev + 1) % totalFrames);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLoading, totalFrames]);

  return (
    <div className="relative w-full mx-auto">
      {/* Color Name Label */}
      <div className="border select-none rounded-xl border-neutral-500 w-fit justify-center m-auto mt-4 mb-4 flex items-center">
        <h2 className="text-center transition-all px-4 py-2">{colorName}</h2>
      </div>

      {/* 360 Viewer Container */}
      <div
        ref={containerRef}
        className={`relative w-full overflow-hidden select-none ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onTouchStart={handlePointerDown}
        onTouchMove={handlePointerMove}
        onTouchEnd={handlePointerUp}
        role="img"
        aria-label={`${modelKey} ${colorName} 360-degree view, frame ${
          currentFrame + 1
        } of ${totalFrames}`}
      >
        {/* Loading State */}
        {isLoading && (
          <div className="flex flex-col items-center justify-center bg-gray-50 min-h-[400px]">
            <div className="w-16 h-16 border-4 border-gray-300 border-t-red-600 rounded-full animate-spin mb-4"></div>
            <p className="text-gray-600 font-medium">Loading 360° view...</p>
          </div>
        )}

        {/* Current Frame Image */}
        {!isLoading && imageCache.current[currentFrame] && (
          <img
            src={imageCache.current[currentFrame]}
            alt={`${modelKey} ${colorName} - Frame ${currentFrame + 1}`}
            className="w-full h-auto object-contain pointer-events-none"
            draggable="false"
          />
        )}

        {/* Drag Instruction Overlay */}
        {!isLoading && !isDragging && currentFrame === 0 && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-black bg-opacity-50 text-white px-6 py-3 rounded-lg animate-pulse">
              <p className="text-sm md:text-base">← Drag to rotate 360° →</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
