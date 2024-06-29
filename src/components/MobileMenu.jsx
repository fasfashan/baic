import BJ40 from "../assets/BJ40-plus.png";
import X55 from "../assets/BAIC-X55-II.png";
import { useState } from "react";
export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="w-full space-y-4  min-h-screen flex flex-col transition-all  z-10 absolute p-5 bg-white">
        <div className=" w-full rounded-md ">
          <div
            className="flex justify-between items-center  cursor-pointer"
            onClick={toggleAccordion}
          >
            <span className="text-lg font-medium">VECHICLE</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 ${isOpen ? "transform rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          {isOpen && (
            <>
              <div className=" gap-4 mt-4 flex">
                <div className="flex flex-col p-4 border border-gray-300 rounded-md ">
                  <h3 className="font-medium">OFF ROAD</h3>
                  <img
                    className="mt-8"
                    width={300}
                    src={BJ40}
                    alt="BJ40 Plus"
                  />
                  <h2 className="text-sm text-red-500 font-medium">
                    BAIC BJ40 PLUS
                  </h2>

                  <div className="flex mt-2 text-xs">
                    <a
                      className="py-3 text-center hover:bg-gray-100 transition-all w-full  border border-gray-400 rounded-xl"
                      href="#"
                    >
                      EXPLORE MORE
                    </a>
                  </div>
                </div>
                <div className="flex flex-col p-4 border border-gray-300 rounded-md  ">
                  <h3 className="font-medium">SUV</h3>
                  <img className="mt-8" width={300} src={X55} alt="BJ40 Plus" />
                  <h2 className="text-sm text-red-500 font-medium">
                    BAIC X55 II
                  </h2>

                  <div className="flex mt-2 text-xs">
                    <a
                      className="py-3 text-center hover:bg-gray-100 transition-all w-full  border border-gray-400 rounded-xl"
                      href="#"
                    >
                      EXPLORE MORE
                    </a>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        <hr />
        <a href="/news/index.html" className="text-lg font-medium">
          NEWS & EVENT
        </a>
        <hr />
        <a href="/contact/index.html" className="text-lg font-medium">
          CONTACT DEALER
        </a>
        <hr />
        <a href="#" className="text-lg font-medium">
          BOOK A TEST DRIVE
        </a>
        <hr />
        <a href="#" className="text-lg font-medium">
          REQUEST PRICE LIST
        </a>
      </div>
    </>
  );
}
