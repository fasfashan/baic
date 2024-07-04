import { useState, useEffect, useRef } from "react";
import flameRed from "../assets/flame red.png";
import snowWhite from "../assets/snow white.png";
import jadeBlack from "../assets/jade black.png";
import porcelainBlue from "../assets/porcelain blue.png";
import forestGrean from "../assets/forest green.png";
import armyGreen from "../assets/army green.png";
import midnightBlue from "../assets/midnight blue.png";
import platinumBlack from "../assets/platinum + black.png";
import yellowBlack from "../assets/yellow + black.png";
import redBlack from "../assets/red + black.png";
import crystalBlack from "../assets/crystal + black.png";
import whiteBlack from "../assets/white + black.png";
export default function ExploreCar() {
  const [activeTab, setActiveTab] = useState("BJ40 Plus");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const colors = [
    "#94111B",
    "#ffffff",
    "#000000",
    "#86A9C6",
    "#2E3F2B",
    "#5A603F",
    "#00243A",
  ];
  const colorsX55 = ["#464C47", "#96901D", "#EA3435", "#CBD1D4", "#D1D1D1"];
  const colorToImageMapBJ40 = {
    "#94111B": flameRed,
    "#ffffff": snowWhite,
    "#000000": jadeBlack,
    "#86A9C6": porcelainBlue,
    "#2E3F2B": forestGrean,
    "#5A603F": armyGreen,
    "#00243A": midnightBlue,
  };
  const colorToImageMapX55 = {
    "#464C47": platinumBlack,
    "#96901D": yellowBlack,
    "#EA3435": redBlack,
    "#CBD1D4": crystalBlack,
    "#D1D1D1": whiteBlack,
  };
  const [animating, setAnimating] = useState(false);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const selectedColorRef = useRef(null);
  const containerRef = useRef(null);
  useEffect(() => {
    if (selectedColorRef.current && containerRef.current) {
      const selectedElement = selectedColorRef.current;
      const container = containerRef.current;

      // Hitung posisi scroll agar elemen yang dipilih berada di tengah
      const scrollLeft =
        selectedElement.offsetLeft -
        container.offsetWidth / 2 +
        selectedElement.offsetWidth / 2;
      container.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
    }
  }, [selectedColor]);
  useEffect(() => {
    if (selectedColorRef.current && containerRef.current) {
      const selectedElement = selectedColorRef.current;
      const container = containerRef.current;

      // Hitung posisi scroll agar elemen yang dipilih berada di tengah
      const scrollLeft =
        selectedElement.offsetLeft -
        container.offsetWidth / 2 +
        selectedElement.offsetWidth / 2;
      container.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
    }
  }, [selectedColor]);
  const onColorSelect = (color) => {
    if (color !== selectedColor) {
      setAnimating(true);
      setTimeout(() => {
        setSelectedColor(color);
        setAnimating(false);
      }, 100); // Duration of the transition
    }
  };

  const [selectedColorX55, setSelectedColorX55] = useState(colorsX55[0]);
  const onColorSelectX55 = (color) => {
    if (color !== selectedColor) {
      setAnimating(true);
      setTimeout(() => {
        setSelectedColorX55(color);
        setAnimating(false);
      }, 100); // Duration of the transition
    }
  };

  return (
    <div className="App">
      <div className="mt-10 md:px-8 px-5">
        <h2 className="md:text-4xl text-3xl font-bold text-center ">
          EXPLORE YOUR BAIC
        </h2>
        <div className="mt-6">
          <div className="flex gap-8 justify-center max-w-6xl m-auto space-x-4 ">
            <button
              className={`py-2 transition-all border-b border-gray-400 px-4 text-2xl ${
                activeTab === "BJ40 Plus" ? "border-b-4 border-red-500" : ""
              }`}
              onClick={() => handleTabClick("BJ40 Plus")}
            >
              BJ40 Plus
            </button>
            <button
              className={`py-2 transition-all border-b border-gray-400 px-4 text-2xl ${
                activeTab === "X55 II" ? "border-b-4 border-red-500" : ""
              }`}
              onClick={() => handleTabClick("X55 II")}
            >
              X55 II
            </button>
          </div>
          <div className="p-4 flex justify-center">
            {activeTab === "BJ40 Plus" && (
              <div className="mt-10 md:px-8 px-5">
                <div className="flex space-x-3 justify-center">
                  {colors.map((color) => (
                    <div
                      key={color}
                      className={`w-8 h-8 rounded-full border border-neutral-100 cursor-pointer transition-transform duration-200 ${
                        selectedColor === color
                          ? "border-4 outline outline-red-500 border-white transform scale-110"
                          : "border-2 border-transparent"
                      }`}
                      style={{ backgroundColor: color }}
                      onClick={() => onColorSelect(color)}
                    ></div>
                  ))}
                </div>
                <div className="flex flex-col max-w-2xl overflow-hidden justify-center mx-auto">
                  <img
                    src={colorToImageMapBJ40[selectedColor]}
                    alt="BJ40 Plus"
                    className={`transition-transform duration-300 ${
                      animating
                        ? "translate-x-full opacity-0"
                        : "translate-x-0 opacity-100"
                    }`}
                  />
                  <div className="relative w-full overflow-hidden">
                    <div
                      ref={containerRef}
                      className="flex md:grid md:grid-cols-7 w-full overflow-x-auto"
                    >
                      {colors.map((color, index) => (
                        <button
                          key={index}
                          ref={
                            selectedColor === color ? selectedColorRef : null
                          }
                          className={`inline-block w-full md:w-auto md:flex-shrink-0 transform transition-transform duration-300 ${
                            selectedColor === color ? "scale-100" : "scale-75"
                          }`}
                          style={{ minWidth: "70%" }} // Menyesuaikan lebar item
                          onClick={() => onColorSelect(color)}
                        >
                          <div className="relative">
                            <img
                              src={colorToImageMapBJ40[color]}
                              alt={`BJ40 Plus ${index + 1}`}
                              className="block w-full h-auto"
                            />
                            {selectedColor !== color && (
                              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-nowrap flex-wrap gap-4 mt-10 justify-center">
                  <a
                    className="py-3 w-full text-center hover:bg-gray-100 transition-all border border-gray-400 rounded-xl"
                    href="/BJ40/index.html"
                  >
                    EXPLORE MORE
                  </a>
                  <a
                    className="py-3 w-full text-center hover:bg-gray-100 transition-all border border-gray-400 rounded-xl"
                    href="/brochure-bj40.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    DOWNLOAD BROCHURE
                  </a>

                  <a
                    className="py-3 w-full text-center hover:bg-gray-100 transition-all border border-gray-400 rounded-xl"
                    href="/book-a-test-drive/index.html"
                  >
                    BOOK A TEST DRIVE
                  </a>
                </div>
              </div>
            )}
            {activeTab === "X55 II" && (
              <div className="mt-10 md:px-8 px-5">
                <div className="flex space-x-3 justify-center">
                  {colorsX55.map((color) => (
                    <div
                      key={color}
                      className={`w-8 h-8 rounded-full border border-neutral-100 cursor-pointer transition-transform duration-200 ${
                        selectedColorX55 === color
                          ? "border-4 outline outline-red-500 border-white transform scale-110"
                          : "border-2 border-transparent"
                      }`}
                      style={{ backgroundColor: color }}
                      onClick={() => onColorSelectX55(color)}
                    ></div>
                  ))}
                </div>
                <div className="flex flex-col max-w-2xl overflow-hidden justify-center mx-auto">
                  <img
                    src={colorToImageMapX55[selectedColorX55]}
                    alt="BJ40 Plus"
                    className={`transition-transform duration-300 ${
                      animating
                        ? "translate-x-full opacity-0"
                        : "translate-x-0 opacity-100"
                    }`}
                  />
                  <div className="relative w-full overflow-hidden">
                    <div
                      ref={containerRef}
                      className="flex md:grid md:grid-cols-5 w-full overflow-x-auto"
                    >
                      {colorsX55.map((color, index) => (
                        <button
                          key={index}
                          ref={
                            selectedColorX55 === color ? selectedColorRef : null
                          }
                          className={`inline-block w-full md:w-auto md:flex-shrink-0 transform transition-transform duration-300 ${
                            selectedColorX55 === color
                              ? "scale-100"
                              : "scale-75"
                          }`}
                          style={{ minWidth: "70%" }} // Menyesuaikan lebar item
                          onClick={() => onColorSelectX55(color)}
                        >
                          <div className="relative">
                            <img
                              src={colorToImageMapX55[color]}
                              alt={`BJ40 Plus ${index + 1}`}
                              className="block w-full h-auto"
                            />
                            {selectedColorX55 !== color && (
                              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-nowrap flex-wrap gap-4 mt-10 justify-center">
                  <a
                    className="py-3 w-full text-center hover:bg-gray-100 transition-all border border-gray-400 rounded-xl"
                    href="/x55/index.html"
                  >
                    EXPLORE MORE
                  </a>
                  <a
                    className="py-3 w-full text-center hover:bg-gray-100 transition-all border border-gray-400 rounded-xl"
                    href="/brochure-x55.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    DOWNLOAD BROCHURE
                  </a>

                  <a
                    className="py-3 w-full text-center hover:bg-gray-100 transition-all border border-gray-400 rounded-xl"
                    href="/book-a-test-drive/index.html"
                  >
                    BOOK A TEST DRIVE
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
