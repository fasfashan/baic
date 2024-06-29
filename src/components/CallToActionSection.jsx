import BgImage from "../assets/bg-book-test-drive.jpg";

export default function CTASection() {
  return (
    <div
      className="w-full h-full mt-10 bg-cover bg-center"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <div className="flex max-w-6xl m-auto py-40 items-center  h-full   text-white">
        <div className="max-w-2xl flex flex-col gap-8">
          <h1 className="text-7xl font-medium max-w-lg mb-4">
            GET BEHIND THE WHEEL!
          </h1>
          <a
            className="py-3 px-14 w-fit text-center hover:bg-red-600 transition-all   border border-white hover:border-none rounded-xl"
            href="#"
          >
            BOOK A TEST DRIVE
          </a>
        </div>
      </div>
    </div>
  );
}
