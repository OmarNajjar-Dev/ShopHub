/* eslint-disable react/prop-types */

import NavLinks from "./NavLinks";
import DesktopNavIcons from "./DesktopNavIcons";

export default function DesktopBar({ cartItems }) {
  return (
    <div className="flex justify-between items-center w-full">
      {/* Left side: Navigation links */}
      <div className="flex items-center gap-8">
        <NavLinks />
      </div>

      {/* Right side: Icon buttons */}
      <div className="flex items-center gap-4">
        <DesktopNavIcons cartItems={cartItems} />
      </div>
    </div>
  );
}