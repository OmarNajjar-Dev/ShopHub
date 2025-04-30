/**
 * Creates a handler function to update the selected category in filter criteria.
 * Useful for passing as an onChange handler for category filters.
 * 
 * @param {Function} setFilterCriteria - State setter function for updating filter criteria.
 * @returns {Function} - A function that accepts a category string and updates the state.
 */
export const createCategoryChangeHandler = (setFilterCriteria) => (category) =>
  setFilterCriteria((prev) => ({ ...prev, selectedCategory: category }));

/**
 * Creates a handler function to update the selected price in filter criteria.
 * Useful for price range filters or dropdowns.
 * 
 * @param {Function} setFilterCriteria - State setter function for updating filter criteria.
 * @returns {Function} - A function that accepts a price value and updates the state.
 */
export const createPriceChangeHandler = (setFilterCriteria) => (price) =>
  setFilterCriteria((prev) => ({ ...prev, selectedPrice: price }));

/**
 * Creates a handler function to update the search query in filter criteria.
 * Useful for search bars or inputs.
 * 
 * @param {Function} setFilterCriteria - State setter function for updating filter criteria.
 * @returns {Function} - A function that accepts a search query string and updates the state.
 */
export const createSearchChangeHandler = (setFilterCriteria) => (query) =>
  setFilterCriteria((prev) => ({ ...prev, searchQuery: query }));
