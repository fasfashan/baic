import { useState, useEffect, useRef } from "react";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import ButtonChat from "../src/components/ButtonChat";
import "../src/index.css";

// Province and Cities data structure
const provinceData = {
  banten: {
    name: "Banten",
    cities: ["Tangerang", "Tangerang Selatan", "Serpong", "Serang", "Cilegon"],
  },
  "dki-jakarta": {
    name: "DKI Jakarta",
    cities: [
      "Jakarta Pusat",
      "Jakarta Utara",
      "Jakarta Selatan",
      "Jakarta Timur",
      "Jakarta Barat",
      "PIK",
    ],
  },
  "jawa-barat": {
    name: "Jawa Barat",
    cities: ["Bandung", "Bekasi", "Bogor", "Depok", "Cimahi"],
  },
  "jawa-tengah": {
    name: "Jawa Tengah",
    cities: ["Semarang", "Solo", "Yogyakarta", "Magelang"],
  },
  "jawa-timur": {
    name: "Jawa Timur",
    cities: ["Surabaya", "Malang", "Sidoarjo", "Gresik"],
  },
};

// Dealer WhatsApp mapping based on province and city
const dealerMapping = {
  // Format: "province-city": "whatsapp_number"
  "banten-tangerang": "6281234567890",
  "banten-serpong": "6281234567891",
  "dki-jakarta-jakarta-pusat": "6281234567892",
  "dki-jakarta-pik": "6281234567893",
  "jawa-barat-bandung": "6281234567894",
  "jawa-barat-bekasi": "6281234567895",

  // Province-level fallbacks
  banten: "6281234567890",
  "dki-jakarta": "6281234567892",
  "jawa-barat": "6281234567894",
  "jawa-tengah": "6281234567896",
  "jawa-timur": "6281234567897",

  // Default fallback
  default: "6281234567800",
};

