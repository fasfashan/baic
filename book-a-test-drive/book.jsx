import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import "../src/index.css";

function App() {
  return (
    <>
      <Header />
      <div className="bg-neutral-100 py-4">
        <h3 className="max-w-6xl m-auto md:px-8 px-5 font-medium">
          BOOK A TEST DRIVE
        </h3>
      </div>
      <div className="py-8 bg-neutral-200">
        <div className="max-w-xs m-auto ">
          <h2 className="text-2xl text-center font-medium mb-6">
            BOOK A TEST DRIVE
          </h2>
          <form className="flex justify-center flex-col space-y-4 m-auto ">
            <input
              className="bg-gray-50  shadow-inner border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-red-500   w-full p-2.5"
              placeholder="FULLNAME"
              type="text"
              name=""
              id=""
            />
            <input
              className="bg-gray-50  shadow-inner border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-red-500   w-full p-2.5"
              placeholder="PHONE NUMBER"
              type="text"
              name=""
              id=""
            />
            <input
              className="bg-gray-50  shadow-inner border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-red-500   w-full p-2.5"
              placeholder="EMAIL"
              type="text"
              name=""
              id=""
            />
            <select
              id="countries"
              className="bg-gray-50  shadow-inner border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 custom-select"
            >
              <option selected disabled>
                PROVINCE
              </option>
              <option value="tangerang">BANTEN</option>
            </select>
            <select
              id="countries"
              className="bg-gray-50  shadow-inner border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 custom-select"
            >
              <option selected disabled>
                CITY
              </option>
              <option value="tangerang">TANGERANG</option>
            </select>
            <div className="flex justify-between items-center gap-4">
              <p className="text-sm">TEST DRIVE DATE</p>
              <input
                className="bg-gray-50  shadow-inner border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-red-500  w-48   p-2.5"
                placeholder="EMAIL"
                type="date"
                name=""
                id=""
              />
            </div>
            <button className="p-2 w-full bg-red-600 text-white rounded-lg">
              BOOK A TEST DRIVE
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
