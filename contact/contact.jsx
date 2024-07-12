import { useState } from "react";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import dealerplaceholder from "../src/assets/dealer-placeholder.png";
import "../src/index.css";
import dealerBandung from "../src/assets/dealer-baic-bandung.jpg";
function App() {
  const [dealerFound, setDealerFound] = useState(false);

  // Contoh array dealer
  const dealers = [
    {
      id: 1,
      province: "BANTEN",
      city: "TANGERANG",
      name: "Dealer Tangerang Alam Sutera",
      services: "Sales, Services, Spareparts & Body & Paint",
      address:
        "Jl. Gading Serpong Boulevard Blok A No.7 Curug Sangereng, Kec. Klp. Dua, Kabupaten Tangerang, Banten 15810",
      whatsappLink: "#",
      mapLink: "#",
      image: dealerBandung,
    },
    // Tambahkan dealer lain jika perlu
  ];

  const handleFindDealer = () => {
    setDealerFound(true);
  };

  return (
    <>
      <Header />
      <div className="bg-neutral-100 py-4">
        <h3 className="max-w-6xl m-auto md:px-8 px-5 font-bold">
          CONTACT DEALER
        </h3>
      </div>
      <div className="py-8 bg-neutral-200">
        <h2 className="text-2xl font-bold text-center">FIND OUR DEALER</h2>
        <div className="flex md:flex-nowrap flex-wrap mt-6 max-w-6xl md:px-8 px-5 m-auto justify-between gap-4 ">
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
            {dealers.map((dealer) => (
              <div
                key={dealer.id}
                className="mt-10 md:px-8 px-5 max-w-6xl m-auto"
              >
                <div className="grid rounded-lg shadow-lg bg-white p-8 grid-cols-12 gap-6 mb-8">
                  <img
                    src={dealer.image}
                    alt={`blog`}
                    className="md:col-span-4 col-span-12"
                  />
                  <div className="space-y-2 flex flex-col justify-between md:col-span-8 col-span-12">
                    <div className="space-y-1">
                      <h2 className="font-medium text-2xl">{dealer.name}</h2>
                      <h2 className="capitalize italic text-red-600 font-medium">
                        {dealer.services}
                      </h2>
                      <p className="text-sm">{dealer.address}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <a
                        className="py-3 md:w-fit w-full block px-14 text-white text-center bg-green-600 transition-all hover:text-white rounded-xl"
                        href={dealer.whatsappLink}
                      >
                        WHATSAPP
                      </a>
                      <a
                        className="py-3 md:w-fit w-full block px-14 text-center bg-red-600 transition-all text-white rounded-xl"
                        href={dealer.mapLink}
                      >
                        MAP
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;
