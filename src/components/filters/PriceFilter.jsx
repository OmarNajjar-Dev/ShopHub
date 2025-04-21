/* eslint-disable react/prop-types */

export default function PriceFilter({ selectedPrice, onPriceChange }) {
  return (
    <div>
      {/* Label for the price filter (currently empty) */}
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Price Range
      </label>
      
      {/* Container for the price input fields */}
      <div className="flex gap-2">
        {/* Input field for the minimum price */}
        <input
          type="number"
          placeholder="Min"
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-2"
          value={selectedPrice?.min ?? 0} // Default value for min price is 0 if not provided
          onChange={
            (e) => onPriceChange({ ...selectedPrice, min: e.target.value }) // Update min price
          }
          min="0" // Ensures minimum value is 0
        />

        {/* Input field for the maximum price */}
        <input
          type="number"
          placeholder="Max"
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-2"
          value={selectedPrice?.max ?? ""} // Default value for max price is empty if not provided
          onChange={
            (e) => onPriceChange({ ...selectedPrice, max: e.target.value }) // Update max price
          }
          min="0" // Ensures minimum value is 0
        />
      </div>
    </div>
  );
}
