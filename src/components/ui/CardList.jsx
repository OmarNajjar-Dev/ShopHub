/* eslint-disable react/prop-types */

import { useContext, useCallback } from "react";
import Card from "./Card";
import { initialProductss } from "../../data/products";
import { FavoritesContext } from "../../contexts/FavoritesContext";
import toggleFavoriteUtil from "../../utils/toggleFavorite";

// CardList: renders product cards filtered by the given criteria
export default function CardList({
  products = initialProductss, // Default to all products
  filterCriteria = { selectedCategory: "", selectedPrice: {}, searchQuery: "" },
  imageHoverScale = 100,
}) {
  const { favorites, setFavorites } = useContext(FavoritesContext);

  // Memoized toggle handler to avoid re-creating the function on each render
  const handleToggleFavorite = useCallback(
    (product) => toggleFavoriteUtil(setFavorites, product),
    [setFavorites]
  );

  // Destructure the active filters
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
            toggleFavorite={() => handleToggleFavorite(product)}
            imageHoverScale={imageHoverScale}
          />
        ))}
    </>
  );
}
