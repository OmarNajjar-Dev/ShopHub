import CardList from "../../components/ui/CardList";
import { FavoritesContext } from "../../contexts/FavoritesContext";
import { useContext } from "react";

export default function FavoritesPage() {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Your Favorites</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <CardList products={favorites} />
      </div>
    </div>
  );
}
