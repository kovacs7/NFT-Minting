import Artist from "../components/Artist";
import Collection from "../components/Collection";
import Faqs from "../components/Faqs";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Line from "../components/Line";
import Line2 from "../components/Line2";
import Navbar from "../components/Navbar";
import Upload from "./Upload";

const Landing = () => {
  return (
    <>
      <Navbar />
      <Upload/>
      <Hero />
      <span className="flex items-center mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <span className="pr-6 text-lg">For Artists</span>
        <span className="h-px flex-1 border-green-500 border-2"></span>
      </span>
      <Artist />
      <Line2 />
      <Collection />
      <Line />
      <Faqs />
      <Footer />
    </>
  );
};

export default Landing;
