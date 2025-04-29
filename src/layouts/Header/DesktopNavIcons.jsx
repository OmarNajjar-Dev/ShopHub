/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { Heart, ShoppingCart, User, LogOut } from "lucide-react";
import CartBadge from "./CartBadge";
import { useAuth } from "../../contexts/AuthContext";

export default function DesktopNavIcons({ cartItems }) {
  const { user, setUser } = useAuth();

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <>
      {/* Favorites */}
      <Link
        to="/favorites"
        aria-label="Favorites"
        className="text-gray-600 hover:text-gray-900"
      >
        <Heart className="w-6 h-6" />
      </Link>

      {/* Cart with badge */}
      <Link
        to="/cart"
        aria-label="Cart"
        className="relative text-gray-600 hover:text-gray-900"
      >
        <ShoppingCart className="w-6 h-6" />
        <CartBadge count={cartItems} />
      </Link>

      {/* Account or Logout */}
      {!user ? (
        <Link
          to="/auth"
          aria-label="Account"
          className="text-gray-600 hover:text-gray-900"
        >
          <User className="w-6 h-6" />
        </Link>
      ) : (
        <button
          onClick={handleLogout}
          aria-label="Logout"
          className="text-gray-600 hover:text-gray-900 cursor-pointer"
        >
          <LogOut className="w-6 h-6" />
        </button>
      )}
    </>
  );
}
