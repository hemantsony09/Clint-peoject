import  { useState } from "react";
import { Menu } from "@mui/icons-material";
import { Drawer, IconButton } from "@mui/material";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-[#3B3030] text-white py-4 shadow-md fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <h1 className="text-lg font-bold">
          <a href="#home">Project</a>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
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
        </div>
      </Drawer>
    </nav>
  );
}

export default Navbar;
