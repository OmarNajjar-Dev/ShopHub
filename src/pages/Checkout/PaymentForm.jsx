/* eslint-disable react/prop-types */
export default function PaymentForm({ formData, onChange }) {
  const showCard =
    formData.paymentMethod === "visa" || formData.paymentMethod === "mastercard";

  return (
    <div className="bg-white p-2 sm:p-6 rounded-lg shadow-xs ">
      <h2 className="text-xl font-semibold mb-6">Payment Information</h2>
      <div className="space-y-6">
        {/* Payment Method */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Payment Method</label>
          <select
            name="paymentMethod"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.paymentMethod}
            onChange={onChange}
          >
            <option value="">Select a method</option>
            <option value="visa">Visa</option>
            <option value="mastercard">MasterCard</option>
          </select>
        </div>

        {/* Card Number */}
        {showCard && (
          <div>
            <label className="block text-sm font-medium text-gray-700">Card Number</label>
            <input
              type="text"
              name="cardNumber"
              required
              placeholder="1234 5678 9012 3456"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-xs focus:border-blue-500 focus:ring-blue-500"
              value={formData.cardNumber}
              onChange={onChange}
            />
          </div>
        )}

        {/* Expiry & CVV */}
        {showCard && (
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
              <input
                type="text"
                name="expiryDate"
                required
                placeholder="MM/YY"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-xs focus:border-blue-500 focus:ring-blue-500"
                value={formData.expiryDate}
                onChange={onChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">CVV</label>
              <input
                type="text"
                name="cvv"
                required
                placeholder="123"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-xs focus:border-blue-500 focus:ring-blue-500"
                value={formData.cvv}
                onChange={onChange}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
