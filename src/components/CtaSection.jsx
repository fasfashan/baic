export default function CtaSection() {
  return (
    <section
      className="relative py-20 md:py-32 bg-cover bg-center"
      style={{ backgroundImage: "url('/bg-cta.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-5 md:px-8 text-center text-white">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Take the Next Step with BAIC
        </h2>
        <p className="text-lg md:text-xl mb-8 text-gray-100">
          Visit a nearby dealer or schedule your test drive today — adventure
          starts with one click.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/find-dealer"
            className="py-4 px-8 font-semibold text-white text-center bg-red-600 hover:bg-red-700 transition-all rounded-xl"
          >
            Find dealer
          </a>
          <a
            href="/book-a-test-drive/index.html"
            className="py-4 px-8 font-semibold text-gray-900 text-center bg-white hover:bg-gray-100 transition-all rounded-xl"
          >
            Book a Test Drive
          </a>
        </div>
      </div>
    </section>
  );
}
