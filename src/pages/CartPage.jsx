// src/pages/CartPage.jsx
import { useCart } from "../context/CartContext";
import { EmptyCart, CartItem, OrderSummary } from "./Cart";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <div className="bg-white shadow-sm rounded-lg">
                {cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    removeItem={removeFromCart}
                    updateQuantity={updateQuantity}
                  />
                ))}
              </div>
            </div>
            <div className="lg:col-span-4">
              <OrderSummary cartItems={cartItems} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
