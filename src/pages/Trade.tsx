import React, { useState, useEffect } from "react";
import { Search, ChevronLeft, ChevronRight, DollarSign } from "lucide-react";
import Navbar from "../components/Navbar";

const ITEMS_PER_PAGE = 10;
const MIN_PRICE = 0;
const MAX_PRICE = 500;

const Gallery = () => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [priceRange, setPriceRange] = useState({
    min: MIN_PRICE,
    max: MAX_PRICE,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch products from the API
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
        setItems(data || []); // Assuming the API response includes a `products` field
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter items based on search and price range
  const filteredItems = items.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      item.price >= priceRange.min &&
      item.price <= priceRange.max
  );

  // Calculate pagination
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

  const handlePriceChange = (type: "min" | "max", value: string) => {
    const numValue =
      value === "" ? (type === "min" ? MIN_PRICE : MAX_PRICE) : Number(value);

    if (type === "min" && numValue <= priceRange.max) {
      setPriceRange((prev) => ({ ...prev, min: numValue }));
      setCurrentPage(1);
    } else if (type === "max" && numValue >= priceRange.min) {
      setPriceRange((prev) => ({ ...prev, max: numValue }));
      setCurrentPage(1);
    }
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
      <Navbar></Navbar>
      <div className="min-h-screen bg-[#fff0d1] py-12 pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search items..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-[#3b3030] transition-all"
              />
              <Search
                className="absolute left-4 top-3.5 text-[#3b3030]"
                size={20}
              />
            </div>

            {/* Price Range Filter */}
            <div className="bg-white rounded-lg shadow-md p-3 flex items-center gap-3">
              <DollarSign className="text-[#3b3030]" size={20} />
              <input
                type="number"
                min={MIN_PRICE}
                max={priceRange.max}
                value={priceRange.min}
                onChange={(e) => handlePriceChange("min", e.target.value)}
                placeholder="Min price"
                className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3b3030] transition-all"
              />
              <span className="text-[#3b3030] font-medium">to</span>
              <input
                type="number"
                min={priceRange.min}
                max={MAX_PRICE}
                value={priceRange.max}
                onChange={(e) => handlePriceChange("max", e.target.value)}
                placeholder="Max price"
                className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3b3030] transition-all"
              />
            </div>
          </div>

          {/* Gallery Items */}
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
                      ${item.price.toFixed(2)}
                    </span>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {filteredItems.length > 0 && (
            <div className="mt-8 flex justify-between items-center px-4 py-3 bg-white rounded-lg shadow-md">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="flex items-center text-[#3b3030] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#fff0d1] px-3 py-1 rounded transition-colors"
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
                className="flex items-center text-[#3b3030] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#fff0d1] px-3 py-1 rounded transition-colors"
              >
                Next
                <ChevronRight size={20} className="ml-1" />
              </button>
            </div>
          )}

          {filteredItems.length === 0 && (
            <div className="text-center py-8 text-[#3b3030]">
              No items found matching your search criteria.
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Gallery;
