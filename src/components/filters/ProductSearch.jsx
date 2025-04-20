export default function ProductSearch({ searchQuery, onSearchChange }) {
  return (
    <div>
      {/* Label for the search input */}
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Search
      </label>

      {/* Container for the search input field */}
      <div className="flex gap-2">
        {/* Input field for product search */}
        <input
          type="text"
          placeholder="Search products..."
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-2"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)} // Updates the search query on change
        />
      </div>
    </div>
  );
}
