import { Menu, X } from "lucide-react";

export default function MobileMenuButton({ isOpen, toggle }) {
  return (
    <button
      onClick={toggle}
      className="text-gray-500 hover:text-gray-700 focus:outline-none"
      aria-label="Toggle mobile menu"
      aria-expanded={isOpen}
    >
      {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
    </button>
  );
}
