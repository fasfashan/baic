import Header from "../../src/components/Header";
import blog1 from "../../src/assets/blog-1.jpg";
import blog2 from "../../src/assets/blog-2.jpg";
import blog3 from "../../src/assets/blog-3.jpg";
import blog4 from "../../src/assets/blog-4.jpg";
import Footer from "../../src/components/Footer";
import CTA from "../../src/components/cta";
import { useState } from "react";
import "../../src/index.css";

function App() {
  return (
    <>
      <Header />
      <div className="bg-neutral-100   py-4">
        <div className="max-w-6xl flex gap-4 m-auto md:px-8 px-5 font-medium">
          <a href="/news/index.html ">NEWS & EVENT {">>"}</a>
          <span className="text-neutral-400">SINGLE - POST</span>
        </div>
      </div>
      <div className="flex max-w-2xl md:px-8 px-5 mb-10 mt-10 m-auto">
        <div className="flex flex-col space-y-4  max-w-5xl m-auto justify-center">
          <h1 className="md:text-3xl text-2xl font-bold">
            Top Gear award - BAIC Beijing X55 win
          </h1>
          <p className="font-medium text-red-600">7 Desember 2024</p>
          <div className="flex flex-col gap-4">
            <img src={blog1} alt="blog 1" width={700} className="" />
            <div className="flex gap-4 justify-between">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="relative">
                  <img
                    width={100}
                    src={blog1}
                    alt={`BJ40 Plus ${index + 1}`}
                    className="block "
                  />
                  {index > 0 && (
                    <div className="absolute inset-0 bg-white bg-opacity-50"></div>
                  )}
                </div>
              ))}
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Praesentium tempora sint at quae suscipit. Vel, et odio excepturi
              at quos expedita commodi ea doloremque iste nihil ipsum eius,
              recusandae similique. <br></br> Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Corporis ipsum cumque, commodi illo
              libero adipisci. Odio harum minus consequatur ipsam, voluptatem
              tempora nostrum. Ipsam voluptates, doloremque consequatur fuga
              numquam autem!
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
