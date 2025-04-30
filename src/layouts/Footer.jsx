import { Facebook, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
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
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/categories"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <address className="not-italic">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              {/* Email */}
              <li className="space-x-1">
                <span className="break-words">Email:</span>
                <a
                  href="mailto:support@shophub.com"
                  className="hover:text-white transition-colors"
                >
                  support@shophub.com
                </a>
              </li>

              {/* Phone */}
              <li className="space-x-1">
                <span>Phone:</span>
                <a
                  to="tel:+966500000000"
                  className="hover:text-white transition-colors"
                >
                  (555) 123-4567
                </a>
              </li>

              {/* Address */}
              <li>
                <span className="font-semibold">Address:</span>{" "}
                <a
                  href="https://www.google.com/maps?q=123+Shop+Street,+City,+Country"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:text-white no-underline"
                >
                  123 Shop Street, City, Country
                </a>
              </li>
            </ul>
          </address>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors transform duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors transform duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors transform duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-gray-400 text-center">
          <p>© 2025 ShopHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
