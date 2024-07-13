import { useState } from "react";
import Header from "../../src/components/Header";
import blog1 from "../../src/assets/blog-3.jpg";
import blog2 from "../../src/assets/blog-3.jpg";
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
            Investor menyambut dengan positif! 13 Dealership BAIC Indonesia akan
            hadir di 9 kota besar Indonesia di 2024
          </span>
        </div>
      </div>
      <div className="flex max-w-2xl md:px-8 px-5 mb-10 mt-10 m-auto">
        <div className="flex flex-col space-y-4  max-w-5xl m-auto justify-center">
          <h1 className="md:text-3xl text-2xl font-bold">
            Investor menyambut dengan positif! 13 Dealership BAIC Indonesia akan
            hadir di 9 kota besar Indonesia di 2024
          </h1>
          <p className="font-medium text-red-600">14 Mei, 2024</p>
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
              <span className="font-bold">Banten, 14 May 2024</span> – Kehadiran
              kendaraan bermotor merk BAIC yang turut meramaikan pasar Otomotif
              di Indonesia sejak bulan April 2024 kemarin, mendapatkan tanggapan
              yang positif dari sekaligus 7 investor di Indonesia. Para investor
              ini datang bukan hanya dari investor lama yang bermain dipasar
              Otomotif tapi juga dari datang dari pemain diindustri yang
              berbeda.
            </p>
            <p>
              Dalam kesempatan yang sama dengan kegiatan peluncuran awal atau
              Soft Launch kedua produk unggulan BAIC Indonesia yaitu BAIC BJ-40
              PLUS dan BAIC X-55 hari ini, dilakukan juga penandatanganan
              kesepakatan antara para investor dengan distributor tunggal merk
              BAIC di Indonesia yaitu PT JIO Distribusi Indonesia yang berada
              dibawah naungan JHL Group.
            </p>
            <p>
              Dhani Yahya, selaku Chief Operating Officer PT JDI menyampaikan
              kebahagiaan sekaligus juga penghargaan yang setinggi-tingginya
              kepada para investor, bahwa merk BAIC sebagai pemain baru Otomotif
              di Indonesia bisa mendapatkan sambutan hangat utamanya dari para
              investor. “Kesepakatan ini memberikan optimisme yang sangat besar
              bahwa merk BAIC akan memiliki komitmen jangka panjang di pasar
              Otomotif Indonesia. Direncanakan pembangunan dealer-dealer baru
              akan segera terlaksana pada tahun ini (2024), dan proses perakitan
              lokal di Indonesia sudah matang dibicarakan, sehingga targetnya
              pada tahun 2025 BAIC Indonesia sudah dapat merakit unit kendaraan
              BAIC BJ-40 secara lokal” ujar Dhani.
            </p>
            <p>
              7 investor ternama telah mengonfirmasi kerjasamanya dan akan
              membangun 13 jaringan Dealer yang tersebar di wilayah Pulau Jawa,
              Kalimantan, Sumatera, Bali dan Batam. Berikut adalah daftar
              investor BAIC Indonesia beserta wilayah investasinya yang akan
              memberikan kemudahan bagi para konsumen Indonesia untuk menjangkau
              produk BAIC mulai dari pembelian, perawatan hingga purna jual
              kendaraan:
            </p>
            <ol className="list-decimal">
              <li>
                1. JHL Group yang akan membangun dua dealer di wilayah Alam
                Sutera dan Gading Serpong, Tangerang.
              </li>
              <li>
                2. PT DAS Indonesia Motor yang akan membuka di kota Surabaya dan
                di Pulau Bali.
              </li>
              <li>
                3. PT Trijaya Oto Makmur yang akan berinvestasi di wilayah
                Jakarta yang berkembang pesat yaitu Pantai Indah Kapuk - Jakarta
                Utara dan juga di Tomang - Jakarta Barat, lalu merambah ke kota
                Bandung - Jawa Barat, hingga ke kota Pekanbaru - Provinsi Riau.
              </li>
              <li>
                4. PT Istana Tujuh Sukses yang akan memulai Dealer di kota
                Samarinda - Provinsi Kalimantan Timur.
              </li>
              <li>
                5. PT Mega Central Autoniaga yang akan membuka Dealer di kota
                terbesar di Sumatera Barat, yaitu kota Medan.
              </li>
              <li>
                6. PT Mega Prakarsa Indonesia akan menghadirkan Merk BAIC di
                Pulau Batam yang terkenal dengan Free Trade Zone Area (FTZ).
              </li>
              <li>
                7. Prestige Motorcars akan turut hadir di wilayah Jakarta Utara,
                melalui kehadirannya di daerah Pantai Indah Kapuk dan Pluit.
              </li>
            </ol>

            <p>
              ““Kesepakatan ini membuktikan kepercayaan para investor terhadap
              merk BAIC, yang diyakini akan menumbuhkan tingkat kepercayaan
              pasar, dimana ini juga merupakan komitmen kami untuk tumbuh dan
              berkembang dipasar otomotif Indonesia” tutup Dhani.
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
