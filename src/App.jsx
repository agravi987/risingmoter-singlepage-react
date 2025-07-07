import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CarShowcase from "./components/CarShowcase";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <CarShowcase />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
