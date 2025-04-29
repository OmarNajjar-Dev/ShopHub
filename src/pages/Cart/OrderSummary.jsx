/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";

export default function OrderSummary ({ cartItems })  {
  const navigate = useNavigate();
  // useLocalStorage to read/write the order summary
  // eslint-disable-next-line no-unused-vars
  const [orderSummary, setOrderSummary] = useLocalStorage("orderSummary", null);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    // Save order data via the hook
    setOrderSummary({
      items: cartItems,
      subtotal: subtotal.toFixed(2),
    });

    // Navigate to checkout page
    navigate("/checkout");
  };

  return (
    <div className="bg-white p-6 shadow-sm rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
      <div className="space-y-4">
        {cartItems.map((item, index) => (
          <div key={index} className="flex justify-between">
            <span>
              {item.title} x {item.quantity}
            </span>
            <span>${item.price.toFixed(2)}</span>
          </div>
        ))}
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
};
