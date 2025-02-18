import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomArrow = ({ className, style, onClick, direction }) => (
  <button
    className={`${className} text-[#FFF0D1] bg-[#3B3030] hover:bg-[#4C3A3A] shadow-md rounded-full`}
    style={{ ...style, zIndex: 2 }}
    onClick={onClick}
  >
    {direction === "next" ? "▶" : "◀"}
  </button>
);

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768, // Mobile view
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // Tablet view
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
    dotsClass: "slick-dots custom-dots",
    customPaging: (i) => (
      <div
        className="w-3 h-3 rounded-full bg-[#FFF0D1] opacity-70 hover:opacity-100"
        style={{ cursor: "pointer" }}
      ></div>
    ),
    prevArrow: <CustomArrow direction="prev" />,
    nextArrow: <CustomArrow direction="next" />,
  };

  const images = [
    "https://via.placeholder.com/600x400?text=Image+1",
    "https://via.placeholder.com/600x400?text=Image+2",
    "https://via.placeholder.com/600x400?text=Image+3",
    "https://via.placeholder.com/600x400?text=Image+4",
  ];

  return (
    <div className="bg-[#3B3030] flex justify-center py-16">
      <div className="container w-[97vw] px-4">
        <h2 className="text-3xl font-extrabold text-center text-[#FFF0D1] mb-8">
          Gallery
        </h2>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="px-2">
              <div className="rounded-lg overflow-hidden shadow-xl border-4 border-[#FFF0D1]">
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-screen h-[500px] object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImageCarousel;
