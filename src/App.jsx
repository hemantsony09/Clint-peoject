import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Product from "./components/Product";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ImageCorousel from "./components/ImageCarousel";
function App() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Navbar />
      <main>
        <HomePage />
        <ImageCorousel/>
        <About />
        <Product />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
