import { useState, useEffect, useCallback } from "react";
import debounce from "lodash/debounce";
import PropTypes from "prop-types";

export default function ProductSearch({ searchQuery, onSearchChange }) {
  // Local state for the input so it updates immediately on each keystroke
  const [inputValue, setInputValue] = useState(searchQuery);

  // Create a debounced version of onSearchChange (400ms delay)
  // This ensures that the parent function is not called too frequently
  const debouncedChange = useCallback(
    debounce((value) => {
      onSearchChange(value); // Call the parent-provided function with the updated value
    }, 400),
    [onSearchChange] // Dependency array ensures the debounced function updates if onSearchChange changes
  );

  // Handle each change: update local input and call debounced parent update
  const handleChange = (e) => {
    const value = e.target.value; // Get the current value of the input
    setInputValue(value); // Update the local state
    debouncedChange(value); // Trigger the debounced function
  };

  // Sync the local input state with the external searchQuery prop
  // This ensures the input reflects changes to the searchQuery prop
  useEffect(() => {
    setInputValue(searchQuery);
  }, [searchQuery]);

  return (
    <div>
      {/* Label for the search input */}
      <label
        htmlFor="search"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Search
      </label>

      {/* Input field container */}
      <div className="flex gap-2">
        {/* Debounced search input */}
        <input
          id="search"
          type="text"
          placeholder="Search products..."
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-2"
          value={inputValue} // Controlled input bound to local state
          onChange={handleChange} // Update state and trigger debounced function on change
        />
      </div>
    </div>
  );
}

ProductSearch.propTypes = {
  searchQuery: PropTypes.string,
  onSearchChange: PropTypes.func.isRequired
};

ProductSearch.defaultProps = {
  searchQuery: ""
};