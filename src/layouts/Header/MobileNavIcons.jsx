/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { Heart, ShoppingCart, User, LogOut } from "lucide-react";
import CartBadge from "./CartBadge";
import { useAuth } from "../../context/AuthContext";

export default function MobileNavIcons({ cartItems }) {
  const { isUser, setIsUser } = useAuth();

  const handleLogout = () => {
    setIsUser(false);
    // Optional: redirect or clear session
  };

  return (
    <>
      {/* Favorites */}
      <Link
        to="/favorites"
        className="flex flex-col items-center p-2 text-gray-600 hover:text-gray-900"
        aria-label="Favorites"
      >
        <Heart className="w-6 h-6" />
        <span className="text-xs mt-1">Favorites</span>
      </Link>

      {/* Cart */}
      <Link
        to="/cart"
        className="relative flex flex-col items-center p-2 text-gray-600 hover:text-gray-900"
        aria-label="Cart"
      >
        <div className="relative">
          <ShoppingCart className="w-6 h-6" />
          <CartBadge count={cartItems} />
        </div>
        <span className="text-xs mt-1">Cart</span>
      </Link>

      {/* Auth / Logout */}
      {!isUser ? (
        <Link
          to="/auth"
          className="flex flex-col items-center p-2 text-gray-600 hover:text-gray-900"
          aria-label="Account"
        >
          <User className="w-6 h-6" />
          <span className="text-xs mt-1">Account</span>
        </Link>
      ) : (
        <button
          onClick={handleLogout}
          className="flex flex-col items-center p-2 text-gray-600 hover:text-gray-900 cursor-pointer"
          aria-label="Logout"
        >
          <LogOut className="w-6 h-6" />
          <span className="text-xs mt-1">Logout</span>
        </button>
      )}
    </>
  );
}
