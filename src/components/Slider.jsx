import { useState, useEffect } from "react";
import slide1 from "../assets/slide-1.jpg";
import slide2 from "../assets/slide-2.jpg";

const slides = [
  {
    image: slide1,
    heading: "CONQUER THE ROAD ON & OFF.",
    cta: "Call to Action 1",
    link: "/BJ40/index.html",
  },
  {
    image: slide2,
    heading: "EXPOSE. SURE.",
    cta: "Call to Action 2",
    link: "/X55-Models/index.html",
  },
];

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000); // 5 detik

    // Membersihkan interval saat komponen di-unmount
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="relative w-full m-auto overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="flex max-w-6xl m-auto py-40 items-center h-full text-white">
                <div className="max-w-2xl px-10 flex flex-col gap-8">
                  <h1 className="md:text-7xl text-6xl font-bold max-w-96 mb-4">
                    {slide.heading}
                  </h1>
                  <a
                    className="py-3 px-8 text-center hover:bg-red-600 transition-all border border-white hover:border-none rounded-xl"
                    href={slide.link}
                  >
                    EXPLORE MORE
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 md:left-4 left-1 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 md:right-4 right-1 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}
