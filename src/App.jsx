import Contact from "../contact/contact";
import Header from "./components/Header";
import VideoHeroSlider from "./components/VideoHeroSlider";
import ExploreCar from "./components/ExploreCar";
import PopupBanner from "./components/PopupBanner";
import AfterSalesSection from "./components/AfterSalesSection";
import NewsSection from "./components/NewsSection";
import AccessoriesSection from "./components/AccessoriesSection";
import OtherProductsSection from "./components/OtherProductsSection";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <PopupBanner />
      <Header />
      <VideoHeroSlider />
      <ExploreCar />
      <AccessoriesSection />
      <AfterSalesSection />
      <NewsSection />
      <OtherProductsSection />
      <Footer />
    </>
  );
}

export default App;
