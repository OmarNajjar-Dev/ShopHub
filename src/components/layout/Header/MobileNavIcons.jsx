/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { Heart, ShoppingCart, User } from "lucide-react";
import CartBadge from "./CartBadge";

export default function MobileNavIcons({ cartItems }) {
  return (
    <>    
      <Link to="/favorites" className="flex flex-col items-center p-2 text-gray-600 hover:text-gray-900" aria-label="Favorites">
        <Heart className="w-6 h-6" />
        <span className="text-xs mt-1">Favorites</span>
      </Link>
      <Link to="/cart" className="relative flex flex-col items-center p-2 text-gray-600 hover:text-gray-900" aria-label="Cart">
        <div className="relative">
          <ShoppingCart className="w-6 h-6" />
          <CartBadge count={cartItems} />
        </div>
        <span className="text-xs mt-1">Cart</span>
      </Link>
      <Link to="/auth" className="flex flex-col items-center p-2 text-gray-600 hover:text-gray-900" aria-label="Account">
        <User className="w-6 h-6" />
        <span className="text-xs mt-1">Account</span>
      </Link>
    </>
  );
}