// src/pages/HomePage.jsx
// src/pages/HomePage.jsx

import HeroSection from "../components/homePage/HeroSection";
import FeaturedCategories from "../components/homePage/FeaturedCategories";
import CardList from "../components/CardList";
import { initialProducts } from "../lib/data"; 

export default function HomePage() {
  return (
    <main className="flex-grow">
      <div className="min-h-screen">
        <HeroSection />
        <FeaturedCategories />

        <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>

        <div className="grid grid-cols-1 h-220 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
          <CardList products={initialProducts} />
        </div>
      </div>
    </main>
  );
}
