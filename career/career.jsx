import { useState } from "react";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import ButtonChat from "../src/components/ButtonChat";
import "../src/index.css";

// Dummy job positions data
const jobPositions = [
  {
    id: 1,
    position: "Aftersales Manager",
    department: "Sales",
    location: "Jakarta",
  },
  {
    id: 2,
    position: "Sales Executive",
    department: "Sales",
    location: "Bandung",
  },
  {
    id: 3,
    position: "Marketing Specialist",
    department: "Marketing",
    location: "Jakarta",
  },
  {
    id: 4,
    position: "Digital Marketing Manager",
    department: "Marketing",
    location: "Surabaya",
  },
  {
    id: 5,
    position: "Finance Analyst",
    department: "Finance",
    location: "Jakarta",
  },
  {
    id: 6,
    position: "Accounting Staff",
    department: "Finance",
    location: "Medan",
  },
  {
    id: 7,
    position: "Operations Manager",
    department: "Operations",
    location: "Jakarta",
  },
  {
    id: 8,
    position: "Warehouse Supervisor",
    department: "Operations",
    location: "Surabaya",
  },
  {
    id: 9,
    position: "Service Advisor",
    department: "Sales",
    location: "Medan",
  },
  {
    id: 10,
    position: "Brand Manager",
    department: "Marketing",
    location: "Bandung",
  },
  {
    id: 11,
    position: "HR Manager",
    department: "Operations",
    location: "Jakarta",
  },
  {
    id: 12,
    position: "Customer Service",
    department: "Sales",
    location: "Surabaya",
  },
];

function Career() {
  const [selectedDepartment, setSelectedDepartment] =
    useState("All Department");
  const [selectedCity, setSelectedCity] = useState("All city");

  // Filter job positions based on selected department and city
  const filteredJobs = jobPositions.filter((job) => {
    const matchesDepartment =
      selectedDepartment === "All Department" ||
      job.department === selectedDepartment;
    const matchesCity =
      selectedCity === "All city" || job.location === selectedCity;
    return matchesDepartment && matchesCity;
  });

  return (
    <>
      <Header />
      <ButtonChat />

      {/* Hero Section */}
      <div
        className="relative mt-10 min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/bg-book-a-test-drive.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative text-white text-5xl md:text-6xl font-bold">
          Careers
        </h1>
      </div>

      {/* Filters and Job Listings */}
      <div className=" py-16 px-4">
        <div className="max-w-6xl px-5 mx-auto">
          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div>
              <label className="block text-sm font-medium mb-2">
                Department
              </label>
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-white"
              >
                <option>All Department</option>
                <option>Sales</option>
                <option>Marketing</option>
                <option>Finance</option>
                <option>Operations</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">City</label>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-white"
              >
                <option>All city</option>
                <option>Jakarta</option>
                <option>Bandung</option>
                <option>Surabaya</option>
                <option>Medan</option>
              </select>
            </div>
          </div>

          {/* Available Positions Count */}
          <p className="text-gray-600 mb-6">
            {filteredJobs.length} positions available
          </p>

          {/* Job Listings */}
          <div className="space-y-4">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white border p-4 border-neutral-300 rounded-lg shadow-md  flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                >
                  <div className="items-center grid grid-cols-1 md:grid-cols-5 gap-4">
                    <div>
                      <p className="text-xs text-red-600 font-semibold mb-1">
                        Position
                      </p>
                      <p className="text-lg font-bold text-gray-800">
                        {job.position}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-red-600 font-semibold mb-1">
                        Department
                      </p>
                      <p className="text-lg font-bold text-gray-800">
                        {job.department}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-red-600 font-semibold mb-1">
                        Location
                      </p>
                      <p className="text-lg font-bold text-gray-800">
                        {job.location}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-red-600 font-semibold mb-1">
                        Location
                      </p>
                      <p className="text-lg font-bold text-gray-800">
                        {job.location}
                      </p>
                    </div>
                    <div>
                      <a
                        href="/career/detail.html"
                        className="px-6 py-3 w-full bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all font-semibold text-center "
                      >
                        See detail
                      </a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  No positions available matching your filters.
                </p>
              </div>
            )}
          </div>
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

export default Career;
