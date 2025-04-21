// NavLinks.jsx
// Shared navigation links for both desktop and mobile
import PropTypes from "prop-types";

export default function NavLinks({ isMobile = false }) {
  const baseClass = isMobile
    ? "text-gray-900 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
    : "text-gray-900 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium";
  
  return (
    <>
      <a href="/" className={baseClass}>Home</a>
      <a href="/categories" className={baseClass}>Categories</a>
      <a href="/contact" className={baseClass}>Contact</a>
    </>
  );
}

NavLinks.propTypes = {
  isMobile: PropTypes.bool
};