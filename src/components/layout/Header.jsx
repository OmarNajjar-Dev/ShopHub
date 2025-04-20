import { useState } from "react";
import { Search, Heart, ShoppingCart, User, Menu, X } from "lucide-react";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems, setCartItems] = useState(3); // Example cart count
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // Search logic would go here
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="relative">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <a className="text-xl font-bold text-gray-800" href="/">
                ShopHub
              </a>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <a
                  className="text-gray-900 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
                  href="/"
                >
                  Home
                </a>
                <a
                  className="text-gray-900 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
                  href="/categories"
                >
                  Categories
                </a>
                <a
                  className="text-gray-900 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
                  href="/contact"
                >
                  Contact
                </a>
              </div>
            </div>

            {/* Desktop view controls */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="relative">
                <form onSubmit={handleSearch}>
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-64 px-4 py-1 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    aria-label="Search products"
                  />
                  <button
                    type="submit"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    aria-label="Submit search"
                  >
                    <Search className="w-5 h-5" />
                  </button>
                </form>
              </div>

              <a
                className="text-gray-600 hover:text-gray-900"
                href="/favorites"
                aria-label="View favorites"
              >
                <Heart className="w-6 h-6" />
              </a>

              <a
                className="text-gray-600 hover:text-gray-900 relative"
                href="/cart"
                aria-label="View shopping cart"
              >
                <ShoppingCart className="w-6 h-6" />
                {cartItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItems}
                  </span>
                )}
              </a>

              <a
                className="text-gray-600 hover:text-gray-900"
                href="/auth"
                aria-label="View account"
              >
                <User className="w-6 h-6" />
              </a>
            </div>

            {/* Mobile controls */}
            <div className="flex items-center space-x-2 md:hidden">
              {/* Only show search icon when menu is closed */}
              {!mobileMenuOpen && (
                <a
                  className="text-gray-600 hover:text-gray-900 p-1"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(true);
                  }}
                  aria-label="Search"
                >
                  <Search className="w-6 h-6" />
                </a>
              )}

              {/* Only show cart icon when menu is closed */}
              {!mobileMenuOpen && (
                <a
                  className="text-gray-600 hover:text-gray-900 p-1 relative"
                  href="/cart"
                  aria-label="View shopping cart"
                >
                  <ShoppingCart className="w-6 h-6" />
                  {cartItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {cartItems}
                    </span>
                  )}
                </a>
              )}

              {/* Mobile menu button */}
              <button
                onClick={toggleMobileMenu}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state */}
        {mobileMenuOpen && (
          <div className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                className="text-gray-900 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
                href="/"
              >
                Home
              </a>
              <a
                className="text-gray-900 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
                href="/categories"
              >
                Categories
              </a>
              <a
                className="text-gray-900 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
                href="/contact"
              >
                Contact
              </a>
            </div>

            <div className="pt-4 pb-3 border-t border-gray-200">
              {/* Mobile Search */}
              <div className="px-4 mb-4">
                <form onSubmit={handleSearch} className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    aria-label="Search products"
                  />
                  <button
                    type="submit"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    aria-label="Submit search"
                  >
                    <Search className="w-5 h-5" />
                  </button>
                </form>
              </div>

              {/* Mobile Action Icons */}
              <div className="px-4 flex justify-around">
                <a
                  className="flex flex-col items-center text-gray-600 hover:text-gray-900 p-2"
                  href="/favorites"
                  aria-label="View favorites"
                >
                  <Heart className="w-6 h-6" />
                  <span className="text-xs mt-1">Favorites</span>
                </a>

                <a
                  className="flex flex-col items-center text-gray-600 hover:text-gray-900 p-2 relative"
                  href="/cart"
                  aria-label="View shopping cart"
                >
                  <div className="relative">
                    <ShoppingCart className="w-6 h-6" />
                    {cartItems > 0 && (
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {cartItems}
                      </span>
                    )}
                  </div>
                  <span className="text-xs mt-1">Cart</span>
                </a>

                <a
                  className="flex flex-col items-center text-gray-600 hover:text-gray-900 p-2"
                  href="/auth"
                  aria-label="View account"
                >
                  <User className="w-6 h-6" />
                  <span className="text-xs mt-1">Account</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
