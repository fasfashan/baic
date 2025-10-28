export default function NewsSection() {
  const newsArticles = [
    {
      id: 1,
      date: "01 October, 2025",
      title:
        "THE NEWEST HYBRID SUV BAIC BJ30 COMES TO BANDUNG AT A SPECIAL PRICE DURING GIIAS 2025 - BANDUNG",
      image: "/placeholder-news.jpg",
      link: "/news/single-news.html",
    },
    {
      id: 2,
      date: "01 October, 2025",
      title: "PRESENT IN SEMARANG BAIC BJ30 HYBRID OFFERED AT A SPECIAL PRICE!",
      image: "/placeholder-news.jpg",
      link: "/news/single-news.html",
    },
    {
      id: 3,
      date: "01 October, 2025",
      title:
        "PRESENT AROUND THE HEART OF SOUTH SULAWESI BAIC is Now Available in Makassar - Makassar!",
      image: "/placeholder-news.jpg",
      link: "/news/single-news.html",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          News & Event
        </h2>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsArticles.map((article) => (
            <a
              key={article.id}
              href={article.link}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow block"
            >
              {/* Featured Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                {/* Date Badge */}
                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded">
                  <p className="text-red-600 text-xs font-semibold">
                    {article.date}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Title */}
                <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2 hover:text-red-600 transition-colors">
                  {article.title}
                </h3>
              </div>
            </a>
          ))}
        </div>

        {/* See All Button */}
        <div className="text-center mt-12">
          <a
            href="/news/index.html"
            className="inline-block py-3 px-8 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all shadow-md hover:shadow-lg"
          >
            See all
          </a>
        </div>
      </div>
    </section>
  );
}
