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
import exterior5 from "../src/assets/exterior-5.png";
import exterior6 from "../src/assets/exterior-6.png";

import snowWhite from "../src/assets/snow white.png";
import armyGreen from "../src/assets/army green.png";
import CTA from "../src/components/cta";
import Accordion from "../src/components/Accordion";
const carSpecifications = {
  engine: [
    { title: "LengthxWidthxHeight (mm)", content: "4465 / 1925 / 1871" },
    { title: "Wheelbase (mm )", content: "2745" },
    { title: "Fuel tank capacity (l)", content: "75" },
    { title: "Approach angle (degrees)", content: "37°" },
    { title: "Departure angle (degrees)", content: "31°" },
    { title: "Rampower angle (degrees)", content: "23°" },
    { title: "Ground clearence (mm )", content: "210" },
    { title: "Luggage capacity (litres) *seats down", content: "532/965*" },
    { title: "Displacement (cm3)", content: "2.000 cc Turbo" },
    { title: "Clynder configuration", content: "in-line 4 cylinder 16 value" },
    { title: "Maximum power (Hp@r/min)", content: "221 Hp@ 5500 r/min" },
    { title: "Minimum power (Hp@r/min)", content: "380 Nm@ 1750-4500 r/min" },
    { title: "Emission controls", content: "Euro IV" },
    { title: "Transmission", content: "ZF 8 Speed At" },
    {
      title: "Front suspension",
      content: "Double wishbone/coil spring font independent suspension",
    },
    {
      title: "Rear suspension",
      content: "Five-link/coil spring non-independent suspnesion",
    },
    { title: "Drivetrain", content: "4WD with Electronic Shifter" },

    // Add more specifications as needed
  ],
  features: [
    { title: "Wheels and Tyres", content: "265/65 R17" },
    { title: "Spare type", content: "Full size" },
    { title: "Slide foot step", content: "√" },
    { title: "Remove hard stop", content: "√" },
    { title: "Red tow hooks - front & back", content: "√" },
    { title: "Height adjustable headlights - electric", content: "√" },
    { title: "Front & Rear fog lights", content: "√" },
    { title: "LED Daytime Running Lights", content: "√" },
    { title: "Follow me home lights", content: "√" },
    { title: "LED high mount brake lights", content: "√" },
    { title: "Cruise Control", content: "√" },
    { title: "Dual zone auto air conditioner", content: "√" },
    { title: "Multi-function steering wheel", content: "√" },
    { title: "Anti-glare inside rear view mirror", content: "√" },
    { title: "Driver's seat - 4-way electric adjustable", content: "√" },
    { title: "Front passengers eat - 6-way manual adjustable", content: "√" },
    {
      title: "Rear seat configuration",
      content: "4WD with Electronic Shifter",
    },
    { title: "Rear seat recline function", content: "√" },
    { title: "6 speakers", content: "√" },
    { title: "Anti-lock Braking System (ABS)", content: "√" },
    { title: "Electronic Brake force Distribution (ABS)", content: "√" },
    {
      title:
        "Electronic stability Programme (ESP), Emergency Brake Assist(EBA)",
      content: "√",
    },
    {
      title: "Hill Ascent Control(HOC)",
      content: "√",
    },
    {
      title: "Electronic Parking Brake (EPB)",
      content: "√",
    },
    {
      title: "ISO-FIX child seat restraint system",
      content: "√",
    },
    {
      title: "Driver and front passenger airbag",
      content: "√",
    },

    // Add more features as needed
  ],
};
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
  const colorNamesBJ40 = {
    "#94111B": "Flame Red",
    "#ffffff": "Snow White",
    "#000000": "Jade Black",
    "#86A9C6": "Porcelain Blue",
    "#2E3F2B": "Forest Green",
    "#5A603F": "Army Green",
    "#00243A": "Midnight Blue",
  };
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
                      className={`w-8 h-8 rounded-full border border-neutral-200 cursor-pointer transition-transform duration-200 ${
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
                    <div className="border select-none border-neutral-500 w-fit justify-center m-auto mt-4 flex items-center">
                      <h2 className="text-center transition-all  px-4 py-2">
                        {colorNamesBJ40[selectedColor]}
                      </h2>
                    </div>
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
              </div>
              <h2 className=" text-center md:text-3xl text-2xl mt-10">
                BJ40 Plus Specifications
              </h2>
              <div className="overflow-x-auto mt-10">
                <Accordion
                  title="Engine & Drivetrain"
                  content={carSpecifications.engine}
                />
                <Accordion
                  title="Features"
                  content={carSpecifications.features}
                />
                <div className="max-w-5xl mt-10 font-light text-xs m-auto mb-10 leading-relaxed  ">
                  <p className="md:max-w-2xl ">
                    DISCLAIMER* <br></br>
                    Specifications, equipment, colors & materials shown here may
                    differ from every country. Please check with your local
                    dealer for the latest information
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
                    <div className=" grid grid-cols-6">
                      <img
                        src={exterior5}
                        alt="exterior 1"
                        className="w-full col-span-4"
                      />
                      <img
                        src={exterior6}
                        alt="exterior 2"
                        className="w-full h-full col-span-2 object-cover  "
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
