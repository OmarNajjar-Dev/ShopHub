/* eslint-disable react/prop-types */

export default function OrderSummary({ cartItems }) {
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    window.location.href = "/checkout";
  };

  return (
    <div className="bg-white p-6 shadow-xs rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
      <div className="space-y-4">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>Free</span>
        </div>
        <div className="border-t border-gray-200 pt-4 flex justify-between font-semibold">
          <span>Total</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
      </div>
      <button
        onClick={handleCheckout}
        className="w-full mt-6 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Proceed to Checkout
      </button>
    </div>
  );
}
