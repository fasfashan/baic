import logo from "../assets/logo.svg";
import logojdi from "../assets/logo-jdi.png";
import logoinstagram from "../assets/Logo-IG.png";
import logoblibli from "../assets/Logo-blibli-blue.png";
export default function Footer() {
  return (
    <footer className="pt-10 bg-neutral-900">
      <div className="flex justify-between max-w-6xl m-auto">
        <img width={100} src={logo} alt="Logo BAIC" />
        <img width={100} src={logojdi} alt="Logo JDI" />
      </div>
      <div className="max-w-6xl m-auto">
        <hr className="border border-red-800" />
      </div>
      <div className="grid mt-8 grid-cols-12 max-w-6xl m-auto">
        <div className="col-span-3 flex flex-col space-y-2">
          <h3 className="text-white text-xl font-medium">VECHICLE</h3>
          <a
            href="#"
            className="text-gray-400 text-sm hover:text-white transition-all"
          >
            BJ40 PLUS
          </a>
          <a
            href="#"
            className="text-gray-400 text-sm hover:text-white transition-all"
          >
            X55II
          </a>
        </div>
        <div className="col-span-3 flex flex-col space-y-2">
          <h3 className="text-white text-xl font-medium">COMPANY</h3>
          <a
            href="#"
            className="text-gray-400 text-sm hover:text-white transition-all"
          >
            ABOUT US
          </a>
        </div>
        <div className="col-span-3 flex flex-col space-y-2">
          <h3 className="text-white text-xl font-medium">NEWS & EVENT</h3>
          <a
            href="#"
            className="text-gray-400 text-sm hover:text-white transition-all"
          >
            UPDATE NEWS & EVENT
          </a>
        </div>
        <div className="col-span-3 flex flex-col space-y-2">
          <h3 className="text-white text-xl font-medium">CONTACT DEALER</h3>
          <a
            href="#"
            className="text-gray-400 text-sm hover:text-white transition-all"
          >
            BOOK A TEST DRIVE
          </a>
          <a
            href="#"
            className="text-gray-400 text-sm hover:text-white transition-all"
          >
            REQUEST PRICE LIST
          </a>
          <a
            href="#"
            className="text-gray-400 text-sm hover:text-white transition-all"
          >
            FIND DEALER
          </a>
        </div>
      </div>
      <div className="flex mt-10 mb-10 text-white justify-between max-w-6xl m-auto">
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
      <div className="py-4 text-center bg-white">
        <p className="text-sm">© 2024 BAIC INDONESIA. Privacy Policy</p>
      </div>
    </footer>
  );
}