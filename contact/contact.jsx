import { useState } from "react";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import "../src/index.css";
import dealerBandung from "../src/assets/dealer-baic-bandung.jpg";
import dealerBatam from "../src/assets/dealer-baic-batam.jpg";
import dealerDenpasar from "../src/assets/dealer-baic-denpasar.jpg";
import dealerPIK2 from "../src/assets/dealer-baic-pik-2.jpg";
import dealerMedan from "../src/assets/dealer-baic-sujono.jpg";
import dealerSamarinda from "../src/assets/dealer-baic-samarinda.jpg";
import dealerBanten from "../src/assets/dealer-baic-gading-serpong.jpg";

function App() {
  const [dealerFound, setDealerFound] = useState(false);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  // Contoh array dealer
  const dealers = [
    {
      id: 1,
      province: "KEPULAUAN RIAU",
      city: "BATAM",
      name: "Dealer Kepulauan Riau, Batam",
      services: "Sales, Services, Spareparts & Body & Paint",
      address:
        "Jl. Gading Serpong Boulevard Blok A No.7 Curug Sangereng, Kec. Klp. Dua, Kabupaten Tangerang, Banten 15810",
      whatsappLink: "#",
      mapLink: "#",
      image: dealerBatam,
    },
    {
      id: 2,
      province: "BALI",
      city: "DENPASAR",
      name: "Dealer Bali, Denpasar",
      services: "Sales, Services, Spareparts & Body & Paint",
      address:
        "Jl. Gading Serpong Boulevard Blok A No.7 Curug Sangereng, Kec. Klp. Dua, Kabupaten Tangerang, Banten 15810",
      whatsappLink: "#",
      mapLink: "#",
      image: dealerDenpasar,
    },
    {
      id: 3,
      province: "BANTEN",
      city: "TANGERANG SELATAN",
      name: "Dealer Banten, Tangerang Selatan",
      services: "Sales, Services, Spareparts & Body & Paint",
      address:
        "Jl. Gading Serpong Boulevard Blok A No.7 Curug Sangereng, Kec. Klp. Dua, Kabupaten Tangerang, Banten 15810",
      whatsappLink: "#",
      mapLink: "#",
      image: dealerBanten,
    },
    {
      id: 4,
      province: "SUMATERA UTARA",
      city: "MEDAN",
      name: "Dealer Sumatera Utara, Medan",
      services: "Sales, Services, Spareparts & Body & Paint",
      address:
        "Jl. Gading Serpong Boulevard Blok A No.7 Curug Sangereng, Kec. Klp. Dua, Kabupaten Tangerang, Banten 15810",
      whatsappLink: "#",
      mapLink: "#",
      image: dealerMedan,
    },
    {
      id: 5,
      province: "JAWA BARAT",
      city: "BANDUNG",
      name: "Dealer Jawa Barat, Bandung",
      services: "Sales, Services, Spareparts & Body & Paint",
      address:
        "Jl. Gading Serpong Boulevard Blok A No.7 Curug Sangereng, Kec. Klp. Dua, Kabupaten Tangerang, Banten 15810",
      whatsappLink: "#",
      mapLink: "#",
      image: dealerBandung,
    },
    {
      id: 6,
      province: "DKI JAKARTA",
      city: "JAKARTA UTARA",
      name: "Dealer DKI Jakarta, Jakarta Utara",
      services: "Sales, Services, Spareparts & Body & Paint",
      address:
        "Jl. Gading Serpong Boulevard Blok A No.7 Curug Sangereng, Kec. Klp. Dua, Kabupaten Tangerang, Banten 15810",
      whatsappLink: "#",
      mapLink: "#",
      image: dealerPIK2,
    },
    {
      id: 7,
      province: "KALIMANTAN TIMUR",
      city: "SAMARINDA",
      name: "Dealer Kalimantan Timur, Samarinda",
      services: "Sales, Services, Spareparts & Body & Paint",
      address:
        "Jl. Gading Serpong Boulevard Blok A No.7 Curug Sangereng, Kec. Klp. Dua, Kabupaten Tangerang, Banten 15810",
      whatsappLink: "#",
      mapLink: "#",
      image: dealerSamarinda,
    },

    // Tambahkan dealer lain jika perlu
  ];

  const provinces = [...new Set(dealers.map((dealer) => dealer.province))];
  const cities = selectedProvince
    ? [
        ...new Set(
          dealers
            .filter((dealer) => dealer.province === selectedProvince)
            .map((dealer) => dealer.city)
        ),
      ]
    : [];

  const handleFindDealer = () => {
    setDealerFound(true);
  };

  const handleProvinceChange = (e) => {
    setSelectedProvince(e.target.value);
    setSelectedCity("");
    setDealerFound(false);
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
    setDealerFound(false);
  };

  const filteredDealers = dealers.filter(
    (dealer) =>
      dealer.province === selectedProvince && dealer.city === selectedCity
  );

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
        <div className="flex md:flex-nowrap flex-wrap mt-6 max-w-6xl md:px-8 px-5 m-auto justify-between gap-4">
          <form className="w-full custom-select">
            <select
              id="provinces"
              className="bg-gray-50 appearance-none shadow-inner border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
              value={selectedProvince}
              onChange={handleProvinceChange}
            >
              <option value="" disabled>
                PROVINCE
              </option>
              {provinces.map((province, index) => (
                <option key={index} value={province}>
                  {province}
                </option>
              ))}
            </select>
          </form>
          <form className="w-full custom-select">
            <select
              id="cities"
              className="bg-gray-50 appearance-none shadow-inner border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
              value={selectedCity}
              onChange={handleCityChange}
              disabled={!selectedProvince}
            >
              <option value="" disabled>
                CITY
              </option>
              {cities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </form>
          <button
            onClick={handleFindDealer}
            className="p-2 w-full bg-red-600 text-white rounded-lg"
          >
            FIND DEALER
          </button>
        </div>
        {dealerFound && filteredDealers.length > 0 && (
          <>
            {filteredDealers.map((dealer) => (
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
        {dealerFound && filteredDealers.length === 0 && (
          <div className="text-center text-red-600 font-bold mt-8">
            No dealers found for the selected province and city.
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;
