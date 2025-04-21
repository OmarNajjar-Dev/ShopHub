/* eslint-disable react/prop-types */

import Card from "./Card";
import { initialProducts } from "../lib/data";
import PropTypes from "prop-types";

// CardList: renders product cards filtered by the given criteria
export default function CardList({
  products = initialProducts, // Default to all products
  filterCriteria = { selectedCategory: "", selectedPrice: {}, searchQuery: "" },
  favorites = [],
  toggleFavorite,
  imageHoverScale = 100,
}) {
  // Destructure the active filters (default values already handled in props)
  const { selectedCategory, selectedPrice, searchQuery } = filterCriteria;

  // Filter logic to determine if a product matches the criteria
  const filterProduct = (product) => {
    const matchesCategory =
      selectedCategory === "" || product.category === selectedCategory;

    const matchesPrice =
      (!selectedPrice.min || product.price >= selectedPrice.min) &&
      (!selectedPrice.max || product.price <= selectedPrice.max);

    const matchesSearch =
      searchQuery === "" ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesPrice && matchesSearch;
  };

  return (
    <>
      {products
        .filter(filterProduct)
        .map((product) => (
          <Card
            key={product.id}
            product={product}
            isFavorite={favorites.some((fav) => fav.id === product.id)}
            toggleFavorite={toggleFavorite}
            imageHoverScale={imageHoverScale}
          />
        ))}
    </>
  );
}


CardList.propTypes = {
  filterCriteria: PropTypes.shape({
    selectedCategory: PropTypes.string.isRequired,
    selectedPrice: PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number,
    }).isRequired,
    searchQuery: PropTypes.string.isRequired,
  }).isRequired,
  favorites: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  toggleFavorite: PropTypes.func.isRequired,
};

