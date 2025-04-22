// src/components/HeroSection.jsx

import { ShoppingBag } from "lucide-react";
import ShoppingStreet from "../../assets/images/shopping-street.webp"; // Adjust the path as necessary

export default function HeroSection() {
  return (
    <div
      className="relative bg-cover bg-center h-96 md:h-[600px]"
      style={{
        backgroundImage: `url(${ShoppingStreet})`,
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to ShopHub</h1>
          <p className="text-xl md:text-2xl mb-8">Discover amazing products at great prices</p>
          <a href="/categories">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold flex items-center">
              <ShoppingBag className="mr-2" />
              Start Shopping
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
