import { useNavigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute() {
  const { isUser } = useAuth();
  const navigate = useNavigate();

  if (!isUser) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-lg font-medium text-gray-900">
            Please sign in to checkout
          </h2>
          <div className="mt-6">
            <button
              onClick={() => navigate("/auth")}
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    );
  }

  return <Outlet />;
}
