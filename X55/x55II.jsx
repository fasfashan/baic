/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import "../src/index.css";
import { useState } from "react";
import BJ40Logo from "../src/assets/BJ40-plus-logo.png";
import X55Logo from "../src/assets/X55-logo.png";
import BJ40View1 from "../src/assets/BJ40-plus-view-1.png";
import Foto1 from "../src/assets/BJ40-single-produk-1.jpg";
import Foto2 from "../src/assets/BJ40-single-produk-2.jpg";
import Foto3 from "../src/assets/BJ40-single-produk-3.jpg";
import Foto4 from "../src/assets/BJ40-single-produk-4.jpg";
import CTA from "../src/components/cta";
function App() {
  const [openAccordions, setOpenAccordions] = useState({});

  const toggleAccordion = (id) => {
    setOpenAccordions((prevOpenAccordions) => ({
      ...prevOpenAccordions,
      [id]: !prevOpenAccordions[id],
    }));
  };

  const accordions = [
    {
      id: "accordion1",
      title: "CONTROL & SAFETY",
      flagship: "2745",
      premium: "asdfsdf",
      champion: "sdfsdf",
    },
    {
      id: "accordion2",
      title: "EXTERIOR",
      flagship: "2850",
      premium: "-",
      champion: "sdfsdf",
    },
    {
      id: "accordion3",
      title: "INTERIOR",
      flagship: "2850",
      premium: "-",
      champion: "sdfsdf",
    },
    {
      id: "accordion4",
      title: "SEAT",
      flagship: "2850",
      premium: "-",
      champion: "sdfsdf",
    },
    {
      id: "accordion5",
      title: "ENTERTAINMENT",
      flagship: "2850",
      premium: "-",
      champion: "sdfsdf",
    },
    {
      id: "accordion6",
      title: "LIGHT",
      flagship: "2850",
      premium: "-",
      champion: "sdfsdf",
    },
    {
      id: "accordion7",
      title: "AIR CONDITIONING",
      flagship: "2850",
      premium: "-",
      champion: "sdfsdf",
    },
    {
      id: "accordion8",
      title: "SPESIAL EXCLUSIVE",
      flagship: "2850",
      premium: "-",
      champion: "sdfsdf",
    },
    // Add more accordions here
  ];
  const [activeTab, setActiveTab] = useState("Overview");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    window.scrollTo(0, 0);
  };
  const colors = ["#cc3300", "#cccccc", "#000", "#666633", "#FFF333"];
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const onColorSelect = (color) => {
    setSelectedColor(color);
  };

  return (
    <>
      <Header />
      <div className="bg-neutral-400    ">
        <div className=" py-2 z-10  bg-neutral-100  sticky  top-0 items-center ">
          <div className="max-w-6xl gap-4 flex justify-between flex-wrap m-auto md:px-8 px-5">
            <img
              width={180}
              className="object-contain"
              src={X55Logo}
              alt="BJ40 PLUS Logo"
            />
            <div className="flex gap-4    ">
              <button
                className={`py-2 transition-all    ${
                  activeTab === "Overview" ? "text-red-600 font-medium" : ""
                }`}
                onClick={() => handleTabClick("Overview")}
              >
                OVERVIEW
              </button>
              <button
                className={`py-2 transition-all    ${
                  activeTab === "Pricing" ? "text-red-600 font-medium" : ""
                }`}
                onClick={() => handleTabClick("Pricing")}
              >
                PRICING & SPECS
              </button>
              <button
                className={`py-2 transition-all    ${
                  activeTab === "X55 II" ? "text-red-600 font-medium" : ""
                }`}
                onClick={() => handleTabClick("X55 II")}
              >
                GALLERY
              </button>
              <a
                className="py-3 md:block hidden px-8 text-sm text-white text-center bg-red-600 transition-all border border-white hover:border-none rounded-xl"
                href="/book-a-test-drive/index.html"
              >
                BOOK A TEST DRIVE
              </a>
            </div>
          </div>
        </div>
        <div className="bg-neutral-200">
          {activeTab === "Overview" && (
            <>
              <div
                className="w-full h-full  bg-cover bg-center"
                style={{ backgroundImage: `url(${Foto1})` }}
              >
                <div className="flex max-w-6xl m-auto py-40 items-center  h-full   text-white">
                  <div className="max-w-2xl px-10  flex flex-col gap-4">
                    <h1 className="md:text-7xl text-5xl font-bold max-w-lg mb-4">
                      SMART TECHNOLOGY
                    </h1>
                    <h2 className="text-xl font-bold">
                      STANDARD FEATURES INCLUDE:
                    </h2>
                    <ul className="font-light">
                      <li>
                        •Driver’s seat welcome/memory for multiple drivers needs
                      </li>
                      <li>
                        •Heated and ventilated front seats for warmth in winter
                        and coolness in summer
                      </li>
                      <li>
                        •4-way electrical lumbar support for your lower back
                      </li>
                      <li>•2-level incline rear backrest adjustment.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="w-full h-full  bg-cover bg-center"
                style={{ backgroundImage: `url(${Foto2})` }}
              >
                <div className="flex justify-end max-w-6xl m-auto py-40 items-center  h-full   text-white">
                  <div className="max-w-2xl px-10  flex flex-col gap-4">
                    <h1 className="md:text-7xl text-5xl font-bold max-w-lg mb-4">
                      EXCEPTIONAL PERFORMANCE
                    </h1>

                    <ul className="font-light">
                      <li>
                        •0-100km/h in 7.8 seconds, making the X55, the fastest
                        car in its class.
                      </li>
                      <li>
                        •At 7.18l/100km it offers some of the lowest fuel
                        consumption in its class.
                      </li>
                      <li>
                        •VGT (Variable Geometry Turbine) booster technology
                        offers a significant increase of boost pressure and a
                        broader torque plateau while maintaining exceptional
                        drivability and control.
                      </li>
                      <li>
                        •The 350-bar high pressure injection, along with the
                        Miller Cycle, ensures better fuel efficiency and lower
                        CO2 emissions.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="w-full h-full  bg-cover bg-center"
                style={{ backgroundImage: `url(${Foto3})` }}
              >
                <div className="flex justify-start max-w-6xl m-auto py-40 items-center  h-full   text-white">
                  <div className="max-w-2xl px-10  flex flex-col gap-4">
                    <h1 className="md:text-7xl text-5xl font-bold max-w-lg mb-4">
                      REVOLUTIONARY SPORTS STYLING
                    </h1>

                    <ul className="font-light">
                      <li>•LED lights</li>
                      <li>•Concealed, integrated door handles</li>
                      <li>•Convenient and elegant split rear wing (spoiler)</li>
                      <li>•Shark fin antenna</li>
                      <li>•Panoramic sunroof</li>
                      <li>•Space engine style air vents</li>
                      <li>•Aircraft-style gearshift lever</li>
                      <li>•3D ambient light effect on door panels</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="w-full h-full  bg-cover bg-center"
                style={{ backgroundImage: `url(${Foto4})` }}
              >
                <div className="flex justify-end max-w-6xl m-auto py-40 items-center  h-full   text-white">
                  <div className="max-w-2xl px-10  flex flex-col gap-4">
                    <h1 className="md:text-7xl text-5xl font-bold max-w-lg mb-4">
                      HUMAN-CENTERED COMFORT
                    </h1>
                    <h2 className="text-xl font-bold">
                      BUILT TOUGH FOR A RELAXED AND THRILLING RIDE
                    </h2>
                    <ul className="font-light">
                      <li>•Zero gravity integrated sport seats</li>
                      <li>•Sensing panoramic sunroof</li>
                      <li>•Baby-care grade interior materials</li>
                      <li>•Soft-clad interior finish</li>
                      <li>•Spacious and environment - friendly</li>
                    </ul>
                  </div>
                </div>
              </div>
            </>
          )}
          {activeTab === "Pricing" && (
            <div className="  md:px-8 px-5 bg-neutral-200 pt-4">
              <div className="flex space-x-4 justify-center mt-10">
                {colors.map((color) => (
                  <div
                    key={color}
                    className={`w-8 h-8 rounded-full cursor-pointer transition-transform duration-200 ${
                      selectedColor === color
                        ? "border-4 outline outline-red-500 border-white transform scale-110"
                        : "border-2 border-transparent"
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => onColorSelect(color)}
                  ></div>
                ))}
              </div>
              <img
                width={700}
                src={BJ40View1}
                alt="BJ40 Plus"
                className="mt-10 m-auto"
              />
              <div className="flex gap-4 justify-center">
                {[...Array(5)].map((_, index) => (
                  <div key={index} className="relative">
                    <img
                      width={100}
                      src={BJ40View1}
                      alt={`BJ40 Plus ${index + 1}`}
                      className="block py-4 px-2 border"
                    />
                    {index > 0 && (
                      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    )}
                  </div>
                ))}
              </div>
              <div className="space-y-1 text-center mt-10 ">
                <h3 className="font-medium">BJ40 Plus</h3>
                <h2 className="font-semibold md:text-5xl text-4xl">
                  Rp. 850.000.000,-
                </h2>
                <p className="italic text-neutral-500">*Off the road</p>
              </div>
              <h2 className=" text-center md:text-3xl text-2xl mt-10">
                BJ40 Plus Specifications
              </h2>
              <div className="overflow-x-auto">
                <table className="max-w-5xl md:w-full mb-4   overflow-scroll border-collapse mt-10  md:px-8 px-5   m-auto border border-slate-300 divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <td
                        className="md:px-4 px-2 border bg-neutral-900 text-white border-slate-300 py-3 text-xs font-medium tracking-wider"
                        rowSpan="2"
                        colSpan="1"
                      >
                        Model/Configuration
                      </td>
                      <td
                        className="md:px-4 px-2 bg-neutral-900 text-white border border-slate-300 py-3 text-xs font-medium tracking-wider text-center"
                        rowSpan="1"
                        colSpan="5"
                      >
                        2.3T+6AT- 4WD
                      </td>
                    </tr>
                    <tr>
                      <td
                        className="md:px-4 bg-neutral-900 text-white px-2 border border-slate-300 py-3 text-xs font-medium tracking-wider"
                        rowSpan="1"
                        colSpan="1"
                      >
                        Premium
                      </td>
                      <td
                        className="md:px-4 bg-neutral-900 text-white px-2 border py-3 border-slate-300 text-xs font-medium tracking-wider"
                        rowSpan="1"
                        colSpan="1"
                      >
                        Flagship
                      </td>
                      <td
                        className="md:px-4 bg-neutral-900 text-white px-2 py-3 text-xs font-medium tracking-wider"
                        rowSpan="1"
                        colSpan="2"
                      >
                        Champion
                      </td>
                    </tr>
                  </thead>
                  <thead className="bg-gray-300">
                    <tr>
                      <th
                        colSpan={4}
                        className="md:px-4 bg-neutral-700 text-white px-2 py-3 text-xs font-medium tracking-wider text-left  "
                      >
                        Basic Parameter
                      </th>
                    </tr>
                  </thead>

                  <tbody className="bg-white   ">
                    <tr>
                      <td
                        colSpan={1}
                        className="md:px-4 px-2 py-4 border border-slate-300 text-xs text-gray-500 whitespace-nowrap"
                      >
                        Length×Width×Height (mm)
                      </td>
                      <td
                        colSpan={1}
                        className="md:px-4 px-2 py-4 border border-slate-300 text-xs text-gray-500 whitespace-nowrap"
                      ></td>
                      <td
                        colSpan={1}
                        className="md:px-4 px-2 py-4 border border-slate-300 text-xs text-gray-500 whitespace-nowrap"
                      >
                        4645*1925*1871
                      </td>
                      <td
                        colSpan={1}
                        className="md:px-4 px-2 py-4 border border-slate-300 text-xs text-gray-500 whitespace-nowrap"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        colSpan={1}
                        className="md:px-4 px-2 py-4 border bg-neutral-100 border-slate-300 text-xs text-gray-500 whitespace-nowrap"
                      >
                        Wheelbase (mm)
                      </td>
                      <td
                        colSpan={1}
                        className="md:px-4 px-2 py-4 border bg-neutral-100  border-slate-300 text-xs text-gray-500 whitespace-nowrap"
                      ></td>
                      <td
                        colSpan={1}
                        className="md:px-4 px-2 py-4 bg-neutral-100  border border-slate-300 text-xs text-gray-500 whitespace-nowrap"
                      >
                        2745
                      </td>
                      <td
                        colSpan={1}
                        className="md:px-4 px-2 py-4 bg-neutral-100  border border-slate-300 text-xs text-gray-500 whitespace-nowrap"
                      ></td>
                    </tr>
                    {accordions.map((accordion) => (
                      <Accordion
                        key={accordion.id}
                        id={accordion.id}
                        isOpen={openAccordions[accordion.id]}
                        toggleAccordion={toggleAccordion}
                        title={accordion.title}
                        flagship={accordion.flagship}
                        premium={accordion.premium}
                        champion={accordion.champion}
                      />
                    ))}
                  </tbody>
                </table>
                <div className="max-w-5xl font-light text-xs m-auto mb-10 leading-relaxed  ">
                  <p className="md:max-w-2xl ">
                    Mark: "●" standard, "—" not available, "○" optional All
                    configurations shall be subject to the actual vehicle sold
                    by the dealer, and BAIC reserves the right to change the
                    described vehicle model，and does not have the obligation to
                    notify in advance for the purpose of marketing or product
                    promotion at any time.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <CTA />
      <Footer />
    </>
  );
}

export default App;
const Accordion = ({
  id,
  isOpen,
  toggleAccordion,
  title,
  flagship,
  premium,
  champion,
}) => (
  <>
    <tr>
      <td colSpan={4}>
        <div
          onClick={() => toggleAccordion(id)}
          className="flex px-3 items-center bg-neutral-700 py-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 ${isOpen ? "transform rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
          <span className="text-xs ml-2 font-medium text-white">{title}</span>
        </div>
      </td>
    </tr>
    {isOpen && (
      <tr>
        <td
          colSpan={1}
          className="md:px-4 px-2 py-4 border bg-neutral-100  text-xs text-gray-500 whitespace-nowrap"
        >
          {title}
        </td>
        <td
          colSpan={1}
          className="md:px-4 px-2 py-4 border bg-neutral-100  text-xs text-gray-500 whitespace-nowrap"
        >
          {premium}
        </td>
        <td
          colSpan={1}
          className="md:px-4 px-2 py-4 bg-neutral-100 border  text-xs text-gray-500 whitespace-nowrap"
        >
          {flagship}
        </td>
        <td
          colSpan={1}
          className="md:px-4 px-2 py-4 bg-neutral-100 border  text-xs text-gray-500 whitespace-nowrap"
        >
          {champion}
        </td>
      </tr>
    )}
  </>
);
