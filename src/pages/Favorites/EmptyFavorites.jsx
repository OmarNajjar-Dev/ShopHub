import { Heart } from "lucide-react";

export default function EmptyFavorites() {
  return (
    <div className="text-center">
      <Heart className="mx-auto h-12 w-12 text-gray-400" />
      <h2 className="mt-2 text-lg font-medium text-gray-900">
        No favorites yet
      </h2>
      <p className="mt-1 text-sm text-gray-500">
        Start adding some items to your favorites!
      </p>
      <div className="mt-6">
        <button className="px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Browse Products
        </button>
      </div>
    </div>
  );
}
