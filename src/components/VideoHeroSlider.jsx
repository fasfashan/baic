import { useState, useEffect, useRef } from "react";
import BJ40Video from "../assets/BJ40-Video.mp4";
import X55Video from "../assets/X55-Video.mp4";

const slides = [
  {
    id: 1,
    video: BJ40Video,
    title: "Feel the power. Drive it now",
    ctaText: "Explore BJ40",
    ctaLink: "/BJ40/index.html",
  },
  {
    id: 2,
    video: X55Video,
    title: "Feel the power. Drive it now",
    ctaText: "Explore X55 II",
    ctaLink: "/X55-Models/index.html",
  },
  {
    id: 3,
    video: BJ40Video,
    title: "Feel the power. Drive it now",
    ctaText: "Explore X55 II",
    ctaLink: "/X55-Models/index.html",
  },
];

export default function VideoHeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const videoRefs = useRef([]);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
  };

  // Auto play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000); // 6 seconds

    return () => {
      clearInterval(interval);
    };
  }, [currentSlide]);

  // Handle transition end
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500); // Match transition duration

    return () => clearTimeout(timer);
  }, [currentSlide]);

  // Handle video playback
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentSlide) {
          video.currentTime = 0;
          video.play().catch(console.error);
        } else {
          video.pause();
        }
      }
    });
  }, [currentSlide]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Video Background */}
          <video
            ref={(el) => (videoRefs.current[index] = el)}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay={index === currentSlide}
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src={slide.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

          {/* Content */}
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="text-center text-white px-4 max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                {slide.title}
              </h1>
              <a
                href={slide.ctaLink}
                className="inline-block bg-white text-black font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 text-lg"
              >
                {slide.ctaText}
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        disabled={isTransitioning}
        className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-30 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        disabled={isTransitioning}
        className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-30 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-30">
        <div className="bg-white rounded-full px-4 py-3 flex items-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              className={`rounded-full transition-all duration-300 disabled:cursor-not-allowed ${
                index === currentSlide
                  ? "bg-red-600 w-10 h-2"
                  : "bg-gray-300 hover:bg-gray-400 w-2 h-2"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
