import BJ40 from "../assets/BJ40-plus.png";
import X55 from "../assets/BAIC-X55-II.png";
import { useState } from "react";

const BigMenu = () => {
  const [activeTab, setActiveTab] = useState("All");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div
      className="border-b pt-10 absolute z-10 
     border-gray-400 w-full bg-white shadow-lg"
    >
      <div className="max-w-6xl grid md:px-8 px-5 grid-cols-12 justify-between m-auto min-h-96 ">
        <div className="flex flex-col space-y-4 xl:col-span-4 col-span-2">
          <button
            className={` text-left ${
              activeTab === "All"
                ? "border-b-2 border-red-500 text-red-500"
                : ""
            }`}
            onClick={() => handleTabClick("All")}
          >
            All
          </button>
          <button
            className={` text-left ${
              activeTab === "Tab2"
                ? "border-b-2 border-red-500 text-red-500"
                : ""
            }`}
            onClick={() => handleTabClick("Tab2")}
          >
            OFF ROAD
          </button>
          <button
            className={` text-left ${
              activeTab === "Tab3"
                ? "border-b-2 border-red-500 text-red-500"
                : ""
            }`}
            onClick={() => handleTabClick("Tab3")}
          >
            SUV
          </button>
        </div>
        <div className="p-4 xl:col-span-8  col-span-10 ">
          {activeTab === "All" && (
            <div className="flex justify-between gap-4">
              <div className="flex flex-col">
                <img width={300} src={BJ40} alt="BJ40 Plus" />
                <h2 className="text-xl text-red-500 font-medium">
                  BAIC BJ40 PLUS
                </h2>
                <div className="flex  mt-4 gap-2 text-xs">
                  <a
                    className="py-3 w-full text-center hover:bg-gray-100 transition-all   border border-gray-400 rounded-xl"
                    href="BJ40/index.html"
                  >
                    EXPLORE MORE
                  </a>
                  <a
                    className="py-3 w-full text-center hover:bg-gray-100 transition-all   border border-gray-400 rounded-xl"
                    href="book-a-test-drive/index.html"
                  >
                    BOOK A TEST DRIVE
                  </a>
                </div>
                <div className="flex mt-2 text-xs">
                  <a
                    className="py-3 w-full text-center hover:bg-gray-100 transition-all border border-gray-400 rounded-xl"
                    href="/brochure-bj40.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    DOWNLOAD BROCHURE
                  </a>
                </div>
              </div>
              <div className="flex flex-col">
                <img width={300} src={X55} alt="BJ40 Plus" />
                <h2 className="text-xl text-red-500 font-medium">
                  BAIC X55 II
                </h2>
                <div className="flex  mt-4 gap-2 text-xs">
                  <a
                    className="py-3 w-full text-center hover:bg-gray-100 transition-all   border border-gray-400 rounded-xl"
                    href="/x55/index.html"
                  >
                    EXPLORE MORE
                  </a>
                  <a
                    className="py-3 w-full text-center hover:bg-gray-100 transition-all   border border-gray-400 rounded-xl"
                    href="/book-a-test-drive/"
                  >
                    BOOK A TEST DRIVE
                  </a>
                </div>
                <div className="flex mt-2 text-xs">
                  <a
                    className="py-3 w-full text-center hover:bg-gray-100 transition-all border border-gray-400 rounded-xl"
                    href="/brochure-x55.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    DOWNLOAD BROCHURE
                  </a>
                </div>
              </div>
            </div>
          )}
          {activeTab === "Tab2" && (
            <div className="items-end flex">
              <div className="flex flex-col ">
                <div className="flex flex-col">
                  <img width={300} src={BJ40} alt="BJ40 Plus" />
                  <h2 className="text-xl text-red-500 font-medium">
                    BAIC BJ40 PLUS
                  </h2>
                  <div className="flex  mt-4 gap-2 text-xs">
                    <a
                      className="py-3 w-full text-center hover:bg-gray-100 transition-all   border border-gray-400 rounded-xl"
                      href="BJ40/index.html"
                    >
                      EXPLORE MORE
                    </a>
                    <a
                      className="py-3 w-full text-center hover:bg-gray-100 transition-all   border border-gray-400 rounded-xl"
                      href="book-a-test-drive/index.html"
                    >
                      BOOK A TEST DRIVE
                    </a>
                  </div>
                  <div className="flex mt-2 text-xs">
                    <a
                      className="py-3 w-full text-center hover:bg-gray-100 transition-all border border-gray-400 rounded-xl"
                      href="/brochure-bj40.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      DOWNLOAD BROCHURE
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === "Tab3" && (
            <div>
              <div className="items-end flex">
                <div className="flex flex-col">
                  <img width={300} src={X55} alt="BJ40 Plus" />
                  <h2 className="text-xl text-red-500 font-medium">
                    BAIC X55 II
                  </h2>
                  <div className="flex  mt-4 gap-2 text-xs">
                    <a
                      className="py-3 w-full text-center hover:bg-gray-100 transition-all   border border-gray-400 rounded-xl"
                      href="/x55/index.html"
                    >
                      EXPLORE MORE
                    </a>
                    <a
                      className="py-3 w-full text-center hover:bg-gray-100 transition-all   border border-gray-400 rounded-xl"
                      href="/book-a-test-drive/"
                    >
                      BOOK A TEST DRIVE
                    </a>
                  </div>
                  <div className="flex mt-2 text-xs">
                    <a
                      className="py-3 w-full text-center hover:bg-gray-100 transition-all border border-gray-400 rounded-xl"
                      href="/brochure-x55.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      DOWNLOAD BROCHURE
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BigMenu;
