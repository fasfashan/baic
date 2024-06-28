import logo from "../assets/logo.png";
import { useState } from "react";
import BigMenu from "./BigMenu";
export default function Header() {
  const [isBigMenuOpen, setIsBigMenuOpen] = useState(false);

  const handleVehicleClick = () => {
    setIsBigMenuOpen(!isBigMenuOpen);
  };

  return (
    <>
      <nav className="md:max-w-6xl items-center bg-white py-4 m-auto flex justify-between">
        <a href="/">
          <img width={150} height={100} src={logo} alt="Logo" />
        </a>
        <div className="hidden sm:flex flex-col space-y-4">
          <div className="flex gap-4 justify-end pb-2 border-b-2 border-red-600">
            <li>
              <a href="#">BOOK TEST DRIVE</a>
            </li>
            <li>
              <a href="#">REQUEST PRICE LIST</a>
            </li>
          </div>
          <div className="flex gap-8 text-lg font-medium tracking-wide">
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
              <a href="#">NEWS & EVENT</a>
            </li>
            <li>
              <a href="#">CONTACT DEALER</a>
            </li>
          </div>
        </div>
        <div className="block sm:hidden">
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
        </div>
      </nav>
      {isBigMenuOpen && <BigMenu />}
    </>
  );
}
