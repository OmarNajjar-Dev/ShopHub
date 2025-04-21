// Header.jsx
// Main wrapper for the header with state management
import { useState } from "react";
import { Search, ShoppingCart } from "lucide-react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import DesktopIcons from "./DesktopIcons";
import MobileNav from "./MobileNav";
import MobileMenuButton from "./MobileMenuButton";
import CartBadge from "./CartBadge";

export default function Header() {
  const [cartItems] = useState(3);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header className="relative">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo and links */}
            <div className="flex items-center">
              <Logo />
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <NavLinks />
              </div>
            </div>

            {/* Desktop icons */}
            <DesktopIcons cartItems={cartItems} />

            {/* Mobile menu and icons */}
            <div className="flex items-center space-x-2 md:hidden">
              {!mobileMenuOpen && (
                <>
                  
                  
                </>
              )}
              <MobileMenuButton isOpen={mobileMenuOpen} toggle={toggleMobileMenu} />
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && <MobileNav cartItems={cartItems} />}
      </nav>
    </header>
  );
}
