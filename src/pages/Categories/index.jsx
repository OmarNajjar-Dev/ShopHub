/* eslint-disable react/prop-types */

import { useContext } from "react";
import CardList from "../../components/ui/CardList";
import ProductFilterBar from "./filters";
import { CategoryContext } from "../../contexts/CategoryContext";
import {
  createCategoryChangeHandler,
  createPriceChangeHandler,
  createSearchChangeHandler,
} from "../../utils/filterHandlers";

export default function CategoriesPage({ favorites, toggleFavorite }) {
  // Consume filter criteria and setter from context
  const { filterCriteria, setFilterCriteria } = useContext(CategoryContext);

  // Handlers update context state
  const handleCategoryChange = createCategoryChangeHandler(setFilterCriteria);
  const handlePriceChange = createPriceChangeHandler(setFilterCriteria);
  const handleSearchChange = createSearchChangeHandler(setFilterCriteria);

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
