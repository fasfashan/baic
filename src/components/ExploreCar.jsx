import { useState } from "react";
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
              <div className="mt-10">
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
                <div className="flex flex-col max-w-2xl overflow-hidden justify-center">
                  <img
                    src={colorToImageMapBJ40[selectedColor]}
                    alt="BJ40 Plus"
                    className={`transition-transform duration-300 ${
                      animating
                        ? "translate-x-full opacity-0"
                        : "translate-x-0 opacity-100"
                    }`}
                    onAnimationEnd={() => setAnimating(false)}
                  />
                  <div className="flex gap-4 justify-center">
                    {Object.keys(colorToImageMapBJ40).map((color, index) => (
                      <div key={index} className="relative">
                        <img
                          src={colorToImageMapBJ40[color]}
                          alt={`BJ40 Plus ${index + 1}`}
                          className="block py-4 px-2 border"
                        />
                        {selectedColor !== color && (
                          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex md:flex-nowrap flex-wrap gap-4 mt-10 justify-center">
                  <a
                    className="py-3 w-full text-center hover:bg-gray-100 transition-all   border border-gray-400 rounded-xl"
                    href="#"
                  >
                    EXPLORE MORE
                  </a>
                  <a
                    className="py-3 w-full text-center hover:bg-gray-100 transition-all   border border-gray-400 rounded-xl"
                    href="#"
                  >
                    DOWNLOAD BROCHURE
                  </a>
                  <a
                    className="py-3 w-full text-center hover:bg-gray-100 transition-all   border border-gray-400 rounded-xl"
                    href="#"
                  >
                    BOOK A TEST DRIVE
                  </a>
                </div>
              </div>
            )}
            {activeTab === "X55 II" && (
              <div className="mt-10">
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
                <div className="flex flex-col max-w-2xl overflow-hidden justify-center">
                  <img
                    src={colorToImageMapX55[selectedColorX55]}
                    alt="BJ40 Plus"
                    className={`transition-transform duration-300 ${
                      animating
                        ? "translate-x-full opacity-0"
                        : "translate-x-0 opacity-100"
                    }`}
                    onAnimationEnd={() => setAnimating(false)}
                  />
                  <div className="flex gap-4 justify-center">
                    {Object.keys(colorToImageMapX55).map((color, index) => (
                      <div key={index} className="relative">
                        <img
                          src={colorToImageMapX55[color]}
                          alt={`BJ40 Plus ${index + 1}`}
                          className="block py-4 px-2 border"
                        />
                        {selectedColorX55 !== color && (
                          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex md:flex-nowrap flex-wrap gap-4 mt-10 justify-center">
                  <a
                    className="py-3 w-full text-center hover:bg-gray-100 transition-all   border border-gray-400 rounded-xl"
                    href="#"
                  >
                    EXPLORE MORE
                  </a>
                  <a
                    className="py-3 w-full text-center hover:bg-gray-100 transition-all   border border-gray-400 rounded-xl"
                    href="#"
                  >
                    DOWNLOAD BROCHURE
                  </a>
                  <a
                    className="py-3 w-full text-center hover:bg-gray-100 transition-all   border border-gray-400 rounded-xl"
                    href="#"
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
