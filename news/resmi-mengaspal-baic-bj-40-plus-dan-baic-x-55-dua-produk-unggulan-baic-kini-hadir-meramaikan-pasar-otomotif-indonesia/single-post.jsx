/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import Header from "../../src/components/Header";
import blog1 from "../../src/assets/blog-1.jpg";
import blog2 from "../../src/assets/product-launch.jpg";
import Footer from "../../src/components/Footer";
import CTA from "../../src/components/cta";
import ButtonChat from "../../src/components/ButtonChat";
import "../../src/index.css";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    { src: blog1, alt: "BJ40 Plus 1" },
    { src: blog2, alt: "BJ40 Plus 2" },
  ];

  const handleImageClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <>
      <Header />
      <ButtonChat />
      <div className="bg-neutral-100   py-4">
        <div className="max-w-6xl flex gap-4 m-auto md:px-8 px-5 font-medium">
          <a href="/news/index.html ">NEWS & EVENT {">>"}</a>
          <span className="text-neutral-400 truncate w-[calc(50%-80px)]">
            Resmi mengaspal, BAIC BJ-40 PLUS dan BAIC X-55 dua produk unggulan
            BAIC kini hadir meramaikan pasar otomotif Indonesia
          </span>
        </div>
      </div>
      <div className="flex max-w-2xl md:px-8 px-5 mb-10 mt-10 m-auto">
        <div className="flex flex-col space-y-4  max-w-5xl m-auto justify-center">
          <h1 className="md:text-3xl text-2xl font-bold">
            Resmi mengaspal, BAIC BJ-40 PLUS dan BAIC X-55 dua produk unggulan
            BAIC kini hadir meramaikan pasar otomotif Indonesia
          </h1>
          <p className="font-medium text-red-600">4 Mei, 2024</p>
          <div className="flex flex-col gap-4">
            <img
              src={images[activeIndex].src}
              alt={`BJ40 Plus ${activeIndex + 1}`}
              width={700}
              className="object-cover md:h-96"
            />
            <div className="flex gap-4">
              {images.map((image, index) => (
                <button key={index} onClick={() => handleImageClick(index)}>
                  <img
                    width={100}
                    src={image.src}
                    alt={image.alt}
                    className={`block ${
                      index === activeIndex ? "opacity-50" : ""
                    }`}
                  />
                </button>
              ))}
            </div>

            <p>
              <span className="font-bold">Banten, 14 May 2024</span> – Beijing
              Automotive Group Co., Ltd. (BAIC) berdiri di Cina sejak tahun
              1958, dengan markas besar berada di kota Beijing, Cina. BAIC
              merupakan salah satu merk kendaraan bermotor yang berada dibawah
              naungan Beijing Automotive Group Co., Ltd. dan hingga saat ini
              merupakan produsen kendaraan bermotor terbesar ke-lima di Cina.
            </p>
            <p>
              "Hari ini adalah hari yang sangat Istimewa! Pada hari ini, dengan
              bangga kami akan menampilkan dua produk andalan BAIC untuk pertama
              kalinya di Indonesia langsung dihadapan rekan-rekan Media, selain
              itu juga dilakukan penandatanganan beberapa investor yang sepakat
              untuk segera membangun jaringan Dealer BAIC dibeberapa wilayah di
              Indonesia” ujar Chief Operating Officer PT. JDI - Dhani Yahya.
            </p>
            <p>
              Pada kesempatan Istimewa ini hadir Mr. Chen Wei; Vice General
              Manager of Beijing Automotive Group Co. Ltd & Chairman of BAIC
              MOTOR Corporation. Ltd, dan juga Mr. Zhao Pengfei; Vice President
              BAIC INTERNATIONAL, beserta beberapa perwakilan dari pihak BAIC
              INTL. Tidak ketinggalan hadir juga founder dari PT JDI sekaligus
              founder JHL Group, Bpk. Jerry Hermawan Lo, juga hadir Bpk. Dr. H.
              Bambang Soesatyo, S.A.P., S.E., S.H., M.B.A, sebagai Shareholder
              di PT JIO, serta Bpk. Aries Marsudiyanto juga sebagai Shareholder
              di PT JIO yang menjadi perusahaan yang membawahi CKD Manufaktur
              untuk merk BAIC di Indonesia.
            </p>
            <p>
              “BAIC merupakan salah satu merk andalan dari Beijing Automotive
              Group Co., Ltd. Produsen ini memiliki beberapa merk lain yang
              dijual tidak hanya dipasar dalam negeri Cina, tetapi juga di
              ekspor ke negara-negara besar lain didunia. Perusahaan ini
              memiliki kerjasama yang erat dengan berbagai produsen Otomotif di
              seluruh dunia dan diantaranya yang sangat populer dan masih
              berlangsung hingga saat ini adalah Kerjasama Beijing-Benz dan
              Beijing-Hyundai.” Pungkas Dhani.
            </p>
            <p>
              Di Indonesia, BAIC memperkenalkan dua model andalannya di segmen
              SUV medium yang menyasar dua pasar yang berbeda. Keduanya memiliki
              performa khas kendaraan eropa yang dibekali dengan teknologi
              modern demi mengikuti kebutuhan pasar yang terus berevolusi namun
              juga sarat dengan beragam kebutuhan.
            </p>
            <p>
              BAIC BJ-40 PLUS di Indonesia hadir dengan satu pilihan mesin yaitu
              mesin bensin 4 silinder, 16 valve, 2.000cc DOHC dengan
              Turbocharger, dipadukan dengan transmisi 8-Percepatan lansiran
              pabrik transmisi ternama dari Jerman yaitu ZF Friedrichshafen.
              Sistem penggerak pun sudah menggunakan Electronic Transfer Case
              dengan Center Differential Lock dari Borg-Wagner, yang sangat
              mumpuni untuk menerabas medan berat. BAIC BJ-40 PLUS dengan
              penggerak empat-roda ini, menghasilkan tenaga maksimum 221 Hp
              dengan torsi maksimal 380 Nm, yang dirasa cukup mumpuni untuk
              kondisi jalan dan alam di Indonesia.
            </p>
            <p>
              SUV dengan karakter gagah dan macho ini memberikan kesan premium
              pada setiap sudut tampilannya, baik penampilan maupun performanya
              dinilai sangat cocok untuk para pecinta offroad atau konsumen yang
              memiliki jiwa adventurer. Masuk ke Indonesia dengan harga 800
              jutaan, SUV ini diyakini akan menjadi pesaing unggul di segmen
              kendaraan serbaguna khususnya berpenggerak empat roda atau 4x4 di
              Indonesia.
            </p>
            <p>
              Model kedua yang dihadirkan untuk pasar Indonesia adalah BAIC
              X55-II yang merupakan kendaraan jenis Medium SUV penggerak roda
              depan (FWD) dengan mesin yang disebut MAGIC-CORE, dengan
              konfigurasi 4 silinder, 16 valve, 1500cc DOHC Turbocharger, yang
              dibangun atas kerjasama BAIC Motor dengan META Engineering dari
              Jerman, yang terkenal sebagai pemasok mesin dan teknologi tinggi
              lainnya kepada merk-merk otomotif ternama di dunia. BAIC X55-II
              dilengkapi dengan transmisi 7-Percepatan Double Clutch (7-Speed
              DCT) yang mendapatkan penghargaan sebagai Cina Top-Ten
              Transmission. BAIC X-55 II memiliki kemampuan 185 Hp dan tenaga
              305 Nm, sehingga mampu ber-akselerasi dari 0 km/h hingga 100 km/h
              hanya dalam 7.8 detik. Performa dan teknologi kendaraan ini sangat
              layak disandingkan dengan kendaraan pada segmen serupa di kelas
              premium.
            </p>
            <p>
              Model ini memiliki tampilan unik dan sangat modern menyesuaikan
              dengan tren pasar saat ini. Dibekali dengan peralatan teknologi
              yang sangat updated, interior nyaman yang lega untuk menampung
              hingga 5 orang penumpang serta bagasi yang luas membuat kendaraan
              ini dinilai akan sangat fungsional bagi konsumen yang menggunakan
              kendaraan pribadinya untuk kegiatan sehari-hari tanpa meninggalkan
              kesan fashionable dan modern pada tampilannya. Diluncurkan dengan
              harga 400 jutaan, BAIC Indonesia optimis bahwa model ini akan
              segera mengisi jalanan-jalanan di Indonesia dalam waktu yang
              singkat.
            </p>
            <p>
              “BAIC BJ40 Plus dan BAIC X-55 II merupakan dua model pertama yang
              kami pilihkan khusus untuk mengisi kebutuhan konsumen Indonesia
              yang memiliki kebutuhan sangat beragam. Terlebih, kehadiran
              produsen asal Cina di pasar otomotif Indonesia saat ini memiliki
              daya-tarik sendiri yang tidak dapat dipungkiri membangun optimisme
              yang sangat besar bagi kami bahwa BAIC akan segera mengisi pangsa
              pasar otomotif Indonesia dengan posisi yang terus meningkat di 5
              tahun ke depan” tutup Dhani.
            </p>
          </div>
        </div>
      </div>
      <CTA />
      <Footer />
    </>
  );
}

export default App;
