import React from "react";

const AccessoriesSection = () => {
  const accessories = [
    {
      id: 1,
      model: "BJ30",
      title: "Automotive Sunshades",
      price: "Rp 254.000",
      image: "/Accessories.jpg",
      link: "/accessories/bj30-sunshades",
    },
    {
      id: 2,
      model: "BJ40 PLUS",
      title: "Automotive Sunshades",
      price: "Rp 254.000",
      image: "/Accessories-1.jpg",
      link: "/accessories/bj40-plus-sunshades",
    },
    {
      id: 3,
      model: "X55 II",
      title: "Automotive Sunshades",
      price: "Rp 254.000",
      image: "/Accessories-2.jpg",
      link: "/accessories/x55-ii-sunshades",
    },
    {
      id: 4,
      model: "X55 II",
      title: "Automotive Sunshades",
      price: "Rp 254.000",
      image: "/Accessories-3.jpg",
      link: "/accessories/x55-ii-roof-sunshades",
    },
  ];

  return (
    <section className="py-16 mt-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Accessories
        </h2>

        {/* Accessories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {accessories.map((accessory) => (
            <a
              key={accessory.id}
              href={accessory.link}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden bg-gray-50">
                <img
                  src={accessory.image}
                  alt={`${accessory.model} ${accessory.title}`}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Model Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {accessory.model}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                  {accessory.title}
                </h3>
                <p className="text-gray-600 font-medium">{accessory.price}</p>
              </div>
            </a>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <a
            href="/accessories"
            className="inline-block bg-red-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-red-700 transition-colors duration-300"
          >
            View All Accessories
          </a>
        </div>
      </div>
    </section>
  );
};

export default AccessoriesSection;
