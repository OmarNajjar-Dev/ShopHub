import { Heart, ShoppingCart, User } from "lucide-react";
import CartBadge from "./CartBadge";

export default function DesktopIcons({ cartItems }) {
  return (
    <div className= "hidden sm:flex items-center space-x-4">
      <a href="/favorites" aria-label="View favorites" className="text-gray-600 hover:text-gray-900">
        <Heart className="w-6 h-6" />
      </a>
      <a href="/cart" aria-label="View cart" className="text-gray-600 hover:text-gray-900 relative">
        <ShoppingCart className="w-6 h-6" />
        <CartBadge count={cartItems} />
      </a>
      <a href="/auth" aria-label="View account" className="text-gray-600 hover:text-gray-900">
        <User className="w-6 h-6" />
      </a>
    </div>
    );  
}
