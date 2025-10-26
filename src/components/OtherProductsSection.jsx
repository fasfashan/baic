import React from "react";
import { ArrowRight } from "lucide-react";

const OtherProductsSection = () => {
  const products = [
    {
      id: 1,
      name: "BJ30",
      logo: "/bj30-logo.png",
      image: "/bj30-image.png",
      detailLink: "/BJ40/index.html",
      bookTestDriveLink: "/book-a-test-drive/index.html?model=BJ30",
    },
    {
      id: 2,
      name: "BJ40 PLUS",
      logo: "/bj40plus-logo.png",
      image: "/bj40plus-image.png",
      detailLink: "/BJ40/index.html",
      bookTestDriveLink: "/book-a-test-drive/index.html?model=BJ40 PLUS",
    },
    {
      id: 3,
      name: "X55 II",
      logo: "/x55-logo.png",
      image: "/x55ii-image.png",
      detailLink: "/X55-Models/index.html",
      bookTestDriveLink: "/book-a-test-drive/index.html?model=x55ii",
    },
    {
      id: 4,
      name: "X55 II",
      logo: "/x55-logo.png",
      image: "/x55ii-image-1.png",
      detailLink: "/X55-Models/index.html",
      bookTestDriveLink: "/book-a-test-drive/index.html?model=x55ii",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Other Products
        </h2>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Logo */}
              <div className="px-6 pt-4 pb-2 flex justify-center">
                <img
                  src={product.logo}
                  alt={`${product.name} logo`}
                  className="h-2 object-contain"
                />
              </div>

              {/* CTA Buttons */}
              <div className="px-4 pb-5 flex flex-col gap-2">
                {/* Book a Test Drive Button */}
                <a
                  href={product.bookTestDriveLink}
                  className="w-full bg-red-600 text-white font-semibold py-2.5 px-4 rounded-lg hover:bg-red-700 transition-colors duration-300 text-center text-sm"
                >
                  Book a Test Drive
                </a>

                {/* See Detail Button */}
                <a
                  href={product.detailLink}
                  className="w-full bg-white border border-gray-300 text-gray-800 font-semibold py-2.5 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center gap-2 text-sm"
                >
                  See detail
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherProductsSection;
