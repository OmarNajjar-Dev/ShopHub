import { useState } from "react";
import { Link } from "react-router-dom";
import MobileMenuButton from "./MobileMenuButton";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";
import DesktopNavIcons from "./DesktopNavIcons";
import { AnimatePresence } from "framer-motion";

export default function Header() {
  const [cartItems] = useState(3);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobile = () => setMobileOpen((open) => !open);

  return (
    <header>
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left side (Logo + Links) */}
            <div className="flex items-center">
              <Link to="/" className="text-xl font-bold text-gray-800">
                ShopHub
              </Link>
              <div className="hidden sm:ml-6 sm:flex sm:gap-8">
                <NavLinks />
              </div>
            </div>

            {/* Right side (Icons or Mobile Button) */}
            <div className="flex items-center">
              {/* Desktop Icons */}
              <div className="hidden sm:flex gap-4">
                <DesktopNavIcons cartItems={cartItems} />
              </div>

              {/* Mobile Menu Button */}
              <div className="sm:hidden">
                <MobileMenuButton isOpen={mobileOpen} toggle={toggleMobile} />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        <AnimatePresence mode="wait">
          {mobileOpen && <MobileMenu cartItems={cartItems} />}
        </AnimatePresence>
      </nav>
    </header>
  );
}
