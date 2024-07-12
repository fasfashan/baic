import { useState } from "react";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import "../src/index.css";

function App() {
  const [fullname, setFullname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [vehicle, setVehicle] = useState("BJ40");
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate loading for 2 seconds (replace with actual submission logic)
    setTimeout(() => {
      const url = `/${vehicle.toLowerCase()}-flyers.pdf`;
      window.open(url, "_blank");
      setIsLoading(false);
      setShowSuccess(true);

      // Hide success message after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }, 2000);
  };

  const isFormComplete = () => {
    return (
      fullname.trim() !== "" &&
      phoneNumber.trim() !== "" &&
      email.trim() !== "" &&
      province !== "" &&
      city !== ""
    );
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
                !isFormComplete() || isLoading
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              disabled={!isFormComplete() || isLoading}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <svg
                    className="animate-spin h-5 w-5 mr-3 text-white"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                  </svg>
                  Loading...
                </div>
              ) : (
                "REQUEST PRICE LIST"
              )}
            </button>
          </form>
        </div>
      </div>

      {showSuccess && (
        <div className="bg-neutral-200 pb-10 inset-0 flex items-center justify-center z-50">
          <div className="bg-green-500 text-white p-4 rounded-lg shadow-lg">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M22 11.8396V12.7596C21.9988 14.9161 21.3005 17.0143 20.0093 18.7415C18.7182 20.4686 16.9033 21.7321 14.8354 22.3435C12.7674 22.955 10.5573 22.8815 8.53447 22.1342C6.51168 21.3869 4.78465 20.0057 3.61096 18.1967C2.43727 16.3877 1.87979 14.2477 2.02168 12.0959C2.16356 9.94419 2.99721 7.89596 4.39828 6.2567C5.79935 4.61745 7.69279 3.47501 9.79619 2.99978C11.8996 2.52454 14.1003 2.74197 16.07 3.61963M22 4.75963L12 14.7696L9.00001 11.7696"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h3>Thank You!</h3>
            </div>
            <p>We will contact you as soon as possible</p>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default App;
