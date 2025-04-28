import { useState } from "react";
import Logo from "../../common/logo/";
import MobileMenuButton from "./MobileMenuButton";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";
import DesktopNavIcons from "./DesktopNavIcons";

export default function Header() {
  const [cartItems] = useState(3);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobile = () => setMobileOpen((open) => !open);

  return (
    <header className="relative">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-8">
              <Logo />
              <div className="hidden sm:flex gap-6">
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
        {mobileOpen && <MobileMenu cartItems={cartItems} />}
      </nav>
    </header>
  );
}
