/* eslint-disable react/prop-types */
import { CardElement } from "@stripe/react-stripe-js";


export default function PaymentForm({ formData, onChange }) {
  return (
    <div className="bg-white px-2 py-6 md:px-6 rounded-lg shadow-xs">
      <h2 className="text-xl font-semibold mb-6">Payment Information</h2>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Payment Method
          </label>
          <select
            name="paymentMethod"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-xs focus:border-blue-500 focus:ring-blue-500"
            value={formData.paymentMethod}
            onChange={onChange}
          >
            <option value="">Select a method</option>
            <option value="visa">Visa</option>
            <option value="mastercard">MasterCard</option>
          </select>
        </div>
        {(formData.paymentMethod === "visa" || formData.paymentMethod === "mastercard") && (
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Card Number
            </label>
            <div className="p-4 border rounded-md">
              <CardElement options={{ hidePostalCode: true }} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
