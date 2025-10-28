import { useState } from "react";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import ButtonChat from "../src/components/ButtonChat";
import { ChevronLeft } from "lucide-react";
import "../src/index.css";

function CareerDetail() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    resume: null,
  });

  const handleChange = (e) => {
    if (e.target.type === "file") {
      setFormData({
        ...formData,
        [e.target.name]: e.target.files[0],
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // Show success message
    setShowSuccess(true);

    // Reset form and hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        resume: null,
      });
      // Reset file input
      document.querySelector('input[type="file"]').value = "";
    }, 5000);
  };

  return (
    <>
      <Header />
      <ButtonChat />

      {/* Hero Section */}
      <div
        className="relative  min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/bg-cta.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative flex flex-col justify-center items-center text-center text-white">
          <a
            href="/career/index.html"
            className="inline-flex items-center gap-2 flex justify-center text-white hover:text-gray-200 transition-colors mb-4"
          >
            <ChevronLeft className="w-5 h-5" />
            Back to careers
          </a>
          <h1 className="text-4xl md:text-5xl font-bold">Aftersales Manager</h1>
          <a
            href="#apply-now"
            className="mt-6 flex w-fit  px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all"
          >
            Apply now
          </a>
        </div>
      </div>

      {/* Job Details */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* About the Role */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              About the Role
            </h2>
            <p className="text-gray-600 leading-relaxed">
              As part of the Finance Information System team, you'll support and
              assist the Finance, Accounting, Tax, and Procurement teams in the
              daily use of SAP FICO, from processing transactions and generating
              accurate financial reports for the company. Collaborating with
              other Financial System Support Teams, Data Engineers, Infra Teams,
              and others, you'll also deliver high-performing technical
              solutions, especially in Financial Systems.
            </p>
          </section>

          {/* What You Will Do */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              What You Will Do
            </h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex gap-3">
                <span className="text-red-600 mt-1">•</span>
                <span>
                  Handle day-to-day inquiries, which include (but is not limited
                  to): questions, incidents (bugs), and change requests
                  (mini-projects).
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 mt-1">•</span>
                <span>
                  Act as an internal consultant, which includes (but is not
                  limited to): selling our financial systems to new/additional
                  entities, gathering and analyzing requirements to conducting
                  requirement gathering, designing solutions and blueprints,
                  configuring and testing.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 mt-1">•</span>
                <span>
                  Collaborate with internal (other teams within GxTx) and
                  external (vendors, product principals, etc.) stakeholders to
                  resolve issues.
                </span>
              </li>
            </ul>
          </section>

          {/* What You Will Need */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              What You Will Need
            </h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex gap-3">
                <span className="text-red-600 mt-1">•</span>
                <span>
                  At least 6 years of relevant experience working with the SAP
                  FICO module (having other experience with other SAP modules or
                  finance/accounting ERP would be a plus point).
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 mt-1">•</span>
                <span>
                  Experience in financial processes, particularly ability to
                  read and comply with accounting and regulatory processes.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 mt-1">•</span>
                <span>
                  Good communication and language skills in Bahasa and English
                  (written and spoken).
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 mt-1">•</span>
                <span>
                  Experience in data and/or technical fields, influencing, and
                  getting buy-in from counterparts, end-users, and other
                  stakeholders in day-to-day work.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 mt-1">•</span>
                <span>
                  Having experience with the system interface would be an
                  advantage.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 mt-1">•</span>
                <span>
                  A willingness to learn and work on more than things (yes, we
                  are a dynamic team).
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 mt-1">•</span>
                <span>
                  A willingness to stand by in urgent or critical situations
                  (sometimes, things come unexpectedly, so we're always
                  prepared).
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 mt-1">•</span>
                <span>
                  Prior exposure working in a top-tier consulting firm is a
                  plus.
                </span>
              </li>
            </ul>
          </section>

          {/* About Team */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              About Team
            </h2>
            <p className="text-gray-600 leading-relaxed">
              BAIC Group (Beijing Automotive Industry Corporation) is one of the
              top five automotive groups in China, committed to innovation,
              technology, and global excellence.
            </p>
          </section>

          {/* Apply Now Form */}
          <section className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Apply Now</h2>
            <form id="apply-now" onSubmit={handleSubmit}>
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
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. johndoe@gmail.com"
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
                <label className="block text-sm font-medium mb-2">
                  Resume/CV
                </label>
                <input
                  type="file"
                  name="resume"
                  onChange={handleChange}
                  accept=".pdf,.doc,.docx"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-600 hover:file:bg-red-100"
                  required
                />
                <p className="text-xs text-gray-500 mt-2">File type: PDF</p>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all text-lg"
              >
                Send
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
                    Application Submitted!
                  </p>
                  <p className="text-sm mt-1" style={{ color: "#ffffff" }}>
                    Thank you for applying. We will review your application and
                    contact you soon.
                  </p>
                </div>
              </div>
            )}
          </section>
        </div>
      </div>

      {/* CTA Section */}
      <section
        className="relative py-20 md:py-32 bg-cover bg-center"
        style={{
          backgroundImage: "url('/bg-cta.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Take the Next Step with BAIC
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Visit a nearby dealer or schedule your test drive today — adventure
            starts with one click
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact/index.html"
              className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all"
            >
              Find dealer
            </a>
            <a
              href="/book-a-test-drive/index.html"
              className="px-8 py-3 bg-white hover:bg-gray-100 text-gray-800 font-semibold rounded-lg transition-all"
            >
              Book a Test Drive
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default CareerDetail;
