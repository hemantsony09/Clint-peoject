import { useState } from "react";
import { Menu } from "@mui/icons-material";
import { Drawer, IconButton } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [galleryMenuOpen, setGalleryMenuOpen] = useState(false); // For mobile Gallery submenu

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleGalleryMenu = () => {
    setGalleryMenuOpen(!galleryMenuOpen);
  };

  return (
    <nav className="bg-[#3B3030] text-white py-4 shadow-md fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <h1 className="text-lg font-bold">
          <a href="#home">Project</a>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 relative">
          <li>
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="hover:text-gray-300">
              Project
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-300">
              Contact
            </a>
          </li>
          <li className="relative group">
            Gallery
            {/* Submenu */}
            <ul
              className="absolute hidden group-hover:flex bg-[#3B3030] text-white mt-0 rounded-lg shadow-lg flex-col"
              style={{ minWidth: "150px" }}
            >
              <li className="px-4 py-2 hover:bg-gray-600 transition duration-200">
                <Link to="/gallery/trade">Trade</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-600 transition duration-200">
                <Link to="/gallery/events">Events</Link>
              </li>
            </ul>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <IconButton onClick={toggleMobileMenu} color="inherit">
            <Menu />
          </IconButton>
        </div>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={toggleMobileMenu}
        PaperProps={{ className: "bg-[#3B3030] text-white" }}
      >
        <div className="w-64 flex flex-col space-y-4 p-4">
          <a
            href="#about"
            className="hover:text-gray-300 text-lg"
            onClick={toggleMobileMenu}
          >
            About
          </a>
          <a
            href="#portfolio"
            className="hover:text-gray-300 text-lg"
            onClick={toggleMobileMenu}
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className="hover:text-gray-300 text-lg"
            onClick={toggleMobileMenu}
          >
            Contact
          </a>
          {/* Gallery submenu for mobile */}
          <div>
            <button
              className="hover:text-gray-300 text-lg flex justify-between w-full"
              onClick={toggleGalleryMenu}
            >
              Gallery
              <span>{galleryMenuOpen ? "−" : "+"}</span>
            </button>
            {galleryMenuOpen && (
              <div className="pl-4 space-y-2 mt-2">
                <Link
                  to="/gallery/photos"
                  className="block hover:text-gray-300"
                  onClick={toggleMobileMenu}
                >
                  Photos
                </Link>
                <Link
                  to="/gallery/videos"
                  className="block hover:text-gray-300"
                  onClick={toggleMobileMenu}
                >
                  Videos
                </Link>
              </div>
            )}
          </div>
        </div>
      </Drawer>
    </nav>
  );
}

export default Navbar;
