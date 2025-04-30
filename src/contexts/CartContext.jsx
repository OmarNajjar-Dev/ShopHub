/* eslint-disable react/prop-types */

import { createContext, useState, useEffect } from "react";
import {
  addOrUpdateItem,
  removeItemById,
  updateItemQuantity,
  computeCartCount,
} from "../utils/cartUtils";

const CartContext = createContext();

export function CartProvider({ children }) {
  // Load initial cart state from localStorage
  const [cartItems, setCartItems] = useState(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  // Sync cart to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  /**
   * Add a product to the cart or increment its quantity
   */
  const addToCart = (product) => {
    setCartItems((prev) => addOrUpdateItem(prev, product));
  };

  /**
   * Remove a product from the cart by its ID
   */
  const removeFromCart = (id) => {
    setCartItems((prev) => removeItemById(prev, id));
  };

  /**
   * Update the quantity of a specific product
   */
  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) return;
    setCartItems((prev) => updateItemQuantity(prev, id, quantity));
  };

  // Total count of all items in the cart
  const cartCount = computeCartCount(cartItems);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity, cartCount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
