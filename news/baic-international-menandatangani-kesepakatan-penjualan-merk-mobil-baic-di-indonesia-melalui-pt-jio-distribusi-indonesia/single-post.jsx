import { useState } from "react";
import Header from "../../src/components/Header";
import blog1 from "../../src/assets/blog-2.jpg";
import blog2 from "../../src/assets/blog-7.jpg";
import Footer from "../../src/components/Footer";
import CTA from "../../src/components/cta";

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
      <div className="bg-neutral-100   py-4">
        <div className="max-w-6xl flex gap-4 m-auto md:px-8 px-5 font-medium">
          <a href="/news/index.html ">NEWS & EVENT {">>"}</a>
          <span className="text-neutral-400 truncate w-[calc(50%-80px)]">
            BAIC INTERNATIONAL Menandatangani Kesepakatan Penjualan Merk Mobil
            BAIC di Indonesia Melalui PT JIO DISTRIBUSI INDONESIA
          </span>
        </div>
      </div>
      <div className="flex max-w-2xl md:px-8 px-5 mb-10 mt-10 m-auto">
        <div className="flex flex-col space-y-4  max-w-5xl m-auto justify-center">
          <h1 className="md:text-3xl text-2xl font-bold">
            BAIC INTERNATIONAL Menandatangani Kesepakatan Penjualan Merk Mobil
            BAIC di Indonesia Melalui PT JIO DISTRIBUSI INDONESIA
          </h1>
          <p className="font-medium text-red-600">28 Maret, 2024</p>
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
              <span className="font-bold">Banten, 14 May 2024</span> – – Melalui
              kesepakatan yang dilanjutkan dengan pengesahan PT JIO Distribusi
              Indonesia (disingkat : PT. JDI) oleh pihak Beijing Automotive
              Group Co., Ltd. Melalui BAIC INTERNATIONAL, maka secara resmi
              penjualan kendaraan bermotor roda empat dengan merk BAIC akan
              segera dilakukan di Indonesia.
            </p>
            <p>
              Beijing Automotive Group Co., Ltd. sudah berdiri di China sejak
              tahun 1958, dengan markas besar berada di kota Beijing, China.
              BAIC sendiri merupakan salah satu merk kendaraan bermotor yang
              berada dibawah naungan Beijing Automotive Group Co., Ltd. dan
              hingga saat ini merupakan produsen kendaraan bermotor terbesar
              ke-lima di China.
            </p>
            <p>
              “Kami sangat bangga dan senang bahwasanya melalui PT. JDI, telah
              mendapatkan kepercayaan dari pihak principal Beijing Automotive
              Group Co., Ltd. untuk memasarkan merk BAIC di Indonesia” ujar
              Chief Operating Officer PT. JDI, Dhani Yahya. Dalam kesempatan
              penandatangan ini juga hadir Mr. Yang Nanhua sebagai Executive
              Director & CEO BAIC INTL. beserta juga beberapa perwakilan dari
              pihak BAIC INTL. dan juga beberapa pimpinan dan petinggi dari JHL
              Group.
            </p>
            <p>
              “BAIC sendiri merupakan salah satu merk andalan dari Beijing
              Automotive Group Co., Ltd, dimana mereka juga memiliki beberapa
              merk lain yang dijual tidak hanya dipasar dalam negri China,
              tetapi juga di ekspor ke negara-negara besar lain didunia.
              Perusahaan ini juga memiliki kerjasama yang erat dengan produsen
              Otomotif dunia dan sampai saat ini masih menjalin kerja-sama yang
              baik melalui Beijing-Benz dan Beijing-Hyundai salah satunya.”
              Pungkas Dhani.
            </p>

            <p>
              Khusus untuk pasar Indonesia, BAIC akan memulai pemasarannya
              melalui dua model andalannya, yaitu BAIC BJ-40 PLUS dan BAIC
              X55-II, dan kedua model tersebut akan bertarung dalam kelas SUV di
              pasar otomotif Indonesia yang dikenal sangat menyukai model SUV.
              BAIC BJ-40 PLUS merupakan kendaraan jenis SUV penggerak empat roda
              alias SUV 4X4, dengan model dan disain yang gagah, tampilan yang
              menarik dan tangguh serta dapat memberikan kesan macho yang sangat
              kental. Model inipun juga telah beberapa kali mengikuti kejuaraan
              Rally terberat di dunia yaitu Paris-Dakkar.
            </p>
            <p>
              BAIC BJ-40 PLUS di Indonesia hadir dengan satu pilhan mesin yaitu
              mesin bensin 4 silinder, 16 valve, 2.000cc DOHC dengan
              Turbocharger, dipadukan dengan transmisi 8-Percepatan lansiran
              pabrik transmisi ternama dari Jerman yaitu ZF Friedrichshafen.
              Sistem penggerak pun sudah menggunakan Electronic Transfer Case
              dengan Rear Differential Lock dari Borg-Wagner Jerman, yang sangat
              mumpuni untuk menerabas medan berat. BAIC BJ-40 PLUS dengan
              penggerak empat-roda ini, menghasilkan tenaga maksimum 221 Hp
              dengan torsi maksimal 380 Nm, yang dirasa cukup mumpuni untuk
              kondisi jalan dan alam di Indonesia.
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
              DCT) yang mendapatkan penghargaan sebagai China Top-Ten
              Transmission. BAIC X-55 II memiliki kemampuan 175 Hp dan tenaga
              300 Nm, sehingga mampu ber-akselerasi dari 0 km/h hingga 100 km/h
              hanya dalam 7 detik.
            </p>
            <p>
              “Kami tentunya mempunyai komitmen jangka panjang dalam
              memperkenalkan merk BAIC ini ke pasar Indonesia, dibuktikan dengan
              bahwasanya kami telah melakukan penjajakan untuk segera memulai
              perakitan lokal atau CKD di Indonesia untuk salah satu model yang
              telah diperkenalkan, dengan telah membuka perbincangan dengan
              beberapa mitra yang memiliki fasilitas produksi kendaraan
              bermotor, dan juga kami berkomitmen untuk segera melakukan
              penunjukkan mitra-mitra terpilih untuk bekerjasama menjadi Dealer
              resmi kami, selain itu kami juga berkomitmen untuk menjadi bagian
              dari Industri Otomotif di Indonesia dengan bergabung sebagai
              anggota GAIKINDO sesegera mungkin, tidak ketinggalan bahwa
              sesegera mungkin kami akan menghadirkan kendaraan berbasis baterai
              atau eV di pasar Indonesia” tutup Dhani.
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
