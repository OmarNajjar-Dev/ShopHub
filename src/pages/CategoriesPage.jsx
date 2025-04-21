import CardList from "../components/CardList";
import ProductFilterBar from "../components/filters/ProductFilterBar";
import { useState } from "react";

export default function CategoriesPage({ favorites, toggleFavorite }) {
  // State to manage the selected filters (category, price, and search query)
  const [filterCriteria, setFilterCriteria] = useState({
    selectedCategory: "", // Initially no category is selected
    selectedPrice: { min: "", max: "" }, // Default price range (no min, no max)
    searchQuery: "", // Initially no search query
  });

  // Function to handle category change and update the filter state
  const handleCategoryChange = (category) =>
    setFilterCriteria((prev) => ({ ...prev, selectedCategory: category }));

  // Function to handle price range change (min and max) and update the filter state
  const handlePriceChange = (price) =>
    setFilterCriteria((prev) => ({ ...prev, selectedPrice: price }));

  // Function to handle search query change and update the filter state
  const handleSearchChange = (query) =>
    setFilterCriteria((prev) => ({ ...prev, searchQuery: query }));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-6">Shop by Category</h1>
        {/* ProductFilterBar allows users to filter by category, price, and search query */}
        <ProductFilterBar
          filterCriteria={filterCriteria}
          onCategoryChange={handleCategoryChange}
          onPriceChange={handlePriceChange}
          onSearchChange={handleSearchChange}
        />
      </div>

      {/* CardList displays the products based on the applied filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <CardList
          filterCriteria={filterCriteria}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />
      </div>
    </div>
  );
}
