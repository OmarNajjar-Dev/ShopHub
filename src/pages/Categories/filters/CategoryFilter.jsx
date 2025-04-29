/* eslint-disable react/prop-types */

import { categories } from "../../../lib/data"; // Importing categories from a data file

export default function CategoryFilter({ selectedCategory, onCategoryChange }) {
  return (
    <div>
      {/* Label for the category filter */}
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Category
      </label>

      {/* Dropdown for selecting a category */}
      <select
        name="category"
        className="w-full rounded-md border-gray-300 shadow-xs focus:border-blue-500 focus-ring-blue-500 px-2"
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}
