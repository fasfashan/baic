import Header from "../src/components/Header";
import blog1 from "../src/assets/blog-1.jpg";
import blog2 from "../src/assets/blog-2.jpg";
import blog3 from "../src/assets/blog-3.jpg";
import blog4 from "../src/assets/blog-4.jpg";
import Footer from "../src/components/Footer";
import { useState } from "react";
import "../src/index.css";
const contentArray = [
  {
    image: blog1,
    date: "7 DESEMBER, 2024",
    title: "Top Gear award - BAIC Beijing X55 win",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque ipsam facilis accusamus quasi dolore repudiandae laudantium nulla odio ducimus, laboriosam corporis vel recusandae quia enim cumque, impedit magnam temporibus eaque.",
  },
  {
    image: blog2,
    date: "8 DESEMBER, 2024",
    title: "Another Award - Example Title 2",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque ipsam facilis accusamus quasi dolore repudiandae laudantium nulla odio ducimus, laboriosam corporis vel recusandae quia enim cumque, impedit magnam temporibus eaque.",
  },
  {
    image: blog3,
    date: "9 DESEMBER, 2024",
    title: "Yet Another Award - Example Title 3",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque ipsam facilis accusamus quasi dolore repudiandae laudantium nulla odio ducimus, laboriosam corporis vel recusandae quia enim cumque, impedit magnam temporibus eaque.",
  },
  {
    image: blog4,
    date: "10 DESEMBER, 2024",
    title: "Yet Another Award - Example Title 4",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque ipsam facilis accusamus quasi dolore repudiandae laudantium nulla odio ducimus, laboriosam corporis vel recusandae quia enim cumque, impedit magnam temporibus eaque.",
  },
  {
    image: blog4,
    date: "11 DESEMBER, 2024",
    title: "Yet Another Award - Example Title 4",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque ipsam facilis accusamus quasi dolore repudiandae laudantium nulla odio ducimus, laboriosam corporis vel recusandae quia enim cumque, impedit magnam temporibus eaque.",
  },
  {
    image: blog4,
    date: "12 DESEMBER, 2024",
    title: "Yet Another Award - Example Title 4",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque ipsam facilis accusamus quasi dolore repudiandae laudantium nulla odio ducimus, laboriosam corporis vel recusandae quia enim cumque, impedit magnam temporibus eaque.",
  },
];
function App() {
  const [visiblePosts, setVisiblePosts] = useState(3);

  const handleLoadMore = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 3);
  };
  return (
    <>
      <Header />
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
                  {content.description}
                </p>
                <a
                  className="py-3 block px-14 w-fit text-center hover:bg-red-600 transition-all hover:text-white border border-neutral-500 hover:border-none rounded-xl"
                  href="#"
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
      <Footer />
    </>
  );
}

export default App;
