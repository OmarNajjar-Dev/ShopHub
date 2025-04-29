import { useCart } from "../../context/CartContext"; 

export default function CartBadge() {
  const { cartCount } = useCart();

  if (cartCount === 0) return null; 

  return (
    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
      {cartCount}
    </span>
  );
}
