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
import MapComponent from "../src/components/Maps";
import backgroundImage from "../src/assets/slide-2.jpg";
import {
  FaInstagramSquare,
  FaWhatsappSquare,
  FaMapMarkerAlt,
} from "react-icons/fa";
function App() {
  const [dealerFound, setDealerFound] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");

  const dealers = [
    {
      id: 1,
      telp: "02112345678",
      phone: "0882125628",
      province: "KEPULAUAN RIAU",
      city: "BATAM",
      name: "Dealer Kepulauan Riau, Batam",
      services: "Sales, Services, Spareparts & Body & Paint",
      address:
        "Jl. Gading Serpong Boulevard Blok A No.7 Curug Sangereng, Kec. Klp. Dua, Kabupaten Tangerang, Banten 15810",
      whatsappLink: "#",
      mapLink: "#",
      image: dealerBatam,
      lat: -6.2,
      lng: 106.816666,
      ptName: "PT LOREM IPSUM",
    },
    {
      id: 2,
      telp: "02112345678",
      phone: "0882125628",
      province: "BALI",
      city: "DENPASAR",
      name: "Dealer Bali, Denpasar",
      services: "Sales, Services, Spareparts & Body & Paint",
      address:
        "Jl. Gading Serpong Boulevard Blok A No.7 Curug Sangereng, Kec. Klp. Dua, Kabupaten Tangerang, Banten 15810",
      whatsappLink: "#",
      mapLink: "#",
      image: dealerDenpasar,
      lat: -8.65,
      lng: 115.216667,
      ptName: "PT LOREM IPSUM",
    },
    {
      id: 3,
      telp: "02112345678",
      phone: "0882125628",
      province: "BANTEN",
      city: "TANGERANG SELATAN",
      name: "Dealer Banten, Tangerang Selatan",
      services: "Sales, Services, Spareparts & Body & Paint",
      address:
        "Jl. Gading Serpong Boulevard Blok A No.7 Curug Sangereng, Kec. Klp. Dua, Kabupaten Tangerang, Banten 15810",
      whatsappLink: "#",
      mapLink: "#",
      image: dealerBanten,
      lat: -6.290978,
      lng: 106.718772,
      ptName: "PT LOREM IPSUM",
    },
    {
      id: 4,
      telp: "02112345678",
      phone: "0882125628",
      province: "SUMATERA UTARA",
      city: "MEDAN",
      name: "Dealer Sumatera Utara, Medan",
      services: "Sales, Services, Spareparts & Body & Paint",
      address:
        "Jl. Gading Serpong Boulevard Blok A No.7 Curug Sangereng, Kec. Klp. Dua, Kabupaten Tangerang, Banten 15810",
      whatsappLink: "#",
      mapLink: "#",
      image: dealerMedan,
      lat: 3.595196,
      lng: 98.672223,

      ptName: "PT LOREM IPSUM",
    },
    {
      id: 5,
      telp: "02112345678",
      phone: "0882125628",
      province: "JAWA BARAT",
      city: "BANDUNG",
      name: "Dealer Jawa Barat, Bandung",
      services: "Sales, Services, Spareparts & Body & Paint",
      address:
        "Jl. Gading Serpong Boulevard Blok A No.7 Curug Sangereng, Kec. Klp. Dua, Kabupaten Tangerang, Banten 15810",
      whatsappLink: "#",
      mapLink: "#",
      image: dealerBandung,
      lat: -6.917464,
      lng: 107.619123,
      ptName: "PT LOREM IPSUM",
    },
    {
      id: 6,
      telp: "02112345678",
      phone: "0882125628",
      province: "DKI JAKARTA",
      city: "JAKARTA UTARA",
      name: "Dealer DKI Jakarta, Jakarta Utara",
      services: "Sales, Services, Spareparts & Body & Paint",
      address:
        "Jl. Gading Serpong Boulevard Blok A No.7 Curug Sangereng, Kec. Klp. Dua, Kabupaten Tangerang, Banten 15810",
      whatsappLink: "#",
      mapLink: "#",
      image: dealerPIK2,
      lat: -6.121435,
      lng: 106.774124,
      ptName: "PT LOREM IPSUM",
    },
    {
      id: 7,
      telp: "02112345678",
      phone: "0882125628",
      province: "KALIMANTAN TIMUR",
      city: "SAMARINDA",
      name: "Dealer Kalimantan Timur, Samarinda",
      services: "Sales, Services, Spareparts & Body & Paint",
      address:
        "Jl. Gading Serpong Boulevard Blok A No.7 Curug Sangereng, Kec. Klp. Dua, Kabupaten Tangerang, Banten 15810",
      whatsappLink: "#",
      mapLink: "#",
      image: dealerSamarinda,
      lat: -0.5022,
      lng: 117.1536,

      ptName: "PT LOREM IPSUM",
    },
  ];

  const cities = [...new Set(dealers.map((dealer) => dealer.city))];

  const handleFindDealer = () => {
    setDealerFound(true);
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
    setDealerFound(true);
  };

  const filteredDealers = dealers.filter(
    (dealer) => dealer.city === selectedCity
  );
  const handleMarkerClick = (city) => {
    setSelectedCity(city);
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
      <div
        className="bg-cover bg-center text-center p-8 w-full min-h-screen flex items-center justify-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <h1 className="md:text-6xl text-4xl font-bold text-white">
          BAIC Authorized Dealer
        </h1>
      </div>
      <div className="max-w-6xl m-auto my-10 md:px-8 px-5">
        <MapComponent onMarkerClick={handleMarkerClick} dealers={dealers} />
      </div>
      <div className="py-8 bg-neutral-200">
        <h2 className="text-2xl font-bold text-center">FIND OUR DEALER</h2>
        <div className="flex md:flex-nowrap flex-wrap mt-6 max-w-6xl md:px-8 px-5 m-auto justify-between gap-4">
          <form className="w-full custom-select">
            <select
              id="cities"
              className="bg-gray-50 appearance-none shadow-inner border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
              value={selectedCity}
              onChange={handleCityChange}
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
          <div className="grid md:grid-cols-12 max-w-6xl md:px-8 px-5 m-auto">
            {filteredDealers.map((dealer) => (
              <div key={dealer.id} className="mt-10 col-span-4">
                <div className=" rounded-lg shadow-lg bg-white p-8  space-y-4 mb-8">
                  <img src={dealer.image} alt={`blog`} />
                  <div className="space-y-4 flex flex-col justify-between md:col-span-8 col-span-12">
                    <h2 className="font-medium text-2xl">{dealer.name}</h2>
                    <div className="space-y-1">
                      <h2 className=" font-medium">{dealer.ptName}</h2>
                      <h2 className="capitalize italic text-red-600 font-medium">
                        {dealer.services}
                      </h2>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm">{dealer.address}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm">Telp: {dealer.telp}</p>
                      <p className="text-sm">Phone: {dealer.phone}</p>
                      <p className="text-sm">Bussiness Hours:</p>
                      <p className="text-sm">Monday - Friday: 08:30 - 17:30</p>
                      <p className="text-sm">
                        Saturday - Monday: 09:40 - 14:00
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <a className="text-4xl" href={dealer.whatsappLink}>
                        <FaWhatsappSquare className="text-red-500" />
                      </a>
                      <a className="text-4xl" href={dealer.whatsappLink}>
                        <FaMapMarkerAlt className="text-red-500" />
                      </a>
                      <a className="text-4xl" href={dealer.whatsappLink}>
                        <FaInstagramSquare className="text-red-500" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {dealerFound && filteredDealers.length === 0 && (
          <div className="text-center text-red-600 font-bold mt-8">
            No dealers found for the selected city.
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;
