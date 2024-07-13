import Header from "../src/components/Header";
import blog1 from "../src/assets/blog-1.jpg";
import blog2 from "../src/assets/blog-2.jpg";
import blog3 from "../src/assets/blog-3.jpg";
import blog4 from "../src/assets/blog-4.jpg";
import blog5 from "../src/assets/blog-5.jpg";
import Footer from "../src/components/Footer";
import CTA from "../src/components/cta";
import ButtonChat from "../src/components/ButtonChat";
import { useState } from "react";
import "../src/index.css";
const contentArray = [
  {
    image: blog1,
    link: "/news/single-post/index.html",
    date: "7 DESEMBER, 2024",
    title:
      "Resmi mengaspal, BAIC BJ-40 PLUS dan BAIC X-55 dua produk unggulan BAIC kini hadir meramaikan pasar otomotif Indonesia",
    description:
      "BAIC merupakan salah satu merk andalan dari Beijing Automotive Group Co., Ltd. Produsen ini memiliki beberapa merk lain yang dijual tidak hanya dipasar dalam negeri Cina, tetapi juga di ekspor ke negara-negara besar lain didunia. Perusahaan ini memiliki kerjasama yang erat dengan berbagai produsen Otomotif di seluruh dunia dan diantaranya yang sangat populer dan masih berlangsung hingga saat ini adalah Kerjasama Beijing-Benz dan Beijing-Hyundai.” Pungkas Dhani. Di Indonesia, BAIC memperkenalkan dua model andalannya di segmen SUV medium yang menyasar dua pasar yang berbeda. Keduanya memiliki performa khas kendaraan eropa yang dibekali dengan teknologi modern demi mengikuti kebutuhan pasar yang terus berevolusi namun juga sarat dengan beragam kebutuhan. BAIC BJ-40 PLUS di Indonesia hadir dengan satu pilihan mesin yaitu mesin bensin 4 silinder, 16 valve, 2.000cc DOHC dengan Turbocharger, dipadukan dengan transmisi 8-Percepatan lansiran pabrik transmisi ternama dari Jerman yaitu ZF Friedrichshafen. Sistem penggerak pun sudah menggunakan Electronic Transfer Case dengan Center Differential Lock dari Borg-Wagner, yang sangat mumpuni untuk menerabas medan berat. BAIC BJ-40 PLUS dengan penggerak empat-roda ini, menghasilkan tenaga maksimum 221 Hp dengan torsi maksimal 380 Nm, yang dirasa cukup mumpuni untuk kondisi jalan dan alam di Indonesia. SUV dengan karakter gagah dan macho ini memberikan kesan premium pada setiap sudut tampilannya, baik penampilan maupun performanya dinilai sangat cocok untuk para pecinta offroad atau konsumen yang memiliki jiwa adventurer. Masuk ke Indonesia dengan harga 800 jutaan, SUV ini diyakini akan menjadi pesaing unggul di segmen kendaraan serbaguna khususnya berpenggerak empat roda atau 4x4 di Indonesia.",
  },
  {
    image: blog2,
    link: "/news/single-post/index.html",
    date: "8 DESEMBER, 2024",
    title:
      "BAIC INTERNATIONAL Menandatangani Kesepakatan Penjualan Merk Mobil BAIC di Indonesia Melalui PT JIO DISTRIBUSI INDONESIA",
    description:
      "BAIC merupakan salah satu merk andalan dari Beijing Automotive Group Co., Ltd. Produsen ini memiliki beberapa merk lain yang dijual tidak hanya dipasar dalam negeri Cina, tetapi juga di ekspor ke negara-negara besar lain didunia. Perusahaan ini memiliki kerjasama yang erat dengan berbagai produsen Otomotif di seluruh dunia dan diantaranya yang sangat populer dan masih berlangsung hingga saat ini adalah Kerjasama Beijing-Benz dan Beijing-Hyundai.” Pungkas Dhani. Di Indonesia, BAIC memperkenalkan dua model andalannya di segmen SUV medium yang menyasar dua pasar yang berbeda. Keduanya memiliki performa khas kendaraan eropa yang dibekali dengan teknologi modern demi mengikuti kebutuhan pasar yang terus berevolusi namun juga sarat dengan beragam kebutuhan. BAIC BJ-40 PLUS di Indonesia hadir dengan satu pilihan mesin yaitu mesin bensin 4 silinder, 16 valve, 2.000cc DOHC dengan Turbocharger, dipadukan dengan transmisi 8-Percepatan lansiran pabrik transmisi ternama dari Jerman yaitu ZF Friedrichshafen. Sistem penggerak pun sudah menggunakan Electronic Transfer Case dengan Center Differential Lock dari Borg-Wagner, yang sangat mumpuni untuk menerabas medan berat. BAIC BJ-40 PLUS dengan penggerak empat-roda ini, menghasilkan tenaga maksimum 221 Hp dengan torsi maksimal 380 Nm, yang dirasa cukup mumpuni untuk kondisi jalan dan alam di Indonesia. SUV dengan karakter gagah dan macho ini memberikan kesan premium pada setiap sudut tampilannya, baik penampilan maupun performanya dinilai sangat cocok untuk para pecinta offroad atau konsumen yang memiliki jiwa adventurer. Masuk ke Indonesia dengan harga 800 jutaan, SUV ini diyakini akan menjadi pesaing unggul di segmen kendaraan serbaguna khususnya berpenggerak empat roda atau 4x4 di Indonesia. ",
  },
  {
    image: blog3,
    link: "/news/single-post/index.html",
    date: "9 DESEMBER, 2024",
    title: "Yet Another Award - Example Title 3",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque ipsam facilis accusamus quasi dolore repudiandae laudantium nulla odio ducimus, laboriosam corporis vel recusandae quia enim cumque, impedit magnam temporibus eaque.",
  },
  {
    image: blog4,
    link: "/news/single-post/index.html",
    date: "10 DESEMBER, 2024",
    title: "Yet Another Award - Example Title 4",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque ipsam facilis accusamus quasi dolore repudiandae laudantium nulla odio ducimus, laboriosam corporis vel recusandae quia enim cumque, impedit magnam temporibus eaque.",
  },
  {
    image: blog5,
    link: "/news/single-post/index.html",
    date: "11 DESEMBER, 2024",
    title: "Yet Another Award - Example Title 4",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque ipsam facilis accusamus quasi dolore repudiandae laudantium nulla odio ducimus, laboriosam corporis vel recusandae quia enim cumque, impedit magnam temporibus eaque.",
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
                className="md:col-span-6 col-span-12"
              />
              <div className="space-y-4 md:col-span-6 col-span-12">
                <p className="font-medium text-red-600">{content.date}</p>
                <h2 className="capitalize text-3xl font-bold">
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
