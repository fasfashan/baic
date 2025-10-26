import BJ40 from "../assets/BJ40-plus.png";
import X55 from "../assets/BAIC-X55-II.png";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function MobileMenu() {
  const [isVehicleOpen, setIsVehicleOpen] = useState(false);
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isDealerOpen, setIsDealerOpen] = useState(false);

  return (
    <>
      <div className="w-full space-y-4 min-h-screen flex flex-col transition-all z-50 absolute p-5 bg-white">
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
            <div className="gap-4 mt-4 flex flex-col">
              <div className="flex flex-col p-4 border border-gray-300 rounded-md">
                <h3 className="font-medium">OFF ROAD</h3>
                <img className="mt-4" width={300} src={BJ40} alt="BJ40 Plus" />
                <h2 className="text-sm text-red-500 font-medium mt-2">
                  BAIC BJ40 PLUS
                </h2>
                <div className="flex mt-2 text-xs">
                  <a
                    className="py-3 text-center hover:bg-gray-100 transition-all w-full border border-gray-400 rounded-xl"
                    href="/BJ40/index.html"
                  >
                    EXPLORE MORE
                  </a>
                </div>
              </div>
              <div className="flex flex-col p-4 border border-gray-300 rounded-md">
                <h3 className="font-medium">SUV</h3>
                <img className="mt-4" width={300} src={X55} alt="X55 II" />
                <h2 className="text-sm text-red-500 font-medium mt-2">
                  BAIC X55 II
                </h2>
                <div className="flex mt-2 text-xs">
                  <a
                    className="py-3 text-center hover:bg-gray-100 transition-all w-full border border-gray-400 rounded-xl"
                    href="/X55-Models/index.html"
                  >
                    EXPLORE MORE
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
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
                href="/news/index.html"
                className="block text-sm text-gray-700 hover:text-red-600"
              >
                Update News & Events
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

        {/* Credit Simulation */}
        <a href="/credit-simulation" className="text-lg font-medium">
          CREDIT SIMULATION
        </a>
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
