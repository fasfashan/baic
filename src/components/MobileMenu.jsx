import BJ40 from "../assets/BJ40-plus.png";
import X55 from "../assets/BAIC-X55-II.png";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function MobileMenu() {
  const [isVehicleOpen, setIsVehicleOpen] = useState(false);
  const [activeSeries, setActiveSeries] = useState("BJ Series");
  const [isAccessoriesOpen, setIsAccessoriesOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isDealerOpen, setIsDealerOpen] = useState(false);
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);

  // Vehicle data structure
  const vehicles = {
    "BJ Series": [
      {
        name: "BJ30",
        image: BJ40,
        exploreLink: "/BJ40/index.html",
      },
      {
        name: "BJ40",
        image: BJ40,
        exploreLink: "/BJ40/index.html",
      },
      {
        name: "BJ40 PLUS",
        image: BJ40,
        exploreLink: "/BJ40/index.html",
      },
    ],
    "X Series": [
      {
        name: "X55",
        image: X55,
        exploreLink: "/X55-Models/index.html",
      },
      {
        name: "X55 II",
        image: X55,
        exploreLink: "/X55-Models/index.html",
      },
    ],
    "EV Series": [
      {
        name: "Arcfox A",
        image: BJ40,
        exploreLink: "/BJ40/index.html",
      },
      {
        name: "Arcfox B",
        image: BJ40,
        exploreLink: "/BJ40/index.html",
      },
    ],
  };

  return (
    <>
      <div className="w-full space-y-4 min-h-screen flex flex-col transition-all z-[60] fixed top-[72px] left-0 right-0 p-5 bg-white overflow-y-auto">
        {/* Vehicle Accordion */}
        <div className="w-full rounded-md">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setIsVehicleOpen(!isVehicleOpen)}
          >
            <span className="text-lg font-medium">VEHICLE</span>
            {isVehicleOpen ? (
              <ChevronUp className="w-6 h-6" />
            ) : (
              <ChevronDown className="w-6 h-6" />
            )}
          </div>
          {isVehicleOpen && (
            <div className="mt-4 space-y-4">
              {/* Series Tabs */}
              <div className="flex gap-2 flex-wrap">
                <button
                  className={`py-2 px-4 rounded-lg font-medium text-sm transition-all ${
                    activeSeries === "BJ Series"
                      ? "bg-red-600 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                  onClick={() => setActiveSeries("BJ Series")}
                >
                  BJ Series
                </button>
                <button
                  className={`py-2 px-4 rounded-lg font-medium text-sm transition-all ${
                    activeSeries === "X Series"
                      ? "bg-red-600 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                  onClick={() => setActiveSeries("X Series")}
                >
                  X Series
                </button>
                <button
                  className={`py-2 px-4 rounded-lg font-medium text-sm transition-all ${
                    activeSeries === "EV Series"
                      ? "bg-red-600 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                  onClick={() => setActiveSeries("EV Series")}
                >
                  EV Series
                </button>
              </div>

              {/* Vehicles List */}
              <div className="space-y-3">
                {vehicles[activeSeries].map((vehicle) => (
                  <div
                    key={vehicle.name}
                    className="flex flex-col p-4 border border-gray-300 rounded-md"
                  >
                    <img
                      className="w-full h-auto"
                      src={vehicle.image}
                      alt={vehicle.name}
                    />
                    <h2 className="text-sm text-red-500 font-medium mt-2">
                      BAIC {vehicle.name}
                    </h2>
                    <div className="flex mt-2 text-xs">
                      <a
                        className="py-3 text-center hover:bg-gray-100 transition-all w-full border border-gray-400 rounded-xl"
                        href={vehicle.exploreLink}
                      >
                        EXPLORE MORE
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <hr />

        {/* Accessories Accordion */}
        <div className="w-full rounded-md">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setIsAccessoriesOpen(!isAccessoriesOpen)}
          >
            <span className="text-lg font-medium">ACCESSORIES</span>
            {isAccessoriesOpen ? (
              <ChevronUp className="w-6 h-6" />
            ) : (
              <ChevronDown className="w-6 h-6" />
            )}
          </div>
          {isAccessoriesOpen && (
            <div className="mt-3 ml-4 space-y-2">
              <a
                href="/accessories/bj40-sunshades"
                className="block text-sm text-gray-700 hover:text-red-600"
              >
                BJ40 Accessories
              </a>
              <a
                href="/accessories/x55-sunshades"
                className="block text-sm text-gray-700 hover:text-red-600"
              >
                X55 Accessories
              </a>
            </div>
          )}
        </div>
        <hr />

        {/* Services Accordion */}
        <div className="w-full rounded-md">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setIsServicesOpen(!isServicesOpen)}
          >
            <span className="text-lg font-medium">SERVICES</span>
            {isServicesOpen ? (
              <ChevronUp className="w-6 h-6" />
            ) : (
              <ChevronDown className="w-6 h-6" />
            )}
          </div>
          {isServicesOpen && (
            <div className="mt-3 ml-4 space-y-2">
              <a
                href="/aftersales"
                className="block text-sm text-gray-700 hover:text-red-600"
              >
                Aftersales Program
              </a>
              <a
                href="/emergency-road"
                className="block text-sm text-gray-700 hover:text-red-600"
              >
                Emergency Road Assistance
              </a>
              <a
                href="/booking-service"
                className="block text-sm text-gray-700 hover:text-red-600"
              >
                Booking Dealer Service
              </a>
            </div>
          )}
        </div>
        <hr />

        {/* Dealer Accordion */}
        <div className="w-full rounded-md">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setIsDealerOpen(!isDealerOpen)}
          >
            <span className="text-lg font-medium">DEALER</span>
            {isDealerOpen ? (
              <ChevronUp className="w-6 h-6" />
            ) : (
              <ChevronDown className="w-6 h-6" />
            )}
          </div>
          {isDealerOpen && (
            <div className="mt-3 ml-4 space-y-2">
              <a
                href="/find-dealer"
                className="block text-sm text-gray-700 hover:text-red-600"
              >
                Find Dealer
              </a>
              <a
                href="/partnership"
                className="block text-sm text-gray-700 hover:text-red-600"
              >
                Partnership
              </a>
            </div>
          )}
        </div>
        <hr />

        {/* News & Event */}
        <a href="/news/index.html" className="text-lg font-medium">
          NEWS & EVENT
        </a>
        <hr />

        {/* About Us Accordion */}
        <div className="w-full rounded-md">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setIsAboutUsOpen(!isAboutUsOpen)}
          >
            <span className="text-lg font-medium">ABOUT US</span>
            {isAboutUsOpen ? (
              <ChevronUp className="w-6 h-6" />
            ) : (
              <ChevronDown className="w-6 h-6" />
            )}
          </div>
          {isAboutUsOpen && (
            <div className="mt-3 ml-4 space-y-2">
              <a
                href="/about-us/index.html"
                className="block text-sm text-gray-700 hover:text-red-600"
              >
                About us
              </a>
              <a
                href="/career"
                className="block text-sm text-gray-700 hover:text-red-600"
              >
                Career
              </a>
            </div>
          )}
        </div>
        <hr />

        {/* CTA Buttons */}
        <a
          href="/book-a-test-drive/index.html"
          className="py-3 px-4 font-medium text-sm text-white text-center bg-red-600 hover:bg-red-700 rounded-xl transition-all"
        >
          BOOK A TEST DRIVE
        </a>
        <a
          href="/request-price-list/index.html"
          className="py-3 px-4 font-medium text-sm text-center bg-gray-200 hover:bg-gray-300 rounded-xl transition-all"
        >
          REQUEST PRICE LIST
        </a>
      </div>
    </>
  );
}
