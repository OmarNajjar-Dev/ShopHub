/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

export default function NavLinks({ isMobile = false }) {
  const baseClass = isMobile
    ? "text-gray-900 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
    : "text-gray-900 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium";
  
  return (
    <>
      <Link to="/" className={baseClass}>Home</Link>
      <Link to="/categories" className={baseClass}>Categories</Link>
      <Link to="/contact" className={baseClass}>Contact</Link>
    </>
  );
}
