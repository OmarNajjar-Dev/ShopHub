import CardList from "../components/CardList";
import { CategoryFilter } from "../components/filters/CategoryFilter";
import { useState } from "react";

export default function CartPage() {
  const [selectedCategory, onCategoryChange] = useState("");

  return (
    <>
      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={onCategoryChange}
      />
      <CardList selectedCategory={selectedCategory} />
    </>
  );
}
