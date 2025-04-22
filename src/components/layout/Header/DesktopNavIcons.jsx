/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { Heart, ShoppingCart, User } from "lucide-react";
import CartBadge from "./CartBadge";

export default function DesktopNavIcons({ cartItems }) {
  return (
    <>
      <Link to="/favorites" aria-label="Favorites" className="text-gray-600 hover:text-gray-900">
        <Heart className="w-6 h-6" />
      </Link>
      <Link to="/cart" aria-label="Cart" className="relative text-gray-600 hover:text-gray-900">
        <ShoppingCart className="w-6 h-6" />
        <CartBadge count={cartItems} />
      </Link>
      <Link to="/auth" aria-label="Account" className="text-gray-600 hover:text-gray-900">
        <User className="w-6 h-6" />
      </Link>
    </>
  );
}