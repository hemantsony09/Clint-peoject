import React, { useState, useEffect } from "react";
import { Search, ChevronLeft, ChevronRight, IndianRupee } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ITEMS_PER_PAGE = 10;

const Gallery = () => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [priceRange, setPriceRange] = useState({
    min: "",
    max: "",
  });
  const [sortOrder, setSortOrder] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://decor-hub-backend.onrender.com/api/trade-products"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setItems(data || []);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredItems = items
    .filter((item) => {
      const minPrice = priceRange.min === "" ? 0 : Number(priceRange.min);
      const maxPrice =
        priceRange.max === "" ? Infinity : Number(priceRange.max);

      return (
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        item.price >= minPrice &&
        item.price <= maxPrice
      );
    })
    .sort((a, b) => {
      if (sortOrder === "low-to-high") return a.price - b.price;
      if (sortOrder === "high-to-low") return b.price - a.price;
      return 0;
    });

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedItems = filteredItems.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePriceChange = (type, value) => {
    const numValue = value === "" ? "" : Math.max(0, Number(value));

    if (type === "min") {
      setPriceRange((prev) => ({ ...prev, min: numValue }));
    } else if (type === "max") {
      setPriceRange((prev) => ({ ...prev, max: numValue }));
    }
    setCurrentPage(1);
  };

  if (loading)
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading products...</p>
      </div>
    );

  if (error) {
    return (
      <div className="text-center py-8 text-red-600">
        Error: {error}. Please try again later.
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#fff0d1] py-12 pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center py-6">
            <h1 className="text-4xl font-bold text-[#3b3030] bg-gradient-to-r from-[#fff0d1] to-[#f8d7a5] px-6 py-3 inline-block rounded-lg transform transition-transform duration-300 ease-in-out hover:scale-105">
              Trade
            </h1>
          </div>
          {/* Filters */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            {/* Search Bar */}
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search items..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full border-none h-12 pl-12 pr-4 rounded-lg bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-[#3b3030] transition-all"
              />
              <Search
                className="absolute left-4 top-3.5 text-[#3b3030]"
                size={20}
              />
            </div>

            {/* Price Range Filter */}
            <div className="flex-1 bg-white shadow-md rounded-lg flex items-center h-12 px-4">
              <span className="text-[#3b3030] font-medium">Price Range:</span>
              <div className="flex items-center gap-3 ml-4">
                <div className="flex items-center gap-1">
                  <IndianRupee className="text-[#3b3030]" size={20} />
                  <input
                    type="number"
                    min="0"
                    value={priceRange.min}
                    onChange={(e) => handlePriceChange("min", e.target.value)}
                    placeholder="Min"
                    className="w-20 px-3 py-2 bg-white border-none shadow-inner rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b3030] transition-all h-8"
                  />
                </div>
                <span className="text-[#3b3030] font-medium">to</span>
                <div className="flex items-center gap-1">
                  <IndianRupee className="text-[#3b3030]" size={20} />
                  <input
                    type="number"
                    min="0"
                    value={priceRange.max}
                    onChange={(e) => handlePriceChange("max", e.target.value)}
                    placeholder="Max"
                    className="w-20 px-3 py-2 bg-white border-none shadow-inner rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b3030] transition-all h-8"
                  />
                </div>
              </div>
            </div>

            {/* Sort Dropdown */}
            <div className="flex-1">
              <select
                value={sortOrder}
                onChange={(e) => {
                  setSortOrder(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full px-4 py-3 h-12 bg-white shadow-md border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b3030] transition-all"
              >
                <option value="">Sort By</option>
                <option value="low-to-high">Price: Low to High</option>
                <option value="high-to-low">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Gallery Items */}
          {paginatedItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {paginatedItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-[1.02]"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-[#3b3030]">
                        {item.name}
                      </h3>
                      <span className="text-lg font-bold text-[#3b3030]">
                        ₹{item.price.toFixed(2)}
                      </span>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-[#3b3030]">
              No items found.
            </div>
          )}

          {/* Pagination */}
          {filteredItems.length > 0 && (
            <div className="mt-8 flex justify-between items-center px-4 py-3 bg-white rounded-lg shadow-md">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="flex items-center bg-[#fff0d1] text-[#3b3030] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#fff0d1] px-3 py-1 rounded transition-colors"
              >
                <ChevronLeft size={20} className="mr-1" />
                Previous
              </button>
              <span className="text-[#3b3030]">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="flex items-center bg-[#fff0d1] text-[#3b3030] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#fff0d1] px-3 py-1 rounded transition-colors"
              >
                Next
                <ChevronRight size={20} className="ml-1" />
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
