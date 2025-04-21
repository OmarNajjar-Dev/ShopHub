import { ShoppingBag } from "lucide-react";
import ShoppingStreet from "../assets/images/shopping-street.webp";
import ElectronicsDevices from "../assets/images/electronics-devices.webp";
import FashionClothing from "../assets/images/fashion-clothing.webp";
import HomeLivingRoom from "../assets/images/home-living-room.webp";

export default function HomePage() {
  return (
    <main className="flex-grow">
      <div className="min-h-screen">
        {/* Hero Section */}
        <div
          className="relative bg-cover bg-center h-96 md:h-[600px]"
          style={{
            backgroundImage: `url(${ShoppingStreet})`,
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Welcome to ShopHub
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Discover amazing products at great prices
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold flex items-center">
                <ShoppingBag className="mr-2" />
                Start Shopping
              </button>
            </div>
          </div>
        </div>

        {/* Featured Categories */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Electronics Category */}
            <div className="relative h-64 rounded-lg overflow-hidden cursor-pointer group">
              <img
                src={ElectronicsDevices}
                alt="Electronics"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">Electronics</h3>
              </div>
            </div>

            {/* Fashion Category */}
            <div className="relative h-64 rounded-lg overflow-hidden cursor-pointer group">
              <img
                src={FashionClothing}
                alt="Fashion"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">Fashion</h3>
              </div>
            </div>

            {/* Home & Living Category */}
            <div className="relative h-64 rounded-lg overflow-hidden cursor-pointer group">
              <img
                src={HomeLivingRoom}
                alt="Home & Living"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">Home & Living</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
