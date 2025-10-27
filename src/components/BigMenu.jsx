import BJ40 from "../assets/BJ40-plus.png";
import X55 from "../assets/BAIC-X55-II.png";
import { useState } from "react";

const BigMenu = () => {
  const [activeSeries, setActiveSeries] = useState("BJ Series");

  const handleSeriesClick = (series) => {
    setActiveSeries(series);
  };

  // Vehicle data structure
  const vehicles = {
    "BJ Series": [
      {
        name: "BJ30",
        image: BJ40, // Using BJ40 as placeholder
        exploreLink: "/BJ40/index.html",
        brochureLink: "/brochure-bj40.pdf",
      },
      {
        name: "BJ40",
        image: BJ40, // Using BJ40 as placeholder
        exploreLink: "/BJ40/index.html",
        brochureLink: "/brochure-bj40.pdf",
      },
      {
        name: "BJ40 PLUS",
        image: BJ40,
        exploreLink: "/BJ40/index.html",
        brochureLink: "/brochure-bj40.pdf",
      },
    ],
    "X Series": [
      {
        name: "X55",
        image: X55, // Using X55 II as placeholder
        exploreLink: "/X55-Models/index.html",
        brochureLink: "/brochure-x55.pdf",
      },
      {
        name: "X55 II",
        image: X55,
        exploreLink: "/X55-Models/index.html",
        brochureLink: "/brochure-x55.pdf",
      },
    ],
    "EV Series": [
      {
        name: "Arcfox A",
        image: BJ40, // Using BJ40 as placeholder
        exploreLink: "/BJ40/index.html",
        brochureLink: "/brochure-bj40.pdf",
      },
      {
        name: "Arcfox B",
        image: BJ40, // Using BJ40 as placeholder
        exploreLink: "/BJ40/index.html",
        brochureLink: "/brochure-bj40.pdf",
      },
    ],
  };

  return (
    <div
      className="border-b pt-10 fixed top-[72px] left-0 right-0 z-40 
     border-gray-400 w-full bg-white shadow-lg"
    >
      <div className="max-w-6xl md:px-8 px-5 m-auto pb-8">
        {/* Series Tabs */}
        <div className="flex flex-col space-y-4 mb-6">
          <button
            className={`text-left font-semibold text-lg ${
              activeSeries === "BJ Series"
                ? "border-b-2 border-red-500 text-red-500 pb-2"
                : "text-gray-700 hover:text-gray-900 pb-2"
            }`}
            onClick={() => handleSeriesClick("BJ Series")}
          >
            BJ Series
          </button>
          <button
            className={`text-left font-semibold text-lg ${
              activeSeries === "X Series"
                ? "border-b-2 border-red-500 text-red-500 pb-2"
                : "text-gray-700 hover:text-gray-900 pb-2"
            }`}
            onClick={() => handleSeriesClick("X Series")}
          >
            X Series
          </button>
          <button
            className={`text-left font-semibold text-lg ${
              activeSeries === "EV Series"
                ? "border-b-2 border-red-500 text-red-500 pb-2"
                : "text-gray-700 hover:text-gray-900 pb-2"
            }`}
            onClick={() => handleSeriesClick("EV Series")}
          >
            EV Series
          </button>
        </div>

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehicles[activeSeries].map((vehicle) => (
            <div key={vehicle.name} className="flex flex-col">
              <img
                className="w-full h-auto"
                src={vehicle.image}
                alt={vehicle.name}
              />
              <h2 className="text-xl text-red-500 font-medium mt-2">
                BAIC {vehicle.name}
              </h2>
              <div className="flex mt-4 gap-2 text-xs">
                <a
                  className="py-3 w-full text-center hover:bg-gray-100 transition-all border border-gray-400 rounded-xl"
                  href={vehicle.exploreLink}
                >
                  EXPLORE MORE
                </a>
                <a
                  className="py-3 w-full text-center hover:bg-gray-100 transition-all border border-gray-400 rounded-xl"
                  href={`/book-a-test-drive/index.html?model=${vehicle.name
                    .toLowerCase()
                    .replace(" ", "")}`}
                >
                  BOOK A TEST DRIVE
                </a>
              </div>
              <div className="flex mt-2 text-xs">
                <a
                  className="py-3 w-full text-center hover:bg-gray-100 transition-all border border-gray-400 rounded-xl"
                  href={vehicle.brochureLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DOWNLOAD BROCHURE
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BigMenu;
