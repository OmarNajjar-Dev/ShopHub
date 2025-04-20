import Card from "./Card";
import { initialProducts } from "../lib/data";

// CardList: renders product cards filtered by the given criteria
export default function CardList({ filterCriteria }) {
  // Destructure the active filters
  const { selectedCategory, selectedPrice, searchQuery } = filterCriteria;

  // Returns true if a product matches all filters
  const filterProduct = (product) => {
    // 1. Category filter: either “All” or exact match
    const matchesCategory =
      selectedCategory === "" || product.category === selectedCategory;

    // 2. Price filter: min and max bounds
    const matchesPrice =
      (!selectedPrice.min || product.price >= selectedPrice.min) &&
      (!selectedPrice.max || product.price <= selectedPrice.max);

    // 3. Search filter: case‑insensitive name match
    const matchesSearch =
      searchQuery === "" ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());

    // Only include if it passes all three
    return matchesCategory && matchesPrice && matchesSearch;
  };

  return (
    <>
      {initialProducts
        .filter(filterProduct) // apply filters
        .map((product) => (
          <Card key={product.id} {...product} />
        ))}
    </>
  );
}
