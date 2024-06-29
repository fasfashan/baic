import { useState } from "react";
import slide1 from "../assets/slide-1.jpg";
const slides = [
  {
    image: slide1,
    heading: "CONQUER THE ROAD ON & OFF.",
    cta: "Call to Action 1",
    link: "#cta1",
  },
  {
    image: slide1,
    heading: "Slide 2 Heading",
    cta: "Call to Action 2",
    link: "#cta2",
  },
  {
    image: slide1,
    heading: "Slide 2 Heading",
    cta: "Call to Action 3",
    link: "#cta3",
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
  return (
    <div className="relative w-full  m-auto overflow-hidden">
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
              <div className="flex max-w-6xl m-auto py-40 items-center  h-full   text-white">
                <div className="max-w-2xl flex flex-col gap-8">
                  <h1 className="text-7xl font-medium max-w-96 mb-4">
                    {slide.heading}
                  </h1>
                  <a
                    className="py-3 px-8 text-center hover:bg-red-600 transition-all   border border-white hover:border-none rounded-xl"
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
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
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
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
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