function App() {
  // Get model from URL parameter
  const getModelFromURL = () => {
    const params = new URLSearchParams(window.location.search);
    const model = params.get("model");
    if (model === "bj40plus") return "BJ40 PLUS";
    if (model === "x55ii") return "X55 II";
    return "BJ40 PLUS"; // default
  };

  const [selectedModel, setSelectedModel] = useState(getModelFromURL());
  const [fullname, setFullname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [availableCities, setAvailableCities] = useState([]);
  const [testDriveDate, setTestDriveDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [countdown, setCountdown] = useState(5);
  const [redirectCancelled, setRedirectCancelled] = useState(false);

  const countdownTimerRef = useRef(null);
  const redirectTimerRef = useRef(null);

  // Update selected model when URL changes
  useEffect(() => {
    setSelectedModel(getModelFromURL());
  }, []);

  // Update available cities when province changes
  useEffect(() => {
    if (province) {
      setAvailableCities(provinceData[province]?.cities || []);
      setCity(""); // Reset city when province changes
    } else {
      setAvailableCities([]);
      setCity("");
    }
  }, [province]);

  // Cleanup timers on unmount
  useEffect(() => {
    return () => {
      if (countdownTimerRef.current) clearInterval(countdownTimerRef.current);
      if (redirectTimerRef.current) clearTimeout(redirectTimerRef.current);
    };
  }, []);

  // Get dealer WhatsApp number based on location
  const getDealerWhatsApp = (province, city) => {
    const provinceKey = province.toLowerCase().replace(/\s+/g, "-");
    const cityKey = city.toLowerCase().replace(/\s+/g, "-");

    // Try exact match first
    const exactMatch = `${provinceKey}-${cityKey}`;
    if (dealerMapping[exactMatch]) {
      return dealerMapping[exactMatch];
    }

    // Try province-level fallback
    if (dealerMapping[provinceKey]) {
      return dealerMapping[provinceKey];
    }

    // Use default fallback
    return dealerMapping["default"];
  };

  // Build WhatsApp message
  const buildWhatsAppMessage = () => {
    const provinceName = provinceData[province]?.name || province;

    const message = `Halo, saya ingin booking test drive untuk mobil *${selectedModel}*.

*Detail Booking:*
- Nama: ${fullname}
- No. HP: ${phoneNumber}
- Email: ${email}
- Provinsi: ${provinceName}
- Kota: ${city}
- Tanggal Test Drive: ${testDriveDate}

Mohon informasi lebih lanjut. Terima kasih!`;

    return encodeURIComponent(message);
  };

  // Mock API call to save lead
  const saveLead = async (leadData) => {
    // Simulate API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Mock success (90% success rate for demo)
        if (Math.random() > 0.1) {
          console.log("Lead saved:", leadData);
          resolve({ success: true, id: Date.now() });
        } else {
          reject(new Error("Failed to save lead. Please try again."));
        }
      }, 1500);
    });
  };

  // Handle redirect to WhatsApp
  const redirectToWhatsApp = () => {
    if (redirectCancelled) return;

    const dealerNumber = getDealerWhatsApp(province, city);
    const message = buildWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${dealerNumber}?text=${message}`;

    window.location.href = whatsappUrl;
  };

  // Start countdown and redirect
  const startRedirectCountdown = () => {
    setCountdown(5);
    setRedirectCancelled(false);

    // Countdown timer
    countdownTimerRef.current = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(countdownTimerRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Redirect after 5 seconds
    redirectTimerRef.current = setTimeout(() => {
      redirectToWhatsApp();
    }, 5000);
  };

  // Cancel redirect
  const cancelRedirect = () => {
    setRedirectCancelled(true);
    if (countdownTimerRef.current) clearInterval(countdownTimerRef.current);
    if (redirectTimerRef.current) clearTimeout(redirectTimerRef.current);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setIsLoading(true);

    const leadData = {
      model: selectedModel,
      fullname,
      phoneNumber,
      email,
      province,
      city,
      testDriveDate,
      submittedAt: new Date().toISOString(),
    };

    try {
      // Save lead data
      await saveLead(leadData);

      // Show success message
      setShowSuccess(true);
      setIsLoading(false);

      // Start countdown and redirect
      startRedirectCountdown();
    } catch (error) {
      setIsLoading(false);
      setErrorMessage(error.message || "An error occurred. Please try again.");
    }
  };

  // Form validation
  const isFormComplete = () => {
    return (
      selectedModel !== "" &&
      fullname.trim() !== "" &&
      phoneNumber.trim() !== "" &&
      email.trim() !== "" &&
      province !== "" &&
      city !== "" &&
      testDriveDate !== ""
    );
  };

  return (
    <>
      <Header />
      <ButtonChat />

      {/* Hero Section with Background Image */}
      <div
        className="relative min-h-screen bg-cover bg-center flex items-center justify-center py-12 px-4"
        style={{ backgroundImage: "url('/bg-book-a-test-drive.jpg')" }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Form Card */}
        <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
          <h2 className="text-2xl font-bold mb-2 text-gray-800">
            Book a Test Drive
          </h2>
          <p className="text-gray-600 text-sm mb-6">
            Experience BAIC performance firsthand — choose your model, location,
            and schedule your test drive today.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            {/* Select Model */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Select Model
              </label>
              <select
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 block w-full p-3"
              >
                <option value="BJ40 PLUS">BJ40 PLUS</option>
                <option value="X55 II">X55 II</option>
              </select>
            </div>

            {/* Province and City */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Province
                </label>
                <select
                  value={province}
                  onChange={(e) => setProvince(e.target.value)}
                  className="bg-white border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 block w-full p-3"
                >
                  <option value="" disabled>
                    Choose Province
                  </option>
                  {Object.keys(provinceData).map((key) => (
                    <option key={key} value={key}>
                      {provinceData[key].name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  City
                </label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  disabled={!province}
                  className={`bg-white border border-gray-300 text-sm rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 block w-full p-3 ${
                    !province
                      ? "text-gray-400 cursor-not-allowed"
                      : "text-gray-500"
                  }`}
                >
                  <option value="" disabled>
                    {!province ? "Select Province First" : "Select City"}
                  </option>
                  {availableCities.map((cityName) => (
                    <option key={cityName} value={cityName}>
                      {cityName}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Test Drive Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Test Drive Date
              </label>
              <input
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 w-full p-3"
                placeholder="MM/DD/YY"
                type="date"
                name="date"
                id="date"
                value={testDriveDate}
                onChange={(e) => setTestDriveDate(e.target.value)}
              />
            </div>

            {/* Full Name and Phone Number */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 w-full p-3"
                  placeholder="e.g. John Doe"
                  type="text"
                  name="fullname"
                  id="fullname"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 w-full p-3"
                  placeholder="e.g. +62 812 3456 7890"
                  type="text"
                  name="phone-number"
                  id="phone-number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 w-full p-3"
                placeholder="e.g. johndoe@gmail.com"
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`p-3 w-full bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all ${
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
                "Book a Test Drive"
              )}
            </button>

            {/* Error Message */}
            {errorMessage && (
              <div
                className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm"
                role="alert"
              >
                <div className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{errorMessage}</span>
                </div>
              </div>
            )}

            {/* Success Message with Countdown */}
            {showSuccess && (
              <div
                className="p-4 bg-green-50 border border-green-200 rounded-lg"
                role="alert"
                aria-live="polite"
              >
                <div className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div className="flex-1">
                    <h3 className="font-semibold text-green-800 mb-1">
                      Thank you! Your request has been submitted.
                    </h3>
                    {!redirectCancelled ? (
                      <p className="text-sm text-green-700">
                        You will be redirected to the nearest dealer on WhatsApp
                        in <span className="font-bold">{countdown}</span>{" "}
                        seconds...
                      </p>
                    ) : (
                      <p className="text-sm text-green-700">
                        Redirect cancelled. You can close this page or{" "}
                        <button
                          onClick={redirectToWhatsApp}
                          className="underline font-semibold hover:text-green-900"
                        >
                          click here to redirect manually
                        </button>
                        .
                      </p>
                    )}
                    {!redirectCancelled && (
                      <button
                        onClick={cancelRedirect}
                        className="mt-2 text-xs text-green-700 underline hover:text-green-900 font-medium"
                      >
                        Cancel redirect
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
