/* eslint-disable react/prop-types */

import { createContext, useState } from "react";

// Create a context for filter criteria (including selected category)
export const CategoryContext = createContext({
  filterCriteria: {
    selectedCategory: "",
    selectedPrice: { min: "", max: "" },
    searchQuery: "",
  },
  setFilterCriteria: () => {},
});

// Provider component to wrap your App and supply filter state
export const CategoryProvider = ({ children }) => {
  const [filterCriteria, setFilterCriteria] = useState({
    selectedCategory: "",
    selectedPrice: { min: "", max: "" },
    searchQuery: "",
  });

  return (
    <CategoryContext.Provider value={{ filterCriteria, setFilterCriteria }}>
      {children}
    </CategoryContext.Provider>
  );
};
