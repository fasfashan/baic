export default function NewsSection() {
  const newsArticles = [
    {
      id: 1,
      date: "24 September, 2025",
      title: "Presenting in Semarang BAIC BJ30 Hybrid Offered at Special Price",
      image: "/image-blog.jpg",
      link: "/news/bj30-hybrid-semarang",
    },
    {
      id: 2,
      date: "23 September, 2025",
      title:
        "BAIC Indonesia expands to North Jakarta! BAIC Kelapa Gading is now officially operational!",
      image: "/image-blog-1.jpg",
      link: "/news/kelapa-gading-opening",
    },
    {
      id: 3,
      date: "22 September, 2025",
      title:
        "World Premiere! BAIC BJ30 Hybrid Right-Hand Drive First Launched in Indonesia",
      image: "/image-blog-2.jpg",
      link: "/news/bj30-hybrid-world-premiere",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          News & Event
        </h2>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* Featured Image */}
              <a href={article.link} className="block">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </a>

              {/* Content */}
              <div className="p-6">
                {/* Date */}
                <p className="text-sm text-gray-500 mb-2">{article.date}</p>

                {/* Title */}
                <a href={article.link} className="block group">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 line-clamp-3 group-hover:text-red-600 transition-colors">
                    {article.title}
                  </h3>
                </a>
              </div>
            </div>
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
