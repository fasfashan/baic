/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import "../src/index.css";
import flameRedView1 from "../src/assets/flame-red-view-1.png";
import flameRedView2 from "../src/assets/flame-red-view-2.png";
import flameRedView3 from "../src/assets/flame-red-view-3.png";
import flameRedView4 from "../src/assets/flame-red-view-4.png";
import jadeBlackView1 from "../src/assets/jade-black-view-1.png";
import jadeBlackView2 from "../src/assets/jade-black-view-2.png";
import jadeBlackView3 from "../src/assets/jade-black-view-3.png";
import jadeBlackView4 from "../src/assets/jade-black-view-4.png";
import porcelainBlueView1 from "../src/assets/porcelain-blue-view-1.png";
import porcelainBlueView2 from "../src/assets/porcelain-blue-view-2.png";
import porcelainBlueView3 from "../src/assets/porcelain-blue-view-3.png";
import porcelainBlueView4 from "../src/assets/porcelain-blue-view-4.png";
import forestGreanView1 from "../src/assets/forest-green-view-1.png";
import forestGreanView2 from "../src/assets/forest-green-view-2.png";
import forestGreanView3 from "../src/assets/forest-green-view-3.png";
import forestGreanView4 from "../src/assets/forest-green-view-4.png";
import midnightBlueView1 from "../src/assets/midnight-blue-view-1.png";
import midnightBlueView2 from "../src/assets/midnight-blue-view-2.png";
import midnightBlueView3 from "../src/assets/midnight-blue-view-3.png";
import midnightBlueView4 from "../src/assets/midnight-blue-view-4.png";
import { useState } from "react";
import BJ40Logo from "../src/assets/BJ40-plus-logo.png";
import BJ40Video from "../src/assets/BJ40-Video.mp4";
import Foto1 from "../src/assets/BJ40-single-produk-1.jpg";
import Foto2 from "../src/assets/BJ40-single-produk-2.jpg";
import Foto3 from "../src/assets/BJ40-single-produk-3.jpg";
import Foto4 from "../src/assets/BJ40-single-produk-4.jpg";
import interior1 from "../src/assets/interior-1.jpg";
import interior2 from "../src/assets/interior-2.jpg";
import interior3 from "../src/assets/interior-3.jpg";
import interior4 from "../src/assets/interior-4.jpg";
import exterior1 from "../src/assets/exterior-1.jpg";
import exterior2 from "../src/assets/exterior-2.jpg";
import exterior3 from "../src/assets/exterior-3.jpg";
import exterior4 from "../src/assets/exterior-4.jpg";

