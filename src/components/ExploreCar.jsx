import { useState } from "react";
import Car360Viewer from "./Car360Viewer";
import { CarFront } from "lucide-react";
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

const colorToFolderBJ40 = {
  "#94111B": "flame_red",
  "#ffffff": "snow_white",
  "#000000": "jade_black",
  "#86A9C6": "porcelain_blue",
  "#2E3F2B": "forest_green",
  "#5A603F": "army_green",
  "#00243A": "midnight_blue",
};

const colorNamesX55 = {
  "#464C47": "Platinum Black",
  "#96901D": "Yellow Black",
  "#EA3435": "Red Black",
  "#CBD1D4": "Crystal Black",
  "#D1D1D1": "White Black",
};

const colorToFolderX55 = {
  "#464C47": "platinum_black",
  "#96901D": "yellow_black",
  "#EA3435": "red_black",
  "#CBD1D4": "crystal_black",
  "#D1D1D1": "white_black",
};

const colorsX55 = ["#464C47", "#96901D", "#EA3435", "#CBD1D4", "#D1D1D1"];

export default function ExploreCar() {
  const [activeSeries, setActiveSeries] = useState("BJ Series");
  const [activeModel, setActiveModel] = useState("BJ40 PLUS");
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedColorX55, setSelectedColorX55] = useState(colorsX55[0]);

  const handleSeriesClick = (series) => {
    setActiveSeries(series);
    // Set default model based on series
    if (series === "BJ Series") {
      setActiveModel("BJ40 PLUS");
      setSelectedColor(colors[0]);
    } else if (series === "X Series") {
      setActiveModel("X55 II");
      setSelectedColorX55(colorsX55[0]);
    } else if (series === "EV Series") {
      setActiveModel("Arcfox A");
      setSelectedColor(colors[0]);
    }
  };

  const handleModelClick = (model) => {
    setActiveModel(model);
  };

  const onColorSelect = (color) => {
    setSelectedColor(color);
  };

  const onColorSelectX55 = (color) => {
    setSelectedColorX55(color);
  };

  return (
    <div className="App">
      <div className="mt-10 md:px-8 px-5">
        <h2 className="text-3xl font-bold text-center">EXPLORE YOUR BAIC</h2>

        {/* Series Tabs */}
        <div className="mt-6">
          <div className="flex gap-2 justify-center max-w-6xl m-auto flex-wrap">
            <button
              className={`py-3 px-8 transition-all rounded-lg font-semibold text-lg ${
                activeSeries === "BJ Series"
                  ? "bg-red-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => handleSeriesClick("BJ Series")}
            >
              BJ Series
            </button>
            <button
              className={`py-3 px-8 transition-all rounded-lg font-semibold text-lg ${
                activeSeries === "X Series"
                  ? "bg-red-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => handleSeriesClick("X Series")}
            >
              X Series
            </button>
            <button
              className={`py-3 px-8 transition-all rounded-lg font-semibold text-lg ${
                activeSeries === "EV Series"
                  ? "bg-red-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => handleSeriesClick("EV Series")}
            >
              EV Series
            </button>
          </div>

          {/* Model Sub-tabs */}
          <div className="flex gap-2 justify-center max-w-6xl m-auto mt-4 flex-wrap">
            {activeSeries === "BJ Series" && (
              <>
                <button
                  className={`py-2 px-6 transition-all font-medium ${
                    activeModel === "BJ30"
                      ? "border-b-2 border-red-600 text-red-600"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                  onClick={() => handleModelClick("BJ30")}
                >
                  BJ30
                </button>
                <button
                  className={`py-2 px-6 transition-all font-medium ${
                    activeModel === "BJ40"
                      ? "border-b-2 border-red-600 text-red-600"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                  onClick={() => handleModelClick("BJ40")}
                >
                  BJ40
                </button>
                <button
                  className={`py-2 px-6 transition-all font-medium ${
                    activeModel === "BJ40 PLUS"
                      ? "border-b-2 border-red-600 text-red-600"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                  onClick={() => handleModelClick("BJ40 PLUS")}
                >
                  BJ40 PLUS
                </button>
              </>
            )}

            {activeSeries === "X Series" && (
              <>
                <button
                  className={`py-2 px-6 transition-all font-medium ${
                    activeModel === "X55"
                      ? "border-b-2 border-red-600 text-red-600"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                  onClick={() => handleModelClick("X55")}
                >
                  X55
                </button>
                <button
                  className={`py-2 px-6 transition-all font-medium ${
                    activeModel === "X55 II"
                      ? "border-b-2 border-red-600 text-red-600"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                  onClick={() => handleModelClick("X55 II")}
                >
                  X55 II
                </button>
              </>
            )}

            {activeSeries === "EV Series" && (
              <>
                <button
                  className={`py-2 px-6 transition-all font-medium ${
                    activeModel === "Arcfox A"
                      ? "border-b-2 border-red-600 text-red-600"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                  onClick={() => handleModelClick("Arcfox A")}
                >
                  Arcfox A
                </button>
                <button
                  className={`py-2 px-6 transition-all font-medium ${
                    activeModel === "Arcfox B"
                      ? "border-b-2 border-red-600 text-red-600"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                  onClick={() => handleModelClick("Arcfox B")}
                >
                  Arcfox B
                </button>
              </>
            )}
          </div>

          {/* Content Area */}
          <div className="p-4 flex justify-center">
            {/* BJ40 PLUS */}
            {activeModel === "BJ40 PLUS" && (
              <div className="mt-10 md:px-8">
                <div className="flex space-x-3 justify-center">
                  {colors.map((color) => (
                    <div
                      key={color}
                      className={`w-8 h-8 rounded-full border border-neutral-200 cursor-pointer transition-transform duration-200 ${
                        selectedColor === color
                          ? "border-4 outline outline-red-500 border-white transform scale-110"
                          : "border-2"
                      }`}
                      style={{ backgroundColor: color }}
                      onClick={() => onColorSelect(color)}
                    ></div>
                  ))}
                </div>

                <Car360Viewer
                  modelKey="bj40-plus"
                  colorKey={colorToFolderBJ40[selectedColor]}
                  colorName={colorNamesBJ40[selectedColor]}
                  totalFrames={36}
                />

                <div className="flex flex-col gap-4 mt-10 justify-center items-center">
                  <div className="flex flex-row gap-4 w-full justify-center flex-wrap">
                    <a
                      className="py-3 px-6 text-center bg-red-600 hover:bg-red-700 text-white font-semibold transition-all rounded-lg flex items-center gap-2 justify-center whitespace-nowrap"
                      href="/book-a-test-drive/index.html?model=bj40plus"
                    >
                      <CarFront className="w-5 h-5 flex-shrink-0" />
                      Book a Test Drive
                    </a>
                    <a
                      className="py-3 px-6 text-center bg-white hover:bg-gray-50 text-gray-800 font-semibold transition-all border border-gray-300 rounded-lg flex items-center gap-2 justify-center whitespace-nowrap"
                      href="/brochure-bj40.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        className="flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                      Download brosur
                    </a>
                  </div>
                  <a
                    className="text-gray-800 font-semibold hover:text-red-600 transition-all flex items-center gap-2"
                    href="/BJ40/index.html"
                  >
                    Explore
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                </div>
              </div>
            )}

            {/* BJ30, BJ40 - Using BJ40 PLUS images as placeholder */}
            {(activeModel === "BJ30" || activeModel === "BJ40") && (
              <div className="mt-10 md:px-8">
                <div className="flex space-x-3 justify-center">
                  {colors.map((color) => (
                    <div
                      key={color}
                      className={`w-8 h-8 rounded-full border border-neutral-200 cursor-pointer transition-transform duration-200 ${
                        selectedColor === color
                          ? "border-4 outline outline-red-500 border-white transform scale-110"
                          : "border-2"
                      }`}
                      style={{ backgroundColor: color }}
                      onClick={() => onColorSelect(color)}
                    ></div>
                  ))}
                </div>

                <Car360Viewer
                  modelKey="bj40-plus"
                  colorKey={colorToFolderBJ40[selectedColor]}
                  colorName={colorNamesBJ40[selectedColor]}
                  totalFrames={36}
                />

                <div className="flex flex-col gap-4 mt-10 justify-center items-center">
                  <div className="flex flex-row gap-4 w-full justify-center flex-wrap">
                    <a
                      className="py-3 px-6 text-center bg-red-600 hover:bg-red-700 text-white font-semibold transition-all rounded-lg flex items-center gap-2 justify-center whitespace-nowrap"
                      href={`/book-a-test-drive/index.html?model=${activeModel
                        .toLowerCase()
                        .replace(" ", "")}`}
                    >
                      <CarFront className="w-5 h-5 flex-shrink-0" />
                      Book a Test Drive
                    </a>
                    <a
                      className="py-3 px-6 text-center bg-white hover:bg-gray-50 text-gray-800 font-semibold transition-all border border-gray-300 rounded-lg flex items-center gap-2 justify-center whitespace-nowrap"
                      href="/brochure-bj40.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        className="flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                      Download brosur
                    </a>
                  </div>
                  <a
                    className="text-gray-800 font-semibold hover:text-red-600 transition-all flex items-center gap-2"
                    href="/BJ40/index.html"
                  >
                    Explore
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                </div>
              </div>
            )}

            {/* X55 II */}
            {activeModel === "X55 II" && (
              <div className="mt-10 md:px-8">
                <div className="flex space-x-3 justify-center">
                  {colorsX55.map((color) => (
                    <div
                      key={color}
                      className={`w-8 h-8 rounded-full border border-neutral-200 cursor-pointer transition-transform duration-200 ${
                        selectedColorX55 === color
                          ? "border-4 outline outline-red-500 border-white transform scale-110"
                          : "border-2"
                      }`}
                      style={{ backgroundColor: color }}
                      onClick={() => onColorSelectX55(color)}
                    ></div>
                  ))}
                </div>

                <Car360Viewer
                  modelKey="x55"
                  colorKey={colorToFolderX55[selectedColorX55]}
                  colorName={colorNamesX55[selectedColorX55]}
                  totalFrames={20}
                />

                <div className="flex flex-col gap-4 mt-10 justify-center items-center">
                  <div className="flex flex-row gap-4 w-full justify-center flex-wrap">
                    <a
                      className="py-3 px-6 text-center bg-red-600 hover:bg-red-700 text-white font-semibold transition-all rounded-lg flex items-center gap-2 justify-center whitespace-nowrap"
                      href="/book-a-test-drive/index.html?model=x55ii"
                    >
                      <CarFront className="w-5 h-5 flex-shrink-0" />
                      Book a Test Drive
                    </a>
                    <a
                      className="py-3 px-6 text-center bg-white hover:bg-gray-50 text-gray-800 font-semibold transition-all border border-gray-300 rounded-lg flex items-center gap-2 justify-center whitespace-nowrap"
                      href="/brochure-x55.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        className="flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                      Download brosur
                    </a>
                  </div>
                  <a
                    className="text-gray-800 font-semibold hover:text-red-600 transition-all flex items-center gap-2"
                    href="/X55-Models/index.html"
                  >
                    Explore
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                </div>
              </div>
            )}

            {/* X55 - Using X55 II images as placeholder */}
            {activeModel === "X55" && (
              <div className="mt-10 md:px-8">
                <div className="flex space-x-3 justify-center">
                  {colorsX55.map((color) => (
                    <div
                      key={color}
                      className={`w-8 h-8 rounded-full border border-neutral-200 cursor-pointer transition-transform duration-200 ${
                        selectedColorX55 === color
                          ? "border-4 outline outline-red-500 border-white transform scale-110"
                          : "border-2"
                      }`}
                      style={{ backgroundColor: color }}
                      onClick={() => onColorSelectX55(color)}
                    ></div>
                  ))}
                </div>

                <Car360Viewer
                  modelKey="x55"
                  colorKey={colorToFolderX55[selectedColorX55]}
                  colorName={colorNamesX55[selectedColorX55]}
                  totalFrames={20}
                />

                <div className="flex flex-col gap-4 mt-10 justify-center items-center">
                  <div className="flex flex-row gap-4 w-full justify-center flex-wrap">
                    <a
                      className="py-3 px-6 text-center bg-red-600 hover:bg-red-700 text-white font-semibold transition-all rounded-lg flex items-center gap-2 justify-center whitespace-nowrap"
                      href="/book-a-test-drive/index.html?model=x55"
                    >
                      <CarFront className="w-5 h-5 flex-shrink-0" />
                      Book a Test Drive
                    </a>
                    <a
                      className="py-3 px-6 text-center bg-white hover:bg-gray-50 text-gray-800 font-semibold transition-all border border-gray-300 rounded-lg flex items-center gap-2 justify-center whitespace-nowrap"
                      href="/brochure-x55.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        className="flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                      Download brosur
                    </a>
                  </div>
                  <a
                    className="text-gray-800 font-semibold hover:text-red-600 transition-all flex items-center gap-2"
                    href="/X55-Models/index.html"
                  >
                    Explore
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                </div>
              </div>
            )}

            {/* Arcfox A & B - Using BJ40 PLUS images as placeholder */}
            {(activeModel === "Arcfox A" || activeModel === "Arcfox B") && (
              <div className="mt-10 md:px-8">
                <div className="flex space-x-3 justify-center">
                  {colors.map((color) => (
                    <div
                      key={color}
                      className={`w-8 h-8 rounded-full border border-neutral-200 cursor-pointer transition-transform duration-200 ${
                        selectedColor === color
                          ? "border-4 outline outline-red-500 border-white transform scale-110"
                          : "border-2"
                      }`}
                      style={{ backgroundColor: color }}
                      onClick={() => onColorSelect(color)}
                    ></div>
                  ))}
                </div>

                <Car360Viewer
                  modelKey="bj40-plus"
                  colorKey={colorToFolderBJ40[selectedColor]}
                  colorName={colorNamesBJ40[selectedColor]}
                  totalFrames={36}
                />

                <div className="flex flex-col gap-4 mt-10 justify-center items-center">
                  <div className="flex flex-row gap-4 w-full justify-center flex-wrap">
                    <a
                      className="py-3 px-6 text-center bg-red-600 hover:bg-red-700 text-white font-semibold transition-all rounded-lg flex items-center gap-2 justify-center whitespace-nowrap"
                      href={`/book-a-test-drive/index.html?model=${activeModel
                        .toLowerCase()
                        .replace(" ", "")}`}
                    >
                      <CarFront className="w-5 h-5 flex-shrink-0" />
                      Book a Test Drive
                    </a>
                    <a
                      className="py-3 px-6 text-center bg-white hover:bg-gray-50 text-gray-800 font-semibold transition-all border border-gray-300 rounded-lg flex items-center gap-2 justify-center whitespace-nowrap"
                      href="/brochure-bj40.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        className="flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                      Download brosur
                    </a>
                  </div>
                  <a
                    className="text-gray-800 font-semibold hover:text-red-600 transition-all flex items-center gap-2"
                    href="/BJ40/index.html"
                  >
                    Explore
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
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
