import { useState } from "react";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import "../src/index.css";

function App() {
  const isFormComplete = () => {
    return (
      fullname.trim() !== "" &&
      phoneNumber.trim() !== "" &&
      email.trim() !== "" &&
      province !== "" &&
      city !== ""
    );
  };
  const [fullname, setFullname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [vehicle, setVehicle] = useState("BJ40");

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = `/${vehicle.toLowerCase()}-flyers.pdf`;
    window.open(url, "_blank");
  };
  return (
    <>
      <Header />
      <div className="bg-neutral-100 py-4">
        <h3 className="max-w-6xl m-auto md:px-8 px-5 font-bold">
          REQUEST PRICE LIST
        </h3>
      </div>
      <div className="py-8 bg-neutral-200">
        <div className="max-w-xs m-auto">
          <h2 className="text-2xl text-center font-bold mb-6">
            REQUEST PRICE LIST
          </h2>
          <form
            onSubmit={handleSubmit}
            className="flex justify-center flex-col space-y-4 m-auto"
          >
            <input
              className="bg-gray-50 shadow-inner border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-red-500 w-full p-2.5"
              placeholder="FULLNAME"
              type="text"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
            <input
              className="bg-gray-50 shadow-inner border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-red-500 w-full p-2.5"
              placeholder="PHONE NUMBER"
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <input
              className="bg-gray-50 shadow-inner border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-red-500 w-full p-2.5"
              placeholder="EMAIL"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <select
              id="province"
              className="bg-gray-50 shadow-inner border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 custom-select"
              value={province}
              onChange={(e) => setProvince(e.target.value)}
            >
              <option value="" disabled selected>
                PROVINCE
              </option>
              <option value="banten">BANTEN</option>
            </select>
            <select
              id="city"
              className="bg-gray-50 shadow-inner border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 custom-select"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              <option value="" disabled selected>
                CITY
              </option>
              <option value="tangerang">TANGERANG</option>
            </select>
            <select
              id="vehicle"
              className="bg-gray-50 shadow-inner border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 custom-select"
              value={vehicle}
              onChange={(e) => setVehicle(e.target.value)}
            >
              <option value="BJ40">BJ40 PLUS</option>
              <option value="X55-II">X55 II</option>
            </select>
            <button
              type="submit"
              className={`p-2 w-full bg-red-600 text-white rounded-lg ${
                !isFormComplete() ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={!isFormComplete()}
            >
              BOOK A TEST DRIVE
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
