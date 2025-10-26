import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function PopupBanner() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of popup images - add more images here if needed
  const popupImages = [
    {
      src: "/pop-up-image.jpg",
      alt: "X55 II Promotion",
      link: "/X55-Models/index.html",
    },
    // Add more images here if you have multiple banners
    // {
    //   src: "/pop-up-image-2.jpg",
    //   alt: "BJ40 Plus Promotion",
    //   link: "/BJ40/index.html"
    // },
  ];

  useEffect(() => {
    // Check if user has seen the popup in this session
    const hasSeenPopup = sessionStorage.getItem("hasSeenPopup");

    if (!hasSeenPopup) {
      // Show popup after 1 second delay
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("hasSeenPopup", "true");
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setIsOpen(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % popupImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + popupImages.length) % popupImages.length
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-60 p-4">
      {/* Popup Container */}
      <div className="relative bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Close Button */}
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-all"
          aria-label="Close popup"
        >
          <X className="w-6 h-6 text-gray-700" />
        </button>

        {/* Navigation Arrows - Only show if multiple images */}
        {popupImages.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-80 rounded-full p-3 shadow-lg hover:bg-opacity-100 transition-all"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-80 rounded-full p-3 shadow-lg hover:bg-opacity-100 transition-all"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </>
        )}

        {/* Image Content with Link */}
        <div className="relative w-full">
          <a
            href={popupImages[currentSlide].link}
            onClick={closePopup}
            className="block w-full"
          >
            <img
              src={popupImages[currentSlide].src}
              alt={popupImages[currentSlide].alt}
              className="w-full h-auto object-contain max-h-[85vh] cursor-pointer hover:opacity-95 transition-opacity"
            />
          </a>
        </div>

        {/* Slide Indicators - Only show if multiple images */}
        {popupImages.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {popupImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentSlide === index
                    ? "bg-white w-8"
                    : "bg-white bg-opacity-50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
