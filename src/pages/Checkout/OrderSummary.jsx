import { useEffect, useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

export default function OrderSummary() {
  const [orderSummary] = useLocalStorage("orderSummary", null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (orderSummary?.items) setItems(orderSummary.items);
  }, [orderSummary]);

  const calculateTotal = () =>
    items.reduce((t, i) => t + i.price * i.quantity, 0).toFixed(2);

  return (
    <div className="bg-white p-6 rounded-lg shadow-xs">
      <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
      <div className="space-y-4">
        {items.map((item, idx) => (
          <div key={idx} className="flex justify-between">
            <span>
              {item.title} x {item.quantity}
            </span>
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
