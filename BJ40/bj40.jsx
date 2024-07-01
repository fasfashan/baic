import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import "../src/index.css";
import { useState } from "react";
import BJ40Logo from "../src/assets/BJ40-plus-logo.png";
import BJ40View1 from "../src/assets/BJ40-plus-view-1.png";
import Foto1 from "../src/assets/BJ40-single-produk-1.jpg";
import Foto2 from "../src/assets/BJ40-single-produk-2.jpg";
import Foto3 from "../src/assets/BJ40-single-produk-3.jpg";
import Foto4 from "../src/assets/BJ40-single-produk-4.jpg";
import CTA from "../src/components/cta";
function App() {
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
      <div className="bg-neutral-100    ">
        <div className=" py-2 z-10  bg-neutral-100  sticky  top-0 items-center ">
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
                className="w-full h-full  bg-cover bg-center"
                style={{ backgroundImage: `url(${Foto2})` }}
              >
                <div className="flex justify-end max-w-6xl m-auto py-40 items-center  h-full   text-white">
                  <div className="max-w-2xl px-10  flex flex-col gap-4">
                    <h1 className="md:text-7xl text-5xl font-bold max-w-lg mb-4">
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
                className="w-full h-full  bg-cover bg-center"
                style={{ backgroundImage: `url(${Foto3})` }}
              >
                <div className="flex justify-start max-w-6xl m-auto py-40 items-center  h-full   text-white">
                  <div className="max-w-2xl px-10  flex flex-col gap-4">
                    <h1 className="md:text-7xl text-5xl font-bold max-w-lg mb-4">
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
                className="w-full h-full  bg-cover bg-center"
                style={{ backgroundImage: `url(${Foto4})` }}
              >
                <div className="flex justify-end max-w-6xl m-auto py-40 items-center  h-full   text-white">
                  <div className="max-w-2xl px-10  flex flex-col gap-4">
                    <h1 className="md:text-7xl text-5xl font-bold max-w-lg mb-4">
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
                <table className="max-w-5xl md:w-full mb-10   overflow-scroll border-collapse mt-10  md:px-8 px-5   m-auto border border-slate-300 divide-y divide-gray-200">
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
                        Permium
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
                  </tbody>
                </table>
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
