import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";
import ProductSearch from "./ProductSearch";

export default function ProductFilterBar({
  filterCriteria,
  onCategoryChange,
  onPriceChange,
  onSearchChange,
}) {
  // Destructure the active filter values from the filterCriteria
  const { selectedCategory, selectedPrice, searchQuery } = filterCriteria;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white p-6 rounded-lg shadow-sm">
      {/* Category filter: allows users to select a category */}
      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={onCategoryChange}
      />
      {/* Price filter: allows users to set a price range */}
      <PriceFilter
        selectedPrice={selectedPrice}
        onPriceChange={onPriceChange}
      />
      {/* Search filter: allows users to search products by name */}
      <ProductSearch
        searchQuery={searchQuery}
        onSearchChange={onSearchChange}
      />
    </div>
  );
}
