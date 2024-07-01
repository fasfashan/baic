import logo from "../assets/logo.svg";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import BigMenu from "./BigMenu";
export default function Header() {
  const [isBigMenuOpen, setIsBigMenuOpen] = useState(false);

  const handleVehicleClick = () => {
    setIsBigMenuOpen(!isBigMenuOpen);
  };
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="md:max-w-6xl md:px-8 px-5 items-center  bg-white py-4 m-auto flex justify-between">
        <a href="/">
          <img className="md:w-36 w-28" src={logo} alt="Logo" />
        </a>
        <div className="hidden sm:flex flex-col space-y-4">
          <div className="flex gap-4 justify-end pb-2 border-b-2 border-red-600">
            <li>
              <a href="/book-a-test-drive/index.html">BOOK TEST DRIVE</a>
            </li>
            <li>
              <a href="#">REQUEST PRICE LIST</a>
            </li>
          </div>
          <div className="flex gap-8  font-medium tracking-wide">
            <li>
              <a className="flex gap-2" href="#" onClick={handleVehicleClick}>
                VEHICLE{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d={
                      isBigMenuOpen
                        ? "M6 15.5L12 9.5L18 15.5"
                        : "M18 9.5L12 15.5L6 9.5"
                    }
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="/news/index.html">NEWS & EVENT</a>
            </li>
            <li>
              <a href="/contact/index.html">CONTACT DEALER</a>
            </li>
          </div>
        </div>
        <div className="block sm:hidden">
          <button onClick={handleMobileMenuClick} className="transition-all">
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M14.348 4.849a.5.5 0 01.708.708L10.707 10l4.35 4.35a.5.5 0 01-.708.708L10 10.707l-4.35 4.35a.5.5 0 01-.708-.708L9.293 10 4.943 5.65a.5.5 0 01.708-.708L10 9.293l4.35-4.35z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M3 12.5H21M3 6.5H21M3 18.5H21"
                  stroke="#121926"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>
      {isBigMenuOpen && <BigMenu />}
      {isMobileMenuOpen && <MobileMenu />}
    </>
  );
}
