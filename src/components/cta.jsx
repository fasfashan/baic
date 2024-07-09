import Brochure from "../assets/brochure.png";
import testDrive from "../assets/test-drive.png";
import call from "../assets/call.png";
export default function CTA() {
  return (
    <>
      <div className=" bg-red-600 gap-10   justify-center">
        <div className="max-w-6xl md:justify-evenly justify-between flex m-auto">
          <a
            href="/book-a-test-drive/index.html"
            className="flex justify-center flex-col gap-2 border-l border-r md:p-8 p-2 border-white"
          >
            <img src={testDrive} width={32} className="m-auto" alt="" />
            <h3 className="text-white text-center font-medium text-sm">
              BOOK A TEST DRIVE
            </h3>
          </a>
          <a
            href="#"
            className="flex justify-center flex-col gap-2 border-l border-r md:p-8 p-2 border-white"
          >
            <img src={Brochure} width={32} className="m-auto" alt="" />
            <h3 className="text-white text-center font-medium text-sm">
              DOWNLOAD BROCHURE
            </h3>
          </a>
          <a
            href="/contact/index.html"
            className="flex justify-center flex-col  gap-2 border-l border-r md:p-8 p-2 border-white"
          >
            <img src={call} width={32} className="m-auto" alt="" />
            <h3 className="text-white text-center font-medium text-sm">
              CONTACT DEALER
            </h3>
          </a>
        </div>
      </div>
    </>
  );
}
