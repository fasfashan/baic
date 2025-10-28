import React, { useState } from "react";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import ButtonChat from "../src/components/ButtonChat";
import "../src/index.css";

export default function BookingService() {
  const [step, setStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    // Step 1
    fullName: "",
    phoneNumber: "",
    email: "",
    city: "",
    province: "",
    dealer: "",
    // Step 2
    selectModel: "",
    selectType: "",
    vehicleRegistration: "",
    service: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleNext = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Show success message
    setShowSuccess(true);

    // Reset form after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
      setStep(1);
      setFormData({
        fullName: "",
        phoneNumber: "",
        email: "",
        city: "",
        province: "",
        dealer: "",
        selectModel: "",
        selectType: "",
        vehicleRegistration: "",
        service: "",
        date: "",
      });
    }, 5000);
  };

  return (
    <>
      <Header />
      <ButtonChat />
      <div
        className="min-h-screen  flex items-center justify-center py-12 bg-cover bg-center"
        style={{
          backgroundImage: "url('/bg-book-a-test-drive.jpg')",
        }}
      >
        <div className="w-full max-w-md mt-20 mx-4 bg-white rounded-2xl shadow-2xl p-8 ">
          <h2 className="text-2xl font-bold mb-2 text-gray-800">
            Booking Dealer Service
          </h2>
          <p className="text-gray-600 text-sm mb-8">
            Schedule your vehicle service at an authorized BAIC dealer — fast,
            trusted, and handled by certified technicians.
          </p>

          {step === 1 && (
            <form onSubmit={handleNext}>
              <h3 className="text-xl font-semibold mb-6">
                1. Fill in your personal data
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
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

                <div>
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
              </div>

              <div className="mb-6">
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
                    <option value="">Choose Province</option>
                    <option value="dki-jakarta">DKI Jakarta</option>
                    <option value="jawa-barat">Jawa Barat</option>
                    <option value="jawa-timur">Jawa Timur</option>
                    <option value="sumatera-utara">Sumatera Utara</option>
                    <option value="jawa-tengah">Jawa Tengah</option>
                  </select>
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium mb-2">Dealer</label>
                <select
                  name="dealer"
                  value={formData.dealer}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-white"
                  required
                >
                  <option value="">Select Dealer</option>
                  <option value="baic-jakarta-pusat">BAIC Jakarta Pusat</option>
                  <option value="baic-jakarta-selatan">
                    BAIC Jakarta Selatan
                  </option>
                  <option value="baic-bandung">BAIC Bandung</option>
                  <option value="baic-surabaya">BAIC Surabaya</option>
                  <option value="baic-medan">BAIC Medan</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all text-lg"
              >
                Next
              </button>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmit}>
              <h3 className="text-xl font-semibold mb-6">2. Book Now</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
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
                    <option value="">BJ40 PLUS</option>
                    <option value="bj40plus">BJ40 PLUS</option>
                    <option value="bj40">BJ40</option>
                    <option value="bj30">BJ30</option>
                    <option value="x55ii">X55 II</option>
                    <option value="x55">X55</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Select Type
                  </label>
                  <select
                    name="selectType"
                    value={formData.selectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-white"
                    required
                  >
                    <option value="">BJ40 Regular</option>
                    <option value="regular">Regular</option>
                    <option value="premium">Premium</option>
                    <option value="ultimate">Ultimate</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">
                  Vehicle Registration Number
                </label>
                <input
                  type="text"
                  name="vehicleRegistration"
                  value={formData.vehicleRegistration}
                  onChange={handleChange}
                  placeholder="e.g. JohnDoe@gmail.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Services
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-white"
                    required
                  >
                    <option value="">Choose service</option>
                    <option value="general-service">General Service</option>
                    <option value="oil-change">Oil Change</option>
                    <option value="tire-rotation">Tire Rotation</option>
                    <option value="brake-inspection">Brake Inspection</option>
                    <option value="battery-check">Battery Check</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    placeholder="hh/bb/tt"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={handleBack}
                  className="w-full py-4 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition-all text-lg"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="w-full py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all text-lg"
                >
                  Send
                </button>
              </div>
            </form>
          )}

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
                  Booking Received!
                </p>
                <p className="text-sm mt-1" style={{ color: "#ffffff" }}>
                  Your booking has been received. Our team will contact you
                  shortly.
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
