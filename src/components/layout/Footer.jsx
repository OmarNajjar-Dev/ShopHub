import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-left">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">ShopHub</h3>
            <p className="text-gray-400">
              Your one-stop shop for all your shopping needs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  className="text-gray-400 hover:text-white transition-colors"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:text-white transition-colors"
                  href="/categories"
                >
                  Categories
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:text-white transition-colors"
                  href="/contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <address className="not-italic space-y-4">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              {/* Email */}
              <li className="space-x-1">
                <span className="font-medium">Email:</span>
                <a
                  href="mailto:support@shophub.com"
                  className="hover:text-white transition-colors"
                >
                  support@shophub.com
                </a>
              </li>

              {/* Phone */}
              <li className="space-x-1">
                <span className="font-medium">Phone:</span>
                <a
                  href="tel:+966500000000"
                  className="hover:text-white transition-colors"
                >
                  (555) 123-4567
                </a>
              </li>

              {/* Address */}
              <li className="space-x-1">
                <span className="font-medium">Address:</span>
                <span className="break-words">
                  123 Shop Street, City, Country
                </span>
              </li>
            </ul>
          </address>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6 text-gray-400 hover:text-white transition-colors hover:scale-10 transform duration-200" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 text-gray-400 hover:text-white transition-colors hover:scale-100 transform duration-200" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700  text-gray-400 text-center">
          <p>© 2025 ShopHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
