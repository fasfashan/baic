import { useState } from "react";
import flameRedView1 from "../assets/flame-red-view-1.png";
import flameRedView2 from "../assets/flame-red-view-2.png";
import flameRedView3 from "../assets/flame-red-view-3.png";
import flameRedView4 from "../assets/flame-red-view-4.png";
import jadeBlackView1 from "../assets/jade-black-view-1.png";
import jadeBlackView2 from "../assets/jade-black-view-2.png";
import jadeBlackView3 from "../assets/jade-black-view-3.png";
import jadeBlackView4 from "../assets/jade-black-view-4.png";
import porcelainBlueView1 from "../assets/porcelain-blue-view-1.png";
import porcelainBlueView2 from "../assets/porcelain-blue-view-2.png";
import porcelainBlueView3 from "../assets/porcelain-blue-view-3.png";
import porcelainBlueView4 from "../assets/porcelain-blue-view-4.png";
import forestGreanView1 from "../assets/forest-green-view-1.png";
import forestGreanView2 from "../assets/forest-green-view-2.png";
import forestGreanView3 from "../assets/forest-green-view-3.png";
import forestGreanView4 from "../assets/forest-green-view-4.png";
import midnightBlueView1 from "../assets/midnight-blue-view-1.png";
import midnightBlueView2 from "../assets/midnight-blue-view-2.png";
import midnightBlueView3 from "../assets/midnight-blue-view-3.png";
import midnightBlueView4 from "../assets/midnight-blue-view-4.png";
import platinumBlackView1 from "../assets/platinum-black-view-1.png";
import platinumBlackView2 from "../assets/platinum-black-view-2.png";
import platinumBlackView3 from "../assets/platinum-black-view-3.png";
import platinumBlackView4 from "../assets/platinum-black-view-4.png";
import yellowBlackView1 from "../assets/yellow-black-view-1.png";
import yellowBlackView2 from "../assets/yellow-black-view-2.png";
import yellowBlackView3 from "../assets/yellow-black-view-3.png";
import yellowBlackView4 from "../assets/yellow-black-view-4.png";
import redBlackView1 from "../assets/red-black-view-1.png";
import redBlackView2 from "../assets/red-black-view-2.png";
import redBlackView3 from "../assets/red-black-view-3.png";
import redBlackView4 from "../assets/red-black-view-4.png";
import crystalBlackView1 from "../assets/crystal-black-view-1.png";
import crystalBlackView2 from "../assets/crystal-black-view-2.png";
import crystalBlackView3 from "../assets/crystal-black-view-3.png";
import crystalBlackView4 from "../assets/crystal-black-view-4.png";
import whiteBlackView1 from "../assets/white-black-view-1.png";
import whiteBlackView2 from "../assets/white-black-view-2.png";
import whiteBlackView3 from "../assets/white-black-view-3.png";
import whiteBlackView4 from "../assets/white-black-view-4.png";
import snowWhite from "../assets/snow white.png";
import armyGreen from "../assets/army green.png";

