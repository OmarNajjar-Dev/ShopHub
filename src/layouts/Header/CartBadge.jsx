import CartContext from "../../contexts/CartContext";
import { useContext } from "react";

export default function CartBadge() {
  const { cartCount } = useContext(CartContext);

  if (cartCount === 0) return null;

  return (
    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
      {cartCount}
    </span>
  );
}
