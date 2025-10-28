import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import CtaSection from "../src/components/CtaSection";
import ButtonChat from "../src/components/ButtonChat";
import { useState } from "react";
import "../src/index.css";

// Dummy news data - 10 articles
const newsData = [
  {
    image: "/placeholder-news.jpg",
    date: "01 October, 2025",
    title:
      "THE NEWEST HYBRID SUV BAIC BJ30 COMES TO BANDUNG AT A SPECIAL PRICE DURING GIIAS 2025 - BANDUNG",
    description:
      "Bandung, October 1, 2025 – PT JIO Distribusi Indonesia, BAIC's authorized agent (APM) in Indonesia, officially participated in GIIAS Bandung 2025 – Autoshow Series, which took place from OC...",
    link: "/news/single-news.html",
  },
  {
    image: "/placeholder-news.jpg",
    date: "01 October, 2025",
    title: "PRESENT IN SEMARANG BAIC BJ30 HYBRID OFFERED AT A SPECIAL PRICE!",
    description:
      "Indonesia, October 2025 - PT JIO Distribusi Indonesia, BAIC Brand Holder Agent (APM) in Indonesia, officially participated in auto expo Semarang 2025 - Autoshow Series with...",
    link: "/news/single-news.html",
  },
  {
    image: "/placeholder-news.jpg",
    date: "01 October, 2025",
    title:
      "PRESENT AROUND THE HEART OF SOUTH SULAWESI BAIC is Now Available in Makassar - Makassar!",
    description:
      "Bandung, October 1, 2025 – PT JIO Distribusi Indonesia, BAIC's authorized agent (APM) in Indonesia, officially participated in GIIAS Bandung 2025 – Autoshow Series, which took place from OC...",
    link: "/news/single-news.html",
  },
  {
    image: "/placeholder-news.jpg",
    date: "01 October, 2025",
    title:
      "THE NEWEST HYBRID SUV BAIC BJ30 COMES TO BANDUNG AT A SPECIAL PRICE DURING GIIAS 2025 - BANDUNG",
    description:
      "Bandung, October 1, 2025 – PT JIO Distribusi Indonesia, BAIC's authorized agent (APM) in Indonesia, officially participated in GIIAS Bandung 2025 – Autoshow Series, which took place from OC...",
    link: "/news/single-news.html",
  },
  {
    image: "/placeholder-news.jpg",
    date: "01 October, 2025",
    title:
      "THE NEWEST HYBRID SUV BAIC BJ30 COMES TO BANDUNG AT A SPECIAL PRICE DURING GIIAS 2025 - BANDUNG",
    description:
      "Bandung, October 1, 2025 – PT JIO Distribusi Indonesia, BAIC's authorized agent (APM) in Indonesia, officially participated in GIIAS Bandung 2025 – Autoshow Series, which took place from OC...",
    link: "/news/single-news.html",
  },
  {
    image: "/placeholder-news.jpg",
    date: "01 October, 2025",
    title:
      "THE NEWEST HYBRID SUV BAIC BJ30 COMES TO BANDUNG AT A SPECIAL PRICE DURING GIIAS 2025 - BANDUNG",
    description:
      "Bandung, October 1, 2025 – PT JIO Distribusi Indonesia, BAIC's authorized agent (APM) in Indonesia, officially participated in GIIAS Bandung 2025 – Autoshow Series, which took place from OC...",
    link: "/news/single-news.html",
  },
  {
    image: "/placeholder-news.jpg",
    date: "01 October, 2025",
    title:
      "THE NEWEST HYBRID SUV BAIC BJ30 COMES TO BANDUNG AT A SPECIAL PRICE DURING GIIAS 2025 - BANDUNG",
    description:
      "Bandung, October 1, 2025 – PT JIO Distribusi Indonesia, BAIC's authorized agent (APM) in Indonesia, officially participated in GIIAS Bandung 2025 – Autoshow Series, which took place from OC...",
    link: "/news/single-news.html",
  },
  {
    image: "/placeholder-news.jpg",
    date: "01 October, 2025",
    title:
      "THE NEWEST HYBRID SUV BAIC BJ30 COMES TO BANDUNG AT A SPECIAL PRICE DURING GIIAS 2025 - BANDUNG",
    description:
      "Bandung, October 1, 2025 – PT JIO Distribusi Indonesia, BAIC's authorized agent (APM) in Indonesia, officially participated in GIIAS Bandung 2025 – Autoshow Series, which took place from OC...",
    link: "/news/single-news.html",
  },
  {
    image: "/placeholder-news.jpg",
    date: "01 October, 2025",
    title:
      "THE NEWEST HYBRID SUV BAIC BJ30 COMES TO BANDUNG AT A SPECIAL PRICE DURING GIIAS 2025 - BANDUNG",
    description:
      "Bandung, October 1, 2025 – PT JIO Distribusi Indonesia, BAIC's authorized agent (APM) in Indonesia, officially participated in GIIAS Bandung 2025 – Autoshow Series, which took place from OC...",
    link: "/news/single-news.html",
  },
  {
    image: "/placeholder-news.jpg",
    date: "01 October, 2025",
    title:
      "THE NEWEST HYBRID SUV BAIC BJ30 COMES TO BANDUNG AT A SPECIAL PRICE DURING GIIAS 2025 - BANDUNG",
    description:
      "Bandung, October 1, 2025 – PT JIO Distribusi Indonesia, BAIC's authorized agent (APM) in Indonesia, officially participated in GIIAS Bandung 2025 – Autoshow Series, which took place from OC...",
    link: "/news/single-news.html",
  },
];

function App() {
  const [visiblePosts, setVisiblePosts] = useState(6);
  const maxPosts = newsData.length;
  const allPostsLoaded = visiblePosts >= maxPosts;

  const handleLoadMore = () => {
    setVisiblePosts((prev) => Math.min(prev + 6, maxPosts));
  };

  return (
    <>
      <Header />
      <ButtonChat />

      {/* Hero Section */}
      <div
        className="relative h-80 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/bg-news.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative text-white text-5xl md:text-6xl font-bold">
          News & Event
        </h1>
      </div>

      {/* News Grid Section */}
      <div className="bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsData.slice(0, visiblePosts).map((news, index) => (
              <a
                key={index}
                href={news.link}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow block"
              >
                {/* News Image */}
                <div className="relative h-56 overflow-hidden">
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

          {/* Load More / All Loaded State */}
          <div className="mt-12 text-center">
            {!allPostsLoaded ? (
              <button
                onClick={handleLoadMore}
                className="px-8 py-3 bg-white text-gray-800 border border-gray-300 rounded-lg hover:bg-red-600 hover:text-white hover:border-red-600 transition-all font-semibold"
              >
                Load more
              </button>
            ) : (
              <div className="text-gray-500 font-medium">
                <p className="text-lg">All news loaded</p>
                <p className="text-sm mt-2">
                  You've reached the end of our news articles
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <CtaSection />
      <Footer />
    </>
  );
}

export default App;
