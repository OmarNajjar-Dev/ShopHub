export const createCategoryChangeHandler = (setFilterCriteria) => (category) =>
  setFilterCriteria((prev) => ({ ...prev, selectedCategory: category }));

export const createPriceChangeHandler = (setFilterCriteria) => (price) =>
  setFilterCriteria((prev) => ({ ...prev, selectedPrice: price }));

export const createSearchChangeHandler = (setFilterCriteria) => (query) =>
  setFilterCriteria((prev) => ({ ...prev, searchQuery: query }));
