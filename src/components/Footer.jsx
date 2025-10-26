import logo from "../assets/logo.svg";
import logojdi from "../assets/logo-jdi.png";
import logoinstagram from "../assets/Logo-IG.png";
import logoblibli from "../assets/Logo-blibli-blue.png";
export default function Footer() {
  return (
    <footer className="pt-10 bg-neutral-900">
      <div className="flex md:px-8 px-5 justify-between max-w-6xl m-auto">
        <img width={100} src={logo} alt="Logo BAIC" />
        <img width={100} src={logojdi} alt="Logo JDI" />
      </div>
      <div className="max-w-6xl  md:px-8 px-5 m-auto">
        <hr className="border border-red-800" />
      </div>
      <div className="grid md:px-8 px-5 mt-8 gap-y-6 md:gap-y-4 grid-cols-2 md:grid-cols-5 max-w-6xl m-auto">
        {/* Vehicle Column */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-white text-base font-semibold mb-2">Vehicle</h3>
          <a
            href="/BJ40/index.html"
            className="text-gray-400 text-sm hover:text-white transition-all"
          >
            BJ30
          </a>
          <a
            href="/BJ40/index.html"
            className="text-gray-400 text-sm hover:text-white transition-all"
          >
            BJ40 PLUS
          </a>
          <a
            href="/X55-Models/index.html"
            className="text-gray-400 text-sm hover:text-white transition-all"
          >
            X55 II - Lite
          </a>
          <a
            href="/X55-Models/index.html"
            className="text-gray-400 text-sm hover:text-white transition-all"
          >
            X55 II - Prime
          </a>
        </div>

        {/* Company Column */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-white text-base font-semibold mb-2">Company</h3>
          <a
            href="/about-us/index.html"
            className="text-gray-400 text-sm hover:text-white transition-all"
          >
            About Us
          </a>
          <a
            href="/news/index.html"
            className="text-gray-400 text-sm hover:text-white transition-all"
          >
            Update & News Event
          </a>
          <a
            href="/career"
            className="text-gray-400 text-sm hover:text-white transition-all"
          >
            Career
          </a>
        </div>

        {/* Services Column */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-white text-base font-semibold mb-2">Services</h3>
          <a
            href="/aftersales"
            className="text-gray-400 text-sm hover:text-white transition-all"
          >
            Aftersales Program
          </a>
          <a
            href="/emergency-road"
            className="text-gray-400 text-sm hover:text-white transition-all"
          >
            Emergency Road Assistance
          </a>
          <a
            href="/booking-service"
            className="text-gray-400 text-sm hover:text-white transition-all"
          >
            Booking Dealer Services
          </a>
        </div>

        {/* Dealer Column */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-white text-base font-semibold mb-2">Dealer</h3>
          <a
            href="/find-dealer"
            className="text-gray-400 text-sm hover:text-white transition-all"
          >
            Find Dealer
          </a>
          <a
            href="/partnership"
            className="text-gray-400 text-sm hover:text-white transition-all"
          >
            Partnership
          </a>
        </div>

        {/* Social Media Column */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-white text-base font-semibold mb-2">
            Social Media
          </h3>
          <a
            href="https://www.instagram.com/baic.id/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 text-sm hover:text-white transition-all"
          >
            Instagram
          </a>
          <a
            href="https://www.tiktok.com/@baic.id"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 text-sm hover:text-white transition-all"
          >
            TikTok
          </a>
          <a
            href="https://www.facebook.com/baic.id"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 text-sm hover:text-white transition-all"
          >
            Facebook
          </a>
          <a
            href="https://www.youtube.com/@baic.id"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 text-sm hover:text-white transition-all"
          >
            YouTube
          </a>
        </div>
      </div>
      <div className="flex md:px-8 px-5 flex-wrap gap-y-4 mt-10 mb-10 text-white justify-between max-w-6xl m-auto">
        <div className="space-y-2">
          <h3 className="">PT. JIO DISTRIBUSI INDONESIA</h3>
          <p>Jl. Jalur Sutera Boulevard Kav. 30 Alam Sutera</p>
        </div>
        <div className="flex space-y-2 flex-col">
          <h3>Follow us on:</h3>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/">
              <img width={20} src={logoinstagram} alt="" />
            </a>
            <a href="https://www.blibli.com/">
              <img width={50} src={logoblibli} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="py-4  text-center bg-white">
        <p className="text-sm">© 2024 BAIC INDONESIA. Privacy Policy</p>
      </div>
    </footer>
  );
}
