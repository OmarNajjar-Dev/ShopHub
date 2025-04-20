import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-left">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">ShopHub</h3>
            <p className="text-gray-400">Your one-stop shop for all your shopping needs.</p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a className="text-gray-400 hover:text-white transition-colors" href="/">Home</a></li>
              <li><a className="text-gray-400 hover:text-white transition-colors" href="/categories">Categories</a></li>
              <li><a className="text-gray-400 hover:text-white transition-colors" href="/contact">Contact</a></li>
              <li><a className="text-gray-400 hover:text-white transition-colors" href="/about">About Us</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <a className="text-gray-400  hover:text-white transition-colors" href="mailto:shophub467@gmail.com?subject=Hello&body=I want to contact you">support@shophub.com</a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <a href="https://wa.me/966500000000?text=مرحبًا!%20كيف%20حالُك؟" className="text-gray-400  hover:text-white transition-colors">
                +961 70461747
                </a>

              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                123 Shop Street, City, Country
              </li>
            </ul>
          </div>
          
          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1ZJFFdq1pX/" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200" aria-label="Facebook">
                <Facebook className="w-6 h-6text-gray-400 hover:text-white transition-colors hover:scale-100 transform duration-200" />
              </a>
              <a href="https://www.linkedin.com/company/navybits/" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200" aria-label="Twitter">
                <Linkedin className="w-6 h-6 text-gray-400 hover:text-white transition-colors hover:scale-100 transform duration-200" />
              </a>
              <a href="https://www.instagram.com/navybits?igsh=ZmVkdzk1N3liejV5" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200" aria-label="Instagram">
                <Instagram className="w-6 h-6 text-gray-400 hover:text-white transition-colors hover:scale-100 transform duration-200" />
              </a>
            </div>
            
            
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700  text-gray-400 text-center" >
          <p>© 2025 ShopHub. All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;