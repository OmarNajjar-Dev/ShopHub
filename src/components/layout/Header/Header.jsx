import { useState } from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import DesktopIcons from "./DesktopIcons";
import MobileMenu from "./MobileMenu";
import MobileMenuButton from "./MobileMenuButton";

export default function Header() {
  const [cartItems, setCartItems] = useState(3);
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
              <div className="hidden sm:ml-6 sm:flex sm:gap-8">
                <NavLinks />
              </div>
            </div>

            {/* Desktop icons */}
            <DesktopIcons cartItems={cartItems} />

            {/* Mobile menu and icons */}
            <div className="flex items-center gap-2 sm:hidden">
              <MobileMenuButton isOpen={mobileMenuOpen} toggle={toggleMobileMenu} />
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && <MobileMenu cartItems={cartItems} />}
      </nav>
    </header>
  );
}
