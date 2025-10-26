import logo from "../assets/logo.svg";
import { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";
import BigMenu from "./BigMenu";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Header() {
  const [isBigMenuOpen, setIsBigMenuOpen] = useState(false);
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isDealerOpen, setIsDealerOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleVehicleClick = () => {
    setIsBigMenuOpen(!isBigMenuOpen);
    setIsAboutUsOpen(false);
    setIsServicesOpen(false);
    setIsDealerOpen(false);
  };

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handle scroll behavior
  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scrolling down & past 100px
          setIsVisible(false);
        } else {
          // Scrolling up
          setIsVisible(true);
        }

        setLastScrollY(currentScrollY);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 items-center bg-black py-4 z-50 transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="md:max-w-6xl md:px-8 px-5 m-auto flex justify-between items-center">
          {/* Logo & Desktop Menu */}
          <div className="hidden md:flex text-white items-center gap-8">
            <a href="/">
              <img className="h-6" src={logo} alt="Logo" />
            </a>
            <ul className="flex gap-6 tracking-wide items-center">
              {/* Vehicle Menu */}
              <li className="relative">
                <button
                  className="flex items-center gap-1 hover:text-gray-300 transition-colors"
                  onClick={handleVehicleClick}
                >
                  Vehicle
                  {isBigMenuOpen ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
              </li>

              {/* About Us Menu */}
              <li
                className="relative group"
                onMouseEnter={() => setIsAboutUsOpen(true)}
                onMouseLeave={() => setIsAboutUsOpen(false)}
              >
                <button className="flex items-center gap-1 hover:text-gray-300 transition-colors py-2">
                  About Us
                  {isAboutUsOpen ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
                {isAboutUsOpen && (
                  <div className="absolute top-full left-0 pt-2 z-50">
                    <div className="w-56 bg-white text-black rounded-lg shadow-lg py-2">
                      <a
                        href="/about-us/index.html"
                        className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                      >
                        About us
                      </a>
                      <a
                        href="/news/index.html"
                        className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                      >
                        Update News & Events
                      </a>
                      <a
                        href="/career"
                        className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                      >
                        Career
                      </a>
                    </div>
                  </div>
                )}
              </li>

              {/* Services Menu */}
              <li
                className="relative group"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button className="flex items-center gap-1 hover:text-gray-300 transition-colors py-2">
                  Services
                  {isServicesOpen ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
                {isServicesOpen && (
                  <div className="absolute top-full left-0 pt-2 z-50">
                    <div className="w-56 bg-white text-black rounded-lg shadow-lg py-2">
                      <a
                        href="/aftersales"
                        className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                      >
                        Aftersales Program
                      </a>
                      <a
                        href="/emergency-road"
                        className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                      >
                        Emergency Road Assistance
                      </a>
                      <a
                        href="/booking-service"
                        className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                      >
                        Booking Dealer Service
                      </a>
                    </div>
                  </div>
                )}
              </li>

              {/* Dealer Menu */}
              <li
                className="relative group"
                onMouseEnter={() => setIsDealerOpen(true)}
                onMouseLeave={() => setIsDealerOpen(false)}
              >
                <button className="flex items-center gap-1 hover:text-gray-300 transition-colors py-2">
                  Dealer
                  {isDealerOpen ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
                {isDealerOpen && (
                  <div className="absolute top-full left-0 pt-2 z-50">
                    <div className="w-56 bg-white text-black rounded-lg shadow-lg py-2">
                      <a
                        href="/find-dealer"
                        className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                      >
                        Find Dealer
                      </a>
                      <a
                        href="/partnership"
                        className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                      >
                        Partnership
                      </a>
                    </div>
                  </div>
                )}
              </li>

              {/* Credit Simulation */}
              <li>
                <a
                  href="/credit-simulation"
                  className="hover:text-gray-300 transition-colors"
                >
                  Credit Simulation
                </a>
              </li>
            </ul>
          </div>

          {/* Mobile Logo */}
          <div className="md:hidden">
            <a href="/">
              <img className="h-6" src={logo} alt="Logo" />
            </a>
          </div>

          {/* CTA Buttons & Language Selector */}
          <div className="hidden md:flex gap-4 items-center">
            <a
              className="py-3 px-4 font-medium text-sm text-white text-center bg-red-600 transition-all hover:bg-red-700 rounded-xl"
              href="/book-a-test-drive/index.html"
            >
              Book a Test Drive
            </a>
            <a
              className="py-3 px-4 font-medium text-sm text-center bg-white transition-all hover:bg-neutral-100 rounded-xl"
              href="/request-price-list/index.html"
            >
              Request Price List
            </a>
            <button className="flex items-center gap-1 text-white hover:text-gray-300 transition-colors">
              EN
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="block md:hidden">
            <button
              onClick={handleMobileMenuClick}
              className="text-white transition-all"
            >
              {isMobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>
      {isBigMenuOpen && <BigMenu />}
      {isMobileMenuOpen && <MobileMenu />}
    </>
  );
}
