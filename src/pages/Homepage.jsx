// import React from "react";
import Navbar from "../components/Navbar";
import HomePage from "../components/HomePage";
import About from "../components/About";
import Product from "../components/Product";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ImageCorousel from "../components/ImageCarousel";

const Homepage = () => {
  return (
    <>
      <Navbar></Navbar>
      <HomePage></HomePage>
      <ImageCorousel></ImageCorousel>
      <Product></Product>
      <About></About>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
};

export default Homepage;
