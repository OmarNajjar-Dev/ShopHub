import Title from "../../components/ui/Title";
import CategoryCard from "./CategoryCard";
import { categoryCards } from "../../data/categoryCards";

export default function FeaturedCategories() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Title title="Featured Categories" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categoryCards?.map((category, index) => (
          <CategoryCard
            key={index}
            title={category.title}
            imageUrl={category.imageUrl}
            category={category.category}
          />
        ))}
      </div>
    </div>
  );
}