const colors = [
  "#94111B",
  "#ffffff",
  "#000000",
  "#86A9C6",
  "#2E3F2B",
  "#5A603F",
  "#00243A",
];
const colorNamesBJ40 = {
  "#94111B": "Flame Red",
  "#ffffff": "Snow White",
  "#000000": "Jade Black",
  "#86A9C6": "Porcelain Blue",
  "#2E3F2B": "Forest Green",
  "#5A603F": "Army Green",
  "#00243A": "Midnight Blue",
};
const colorNamesX55 = {
  "#464C47": "Platinum Black",
  "#96901D": "Yellow Black",
  "#EA3435": "Red Black",
  "#CBD1D4": "Crystal Black",
  "#D1D1D1": "White Black",
};
const colorsX55 = ["#464C47", "#96901D", "#EA3435", "#CBD1D4", "#D1D1D1"];
export default function ExploreCar() {
  const [activeTab, setActiveTab] = useState("BJ40 Plus");
  const [animating, setAnimating] = useState(false);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedColorX55, setSelectedColorX55] = useState(colorsX55[0]);
  const [currentImageIndexX55, setCurrentImageIndexX55] = useState(0);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const colorToImageMapBJ40 = {
    "#94111B": [flameRedView1, flameRedView2, flameRedView3, flameRedView4],
    "#ffffff": [snowWhite, snowWhite, snowWhite, snowWhite],
    "#000000": [jadeBlackView1, jadeBlackView2, jadeBlackView3, jadeBlackView4],
    "#86A9C6": [
      porcelainBlueView1,
      porcelainBlueView2,
      porcelainBlueView3,
      porcelainBlueView4,
    ],
    "#2E3F2B": [
      forestGreanView1,
      forestGreanView2,
      forestGreanView3,
      forestGreanView4,
    ],
    "#5A603F": [armyGreen, armyGreen, armyGreen, armyGreen],
    "#00243A": [
      midnightBlueView1,
      midnightBlueView2,
      midnightBlueView3,
      midnightBlueView4,
    ],
  };

  const colorToImageMapX55 = {
    "#464C47": [
      platinumBlackView1,
      platinumBlackView2,
      platinumBlackView3,
      platinumBlackView4,
    ],
    "#96901D": [
      yellowBlackView1,
      yellowBlackView2,
      yellowBlackView3,
      yellowBlackView4,
    ],
    "#EA3435": [redBlackView1, redBlackView2, redBlackView3, redBlackView4],
    "#CBD1D4": [
      crystalBlackView1,
      crystalBlackView2,
      crystalBlackView3,
      crystalBlackView4,
    ],
    "#D1D1D1": [
      whiteBlackView1,
      whiteBlackView2,
      whiteBlackView3,
      whiteBlackView4,
    ],
  };

  const onColorSelect = (color) => {
    if (color !== selectedColor) {
      setAnimating(true);
      setTimeout(() => {
        setSelectedColor(color);
        setCurrentImageIndex(0);
        setAnimating(false);
      }, 100); // Duration of the transition
    }
  };

  const onColorSelectX55 = (color) => {
    if (color !== selectedColorX55) {
      setAnimating(true);
      setTimeout(() => {
        setSelectedColorX55(color);
        setCurrentImageIndexX55(0);
        setAnimating(false);
      }, 100); // Duration of the transition
    }
  };

  const handleImageSelect = (index) => {
    setAnimating(true);
    setTimeout(() => {
      setCurrentImageIndex(index);
      setAnimating(false);
    }, 100);
  };

  const handleImageSelectX55 = (index) => {
    setAnimating(true);
    setTimeout(() => {
      setCurrentImageIndexX55(index);
      setAnimating(false);
    }, 100);
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
                    <>
                      <div
                        key={color}
                        className={` w-8 h-8 rounded-full border border-neutral-200 cursor-pointer transition-transform duration-200 ${
                          selectedColor === color
                            ? "border-4 outline outline-red-500 border-white transform scale-110"
                            : "border-2"
                        }`}
                        style={{ backgroundColor: color }}
                        onClick={() => onColorSelect(color)}
                      ></div>
                    </>
                  ))}
                </div>
                <div className="flex flex-col max-w-2xl overflow-hidden justify-center mx-auto">
                  <div className=" flex flex-col space-x-2 justify-center mt-4">
                    <div className="border select-none border-neutral-500 w-fit justify-center m-auto mt-4 flex items-center">
                      <h2 className="text-center transition-all  px-4 py-2">
                        {colorNamesBJ40[selectedColor]}
                      </h2>
                    </div>

                    <img
                      src={
                        colorToImageMapBJ40[selectedColor][currentImageIndex]
                      }
                      alt={`BJ40 Plus View ${currentImageIndex + 1}`}
                      className={`transition-transform h-fit duration-100 ${
                        animating
                          ? "translate-x-full opacity-0"
                          : "translate-x-0 opacity-100"
                      }`}
                    />
                    <div className="flex justify-center gap-8  ">
                      {colorToImageMapBJ40[selectedColor]?.map(
                        (imageSrc, index) => (
                          <button
                            key={index}
                            onClick={() => handleImageSelect(index)}
                            className={` block   bg-cover bg-center  border ${
                              currentImageIndex === index
                                ? "border-red-500"
                                : "opacity-50"
                            }`}
                          >
                            <img
                              className="block w-full h-auto"
                              src={imageSrc}
                              alt=""
                            />
                          </button>
                        )
                      )}
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
                      className={`w-8 h-8 rounded-full border border-neutral-200 cursor-pointer transition-transform duration-200 ${
                        selectedColorX55 === color
                          ? "border-4 outline outline-red-500 border-white transform scale-110"
                          : "border-2 "
                      }`}
                      style={{ backgroundColor: color }}
                      onClick={() => onColorSelectX55(color)}
                    ></div>
                  ))}
                </div>
                <div className="flex flex-col max-w-2xl overflow-hidden justify-center mx-auto">
                  <div className=" flex flex-col space-x-2 justify-center mt-4">
                    <div className="border select-none border-neutral-500 w-fit justify-center m-auto mt-4 flex items-center">
                      <h2 className="text-center transition-all px-4 py-2">
                        {colorNamesX55[selectedColorX55]}
                      </h2>
                    </div>
                    <img
                      src={
                        colorToImageMapX55[selectedColorX55][
                          currentImageIndexX55
                        ]
                      }
                      alt={`BJ40 Plus View ${currentImageIndexX55 + 1}`}
                      className={`transition-transform h-fit duration-100 ${
                        animating
                          ? "translate-x-full opacity-0"
                          : "translate-x-0 opacity-100"
                      }`}
                    />
                    <div className="flex justify-center gap-8  ">
                      {colorToImageMapX55[selectedColorX55]?.map(
                        (imageSrc, index) => (
                          <button
                            key={index}
                            onClick={() => handleImageSelectX55(index)}
                            className={` block   bg-cover bg-center  border ${
                              currentImageIndexX55 === index
                                ? "border-red-500"
                                : "opacity-50"
                            }`}
                          >
                            <img
                              className="block w-full h-auto"
                              src={imageSrc}
                              alt=""
                            />
                          </button>
                        )
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-nowrap flex-wrap gap-4 mt-10 justify-center">
                  <a
                    className="py-3 w-full text-center hover:bg-gray-100 transition-all border border-gray-400 rounded-xl"
                    href="/X55-models/index.html"
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
          </div>
        </div>
      </div>
    </div>
  );
}
