import {categories} from "../../lib/data.js";

export function CategoryFilter({ selectedCategory, onCategoryChange }) {
  return (
    <div>
      <label
        htmlFor="category"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Category
      </label>
      <select
        id="category"
        name="category"
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus-ring-blue-500"
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
