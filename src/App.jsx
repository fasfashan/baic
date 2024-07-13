import Header from "./components/Header";
import SliderImage from "./components/Slider";
import ExploreCar from "./components/ExploreCar";
import CTASection from "./components/CallToActionSection";
import Footer from "./components/Footer";
import ButtonChat from "./components/ButtonChat";
import "./App.css";

function App() {
  return (
    <>
      <ButtonChat />
      <Header />
      <SliderImage />
      <ExploreCar />
      <CTASection />
      <Footer />
    </>
  );
}

export default App;
