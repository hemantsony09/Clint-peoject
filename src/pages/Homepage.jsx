import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import HomePage from "../components/HomePage";
import About from "../components/About";
import Product from "../components/Product";
import FeedbackForm from "../components/FeedbackForm";
import Footer from "../components/Footer";
import ImageCorousel from "../components/ImageCarousel";
import { useLocation } from "react-router-dom";

const Homepage = () => {
  const location = useLocation();
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
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

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
      {/* <Product /> */}
      <About />
      <FeedbackForm />
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
            width:"50px",
            height:"50px",
            borderRadius: "50%",
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
