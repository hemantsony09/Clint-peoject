import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import HomePage from "../components/HomePage";
import About from "../components/About";
import Product from "../components/Product";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ImageCorousel from "../components/ImageCarousel";

const Homepage = () => {
  const [showButton, setShowButton] = useState(false);

  // Show button when the page is scrolled down
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  // Scroll to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar />
      <HomePage />
      <ImageCorousel />
      <Product />
      <About />
      <Contact />
      <Footer />

      {showButton && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            backgroundColor: "#3B3030",
            color: "#fff0d1",
            border: "none",
            borderRadius: "50%",
            padding: "10px 15px",
            fontSize: "18px",
            cursor: "pointer",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#5a4a4a")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#3B3030")}
        >
          ↑
        </button>
      )}
    </>
  );
};

export default Homepage;
