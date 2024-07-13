/* eslint-disable react/no-unescaped-entities */
import Header from "../src/components/Header";
import logo from "../src/assets/logo.svg";
import logoJDI from "../src/assets/logo-jdi-black.png";
import Footer from "../src/components/Footer";
import CTA from "../src/components/cta";
import "../src/index.css";
import ButtonChat from "../src/components/ButtonChat";

function App() {
  return (
    <>
      <Header />
      <ButtonChat />
      <div className="bg-neutral-100   py-4">
        <div className="max-w-6xl flex gap-4 m-auto md:px-8 px-5 font-medium">
          <p className="font-semibold">ABOUT US</p>
        </div>
      </div>
      <div className="bg-neutral-200 py-10   m-auto ">
        <img src={logo} className="m-auto mb-4" width={200} alt="" />
        <p className="max-w-6xl m-auto  md:px-8 px-5 text-neutral-600 font-light">
          Beijing Automotive International Corporation - well known as its brand
          BAIC, founded in 1958, is headquartered in Beijing, China, and its
          head office, Beijing Automotive Group Co., Ltd. is ranked 162th in the
          Fortune 500. BAIC is one of the largest Government-owned automobile
          groups in China covering R&D and manufacturing of vehicles, parts,
          automobile service trade, comprehensive travel services, finance, and
          investment, etc. In 2013, BAIC International Development Co., Ltd. was
          officially established. As the main platform for BAIC brand's global
          business development, BAIC Intl. is firmly committed to the "Belt and
          Road" initiative. With the value positioning of building the
          "self-owned overseas trade platform" and "overseas integrated service
          provider, BAIC Intl. mainly focuses on such two industrial chains as
          "overseas manufacturing" and "international marketing", bearing the
          responsibility of building a world-class BAIC and promoting the layout
          of BAIC Group's global industrial innovation.
        </p>
      </div>
      <div className="bg-neutral-200 py-10   m-auto ">
        <img src={logoJDI} className="m-auto mb-4" width={200} alt="" />
        <p className="max-w-6xl m-auto  md:px-8 px-5 text-neutral-600 font-light">
          28 March 2024, BAIC International Development Co., Ltd. appointed PT
          JIO Distribusi Indonesia (JDI) to become the authorized sole
          distributor of the BAIC brand in Indonesia, both for the distribution
          of sales and after-sales service, which includes guarantees in the
          supply of spare parts, vehicle maintenance, and also a training center
          that trains after-sales personnel. Supported by authorized dealers in
          several major cities, JDI, driven by professionalism and high
          standards of customer service, has an empowering work ethic, and its
          philosophy is based on the total commitment of its employees. Complete
          customer satisfaction is one of JDI's main goals. The company provides
          honest and friendly guidance to all customers with trustworthy
          relationships. JDI plans to become one of the leading automobile
          distributors in Indonesia and also to Southeast Asia, synonymous with
          global brands with an impressive stable of premium and luxury cars.
          Together with PT JHL International Automotive (JIO) BAIC Indonesia
          will continue to strengthen its commitment to investing in Indonesia
          and actively participate in advancing the economy in the Indonesian
          automotive industry also to build local manufacturing for BAIC Brand
          in Indonesia. PT JIO Distribusi Indonesia (JDI) & PT JHL International
          Automotive (JIO) are companies under JHL Group in its Automotive
          business unit. For value-conscious consumers, this company is the best
          importer of BAIC cars and offers professionalism, resilience, and
          continuous progress in every step. Stands out as a brand that is
          committed to bringing high-quality vehicles and ensuring top-notch
          customer service. This determination makes the company the ideal
          choice for those seeking reliable vehicles from a trustworthy partner
          on their journey to finding the best ride of their lives. JHL Group is
          a national company with an international standard quality. With 12
          groups of business units, JHL Group is a company that provides the
          best properties and satisfying services to improve the quality of
          life. JHL Group is a parent company to various business lines from
          property development, hospitality, mining, lifestyle, wellness,
          automotive and media. Our vision and people are the key ingredients
          for JHL Group’s track record of success. The vision is to become a
          reputable and credible company by building strong brands
          internationally and locally with a passionate focus on various
          industries that are innovative, unique, and visionary to satisfy the
          customer’s needs. And the mission is to deliver extraordinary services
          and products. JHL Group intends to build on a successful track record
          and establish a network to grow properties and markets. Increase
          profitability through successful revenue growth, cost management,
          people development and innovation programs.
        </p>
      </div>

      <CTA />
      <Footer />
    </>
  );
}

export default App;
