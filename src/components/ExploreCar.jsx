import { useState } from "react";

import BJ40View1 from "../assets/BJ40-plus-view-1.png";
import X55View1 from "../assets/BAIC-X55-view-1.png";

export default function ExploreCar() {
  const [activeTab, setActiveTab] = useState("BJ40 Plus");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const colors = ["#cc3300", "#cccccc", "#000", "#666633", "#FFF333"];
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const onColorSelect = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="App">
      <div className="mt-10">
        <h2 className="text-4xl text-center text-gray-600">
          EXPLORE YOUR BAIC
        </h2>
        <div className="mt-6">
          <div className="flex gap-8 justify-center max-w-6xl m-auto space-x-4 ">
            <button
              className={`py-2 border-b border-gray-400 px-4 text-2xl ${
                activeTab === "BJ40 Plus" ? "border-b-4 border-red-500" : ""
              }`}
              onClick={() => handleTabClick("BJ40 Plus")}
            >
              BJ40 Plus
            </button>
            <button
              className={`py-2 border-b border-gray-400 px-4 text-2xl ${
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
                <div className="flex space-x-4 justify-center">
                  {colors.map((color) => (
                    <div
                      key={color}
                      className={`w-8 h-8 rounded-full cursor-pointer transition-transform duration-200 ${
                        selectedColor === color
                          ? "border-4 outline outline-red-500 border-white transform scale-110"
                          : "border-2 border-transparent"
                      }`}
                      style={{ backgroundColor: color }}
                      onClick={() => onColorSelect(color)}
                    ></div>
                  ))}
                </div>
                <img
                  width={700}
                  src={BJ40View1}
                  alt="BJ40 Plus"
                  className="mt-10"
                />
                <div className="flex gap-4 justify-center">
                  {[...Array(5)].map((_, index) => (
                    <div key={index} className="relative">
                      <img
                        width={100}
                        src={BJ40View1}
                        alt={`BJ40 Plus ${index + 1}`}
                        className="block py-4 px-2 border"
                      />
                      {index > 0 && (
                        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                      )}
                    </div>
                  ))}
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
              <div>
                <div className="mt-10">
                  <div className="flex space-x-4 justify-center">
                    {colors.map((color) => (
                      <div
                        key={color}
                        className={`w-8 h-8 rounded-full cursor-pointer transition-transform duration-200 ${
                          selectedColor === color
                            ? "border-4 outline outline-red-500 border-white transform scale-110"
                            : "border-2 border-transparent"
                        }`}
                        style={{ backgroundColor: color }}
                        onClick={() => onColorSelect(color)}
                      ></div>
                    ))}
                  </div>
                  <img
                    width={700}
                    src={X55View1}
                    alt="BJ40 Plus"
                    className="mt-10"
                  />
                  <div className="flex gap-4 justify-center">
                    {[...Array(5)].map((_, index) => (
                      <div key={index} className="relative">
                        <img
                          width={100}
                          src={X55View1}
                          alt={`BJ40 Plus ${index + 1}`}
                          className="block py-4 px-2 border"
                        />
                        {index > 0 && (
                          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                        )}
                      </div>
                    ))}
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
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
