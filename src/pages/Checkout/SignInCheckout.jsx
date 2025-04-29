import { useNavigate } from "react-router-dom";

export default function SignInCheckout() {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h2 className="text-lg font-medium text-gray-900">
          Please sign in to checkout
        </h2>
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
