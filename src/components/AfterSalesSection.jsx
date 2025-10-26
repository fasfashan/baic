export default function AfterSalesSection() {
  return (
    <section
      className="relative min-h-[500px]  bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/after-sales-bg.jpg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 py-16 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          After sales services
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Have confidence with your BAIC? Our service team is authorized and
          dealers are ready to support you.
        </p>

        {/* CTA Buttons */}
        <div className="flex  gap-4 justify-center items-center">
          <a
            href="/aftersales"
            className="py-3 px-8 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl"
          >
            Learn More
          </a>
          <a
            href="/booking-service"
            className="py-3 px-8 bg-white hover:bg-gray-100 text-gray-800 font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl"
          >
            Book Service
          </a>
        </div>
      </div>
    </section>
  );
}
