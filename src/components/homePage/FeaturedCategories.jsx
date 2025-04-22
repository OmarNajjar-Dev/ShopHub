import CategoryCard from "./CategoryCard";
import { categories } from "../../lib/data"; 


export default function FeaturedCategories() {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 font-sans">Featured Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              imageUrl={category.imageUrl}
            />
          ))}
        </div>
      </div>
    );
  }
