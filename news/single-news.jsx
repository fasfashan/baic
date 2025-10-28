import { useState, useEffect } from "react";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import ButtonChat from "../src/components/ButtonChat";
import "../src/index.css";

// Sample news data - in real app, this would come from API or props
const newsDetail = {
  date: "01 October, 2025",
  title:
    "THE NEWEST HYBRID SUV BAIC BJ30 COMES TO BANDUNG AT A SPECIAL PRICE DURING GIIAS 2025 - BANDUNG",
  image: "/placeholder-news.jpg",
  content: `
    <p>Bandung, October 1, 2025 – PT JIO Distribusi Indonesia, BAIC's authorized agent (APM) in Indonesia, officially participated in GIIAS Bandung 2025 – Autoshow Series, which took place from October 3-6, 2025, at the Trans Grand Ballroom, Bandung. This participation affirms BAIC's commitment to strengthening its presence in West Java, particularly in the largest automotive market.</p>

    <p>"GIIAS Bandung is an important opportunity for BAIC to connect more closely with the people of West Java. Bandung, known as a strategic city and lifestyle hub. With our authorized BAIC dealer, which has been operational in Bandung, we are ready to provide comprehensive services, from sales and service to spare parts. We are optimistic that BAIC will become the newest choice for the people of Bandung and West Java," said Dhani Wijaya, Chief Operating Officer of PT JIO Distribusi Indonesia.</p>

    <p>At this event, BAIC showcased three flagship product lines: The BJ30 Plus, a powerful 4x4 SUV with the tagline "Adventure Awaits You," and the BJ30 Hybrid, the latest hybrid SUV with the slogan "Car of the Year at the 2025 Indonesia Automotive Awards, BAIC proudly presented the BJ30 Hybrid, The Best Hybrid SUV, at the 2024 Jakarta Fair."</p>

    <h3>A Big 10 million discount for the first 1000 buyers of the BJ30 Hybrid 4WD (Rs 699 million = Rp 579 million) and the BJ30 Hybrid 2WD (Rs 633 million = Rp 503 million).</h3>

    <p>The promo also applies to other models, including the BJ40 Plus (Rp20 million discount), BJ30 4 (Rp20 million discount), and BAIC 5 Lite (Rp20 million discount). For ease of ownership, BAIC provides attractive financing partners such as MTF (Balcom Payment & 7-year tenor), BUF (2% interest), FIF (interest at 10% (interest at 10% interest for 6–12-month tenors), and CMM (5-year interest at 10% interest). And is available for 1-year, down payment starting at 10%, installment.</p>

    <p>Customer satisfaction is also guaranteed with after-sales services, ranging from Free Service Maintenance for up to 4 services or 5-year (50,000 km / 5 years warranty), 5-year/100,000 km (5 years / 100,000 km), Rp 5-year/100,000 km (5 years / 100,000 km), Rp 5 service warranty, and 24-hour Emergency Roadside Assistance (ERA) for 5 years.</p>

    <p>BAIC's presence at GIIAS Bandung 2025 is an important step in strengthening its position in the West Java market while providing a choice of tough, modern, and innovative SUVs for the public.</p>

    <h3>BAIC Always Be With You</h3>

    <p>For more information contact:</p>
    
    <p>PR/P Doni Panjaitan<br>
    Head of Public Relations, Sales Training & Homologation<br>
    PT JIO Distribution Indonesia<br>
    Sole Distributor of BAIC Products in Indonesia<br>
    Mobile: +628 [ number ]</p>
  `,
};

// Other news for "Other News" section
const otherNews = [
  {
    id: 1,
    image: "/placeholder-news.jpg",
    date: "01 October, 2025",
    title:
      "THE NEWEST HYBRID SUV BAIC BJ30 COMES TO BANDUNG AT A SPECIAL PRICE DURING GIIAS 2025 - BANDUNG",
    description:
      "Bandung, October 1, 2025 – PT JIO Distribusi Indonesia, BAIC's authorized agent (APM) in Indonesia, officially participated in GIIAS Bandung 2025...",
    link: "#",
  },
  {
    id: 2,
    image: "/placeholder-news.jpg",
    date: "01 October, 2025",
    title:
      "THE NEWEST HYBRID SUV BAIC BJ30 COMES TO BANDUNG AT A SPECIAL PRICE DURING GIIAS 2025 - BANDUNG",
    description:
      "Bandung, October 1, 2025 – PT JIO Distribusi Indonesia, BAIC's authorized agent (APM) in Indonesia, officially participated in GIIAS Bandung 2025...",
    link: "#",
  },
  {
    id: 3,
    image: "/placeholder-news.jpg",
    date: "01 October, 2025",
    title:
      "THE NEWEST HYBRID SUV BAIC BJ30 COMES TO BANDUNG AT A SPECIAL PRICE DURING GIIAS 2025 - BANDUNG",
    description:
      "Bandung, October 1, 2025 – PT JIO Distribusi Indonesia, BAIC's authorized agent (APM) in Indonesia, officially participated in GIIAS Bandung 2025...",
    link: "#",
  },
];

function SingleNews() {
  return (
    <>
      <Header />
      <ButtonChat />

      {/* Article Content */}
      <article className="bg-white py-16 mt-20 px-4">
        <div className="max-w-6xl md:px-6 px-5 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Main Article Content - Left Column (8 cols) */}
            <div className="md:col-span-8">
              {/* Date */}
              <p className="text-red-600 text-sm font-semibold mb-4">
                {newsDetail.date}
              </p>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
                {newsDetail.title}
              </h1>

              {/* Featured Image */}
              <div className="mb-8">
                <img
                  src={newsDetail.image}
                  alt={newsDetail.title}
                  className="w-full h-auto rounded-lg"
                />
              </div>

              {/* Article Content */}
              <div
                className="prose prose-lg max-w-none text-gray-700"
                dangerouslySetInnerHTML={{ __html: newsDetail.content }}
              />
            </div>

            {/* Product Banners - Right Column (4 cols) */}
            <div className="md:col-span-4">
              <div className="space-y-4 md:sticky md:top-24">
                {/* X55 II Banner */}
                <div
                  style={{
                    backgroundImage: "url('/x55-banner.png')",
                  }}
                  className="bg-cover rounded-lg overflow-hidden shadow-md"
                >
                  <div className="p-4 min-h-[200px] flex items-end">
                    <div className="mb-3">
                      <a
                        href="/X55-Models/index.html"
                        className="inline-block px-4 py-2 bg-white text-gray-800 text-sm rounded-lg hover:bg-gray-100 transition-colors font-medium"
                      >
                        See product
                      </a>
                    </div>
                  </div>
                </div>

                {/* BJ40 PLUS Banner */}
                <div
                  style={{
                    backgroundImage: "url('/x55-banner.png')",
                  }}
                  className="bg-cover rounded-lg overflow-hidden shadow-md"
                >
                  <div className="p-4 min-h-[200px] flex items-end">
                    <div className="mb-3">
                      <a
                        href="/X55-Models/index.html"
                        className="inline-block px-4 py-2 bg-white text-gray-800 text-sm rounded-lg hover:bg-gray-100 transition-colors font-medium"
                      >
                        See product
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Other News Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Other News</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherNews.map((news) => (
              <a
                key={news.id}
                href={news.link}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow block"
              >
                {/* News Image */}
                <div className="relative h-56 bg-u overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  {/* Date Badge */}
                  <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded">
                    <p className="text-red-600 text-xs font-semibold">
                      {news.date}
                    </p>
                  </div>
                </div>

                {/* News Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2 hover:text-red-600 transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {news.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default SingleNews;
