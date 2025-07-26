/* eslint-disable react/prop-types */

export default function PaymentButton({ formData, onPay }) {
  return (
    <button
      type="submit"
      onClick={() => onPay(formData)}
      className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      Place Order
    </button>
  );
}
