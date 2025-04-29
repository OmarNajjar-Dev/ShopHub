/* eslint-disable react/prop-types */
import { Trash2, Minus, Plus } from "lucide-react";

export default function CartItem({ item, removeItem, updateQuantity }) {
  return (
    <div className="flex items-center p-6 border-b border-gray-200 last:border-b-0">
      <img
        src={item.image}
        alt={item.title}
        className="w-24 h-24 object-cover rounded-md"
      />
      <div className="ml-6 flex-1">
        <h3 className="text-lg font-semibold">{item.title}</h3>
        <p className="text-gray-600 mt-1">{item.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => removeItem(item.id)}
              className="text-red-500 hover:text-red-700"
            >
              <Trash2 className="w-5 h-5 text-red-500 hover:text-red-800" />
            </button>
            <div className="flex items-center border border-gray-200 rounded-md">
              <button
                className="p-2 hover:bg-gray-100 text-black"
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
              >
                <Minus className="size-4" />
              </button>
              <span className="px-4 py-2 border-x border-gray-200">
                {item.quantity}
              </span>
              <button
                className="p-2 hover:bg-gray-100 text-black"
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                <Plus className="size-4" />
              </button>
            </div>
          </div>
          <span className="text-lg font-semibold">
            ${(item.price * item.quantity).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}