import snowWhite from "../src/assets/snow white.png";
import armyGreen from "../src/assets/army green.png";
import CTA from "../src/components/cta";
function App() {
  const colors = [
    "#94111B",
    "#ffffff",
    "#000000",
    "#86A9C6",
    "#2E3F2B",
    "#5A603F",
    "#00243A",
  ];
  const colorToImageMapBJ40 = {
    "#94111B": [flameRedView1, flameRedView2, flameRedView3, flameRedView4],
    "#ffffff": [snowWhite, snowWhite, snowWhite, snowWhite],
    "#000000": [jadeBlackView1, jadeBlackView2, jadeBlackView3, jadeBlackView4],
    "#86A9C6": [
      porcelainBlueView1,
      porcelainBlueView2,
      porcelainBlueView3,
      porcelainBlueView4,
    ],
    "#2E3F2B": [
      forestGreanView1,
      forestGreanView2,
      forestGreanView3,
      forestGreanView4,
    ],
    "#5A603F": [armyGreen, armyGreen, armyGreen, armyGreen],
    "#00243A": [
      midnightBlueView1,
      midnightBlueView2,
      midnightBlueView3,
      midnightBlueView4,
    ],
  };
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
  const handleTabClickGallery = (tab) => {
    setActiveTabGallery(tab);
    window.scrollTo(0, 0);
  };

  const [activeTabGallery, setActiveTabGallery] = useState("Interior");
  const [animating, setAnimating] = useState(false);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const onColorSelect = (color) => {
    if (color !== selectedColor) {
      setAnimating(true);
      setTimeout(() => {
        setSelectedColor(color);
        setCurrentImageIndex(0);
        setAnimating(false);
      }, 100); // Duration of the transition
    }
  };
  const handleImageSelect = (index) => {
    setAnimating(true);
    setTimeout(() => {
      setCurrentImageIndex(index);
      setAnimating(false);
    }, 100);
  };

  return (
    <>
      <Header />
      <div className="bg-neutral-400    ">
        <div className=" py-6 z-10  bg-neutral-100  sticky  top-0 items-center ">
          <div className="max-w-6xl gap-4 flex justify-between flex-wrap m-auto md:px-8 px-5">
            <img
              width={200}
              className="object-contain"
              src={BJ40Logo}
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
                  activeTab === "Gallery" ? "text-red-600 font-medium" : ""
                }`}
                onClick={() => handleTabClick("Gallery")}
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
                className="h-full  bg-cover bg-center"
                style={{ backgroundImage: `url(${Foto1})` }}
              >
                <div className="flex max-w-6xl m-auto py-40 items-center  h-full   text-white">
                  <div className="max-w-2xl px-10  flex flex-col gap-4">
                    <h1 className="md:text-7xl text-4xl font-bold max-w-lg mb-4">
                      BORN FOR EXCELLENCE
                    </h1>
                    <h2 className="text-xl font-bold">
                      4X4 SUVS WITH A DOMINATING PRESENCE
                    </h2>
                    <p className="font-light">
                      Penyempurnaan dari tipe sebelumnya BJ272 yang terkenal;
                      BJ40 Plus dibangun untuk menjadi SUV sejati. Perwujudan
                      yang sederhana, namun tetap tangguh dan tampiI
                      mengesankan. Wujudnya yang gagah merupakan perpaduan
                      sempurna antara ketangguhan, keanggunan dan juga
                      kecanggihan.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className=" h-full  bg-cover bg-center"
                style={{ backgroundImage: `url(${Foto2})` }}
              >
                <div className="flex md:justify-end max-w-6xl m-auto py-40 items-center  h-full   text-white">
                  <div className="max-w-2xl px-10  flex flex-col gap-4">
                    <h1 className="md:text-7xl text-4xl font-bold max-w-lg mb-4">
                      EXPLORE THE UNKNOWN
                    </h1>
                    <h2 className="text-xl font-bold">
                      ULTIMATE PERFORMANCE FOR THE DRIVE OF YOUR LIFE
                    </h2>
                    <p className="font-light">
                      Jelajahi dunia yang belum dijamah dengan kehandalan BJ40
                      Plus yang tidak perlu dipertanyakan lagi. SUV luar biasa
                      ini menyediakan tenaga yang melimpah, memungkinkan anda
                      unuk membuka jalan menuju cakrawala baru.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className=" h-full  bg-cover bg-center"
                style={{ backgroundImage: `url(${Foto3})` }}
              >
                <div className="flex justify-start max-w-6xl m-auto py-40 items-center  h-full   text-white">
                  <div className="max-w-2xl px-10  flex flex-col gap-4">
                    <h1 className="md:text-7xl text-4xl font-bold max-w-lg mb-4">
                      ROBUST & FEARLESS
                    </h1>
                    <h2 className="text-xl font-bold">
                      CUSTOMIZED FUNCTIONS TO RESONATE WITH YOUR PERSONALITY
                    </h2>
                    <p className="font-light">
                      Mulailah petualangan impian anda dengan BJ40 Plus baru.
                      Raih tantangan baru dalam perjalan anda dengan percaya
                      diri
                    </p>
                  </div>
                </div>
              </div>
              <div
                className=" h-full  bg-cover bg-center"
                style={{ backgroundImage: `url(${Foto4})` }}
              >
                <div className="flex md:justify-end max-w-6xl m-auto py-40 items-center  h-full   text-white">
                  <div className="max-w-2xl px-10  flex flex-col gap-4">
                    <h1 className="md:text-7xl text-4xl font-bold max-w-lg mb-4">
                      LUXURIOUS & COMFORTABLE
                    </h1>
                    <h2 className="text-xl font-bold">
                      BUILT TOUGH FOR A RELAXED AND THRILLING RIDE
                    </h2>
                    <p className="font-light">
                      Dibangun dengan cerdas dengan desain yang kokoh untuk
                      memenuhi gaya hidup petualang anda. Berani melakukan
                      perjalanan memukau dengan BJ40 Plus. BJ40 Plus diproduksi
                      dan diuji sebagai kendaraan militer, dengan serangkaian
                      percobaan dan ujian yang ketat. lni adalah kendaraan
                      pilihan sempurna untuk memberikan pengalaman berkendara
                      yang aman dan terjamin, namun tetap menyenangkan.
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
          {activeTab === "Pricing" && (
            <div className="  md:px-8 px-5 max-w-4xl m-auto overflow-hidden bg-neutral-200 pt-4">
              <div className="space-y-1 text-center mt-10 ">
                <div className="flex space-x-3 justify-center">
                  {colors.map((color) => (
                    <div
                      key={color}
                      className={`w-12 h-12 rounded-full border border-neutral-200 cursor-pointer transition-transform duration-200 ${
                        selectedColor === color
                          ? "border-4 outline outline-red-500 border-white transform scale-110"
                          : "border-2 border-transparent"
                      }`}
                      style={{ backgroundColor: color }}
                      onClick={() => onColorSelect(color)}
                    ></div>
                  ))}
                </div>
                <div className="flex flex-col max-w-2xl overflow-hidden justify-center mx-auto">
                  <div className=" flex flex-col space-x-2 justify-center mt-4">
                    <img
                      src={
                        colorToImageMapBJ40[selectedColor][currentImageIndex]
                      }
                      alt={`BJ40 Plus View ${currentImageIndex + 1}`}
                      className={`transition-transform h-fit duration-100 ${
                        animating
                          ? "translate-x-full opacity-0"
                          : "translate-x-0 opacity-100"
                      }`}
                    />
                    <div className="flex justify-center gap-8  ">
                      {colorToImageMapBJ40[selectedColor]?.map(
                        (imageSrc, index) => (
                          <button
                            key={index}
                            onClick={() => handleImageSelect(index)}
                            className={` block   bg-cover bg-center  border ${
                              currentImageIndex === index
                                ? "border-red-500"
                                : "opacity-50"
                            }`}
                          >
                            <img
                              className="block w-full h-auto"
                              src={imageSrc}
                              alt=""
                            />
                          </button>
                        )
                      )}
                    </div>
                  </div>
                </div>
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
          {activeTab === "Gallery" && (
            <div className="  md:px-8 px-5 max-w-6xl m-auto overflow-hidden bg-neutral-200 pt-4">
              <div className="flex gap-8  justify-center   ">
                <button
                  className={`py-2 transition-all    ${
                    activeTabGallery === "Interior"
                      ? "text-red-600 font-medium border-b border-red-600"
                      : ""
                  }`}
                  onClick={() => handleTabClickGallery("Interior")}
                >
                  INTERIOR
                </button>
                <button
                  className={`py-2 transition-all    ${
                    activeTabGallery === "Exterior"
                      ? "text-red-600 font-medium border-b border-red-600"
                      : ""
                  }`}
                  onClick={() => handleTabClickGallery("Exterior")}
                >
                  EXTERIOR
                </button>
                <button
                  className={`py-2 transition-all    ${
                    activeTabGallery === "Video"
                      ? "text-red-600 font-medium border-b border-red-600"
                      : ""
                  }`}
                  onClick={() => handleTabClickGallery("Video")}
                >
                  VIDEO
                </button>
              </div>
              {activeTabGallery === "Interior" && (
                <>
                  <div className="mb-10 m-auto  mt-10">
                    <div className=" grid grid-cols-6">
                      <img
                        src={interior1}
                        alt="interior 1"
                        className="w-full col-span-4"
                      />
                      <img
                        src={interior2}
                        alt="interior 1"
                        className="w-full h-full col-span-2 object-cover  "
                      />
                    </div>
                    <div className=" grid grid-cols-6">
                      <img
                        src={interior3}
                        alt="interior 1"
                        className="w-full h-full object-cover col-span-2"
                      />
                      <img
                        src={interior4}
                        alt="interior 1"
                        className="w-full  col-span-4   "
                      />
                    </div>
                  </div>
                </>
              )}
              {activeTabGallery === "Exterior" && (
                <>
                  <div className="mb-10 m-auto  mt-10">
                    <div className=" grid grid-cols-6">
                      <img
                        src={exterior1}
                        alt="exterior 1"
                        className="w-full col-span-4"
                      />
                      <img
                        src={exterior2}
                        alt="exterior 2"
                        className="w-full h-full col-span-2 object-cover  "
                      />
                    </div>
                    <div className=" grid grid-cols-6">
                      <img
                        src={exterior3}
                        alt="exterior 3"
                        className="w-full h-full object-cover col-span-2"
                      />
                      <img
                        src={exterior4}
                        alt="exterior 4"
                        className="w-full  col-span-4   "
                      />
                    </div>
                  </div>
                </>
              )}
              {activeTabGallery === "Video" && (
                <>
                  <div className="mb-10 m-auto  mt-10">
                    <video controls autoPlay src={BJ40Video}></video>
                  </div>
                </>
              )}
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
