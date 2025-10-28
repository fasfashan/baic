import { useState } from "react";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import ButtonChat from "../src/components/ButtonChat";
import "../src/index.css";

function App() {
  const [formData, setFormData] = useState({
    selectModel: "BJ40 PLUS",
    city: "",
    province: "",
    fullName: "",
    phoneNumber: "",
    email: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate loading for 2 seconds (replace with actual submission logic)
    setTimeout(() => {
      const modelForPdf = formData.selectModel
        .toLowerCase()
        .replace(/\s+/g, "-");
      const url = `/${modelForPdf}-flyers.pdf`;
      window.open(url, "_blank");
      setIsLoading(false);
      setShowSuccess(true);

      // Hide success message and reset form after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
        setFormData({
          selectModel: "BJ40 PLUS",
          city: "",
          province: "",
          fullName: "",
          phoneNumber: "",
          email: "",
        });
      }, 5000);
    }, 2000);
  };

  const isFormComplete = () => {
    return Object.values(formData).every((value) => value.trim() !== "");
  };

  return (
    <>
      <Header />
      <ButtonChat />

      {/* Background Section */}
      <div
        className="min-h-screen bg-cover bg-center flex items-center justify-center py-12 px-4"
        style={{
          backgroundImage: "url('/bg-book-a-test-drive.jpg')",
        }}
      >
        <div className="max-w-md mt-20 w-full bg-white rounded-xl shadow-2xl p-8 ">
          <h2 className="text-2xl font-bold mb-2 text-gray-800">
            Request Price List
          </h2>
          <p className=" text-gray-600 mb-8 text-sm">
            Experience BAIC performance firsthand — choose your model, location,
            and schedule your test drive today.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                Select Model
              </label>
              <select
                name="selectModel"
                value={formData.selectModel}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-white"
                required
              >
                <option value="BJ40 PLUS">BJ40 PLUS</option>
                <option value="BJ40">BJ40</option>
                <option value="BJ30">BJ30</option>
                <option value="X55 II">X55 II</option>
                <option value="X55">X55</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">City</label>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-white"
                  required
                >
                  <option value="">Select City</option>
                  <option value="jakarta">Jakarta</option>
                  <option value="bandung">Bandung</option>
                  <option value="surabaya">Surabaya</option>
                  <option value="medan">Medan</option>
                  <option value="semarang">Semarang</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Province
                </label>
                <select
                  name="province"
                  value={formData.province}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-white"
                  required
                >
                  <option value="">Pilih Provinsi</option>
                  <option value="dki-jakarta">DKI Jakarta</option>
                  <option value="jawa-barat">Jawa Barat</option>
                  <option value="jawa-timur">Jawa Timur</option>
                  <option value="sumatera-utara">Sumatera Utara</option>
                  <option value="jawa-tengah">Jawa Tengah</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. John Doe"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="e.g. +62 812 3456 7890"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. JohnDoe@gmail.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>

            <button
              type="submit"
              className={`w-full py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all text-lg ${
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
                      fill="none"
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
                "Request Price List"
              )}
            </button>
          </form>

          {/* Success Toast */}
          {showSuccess && (
            <div
              className="mt-6 p-5 rounded-lg shadow-xl flex items-center gap-3 transition-all duration-300 border-2 border-green-600"
              style={{ backgroundColor: "#16a34a", color: "#ffffff" }}
            >
              <svg
                className="w-6 h-6 flex-shrink-0"
                fill="none"
                stroke="#ffffff"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <div>
                <p
                  className="font-semibold text-lg"
                  style={{ color: "#ffffff" }}
                >
                  Request Received!
                </p>
                <p className="text-sm mt-1" style={{ color: "#ffffff" }}>
                  Thank you! We will contact you as soon as possible.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
