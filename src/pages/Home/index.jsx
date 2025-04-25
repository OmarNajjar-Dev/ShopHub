/* eslint-disable react/prop-types */

import Title from "../../components/ui/title";
import HeroSection from "./HeroSection";
import FeaturedCategories from "./FeaturedCategories";
import CardList from "../../components/ui/CardList";
import { initialProductss } from "../../data/products";
import { useNavigate } from "react-router-dom";

export default function HomePage({ favorites, toggleFavorite }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedCategories />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
        <Title title="Featured Products" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <CardList
            products={initialProductss?.slice(0, 4)}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
            imageHoverScale={110}
          />
        </div>

        <div className="text-center mt-8">
          <button
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            onClick={() => navigate("/categories")}
          >
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
}
