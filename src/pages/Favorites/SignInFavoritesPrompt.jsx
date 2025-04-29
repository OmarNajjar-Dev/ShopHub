import { useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";

export default function SignInFavoritesPrompt() {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <Heart className="mx-auto w-12 h-12 text-gray-400" />
        <h2 className="mt-2 text-lg font-medium text-gray-900">
          Sign in to view your favorites
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          You need to be signed in to manage your favorite items.
        </p>
       <div className="mt-6">
       <button
          onClick={() => navigate("/auth")}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-sm text-sm font-medium border border-transparent "
        >
          Sign In
        </button>
       </div>
      </div>
    </div>
  );
}
