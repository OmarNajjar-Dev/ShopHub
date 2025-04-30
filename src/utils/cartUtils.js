/**
 * Add a product or increment its quantity if already in cart.
 * @param {Array} prevItems - The previous cart items array.
 * @param {Object} product - The product to add.
 * @returns {Array} A new cart array with the updated item.
 */
export function addOrUpdateItem(prevItems, product) {
  const existing = prevItems.find((item) => item.id === product.id);
  if (existing) {
    return prevItems.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  return [
    ...prevItems,
    {
      id: product.id,
      title: product.name,
      description: product.description,
      price: product.price,
      image: product.imageUrl,
      quantity: 1,
    },
  ];
}

/**
 * Remove an item from the cart by its ID.
 * @param {Array} prevItems - The previous cart items array.
 * @param {string|number} id - The ID of the product to remove.
 * @returns {Array} A new cart array without the specified item.
 */
export function removeItemById(prevItems, id) {
  return prevItems.filter((item) => item.id !== id);
}

/**
 * Update the quantity of a specific item.
 * @param {Array} prevItems - The previous cart items array.
 * @param {string|number} id - The ID of the product to update.
 * @param {number} quantity - The new quantity.
 * @returns {Array} A new cart array with the updated quantity.
 */
export function updateItemQuantity(prevItems, id, quantity) {
  return prevItems.map((item) =>
    item.id === id ? { ...item, quantity } : item
  );
}

/**
 * Compute the total count of items in the cart.
 * @param {Array} items - The cart items array.
 * @returns {number} Sum of all item quantities.
 */
export function computeCartCount(items) {
  return items.reduce((sum, item) => sum + item.quantity, 0);
}
