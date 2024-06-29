import { useState } from "react";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import dealerplaceholder from "../src/assets/dealer-placeholder.png";
import "../src/index.css";

function App() {
  const [dealerFound, setDealerFound] = useState(false);

  const handleFindDealer = () => {
    setDealerFound(true);
  };

  return (
    <>
      <Header />
      <div className="bg-neutral-100 py-4">
        <h3 className="max-w-6xl m-auto md:px-8 px-5 font-medium">
          CONTACT DEALER
        </h3>
      </div>
      <div className="py-8 bg-neutral-200">
        <h2 className="text-2xl font-medium text-center">FIND OUR DEALER</h2>
        <div className="flex mt-6 max-w-6xl md:px-8 px-5 m-auto justify-between gap-4 ">
          <form className="w-full custom-select">
            <select
              id="countries"
              className="bg-gray-50 appearance-none shadow-inner border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
            >
              <option selected disabled>
                PROVINCE
              </option>
              <option value="banten">BANTEN</option>
            </select>
          </form>
          <form className="w-full custom-select">
            <select
              id="countries"
              className="bg-gray-50 appearance-none shadow-inner border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
            >
              <option selected disabled>
                CITY
              </option>
              <option value="tangerang">TANGERANG</option>
            </select>
          </form>
          <button
            onClick={handleFindDealer}
            className="p-2 w-full bg-red-600 text-white rounded-lg"
          >
            FIND DEALER
          </button>
        </div>
        {dealerFound && (
          <>
            <h2 className="font-medium text-xl text-center mt-10 text-red-600">
              BANTEN - KOTA TANGERANG
            </h2>
            <div className="md:px-8 px-5 max-w-6xl m-auto">
              <div className="grid mt-10 m-auto rounded-lg shadow-lg bg-white p-8 grid-cols-12 gap-6 mb-8">
                <img
                  src={dealerplaceholder}
                  alt={`blog`}
                  className="md:col-span-4 col-span-12"
                />
                <div className="space-y-2 flex flex-col justify-between md:col-span-8 col-span-12">
                  <div className="space-y-1">
                    <h2 className="font-medium text-2xl">
                      Dealer Tangerang Alam Sutera
                    </h2>
                    <h2 className="capitalize italic text-red-600 font-medium">
                      Sales, Services, Spareparts & Body & Paint
                    </h2>
                    <p className="text-sm">
                      Jl. Gading Serpong Boulevard Blok A No.7 Curug Sangereng,
                      Kec. Klp. Dua, Kabupaten Tangerang, Banten 15810
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <a
                      className="py-3 md:w-fit w-full block px-14 text-white w-fit text-center bg-green-600 transition-all hover:text-white rounded-xl"
                      href="#"
                    >
                      WHATSAPPP
                    </a>
                    <a
                      className="py-3 md:w-fit w-full block px-14 w-fit text-center bg-red-600 transition-all text-white rounded-xl"
                      href="#"
                    >
                      MAP
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;
