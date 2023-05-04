import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import "./index.css";

export default function App() {
  return (
    <>
      <div className="bg-gray-950 font-Julius">
        <Navbar />
        <Hero />
        <Cards />
       <Footer/>
      </div>
    </>
  );
}
