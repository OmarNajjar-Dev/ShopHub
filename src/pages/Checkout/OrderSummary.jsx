/* eslint-disable react/prop-types */

export default function OrderSummary({ items }) {
    // Calculate the total price
    const calculateTotal = () => {
      return items.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
    };
  
    return (
      <div className="bg-white px-2 py-6 md:px-6 rounded-lg shadow-xs">
        <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={index} className="flex justify-between">
              <span>{item.name} x {item.quantity}</span>
              <span>${item.price.toFixed(2)}</span>
            </div>
          ))}
          <div className="border-t border-gray-200 pt-4 flex justify-between font-semibold">
            <span>Total</span>
            <span>${calculateTotal()}</span>
          </div>
        </div>
      </div>
    );
  }