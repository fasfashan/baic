import Header from "../src/components/Header";
import blog1 from "../src/assets/blog-1.jpg";
import blog2 from "../src/assets/blog-2.jpg";
import blog3 from "../src/assets/blog-3.jpg";
import Footer from "../src/components/Footer";
import CTA from "../src/components/cta";
import ButtonChat from "../src/components/ButtonChat";
import { useState } from "react";
import "../src/index.css";
const contentArray = [
  {
    image: blog1,
    link: "/news/resmi-mengaspal-baic-bj-40-plus-dan-baic-x-55-dua-produk-unggulan-baic-kini-hadir-meramaikan-pasar-otomotif-indonesia/index.html",
    date: "14 MEI, 2024",
    title:
      "Resmi mengaspal, BAIC BJ-40 PLUS dan BAIC X-55 dua produk unggulan BAIC kini hadir meramaikan pasar otomotif Indonesia",
    description:
      "BAIC merupakan salah satu merk andalan dari Beijing Automotive Group Co., Ltd. Produsen ini memiliki beberapa merk lain yang dijual tidak hanya dipasar dalam negeri Cina, tetapi juga di ekspor ke negara-negara besar lain didunia. Perusahaan ini memiliki kerjasama yang erat dengan berbagai produsen Otomotif di seluruh dunia dan diantaranya yang sangat populer dan masih berlangsung hingga saat ini adalah Kerjasama Beijing-Benz dan Beijing-Hyundai.” Pungkas Dhani. Di Indonesia, BAIC memperkenalkan dua model andalannya di segmen SUV medium yang menyasar dua pasar yang berbeda. Keduanya memiliki performa khas kendaraan eropa yang dibekali dengan teknologi modern demi mengikuti kebutuhan pasar yang terus berevolusi namun juga sarat dengan beragam kebutuhan. BAIC BJ-40 PLUS di Indonesia hadir dengan satu pilihan mesin yaitu mesin bensin 4 silinder, 16 valve, 2.000cc DOHC dengan Turbocharger, dipadukan dengan transmisi 8-Percepatan lansiran pabrik transmisi ternama dari Jerman yaitu ZF Friedrichshafen. Sistem penggerak pun sudah menggunakan Electronic Transfer Case dengan Center Differential Lock dari Borg-Wagner, yang sangat mumpuni untuk menerabas medan berat. BAIC BJ-40 PLUS dengan penggerak empat-roda ini, menghasilkan tenaga maksimum 221 Hp dengan torsi maksimal 380 Nm, yang dirasa cukup mumpuni untuk kondisi jalan dan alam di Indonesia. SUV dengan karakter gagah dan macho ini memberikan kesan premium pada setiap sudut tampilannya, baik penampilan maupun performanya dinilai sangat cocok untuk para pecinta offroad atau konsumen yang memiliki jiwa adventurer. Masuk ke Indonesia dengan harga 800 jutaan, SUV ini diyakini akan menjadi pesaing unggul di segmen kendaraan serbaguna khususnya berpenggerak empat roda atau 4x4 di Indonesia.",
  },
  {
    image: blog3,
    link: "/news/13-dealership-baic-indonesia-9-kota-besar-2024/index.html",
    date: "14 MEI, 2024",
    title:
      " Investor menyambut dengan positif! 13 Dealership BAIC Indonesia akan hadir di 9 kota besar Indonesia di 2024",
    description:
      "Kehadiran kendaraan bermotor merk BAIC yang turut meramaikan pasar Otomotif di Indonesia sejak bulan April 2024 kemarin, mendapatkan tanggapan yang positif dari sekaligus 7 investor di Indonesia. Para investor ini datang bukan hanya dari investor lama yang bermain dipasar Otomotif tapi juga dari datang dari pemain diindustri yang berbeda. ",
  },
  {
    image: blog2,
    link: "/news/baic-international-menandatangani-kesepakatan-penjualan-merk-mobil-baic-di-indonesia-melalui-pt-jio-distribusi-indonesia/index.html",
    date: "28 Maret, 2024",
    title:
      "BAIC INTERNATIONAL Menandatangani Kesepakatan Penjualan Merk Mobil BAIC di Indonesia Melalui PT JIO DISTRIBUSI INDONESIA",
    description:
      "Melalui kesepakatan yang dilanjutkan dengan pengesahan PT JIO Distribusi Indonesia (disingkat : PT. JDI) oleh pihak Beijing Automotive Group Co., Ltd. Melalui BAIC INTERNATIONAL, maka secara resmi penjualan kendaraan bermotor roda empat dengan merk BAIC akan segera dilakukan di Indonesia.",
  },
];
function App() {
  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };
  const [visiblePosts, setVisiblePosts] = useState(3);

  const handleLoadMore = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 3);
  };
  return (
    <>
      <Header />
      <ButtonChat />
      <div className="bg-neutral-100   py-4">
        <h3 className="max-w-6xl m-auto md:px-8 px-5 font-medium">
          NEWS & EVENT
        </h3>
      </div>
      <div className="bg-neutral-200 py-8">
        <div className="max-w-6xl m-auto md:px-8 px-5 ">
          {contentArray.slice(0, visiblePosts).map((content, index) => (
            <div className="grid grid-cols-12 gap-6 mb-8" key={index}>
              <img
                src={content.image}
                alt={`blog${index + 1}`}
                className="md:col-span-6 md:h-80 h-60 w-full object-cover col-span-12"
              />
              <div className="space-y-4 md:col-span-6 col-span-12">
                <p className="font-medium text-red-600">{content.date}</p>
                <h2 className="capitalize text-2xl font-bold">
                  {content.title}
                </h2>
                <p className="text-neutral-600 font-normal">
                  {truncateText(content.description, 50)}
                </p>
                <a
                  className="py-3 block px-14 w-fit text-center hover:bg-red-600 transition-all hover:text-white border border-neutral-500 hover:border-none rounded-xl"
                  href={content.link}
                >
                  READ MORE
                </a>
              </div>
            </div>
          ))}
        </div>
        {visiblePosts < contentArray.length && (
          <button
            className="py-3 m-auto block px-14 w-fit text-center hover:bg-red-600 transition-all hover:text-white border border-neutral-500 hover:border-none rounded-xl"
            onClick={handleLoadMore}
          >
            LOAD MORE
          </button>
        )}
      </div>
      <CTA />
      <Footer />
    </>
  );
}

export default App;
