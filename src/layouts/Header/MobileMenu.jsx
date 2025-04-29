/* eslint-disable react/prop-types */

import NavLinks from "./NavLinks";
import MobileNavIcons from "./MobileNavIcons";

export default function MobileMenu({ cartItems }) {
  return (
    <div className="sm:hidden px-4 pt-4 pb-6 space-y-4">


      {/* Links */}
      <div className="space-y-1">
        <NavLinks isMobile />
      </div>

      {/* Icons */}
      <div className="flex justify-around pt-2 border-t border-gray-200">
        <MobileNavIcons cartItems={cartItems} />
      </div>
    </div>
  );
}
