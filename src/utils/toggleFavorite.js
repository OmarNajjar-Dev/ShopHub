/**
 * Toggles a product in the favorites list.
 * @param {Function} setFavorites - React state setter for favorites (from useState or custom hook).
 * @param {Object} product - The product object to toggle in the list.
 */
export default function toggleFavorite(setFavorites, product) {
  setFavorites((prev) => {
    const exists = prev.some((i) => i.id === product.id);
    return exists
      ? prev.filter((i) => i.id !== product.id)
      : [...prev, product];
  });
}
