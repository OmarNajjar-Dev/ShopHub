import { Heart, ShoppingCart, User } from "lucide-react";
import NavLinks from "./NavLinks";
import CartBadge from "./CartBadge";

export default function MobileNav({ cartItems }) {
  return (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1">
        <NavLinks isMobile />
      </div>

      <div className="px-4 flex justify-around">
        <a
          href="/favorites"
          className="flex flex-col items-center text-gray-600 hover:text-gray-900 p-2"
        >
          <Heart className="w-6 h-6" />
          <span className="text-xs mt-1">Favorites</span>
        </a>
        <a
          href="/cart"
          className="flex flex-col items-center text-gray-600 hover:text-gray-900 p-2 relative"
        >
          <div className="relative">
            <ShoppingCart className="w-6 h-6" />
            <CartBadge count={cartItems} />
          </div>
          <span className="text-xs mt-1">Cart</span>
        </a>
        <a
          href="/auth"
          className="flex flex-col items-center text-gray-600 hover:text-gray-900 p-2"
        >
          <User className="w-6 h-6" />
          <span className="text-xs mt-1">Account</span>
        </a>
      </div>
    </div>
  );
}
